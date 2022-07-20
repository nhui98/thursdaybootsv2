import * as React from "react";
import { basketReducer } from "./basket-reducer";
import { BasketContextType } from "./basket.types";

const BasketContext = React.createContext<BasketContextType | undefined>(
  undefined
);

const INITIAL_STATE = {
  basket: [],
  totalPrice: 0,
};

export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(basketReducer, INITIAL_STATE);
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
