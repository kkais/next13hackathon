import ProductDetail from "@/components/productdetail/ProductDetail"
import IProduct from "@/interfaces/IProduct";
import { client } from "@/lib/sanity/sanityClient";

const getProductData = async (slug:string) => {
  // console.log(slug);

  return await client.fetch(`*[_type=='product' && slug=='${slug}']{
    _id,
    title,
    slug,
    description,
    care,
    price,
    images,
    category->{title},
    tag->{title},
    sizes[]->{title},
    }`
  );
}

// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json())
//   const products: IProduct[] = await getProductsData();

//   return products.map((product) => ({
//     slug: product.slug,
//   }))
// }

const Product = async ({ params }: { params: { slug: string } }) => {
  const {slug} = params;
  const product: IProduct = await getProductData(slug);
  // console.log(product);

  return (
    <ProductDetail product={product} />
  )
}

export default Product
