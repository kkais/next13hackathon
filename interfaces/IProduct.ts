import ICategory from "./ICategory";
import ITag from "./ITag";
import ISize from "./ISize";

export default interface IProduct {
  _id: string,
  title: string,
  slug: string,
  description: string,
  care: string,
  price: number,
  images: any[],
  category: ICategory,
  tag: ITag,
  sizes: ISize[],
}
