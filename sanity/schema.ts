import { type SchemaTypeDefinition } from 'sanity'
import { product } from "./schemas/product";
import { category } from './schemas/category';
import { tag } from './schemas/tag';
import { size } from './schemas/size';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, tag, size],
}
