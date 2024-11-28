import { IBaseResponse } from "./base-response";

export interface IExampleGetDataResult {
  name: string;
  url: string;
}

export type IExampleGetDataResultList = IExampleGetDataResult[]

export interface IExampleGetDataRaw {
  count: number;
  next: string | null;
  previous: string | null;
  results: IExampleGetDataResultList;
}

export interface IExampleGetDataPayload {
  page: number;
}

export type IExampleGetDataRepository =
  IBaseResponse<IExampleGetDataResultList>;
