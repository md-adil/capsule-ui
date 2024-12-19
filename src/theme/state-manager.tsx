import { createContext, useContext, type SetStateAction } from "react";
import { type Dispatch } from "react";

type State = Record<symbol, unknown>;
type SetState<S> = [S, Dispatch<SetStateAction<S>>];
type SetAction<T> = (val: T) => T;

export const StateManagerContext = createContext<SetState<State>>([{}, () => {}]);

export function createState<T>(def?: T) {
  const id = Symbol("state");

  function getStateValue(state: State) {
    return (state[id] ?? def) as T;
  }

  function dispatch(val: unknown): SetAction<State> {
    if (isDispatchable(val)) {
      return (state) => ({ ...state, [id]: val(getStateValue(state)) });
    }
    return (state) => ({ ...state, [id]: val });
  }

  return function useState(): SetState<T> {
    const [context, setContext] = useContext(StateManagerContext);
    return [
      getStateValue(context),
      (val) => {
        setContext(dispatch(val));
      },
    ];
  };
}

function isDispatchable(fn: unknown): fn is Dispatch<unknown> {
  return typeof fn === "function";
}
