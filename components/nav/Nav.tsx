import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import logo from "../../public/Logo.webp"
import { Button } from "../ui/button"
import { cookies } from "next/headers"

const getCartItems =async () => {
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
    <nav className="flex items-center w-full lg:w-4/5 justify-between mx-8 xl:mx-32 my-8 lg:mx-16">
      <Link href="/">
        <Image
          alt="logo"
          width="140"
          height="25"
          src={logo}
          loading="lazy"
          style={{ color: "transparent" }}
        />
      </Link>
      <ul className="justify-between hidden gap-8 lg:flex xl:gap-12">
        <li>
          <Link href="/female">Female</Link>
        </li>
        <li>
          <Link href="/male">Male</Link>
        </li>
        <li>
          <Link href="/kids">Kids</Link>
        </li>
        <li>
          <Link href="/allproducts">All Products</Link>
        </li>
      </ul>
      <div className="hidden w-[30%] items-center rounded-[5px] border border-[#e4e5eb] px-[5px] lg:flex">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          version="1.1"
          id="search"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
            ></path>
          </g>
        </svg>
        <input
          type="text"
          placeholder="What you looking for"
          className="h-6 w-full border-0 p-[5px] text-xs"
        />
      </div>
      <Link href="/cart">
        <Button className="relative hidden h-auto rounded-full border-0 bg-[#f1f1f1] p-3 text-black transition duration-300 delay-0 ease-linear hover:scale-110 hover:transform lg:flex">
          <ShoppingCart className="font-bold" />
          <span className=" absolute right-[5px] top-0 h-[18px] w-[18px] rounded-full bg-[#f02d34] text-center text-xs font-semibold text-[#eee]">{cartItems?.length || 0}</span>
        </Button>
      </Link>
      <div className="lg:hidden navbar-smallscreen">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          color="black"
          fontSize="27"
          style={{ color: "black" }}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
          </g>
        </svg>
        <div className="hidden navbar-smallscreen_overlay">
          <a href="/">
            <Image
              alt="logo"
              src={logo}
              width="140"
              height="25"
              decoding="async"
              className="logo-small"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            color="black"
            fontSize="27"
            className="close_icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "black" }}
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
            </g>
          </svg>
          <ul className="navbar-smallscreen_links">
            <Link href="/cart">
              <button className="cart-small-screen">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="cart-item-qty">{cartItems?.length || 0}</span>
              </button>
            </Link>
            <Link href="/female">
              <li>Female</li>
            </Link>
            <Link href="/male">
              <li>Male</li>
            </Link>
            <Link href="/kids">
              <li>Kids</li>
            </Link>
            <Link href="/allproducts">
              <li>All Products</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
