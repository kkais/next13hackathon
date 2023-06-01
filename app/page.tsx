import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Hero from "@/components/hero/Hero"
import Promotions from "@/components/promotions/Promotions"
import Products from "@/components/products/Products"
import Newsletter from "@/components/newsletter/Newsletter"

export default function IndexPage() {
  return (
    <>
      <main>
        <Hero />
        <Promotions />
        <Products />
        <Newsletter />
      </main>
    </>
  )
}
