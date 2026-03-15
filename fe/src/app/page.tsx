"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./page.module.css";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchTasks() {
    try {
      setError(null);
      const res = await fetch(`${API_URL}/tasks`);
      if (!res.ok) throw new Error("Failed to load tasks");
      const data: Task[] = await res.json();
      setTasks(data);
    } catch (err) {
      setError("Could not load tasks from the server.");
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle.trim() }),
      });
      if (!res.ok) throw new Error("Failed to create");
      const created: Task = await res.json();
      setTasks((prev) => [...prev, created]);
      setNewTitle("");
    } catch {
      setError("Could not create task.");
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleComplete(task: Task) {
    try {
      const res = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });
      if (!res.ok) throw new Error("Failed to update");
      const updated: Task = await res.json();
      setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
    } catch {
      setError("Could not update task.");
    }
  }

  async function handleSaveEdit(taskId: number) {
    if (!editingTitle.trim()) {
      setEditingId(null);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editingTitle.trim() }),
      });
      if (!res.ok) throw new Error("Failed to update");
      const updated: Task = await res.json();
      setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)));
      setEditingId(null);
      setEditingTitle("");
    } catch {
      setError("Could not update task.");
    }
  }

  async function handleDelete(taskId: number) {
    try {
      const res = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    } catch {
      setError("Could not delete task.");
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.badge}>Task Board</span>
          <h1 className={styles.title}>Plan your day with style</h1>
          <p className={styles.subtitle}>
            Add, complete, and edit tasks in a clean, minimal UI.
          </p>
          <div className={styles.metaRow}>
            <span className={styles.metaText}>
              Backend:
              <code className={styles.code}>{API_URL}</code>
            </span>
            <button
              type="button"
              className={styles.refreshButton}
              onClick={fetchTasks}
            >
              Refresh
            </button>
          </div>
        </header>

        <section className={styles.card}>
          {error && <p className={styles.error}>{error}</p>}

          <form className={styles.form} onSubmit={handleAdd}>
            <input
              type="text"
              placeholder="What do you want to get done?"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add task"}
            </button>
          </form>

          <div className={styles.statsRow}>
            <span>{tasks.length} total</span>
            <span>{tasks.filter((t) => t.completed).length} completed</span>
          </div>

          {tasks.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No tasks yet.</p>
              <p>Add your first task to get started.</p>
            </div>
          ) : (
            <ul className={styles.list}>
              {tasks.map((task) => (
                <li key={task.id} className={styles.item}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task)}
                    />
                    <span className={styles.checkboxCustom} />
                  </label>

                  {editingId === task.id ? (
                    <input
                      className={styles.editInput}
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      onBlur={() => handleSaveEdit(task.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSaveEdit(task.id);
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    <span
                      className={`${styles.taskText} ${
                        task.completed ? styles.completed : ""
                      }`}
                      onDoubleClick={() => {
                        setEditingId(task.id);
                        setEditingTitle(task.title);
                      }}
                    >
                      {task.title}
                    </span>
                  )}

                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => handleDelete(task.id)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
