import { client } from "@/lib/sanity/sanityClient";
import ProductCard from "@/components/productcard/ProductCard";
import IProduct from "@/interfaces/IProduct";

const getProductsData = async () => {
  return await client.fetch(`*[_type=='product']{
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
    }`);
}

const AllProducts = async () => {
  const products: IProduct[] = await getProductsData();
  // console.log(products);

  return (
    // <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-10">
    <div className="grid items-center grid-cols-1 lg:grid-cols-4 gap-16 px-8 lg:px-32 py-16">

    {/* </div> */}
      {products.map((product: IProduct) =>
        (
          <div key={product._id}>
            <ProductCard product={product}  />
          </div>
        )
      )}
    </div>
  )
}

export default AllProducts
