export interface BasketProduct {
  style: string;
  price: number;
  slug: string;
  color: string;
  image: string;
  size: string;
  quantity: number;
}

export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
}

export interface BasketState {
  products: BasketProduct[];
  totalProductPrice: number;
}

export interface DeliveryAddressState {
  country: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
}

export interface DeliveryMethodState {
  deliveryOption: string;
  deliveryPrice: number;
}

export type RemoveBasketItemPayloadType = {
  slug: string;
  size: string;
};

export type Action =
  | { type: "HYDRATE"; payload: State }
  | { type: "ADD_BASKET_ITEM"; payload: BasketProduct }
  | { type: "REMOVE_BASKET_ITEM"; payload: RemoveBasketItemPayloadType }
  | { type: "CLEAR_BASKET" }
  | { type: "UPDATE_USER"; payload: UserState }
  | { type: "UPDATE_DELIVERY_ADDRESS"; payload: DeliveryAddressState }
  | { type: "UPDATE_SHIPPING_METHOD"; payload: DeliveryMethodState };

export type State = {
  user: UserState;
  basket: BasketState;
  deliveryAddress: DeliveryAddressState;
  deliveryMethod: DeliveryMethodState;
};

// eslint-disable-next-line no-unused-vars
export type Dispatch = (action: Action) => void;

export interface appContextType {
  state: State;
  dispatch: Dispatch;
}
