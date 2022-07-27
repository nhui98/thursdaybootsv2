import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { BasketProduct } from "../../context/appTypes";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1KsBCCCAZfvNw7pQGXspzLzs" }],
        line_items: req.body.products.map((product: BasketProduct) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: `${product.style} ${product.color} size ${product.size}`,
              },
              unit_amount: (product.price / product.quantity) * 100,
            },
            quantity: product.quantity,
          };
        }),
        success_url: `${req.headers.origin}/checkout/confirmation?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      // res.redirect(303, session.url);
      res.status(200).json(session);
    } catch (err) {
      if (err instanceof Error) res.status(500).json(err.message);
      console.log(err);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
