import { hashPassword } from "../utils/HashPassword";

const loginApi = async (email, password) => {
  try {
    const hashedPassword = await hashPassword(password);
    const response = await fetch(
      "https://apiv2stg.promilo.com/user/oauth/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: email,
          password: hashedPassword,
          grant_type: "password",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    // console.log(data.response.access_token);
    return data.response.access_token;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProducts = async (accessToken) => {
  try {
    if (!accessToken) {
      throw new Error("Failed to fetch products..");
    }
    const response = await fetch(
      "https://api.kalpav.com/api/v1/product/category/retail",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { loginApi, getProducts };
