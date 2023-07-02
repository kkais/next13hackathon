import Image from "next/image"
import Link from "next/link"

import { ShoppingCart } from "lucide-react"

import featured1 from "../../public/Featured1.webp"
import featured2 from "../../public/Featured2.webp"
import featured3 from "../../public/Featured3.webp"
import featured4 from "../../public/Featured4.webp"
import header from "../../public/header.webp"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <header className="relative flex justify-between gap-16 mx-8 lg:mx-16 xl:mx-32 my-16">
      <div className="flex flex-col justify-between gap-10 pt-12 pb-4 shrink grow basis-0">
        <div className="flex flex-col justify-center gap-10">
          <span className="flex h-10 w-[120px] items-center justify-center rounded-md bg-[#e1edff] font-semibold text-blue-700">
            Sale 70%
          </span>
          <h1 className=" text-[3.5rem] font-bold leading-[55px] tracking-wide text-[#212121]">
            An Industrial Take on Streetwear
          </h1>
          <p className="lg:w-[70%] text-base font-normal text-[#666]">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href="/products">
            <button
              className="flex lg:w-[35%] text-white items-center justify-center rounded-none gap-2 bg-[#212121] p-4 text-base font-semibold leading-[18px]"
              type="button"
            >
              <ShoppingCart />
              &nbsp; Start Shopping
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Image
            alt="img"
            src={featured1}
            width="100"
            height="35"
            decoding="async"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          <Image
            alt="img"
            src={featured2}
            width="100"
            height="35"
            decoding="async"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          <Image
            alt="img"
            src={featured3}
            width="100"
            height="35"
            decoding="async"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          <Image
            alt="img"
            src={featured4}
            width="100"
            height="35"
            decoding="async"
            loading="lazy"
            style={{ color: "transparent" }}
          />
        </div>
      </div>

      <div className="hidden lg:flex header-right grow shrink basis-0">
        <div className="header-circle w-[600px] h-[600px] rounded-full bg-[#ffece3]">
          <Image className="absolute top-[-5%]" width={650} height={650} alt="header-image" src={header} />
        </div>
      </div>
    </header>
  )
}

export default Hero
