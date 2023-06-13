import IProduct from "@/interfaces/IProduct";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from 'react'

const ProductCard: FC<{product: IProduct}> = ({ product }) => {
  return (
    <div>
        <Link href={`/product/${product.slug}`}>
          <div className="w-[250px]">
            <Image className="max-h-[270px] object-cover object-top" alt={product.title} src={urlForImage(product.images[0]).url()} width="250" height="270" key={`img-${product._id}`} />
            <p className="mt-2 text-[1.05rem] font-semibold leading-6 tracking-wide text-[#212121]">{product.title}</p>
            <p className="mt-2 text-base font-semibold leading-4 text-[#888]">{product.tag.title}</p>
            <p className= "mt-4 text-xl font-semibold leading-6 tracking-wide text-[#212121]">${product.price}</p>
          </div>
        </Link>
      </div>
  )
}

export default ProductCard
