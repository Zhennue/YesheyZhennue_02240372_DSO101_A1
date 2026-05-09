import { FormEvent } from "react";
import styles from "./task-form.module.css";

type TaskFormProps = {
  title: string;
  loading: boolean;
  onTitleChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function TaskForm({
  title,
  loading,
  onTitleChange,
  onSubmit,
}: TaskFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="What do you want to get done?"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      />
      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add task"}
      </button>
    </form>
  );
}
