export interface BasketContextType {
  state: State;
  dispatch: Dispatch;
}

export interface BasketProductType {
  style: string;
  price: number;
  slug: string;
  color: string;
  image: string;
  size: string;
  quantity: number;
}

export type State = { basket: BasketProductType[]; totalPrice: number };

export type Action =
  | { type: "ADD"; payload: BasketProductType }
  | { type: "REMOVE"; payload: { slug: string; size: string } }
  | { type: "HYDRATE"; payload: State };

// eslint-disable-next-line no-unused-vars
export type Dispatch = (action: Action) => void;
