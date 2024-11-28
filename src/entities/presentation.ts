type IPresentationStateInit = {
  kind: "init";
};

type IPresentationStateLoading = {
  kind: "loading";
};

type IPresentationStateError = {
  kind: "error";
  message: string;
};

type IPresentationStateSuccess<T> = {
  kind: "success";
  data: T;
};

export type IPresentationState<T> =
  | IPresentationStateInit
  | IPresentationStateError
  | IPresentationStateLoading
  | IPresentationStateSuccess<T>;

export interface IUsePresentation {
  state: any;
  handlers: Record<string, any>;
}
