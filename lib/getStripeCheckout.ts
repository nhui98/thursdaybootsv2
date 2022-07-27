import { BasketState } from "../context/appTypes";
import getStripe from "./getStripe";

export const getStripeCheckout = async (basket: BasketState) => {
  const stripe = await getStripe();

  const response = await fetch("/api/stripe", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(basket),
  });

  if (response.status > 400) return;

  const data = await response.json();

  stripe?.redirectToCheckout({ sessionId: data.id });
};
