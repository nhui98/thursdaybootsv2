import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { basketReducer } from "./basket-reducer";
import { BasketContextType, State } from "./basket.types";

const BasketContext = createContext<BasketContextType | undefined>(undefined);

const INITIAL_STATE: State = {
  basket: [],
  totalPrice: 0,
};

export function BasketProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(basketReducer, INITIAL_STATE);
  const value = { state, dispatch };

  useEffect(() => {
    const cachedBasket = localStorage.getItem("basket");
    if (cachedBasket)
      dispatch({
        type: "HYDRATE",
        payload: JSON.parse(cachedBasket) as State,
      });
  }, []);

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);

  if (context === undefined)
    throw new Error("useBasket must be used within a BasketProvider");
  return context;
}
