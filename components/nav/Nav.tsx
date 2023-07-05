import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import logo from "../../public/Logo.webp"
import { Button } from "../ui/button"
import { cookies } from "next/headers"
import SmallScreenNav from "./SmallScreenNav"
import MainNav from "./MainNav"

const getCartItems = async () => {
  const cookieStore = cookies();
  const user_id = cookieStore.get("user_id")?.value as string;

  try {
    const response = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`);
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
