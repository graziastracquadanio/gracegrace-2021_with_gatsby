import React, { createContext, useContext, useMemo } from 'react';

import { RootStore, RootStoreProps } from 'stores/RootStore';

let store: RootStore;

const StoreContext = createContext<RootStore | undefined>(undefined);

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}

export const RootStoreProvider: React.FC<RootStoreProps> = ({ db, storage, children }) => {
  const root = useMemo(() => store ?? new RootStore(db, storage), []);
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};
