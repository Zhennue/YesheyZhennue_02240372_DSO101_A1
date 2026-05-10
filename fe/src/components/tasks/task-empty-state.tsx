import styles from "./task-empty-state.module.css";

export function TaskEmptyState() {
  return (
    <div className={styles.emptyState}>
      <p className={styles.title}>No tasks yet.</p>
      <p>Add your first task to get started.</p>
    </div>
  );
}