import cookie from "cookie";
import jwt from "jsonwebtoken";
import { NextApiResponse } from "next";

export const setCookieJwt = (
  id: string,
  email: string,
  res: NextApiResponse
) => {
  if (!process.env.JWTSECRET) throw new Error("No Jwt secret");

  const token = jwt.sign(
    {
      id: id,
      email: email,
      time: Date.now(),
    },
    process.env.JWTSECRET,
    {
      expiresIn: "8h",
    }
  );

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("COOKIE_TOKEN", token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })
  );
};
