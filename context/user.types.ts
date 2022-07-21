export interface State {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    role?: string;
  };
  shippingAddress: {
    country: string;
    address: string;
    city: string;
    postcode: string;
    phone: string;
  };
}

export type Action = { type: "UPDATE"; payload: State };

// eslint-disable-next-line no-unused-vars
export type Dispatch = (action: Action) => void;

export interface UserContextType {
  state: State;
  dispatch: Dispatch;
}
