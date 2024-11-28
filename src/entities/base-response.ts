interface IStatus {
  code: number;
  message: string;
}

interface IMeta {
  page: number;
  count: number;
}

export interface IBaseResponse<T = unknown> {
  data: T | null;
  status: IStatus | null;
  meta: IMeta | null;
}
