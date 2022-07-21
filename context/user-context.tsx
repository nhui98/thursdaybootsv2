import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { userReducer } from "./user-reducer";
import { State, UserContextType } from "./user.types";

const UserContext = createContext<UserContextType | undefined>(undefined);

const INITIAL_STATE: State = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  },
  shippingAddress: {
    country: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
  },
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const value = { state, dispatch };

  useEffect(() => {
    ("cached user is being called");

    const cachedUser = localStorage.getItem("basket");
    if (cachedUser) {
      ("cached user is being called");

      dispatch({
        type: "UPDATE",
        payload: JSON.parse(cachedUser) as State,
      });
    }
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");
  return context;
}
