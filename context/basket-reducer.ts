import type { Action, State } from "./basket.types";

export function basketReducer(state: State, action: Action) {
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
