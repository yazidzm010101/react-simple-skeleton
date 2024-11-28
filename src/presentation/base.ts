import { IPresentationState } from "../entities/presentation";

export type Subscription<T> = (state: T) => void;

export abstract class BasePresentation<T = IPresentationState<unknown>> {
  private internalState: T;
  private listeners: Subscription<T>[] = [];

  constructor(initalState: T) {
    this.internalState = initalState;
  }

  public get state(): T {
    return this.internalState;
  }

  changeState(state: T) {
    this.internalState = state;

    if (this.listeners.length > 0) {
      this.listeners.forEach((listener) => listener(this.state));
    }
  }

  subscribe(listener: Subscription<T>) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: Subscription<T>) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}