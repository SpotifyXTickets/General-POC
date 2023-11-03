import { jwtVerify } from "jose";

export const getJwtSecretKey = () => {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

  if (!secret) {
    throw new Error("JWT secret key is not matched");
  }

  return new TextEncoder().encode(secret);
};

export const verifyJwtToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};
