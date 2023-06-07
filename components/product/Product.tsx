"use client"

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FC } from "react";


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
    const response = await fetch('api/cart', {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id
      })
    })

    const result = await response.json();
    console.log(result);

  }

  return (
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
  )
}

export default Product
