"use client"

import { FC } from "react"
import Image from "next/image"
import IProduct from "@/interfaces/IProduct"
import ISize from "@/interfaces/ISize"
import { urlForImage } from "@/sanity/lib/image"
import toast, { Toaster } from "react-hot-toast"

const ProductDetail: FC<{ product: IProduct }> = ({ product }) => {
  const prod: IProduct = product[0]
  // console.log(prod.title);

  const handleAddToCart = async () => {
    try {
      const response = await fetch("api/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: prod._id,
        }),
      })
      toast.success(`${prod.title} been successfully added!`, {
        position: "top-right",
      })
      const result = await response.json()
      console.log(result)
    } catch (error) {
      toast.error("Oops! Something went wrong")
      console.log(error)
    }
  }

  return (
    <div className="bg-[#fcfcfc] px-32 py-16">
      <Toaster />
      <div className="flex justify-between">
        <div className="flex shrink grow-[2] basis-0 gap-8">
          <div className="flex flex-col gap-4">
            {prod.images.map((img: any, index) => {
              const key = `img-${index}`

              return (
                <Image
                  key={key}
                  alt="Product"
                  width={100}
                  height={100}
                  src={urlForImage(img).url()}
                  className="small-image"
                />
              )
            })}
          </div>
          <div className="w-4/5 h-full">
            <Image
              width={673}
              height={723}
              alt="Product"
              src={urlForImage(prod.images[0]).url()}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-16 shrink grow basis-0">
          <div className="name-and-category">
            <h3 className="text-[26px] font-normal leading-8 tracking-wider text-[#212121]">
              {prod.title}
            </h3>
            <span className=" text-[21px] font-semibold opacity-[0.3]">
              {prod.tag.title}
            </span>
          </div>
          <div className="size">
            <p className="text-sm font-bold leading-4 tracking-wider text-[#212121]">
              SELECT SIZE
            </p>
            <ul className="flex gap-4 mt-4">
              {prod.sizes.map((size: ISize, index) => {
                const key = `img-${index}`

                return (
                  <li
                    key={key}
                    className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full text-base font-bold leading-4 tracking-wider text-[#666] hover:shadow-xl"
                  >
                    {size.title}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex gap-8">
            <h4 className="font-bold">Quantity: </h4>
            <div className="flex">
              <span className="mr-[10px] cursor-pointer rounded-full border-2 border-solid border-[#f1f1f1] bg-[#f1f1f1] px-2 pb-2 pt-[0.3rem]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </span>
              <span className="num">1</span>
              <span className="ml-[10px] cursor-pointer rounded-full border-2 border-solid  border-[#000] px-2 pb-2 pt-[0.3rem]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className=" flex w-2/5 items-center justify-center gap-2 bg-[#212121] py-[10px] text-sm font-semibold leading-[18px] text-white"
              type="button"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
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
              Add to Cart
            </button>
            <p className=" text-2xl font-bold leading-[30px] tracking-widest text-[#212121]">
              ${prod.price}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-16 pt-8 pb-24 bg-white">
        <div className="relative z-[2] flex h-[150px] w-full border-b-2 border-b-[#c4c4c4]">
          <div className="z-[2] flex h-full w-full text-[7.5rem] font-extrabold leading-[151px] text-[#f2f3f7] opacity-[0.7]">
            Overview
          </div>
          <h2 className="absolute top-[45%] z-[2] pb-12 text-[1.4rem] font-bold leading-6 text-[#212121]">
            Product Information
          </h2>
        </div>
        <div className="z-[2] flex">
          <h4 className="flex shrink grow basis-0 text-base font-bold leading-5 tracking-wider text-[#666]">
            PRODUCT DETAILS
          </h4>
          <p className="flex shrink grow-[2] basis-0 text-justify text-base font-light leading-[25px] tracking-wider text-[#212121]">
            {prod.description}
          </p>
        </div>
        <div className="z-[2] flex">
          <h4 className="flex shrink grow basis-0 text-base font-bold leading-5 tracking-wider text-[#666]">
            PRODUCT CARE
          </h4>
          <p className="flex shrink grow-[2] basis-0 text-justify text-base font-light leading-[25px] tracking-wider text-[#212121]">
            {prod.care}
          </p>
          {/* <ul className="flex shrink grow-[2] basis-0 flex-col">
            <li className="list-inside list-disc text-justify text-base font-semibold leading-[26px] tracking-wider text-[#212121]">
              Lorem ipsum dolor sit amet
            </li>
            <li className="list-inside list-disc text-justify text-base font-semibold leading-[26px] tracking-wider text-[#212121]">
              consectetur adipiscing elit
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
