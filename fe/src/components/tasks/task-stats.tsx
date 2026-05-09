import styles from "./task-stats.module.css";

type TaskStatsProps = {
  total: number;
  completed: number;
};

export function TaskStats({ total, completed }: TaskStatsProps) {
  return (
    <div className={styles.statsRow}>
      <span>{total} total</span>
      <span>{completed} completed</span>
    </div>
  );
}
