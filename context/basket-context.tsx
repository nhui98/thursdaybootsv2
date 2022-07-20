import * as React from "react";

export interface BasketProductType {
  style: string;
  price: number;
  slug: string;
  color: string;
  image: string;
  size: string;
  quantity: number;
}

type State = { basket: BasketProductType[]; totalPrice: number };
type Action =
  | { type: "ADD"; payload: BasketProductType }
  | { type: "REMOVE"; payload: { slug: string; size: string } };
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
  const { basket, totalPrice } = state;

  switch (action.type) {
    case "ADD": {
      const { payload } = action;
      const { quantity, price, slug, size } = payload;

      const itemExistsInBasket = basket.find(
        (item) => item.slug === slug && item.size === size
      );

      if (!itemExistsInBasket)
        return {
          basket: [...basket, payload],
          totalPrice: totalPrice + price * quantity,
        };

      return {
        basket: basket.map((item) =>
          item === itemExistsInBasket
            ? {
                ...item,
                quantity: item.quantity + quantity,
                price: item.price + price * quantity,
              }
            : item
        ),
        totalPrice: totalPrice + price * quantity,
      };
    }
    case "REMOVE": {
      const { payload } = action;
      const { slug, size } = payload;

      const itemInBasket = basket.find(
        (item) => item.slug === slug && item.size === size
      );

      if (!itemInBasket) return { ...state };

      return {
        basket: basket.filter((item) => item !== itemInBasket),
        totalPrice: totalPrice - itemInBasket.price,
      };
    }
    default: {
      return { ...state };
    }
  }
}

const INITIAL_STATE: State = {
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
