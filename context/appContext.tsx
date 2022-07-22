import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { appReducer } from "./appReducer";
import type { appContextType, State } from "./appTypes";

const AppContext = createContext<appContextType | undefined>(undefined);

const INITIAL_STATE: State = {
  basket: {
    products: [],
    totalProductPrice: 0,
  },
  user: {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  },
  deliveryAddress: {
    country: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
  },
  deliveryMethod: {
    deliveryOption: "",
    deliveryPrice: 0,
  },
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  const value = { state, dispatch };

  useEffect(() => {
    const cachedAppContext = localStorage.getItem("appcontext");
    if (cachedAppContext)
      dispatch({
        type: "HYDRATE",
        payload: JSON.parse(cachedAppContext) as State,
      });
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("useAppState must be used within a AppContext");
  return context;
}
