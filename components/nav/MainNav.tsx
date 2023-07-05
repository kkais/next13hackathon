"use client"

import Link from "next/link"
import Image from "next/image"
import { FC, useState } from "react"

import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import logo from "../../public/Logo.webp"
import IOrderItem from "@/interfaces/IOrderItem"

const MainNav: FC<{cartItems: IOrderItem[]}> = ({ cartItems }) => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="flex items-center w-full lg:w-auto justify-between mx-8 xl:mx-32 my-8 lg:mx-16">
            <Link href="/" className={`${open ? 'hidden' : 'block'}`} >
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
                <Button className="relative hidden h-auto rounded-full border-0 bg-[#f1f1f1] hover:bg-gray-300 p-3 text-black transition duration-300 delay-0 ease-linear hover:scale-110 hover:transform lg:flex">
                    <ShoppingCart className="font-bold" />
                    <span className=" absolute right-[5px] top-0 h-[18px] w-[18px] rounded-full bg-[#f02d34] text-center text-xs font-semibold text-[#eee]">{cartItems.length || 0}</span>
                </Button>
            </Link>

            <div className="block lg:hidden w-auto mx-24">
                <button className={`${open ? 'hidden' : 'block'} navbar-smallscreen_overlay`} onClick={() => setOpen(!open)}>
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
                </button>
                <div className={`${open ? 'flex' : 'hidden'} fixed top-0 left-0 flex-col items-center justify-center w-full h-full bg-white z-[1]`}>
                    <Link href="/">
                        <Image
                            alt="logo"
                            src={logo}
                            width="140"
                            height="25"
                            decoding="async"
                            className=" left-10 top-10 fixed"
                            loading="lazy"
                            style={{ color: "transparent" }}
                        />
                    </Link>
                    <button className="right-14 top-9 fixed" onClick={() => setOpen(!open)}>
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
                    </button>
                    <ul className="navbar-smallscreen_links">
                        <Link href="/cart">
                            <Button className="relative h-auto rounded-full border-0 bg-[#f1f1f1] hover:bg-gray-300 p-3 text-black transition duration-300 delay-0 ease-linear hover:scale-110 hover:transform flex">
                                <ShoppingCart className="font-bold" />
                                <span className=" absolute right-[5px] top-0 h-[18px] w-[18px] rounded-full bg-[#f02d34] text-center text-xs font-semibold text-[#eee]">{cartItems.length || 0}</span>
                            </Button>
                        </Link>
                        <li>
                            <Link href="/female">
                                Female
                            </Link>
                        </li>
                        <li>
                            <Link href="/male">
                                Male
                            </Link>
                        </li>
                        <li>
                            <Link href="/kids">
                                Kids
                            </Link>
                        </li>
                        <li>
                            <Link href="/allproducts">
                                All Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNav