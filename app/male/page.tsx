import { client } from "@/lib/sanity/sanityClient";
import Product from "@/components/product/Product";

const getProductsData = async () => {
  return await client.fetch(`*[_type=='product' && category->title=='Male']{
    _id,
    title,
    description,
    price,
    images,
    category->{title}
    }`
  );
}

interface ICategory {
  title: string
}
interface IProduct {
  _id: string,
  title: string,
  description: string,
  price: number,
  images: string[],
  category: ICategory
}

const MaleProducts = async () => {
  const data: IProduct[] = await getProductsData();
  // console.log(data);

  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-10">
      {data.map((item: IProduct) =>
        (
          <div key={item._id}>
            <Product item={item} />
          </div>
        )
      )}
    </div>
  )
}

export default MaleProducts
