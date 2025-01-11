import React from 'react';

export function createContext<T extends {}>() {
  const Context = React.createContext<T | undefined>(undefined);

  function useContext() {
    const ctx = React.useContext(Context);

    if (ctx === undefined) {
      throw new Error(
        'useContext can only be used inside a Provider, and a value must be given',
      );
    }

    return ctx;
  }

  return [useContext, Context.Provider] as const;
}
