export interface TodoDataItem {
  _id: string | undefined;
  task: string;
  complete: boolean;
  completeTime: number | undefined;
  creationTime: number;
}
