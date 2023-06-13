import { defineType, defineField } from "sanity"

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tag Title',
      type: 'string',
    }),

  ],
});
