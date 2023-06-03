export interface TodoDataItem {
  id: string;
  task: string;
  complete: boolean;
  completeTime: number | undefined;
  creationTime: number;
}
