import { cookies } from "next/headers"
import MainNav from "./MainNav"

const getCartItems = async () => {
  const host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.VERCEL_URL;

  const cookieStore = cookies();
  const user_id = cookieStore.get("user_id")?.value as string;

  try {
    const response = await fetch(`${host}/api/cart?user_id=${user_id}`);
    const result = await response.json();
    return result;
    // console.log(result);
  } catch (error) {
    console.log(error);
  }

}

const Nav = async () => {
  const cartItems = await getCartItems();

  return (
    <MainNav cartItems={cartItems} />
  )
}

export default Nav
