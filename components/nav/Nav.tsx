import { cookies} from "next/headers"
import MainNav from "./MainNav"
import { live_url } from "@/utils";

const getCartItems = async () => {
  const host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : live_url;
      
  const cookieStore = cookies();
  const user_id = cookieStore.get("user_id")?.value as string;
  let noOfItems = 0

  try {
    const response = await fetch(`${host}/api/cart?user_id=${user_id}`);
    const result = await response.json();
    noOfItems = result.length;
    // console.log(result);
  } catch (error) {
    console.log(error);
  }

  return noOfItems;

}

const Nav = async () => {
  const cartItems = await getCartItems();

  return (
    <>
      <MainNav cartItems={cartItems} />
    </>
  )
}

export default Nav
