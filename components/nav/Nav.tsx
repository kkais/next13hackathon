import { cookies, headers} from "next/headers"
import MainNav from "./MainNav"

const getCartItems = async () => {
  const headersData = headers();  
  const protocol = headersData.get("x-forwarded-proto");
  const host = headersData.get("host");
  const live_url = `${protocol}://${host}`;

  const apiHost =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : live_url;
      
  const cookieStore = cookies();
  const user_id = cookieStore.get("user_id")?.value as string;
  let noOfItems = 0

  try {
    const response = await fetch(`${apiHost}/api/cart?user_id=${user_id}`);
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
