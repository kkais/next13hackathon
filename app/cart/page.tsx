import Cart from "@/components/cart/Cart"
import IOrderItem from "@/interfaces/IOrderItem";
import IProduct from "@/interfaces/IProduct";
import { client } from "@/lib/sanity/sanityClient";
import { live_url } from "@/utils";
import { cookies} from "next/headers";

const getCartItems =async () => {
  const host =  
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : live_url;

  const cookieStore = cookies();
  const user_id = cookieStore.get("user_id")?.value as string;
  const url = `${host}/api/cart?user_id=${user_id}`; 
  let orderItems: IOrderItem[] = [];
    
  try {
    const response = await fetch(url, {method: 'GET'});
    const result = await response.json();
    //console.log("cartItems:", result);

    for (let index = 0; index < result.length; index++) {
      let orderItem: IOrderItem;
      
      let products: IProduct[] = await client.fetch(`*[_type=='product' && _id=='${result[index].product_id}']{
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
      
      // console.log("product:", product);
      const product: IProduct = products['0'];
  
      orderItem = { 
        id: product._id,
        name: product.title, 
        description: product.description,
        image: product.images[0], 
        category: product.category.title,
        tag: product.tag.title,
        quantity: result[index].quantity,
        price: product.price
      }
      // console.log("orderItem:", orderItem);
      orderItems.push(orderItem)
    }
    
  } catch (error) {
    console.log(error);
  }
  
  // console.log("orderItems", orderItems);  
  return orderItems;
  
}

const MyCart = async () => {
  const cartItems: IOrderItem[] = await getCartItems();
  return (
    <Cart products={cartItems} />
  )
}

export default MyCart
