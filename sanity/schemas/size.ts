import { defineType, defineField } from "sanity"

export const size = defineType({
  name: 'size',
  title: 'Size',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Size Title',
      type: 'string',
    }),

  ],
});
