import { Image } from "sanity";

export default  interface IOrderItem {
    id: string,
    name: string,
    description: string,
    image: Image,
    category: string,
    tag: string,
    quantity: number,
    price: number
}