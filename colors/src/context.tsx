import { Dispatch, PropsWithChildren, useReducer } from 'react';
import {
  AdjustColorActions,
  colorReducer,
  initialState,
} from './color-reducer';
import { createContext } from './create-context';

type ColorContextValues = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const [useCtx, ContextProvider] =
  createContext<ColorContextValues>();

export const useContext = useCtx;

export function ColorProvider({ children }: PropsWithChildren) {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
}
