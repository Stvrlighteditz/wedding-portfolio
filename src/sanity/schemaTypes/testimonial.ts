import { defineField, defineType } from "sanity";
import { MessageSquareQuote } from "lucide-react";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: MessageSquareQuote,
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required().max(100)
    }),
    defineField({
      name: "role",
      title: "Role or Wedding",
      type: "string"
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required().max(500)
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5)
    }),
    defineField({
      name: "project",
      title: "Related Project",
      type: "reference",
      to: [{ type: "project" }]
    })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role"
    }
  }
});
