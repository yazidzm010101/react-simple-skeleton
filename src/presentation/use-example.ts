import { useState } from "react";
import {
  IExampleGetDataPayload,
  IExampleGetDataResultList,
} from "../entities/example";
import { IPresentationState, IUsePresentation } from "../entities/presentation";
import { ExampleRepository } from "../repositories/example";

export interface IUseExample extends IUsePresentation {
  state: IPresentationState<IExampleGetDataResultList> & {
    page: number;
    count: number;
  };
  handlers: {
    getData: (payload: IExampleGetDataPayload) => Promise<void>;
  };
}

function useExample(): IUseExample {
  const [state, setState] = useState<IUseExample["state"]>({
    kind: "init",
    count: 0,
    page: 1,
  });
  const repository = new ExampleRepository();

  const getData = async (payload: IExampleGetDataPayload) => {
    setState((state) => ({ ...state, kind: "loading" }));
    await new Promise((resolve) => setTimeout(resolve, 500));
    const data = await repository.getList(payload);
    if (data.status?.code == 200 && data.data) {
      setState({
        kind: "success",
        data: data.data,
        page: payload.page,
        count: data.meta?.count ?? 0,
      });
    } else {
      setState((state) => ({
        ...state,
        kind: "error",
        message: data.status?.message ?? "An error happened!",
      }));
    }
  };

  const handlers = { getData };
  return { state, handlers };
}

export { useExample };
