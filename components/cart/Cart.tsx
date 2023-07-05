"use client"

import React, { FC, useState } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import IOrderItem from "@/interfaces/IOrderItem";

import { Button } from "../ui/button"
import { Image as SanityImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

// const sortArray = (arr: any[]) => {
//   arr.sort((a, b)=>{
//     a.price - b.price
//   })
// }

const Cart: FC<{products: IOrderItem[]}> = ({products}) => {
  const [loading, setLoading] = useState(false);
  // sortArray(products);
  const [items, setItems] = useState(products);
  let total = 0;

  const changeQuantity = (itemId: string, value: number) => {
    // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
    // setItems({ ...items, quantity: Math.max(0, value) });
    let img: SanityImage =  {};
    let obj: IOrderItem = {
      id: "",
      name: "",
      description: "",
      image: img,
      category: "",
      tag: "",
      quantity: 0,
      price: 0
    };

    let arr = items.filter(item => {
      if(item.id == itemId) { 
        // if (value < 0 && item.quantity > 0) { // Decrease only when there's a quantity value greater than zero
          obj = {...item, quantity: Math.max(1,(item.quantity + value))}
          return false;
        // }
        // changeQuantity(item.quantity + 1)
      } else {
        return true;
      }
    })
    arr = [obj, ...arr];
    // sortArray(arr);
    setItems(arr);
  };

  const onQuantityPlus = (itemId:string) => {
    changeQuantity(itemId, 1);
  };

  const onQuantityMinus = (itemId:string) => {
      changeQuantity(itemId, -1);
  };

  // const onInputChange = (e: { target: { value: string } }) => {
  //   changeQuantity(parseInt(e.target.value));
  // };

  items.map(item => {
    let item_total =  item.price * item.quantity
    total+=item_total;
  })

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
  const stripePromise = loadStripe(publishableKey);

  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const checkoutSession = await fetch(
      "/api/stripe/create-stripe-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items,
        }),
      }
    );

    console.log("Result------------- in cart page==========",  checkoutSession);

    const sessionID = await checkoutSession.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: sessionID.session,
    });
    if (result?.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  return (
    <section className="mx-8 lg:mx-32 my-16">
      <div className="lg:p-12">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="mt-8 flex shrink grow-[3] basis-0 flex-col gap-16">
            {items?.map(product => (
              <div key={product.id} className="flex flex-col lg:flex-row gap-8">
                <div className="h-[190px] w-3/5 lg:w-1/4 rounded-[9px]">
                  <Image
                    src={urlForImage(product.image).url()}
                    alt="img"
                    width="200"
                    height="190"
                    className="h-full w-full rounded-[9px]"
                  />
                </div>
                <div className="flex flex-col justify-between w-3/4 gap-5">
                  <div className="flex justify-between">
                    <h3 className="text-[1.3em] font-light leading-6 text-[#212121]">{product.name}</h3>
                    <button
                      type="button"
                      title="remove-item"
                      className="remove-item"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="28"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-base font-semibold leading-4 text-[#666]">{product.tag}</p>
                  <p className="text-base font-semibold leading-5 text-[#212121]">Delivery Estimation</p>
                  <p className="text-base font-semibold leading-5 text-[#ffc700]">5 Working Days</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold leading-5 tracking-[0.1em] text-[#212121]">${product.price}</span>
                    <div className="flex items-center">
                      <span
                        onClick={() => onQuantityMinus(product.id)}
                        className="mr-[10px] cursor-pointer rounded-[50%] border-2 border-[#f1f1f1] bg-[#f1f1f1] px-[5px] pb-[6px] pt-[3px]">
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
                      <span className="num">
                        <input
                          title="Qty"
                          placeholder=""
                          type="number"
                          className="w-12 p-2"
                          // onChange={onInputChange}
                          value={product.quantity}
                          disabled
                        />
                      </span>
                      <span
                        onClick={() => onQuantityPlus(product.id)}
                        className="ml-[10px] cursor-pointer rounded-[50%] border-2 border-[#000] px-[5px] pb-[6px] pt-[3px]">
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
                          <defs></defs>
                          <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                          <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex shrink grow basis-0 flex-col gap-8 bg-[#fbfcff] p-8">
            <h3 className="text-[1.17em] font-bold">Order Summary</h3>
            <div className="flex justify-between gap-16">
              <p>Quantity</p>
              <span>{items.length} Product(s)</span>
            </div>
            <div className="flex justify-between gap-16">
              <p>Sub Total</p>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between gap-16">
              <button
                // disabled={item.quantity === 0}
                onClick={createCheckOutSession}
                className="flex w-full items-center justify-center gap-2 bg-[#212121] py-[10px] text-[13.33px] font-semibold leading-[18px] text-white" type="button">
                Process to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
