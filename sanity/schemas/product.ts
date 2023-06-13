import { defineType, defineField } from "sanity"

export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Product Slug',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'text',
    },
    {
      name: 'care',
      title: 'Product Care',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Product Price',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ name: 'image', title: 'Image', type: 'image' }],
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'tag',
      title: 'Product Tag',
      type: 'reference',
      to: [{ type: 'tag' }],
    },
    {
      name: 'sizes',
      title: 'Product Sizes',
      type: 'array',
      of: [{
        name: 'size',
        title: 'Product Size',
        type: 'reference',
        to: [{ type: 'size' }],
      }],
    },
  ],
}
