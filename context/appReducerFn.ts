import {
  BasketProduct,
  DeliveryAddressState,
  DeliveryMethodState,
  RemoveBasketItemPayloadType,
  State,
  UserState,
} from "./appTypes";

export const hydrate = (payload: State) => {
  return {
    ...payload,
  };
};

export const addBasketItem = (state: State, payload: BasketProduct) => {
  const { basket } = state;
  const { products, totalProductPrice } = basket;
  const { quantity, price, slug, size } = payload;

  const itemExists = products.find(
    (product) => product.slug === slug && product.size === size
  );

  let returnObject = {} as State;

  if (!itemExists) {
    returnObject = {
      ...state,
      basket: {
        products: [...products, payload],
        totalProductPrice: totalProductPrice + price * quantity,
      },
    };
  } else {
    returnObject = {
      ...state,
      basket: {
        products: products.map((product) =>
          product === itemExists
            ? {
                ...product,
                quantity: product.quantity + quantity,
                price: product.price + price * quantity,
              }
            : product
        ),
        totalProductPrice: totalProductPrice + price * quantity,
      },
    };
  }

  return setLocalStorage(returnObject);
};

export const removeBasketItem = (
  state: State,
  payload: RemoveBasketItemPayloadType
) => {
  const { basket } = state;

  const { products, totalProductPrice } = basket;
  const { slug, size } = payload;

  const itemInBasket = products.find(
    (product) => product.slug === slug && product.size === size
  );

  if (!itemInBasket) return { ...state };

  const returnObject = {
    ...state,
    basket: {
      products: products.filter((product) => product !== itemInBasket),
      totalProductPrice: totalProductPrice - itemInBasket.price,
    },
  };

  return setLocalStorage(returnObject);
};

export const clearBasket = (state: State) => {
  console.log("called");

  const returnObject = {
    ...state,
    basket: {
      products: [],
      totalProductPrice: 0,
    },
  };

  return setLocalStorage(returnObject);
};

export const updateUser = (state: State, payload: UserState) => {
  const { user } = state;

  const returnObject = {
    ...state,
    user: {
      ...user,
      ...payload,
    },
  };

  return setLocalStorage(returnObject);
};

export const updateDeliveryAddress = (
  state: State,
  payload: DeliveryAddressState
) => {
  const { deliveryAddress } = state;

  const returnObject = {
    ...state,
    deliveryAddress: {
      ...deliveryAddress,
      ...payload,
    },
  };

  return setLocalStorage(returnObject);
};

export const updateShippingMethod = (
  state: State,
  payload: DeliveryMethodState
) => {
  const { deliveryMethod } = state;

  const returnObject = {
    ...state,
    deliveryMethod: {
      ...deliveryMethod,
      ...payload,
    },
  };

  return setLocalStorage(returnObject);
};

const setLocalStorage = (returnObject: State) => {
  localStorage.setItem("appcontext", JSON.stringify(returnObject));
  return returnObject;
};
