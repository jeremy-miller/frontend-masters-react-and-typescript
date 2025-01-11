import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import { AdjustColorActions, colorReducer, initialState } from './color-reducer';

type ColorContextValues = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

export const ColorContext = createContext<ColorContextValues>({
  hexColor: '#FEFEFE',
} as ColorContextValues);

export function ColorProvider({ children }: PropsWithChildren) {
  const [{ hexColor }, dispatch] =  useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}
