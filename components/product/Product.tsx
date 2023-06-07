"use client"

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import toast, { Toaster } from "react-hot-toast";


interface ICategory {
  title: string
}

interface IProduct {
  _id: string,
  title: string,
  description: string,
  price: number,
  images: any[],
  category: ICategory
}



const Product: FC<{item: IProduct}> = ({ item }) => {

  const handleAddToCart = async () => {
    try {
      const response = await fetch('api/cart', {
        method: "POST",
        body: JSON.stringify({
          product_id: item._id
        })
      })
      toast.success("Product's been successfully added!", {position: "top-right"});
      const result = await response.json();
      console.log(result);
    } catch (error) {
      toast.error("Oops! Something went wrong");
      console.log(error);
    }


  }

  return (
    <div className="fle">
      <Toaster />
      <div className="flex flex-col items-center justify-between gap-4">
        <div>
          <h2>{item.title}</h2>
          <h3>{item.price}</h3>
        </div>
        <div>
          <Image className="max-h-[300px] object-cover object-top" key={`img-${item._id}`} width={300} height={100} src={urlForImage(item.images[0]).url()} alt="product" />
        </div>
        <div>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
        {/* {item.images.map((image, index) =>
          (
            <Image key={index} width={300} height={300} src={urlForImage(image).url()} alt="product" />
          )
        )} */}
      </div>
    </div>
  )
}

export default Product
