import { Task } from "./task.types";
import styles from "./task-table.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TaskTableProps = {
  tasks: Task[];
  editingId: number | null;
  editingTitle: string;
  onStartEdit: (task: Task) => void;
  onCancelEdit: () => void;
  onEditingTitleChange: (value: string) => void;
  onSaveEdit: (taskId: number) => void;
  onToggleComplete: (task: Task) => void;
  onDelete: (taskId: number) => void;
};

export function TaskTable({
  tasks,
  editingId,
  editingTitle,
  onStartEdit,
  onCancelEdit,
  onEditingTitleChange,
  onSaveEdit,
  onToggleComplete,
  onDelete,
}: TaskTableProps) {
  return (
    <div className={styles.tableShell}>
      <div className={styles.tableScroll}>
        <Table className={styles.table} aria-label="Tasks table">
          <TableHeader>
            <TableRow>
              <TableHead className={`${styles.headCell} ${styles.selectCell}`}>
                Done
              </TableHead>
              <TableHead className={`${styles.headCell} ${styles.titleCell}`}>
                Task
              </TableHead>
              <TableHead className={`${styles.headCell} ${styles.statusCell}`}>
                Status
              </TableHead>
              <TableHead className={`${styles.headCell} ${styles.actionsCell}`}>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id} className={styles.row}>
                <TableCell className={`${styles.cell} ${styles.selectCell}`}>
                  <label className={styles.checkboxLabel}>
                    <input
                      className={styles.checkboxInput}
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggleComplete(task)}
                    />
                    <span className={styles.checkboxCustom} />
                  </label>
                </TableCell>

                <TableCell className={`${styles.cell} ${styles.titleCell}`}>
                  {editingId === task.id ? (
                    <input
                      className={styles.editInput}
                      value={editingTitle}
                      onChange={(event) =>
                        onEditingTitleChange(event.target.value)
                      }
                      onBlur={() => onSaveEdit(task.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          onSaveEdit(task.id);
                        }

                        if (event.key === "Escape") {
                          event.preventDefault();
                          onCancelEdit();
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    <span
                      className={`${styles.taskText} ${
                        task.completed ? styles.completed : ""
                      }`}
                      onDoubleClick={() => onStartEdit(task)}
                    >
                      {task.title}
                    </span>
                  )}
                </TableCell>

                <TableCell className={`${styles.cell} ${styles.statusCell}`}>
                  <span
                    className={`${styles.statusBadge} ${
                      task.completed ? styles.statusDone : ""
                    }`}
                  >
                    {task.completed ? "Completed" : "Open"}
                  </span>
                </TableCell>

                <TableCell className={`${styles.cell} ${styles.actionsCell}`}>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => onDelete(task.id)}
                    aria-label={`Delete ${task.title}`}
                  >
                    ✕
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
