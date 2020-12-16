import { FST } from './index';

export function reducerToFST<TState, TInput>(
  reducer: (state: TState, input: TInput) => TState,
  initialState: TState,
  nextEvents?: (state: TState) => TInput[]
): FST<TState, TInput> {
  return {
    transition: (state, input) => {
      const nextState = reducer(state, input);

      return [nextState, undefined];
    },
    initialState,
    events: [],
    nextEvents
  };
}
