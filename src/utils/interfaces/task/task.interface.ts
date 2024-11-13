export interface ITaskType {
  id: number;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
}
