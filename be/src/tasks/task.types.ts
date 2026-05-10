export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskPatch = {
  title?: string;
  completed?: boolean;
};
