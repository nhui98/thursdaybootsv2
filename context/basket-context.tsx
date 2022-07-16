import * as React from "react";
import type { ProductType } from "../utils/models/Product";

type State = { basket: ProductType[] };
type Action = { type: "ADD"; payload: ProductType };
// eslint-disable-next-line no-unused-vars
type Dispatch = (action: Action) => void;

interface BasketContextType {
  state: State;
  dispatch: Dispatch;
}

const BasketContext = React.createContext<BasketContextType | undefined>(
  undefined
);

function basketReducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD": {
      return {
        basket: [...state.basket, action.payload],
      };
    }
    default: {
      return { ...state };
    }
  }
}

export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(basketReducer, { basket: [] });
  const value = { state, dispatch };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
}

export function useBasket() {
  const context = React.useContext(BasketContext);

  if (context === undefined)
    throw new Error("useBasket must be used within a BasketProvider");
  return context;
}
