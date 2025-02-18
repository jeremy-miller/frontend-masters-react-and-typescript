import { createContext, PropsWithChildren, useState } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from './lib/items';

type ItemsState = {
  items: Item[];
  unpackedItems: Item[];
  packedItems: Item[];
  add: (name: string) => void;
  update: (id: string, updates: Omit<Partial<Item>, 'id'>) => void;
  remove: (id: string) => void;
  markAllAsUnpacked: () => void;
};

export const ItemsContext = createContext({} as ItemsState);

export const ItemsProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState(getInitialItems());

  const add = (name: string) => {
    const item = createItem(name);
    setItems([...items, item]);
  };

  const update = (id: string, updates: Omit<Partial<Item>, 'id'>) => {
    setItems(updateItem(items, id, updates));
  };

  const remove = (id: string) => {
    setItems(removeItem(items, id));
  };

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  const markAllAsUnpacked = () => {
    return setItems(items.map((item) => ({ ...item, packed: false })));
  };

  const value: ItemsState = {
    items,
    unpackedItems,
    packedItems,
    add,
    update,
    remove,
    markAllAsUnpacked,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
