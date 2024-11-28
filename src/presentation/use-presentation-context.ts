import { Context, createContext, useContext } from "react";
import { IUsePresentation } from "../entities/presentation";

const PresentationContext = createContext<IUsePresentation | undefined>(
  undefined
);
const PresentationProvider = PresentationContext.Provider;
function usePresentationContext<T extends IUsePresentation>(): T {
  const context = useContext(PresentationContext as Context<T | undefined>);
  if (context == undefined) {
    throw new Error(
      "usePresentationContext only available to ExampleContextProvider!"
    );
  }
  return context;
}

export { PresentationProvider, usePresentationContext };
