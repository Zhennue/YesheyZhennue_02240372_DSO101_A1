"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./task-board.module.css";
import { Task } from "./task.types";
import { TaskEmptyState } from "./task-empty-state";
import { TaskForm } from "./task-form";
import { TaskStats } from "./task-stats";
import { TaskTable } from "./task-table";

const API_LABEL = process.env.NEXT_PUBLIC_API_URL ?? "same-origin /tasks proxy";
const TASKS_PATH = "/tasks";

export function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchTasks() {
    try {
      setError(null);
      const response = await fetch(TASKS_PATH);
      if (!response.ok) {
        throw new Error("Failed to load tasks");
      }

      const data: Task[] = await response.json();
      setTasks(data);
    } catch {
      setError("Could not load tasks from the server.");
    }
  }

  useEffect(() => {
    void fetchTasks();
  }, []);

  async function handleAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newTitle.trim()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(TASKS_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to create");
      }

      const created: Task = await response.json();
      setTasks((previousTasks) => [...previousTasks, created]);
      setNewTitle("");
    } catch {
      setError("Could not create task.");
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleComplete(task: Task) {
    try {
      const response = await fetch(`${TASKS_PATH}/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });

      if (!response.ok) {
        throw new Error("Failed to update");
      }

      const updated: Task = await response.json();
      setTasks((previousTasks) =>
        previousTasks.map((currentTask) =>
          currentTask.id === task.id ? updated : currentTask,
        ),
      );
    } catch {
      setError("Could not update task.");
    }
  }

  function handleStartEdit(task: Task) {
    setEditingId(task.id);
    setEditingTitle(task.title);
  }

  function handleCancelEdit() {
    setEditingId(null);
    setEditingTitle("");
  }

  async function handleSaveEdit(taskId: number) {
    const nextTitle = editingTitle.trim();

    if (!nextTitle) {
      handleCancelEdit();
      return;
    }

    try {
      const response = await fetch(`${TASKS_PATH}/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: nextTitle }),
      });

      if (!response.ok) {
        throw new Error("Failed to update");
      }

      const updated: Task = await response.json();
      setTasks((previousTasks) =>
        previousTasks.map((currentTask) =>
          currentTask.id === taskId ? updated : currentTask,
        ),
      );
      handleCancelEdit();
    } catch {
      setError("Could not update task.");
    }
  }

  async function handleDelete(taskId: number) {
    try {
      const response = await fetch(`${TASKS_PATH}/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete");
      }

      setTasks((previousTasks) =>
        previousTasks.filter((currentTask) => currentTask.id !== taskId),
      );

      if (editingId === taskId) {
        handleCancelEdit();
      }
    } catch {
      setError("Could not delete task.");
    }
  }

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.badge}>Daily list</span>
          <h1 className={styles.title}>Keep your day in one place</h1>
          <p className={styles.subtitle}>
            A plain, useful list for the things you actually want to finish.
          </p>
          <div className={styles.metaRow}>
            <span className={styles.metaText}>
              Connected to:
              <code className={styles.code}>{API_LABEL}</code>
            </span>
            <button
              type="button"
              className={styles.refreshButton}
              onClick={() => void fetchTasks()}
            >
              Refresh
            </button>
          </div>
          <p className={styles.helper}>
            Double-click any task to rename it. Keep it quick, keep it moving.
          </p>
        </header>

        <section className={styles.card}>
          {error && <p className={styles.error}>{error}</p>}

          <TaskForm
            title={newTitle}
            loading={loading}
            onTitleChange={setNewTitle}
            onSubmit={handleAdd}
          />

          <TaskStats total={tasks.length} completed={completedCount} />

          {tasks.length === 0 ? (
            <TaskEmptyState />
          ) : (
            <TaskTable
              tasks={tasks}
              editingId={editingId}
              editingTitle={editingTitle}
              onStartEdit={handleStartEdit}
              onCancelEdit={handleCancelEdit}
              onEditingTitleChange={setEditingTitle}
              onSaveEdit={handleSaveEdit}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  );
}
