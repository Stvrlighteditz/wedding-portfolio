import { defineField, defineType } from "sanity";
import { PlayCircle } from "lucide-react";

import { portfolioCategories } from "../../constants/site";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: PlayCircle,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (rule) => rule.required().max(120)
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "coupleName",
      title: "Couple Name",
      type: "string",
      validation: (rule) => rule.required().max(120)
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: portfolioCategories.map((category) => ({
          title: category,
          value: category
        })),
        layout: "dropdown"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
      options: {
        dateFormat: "DD MMMM YYYY"
      }
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string"
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required()
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "videoUrl",
      title: "YouTube or Vimeo Video URL",
      type: "url",
      validation: (rule) =>
        rule
          .required()
          .uri({
            scheme: ["http", "https"]
          })
          .custom((value) => {
            if (!value) return true;
            return /youtu\.?be|vimeo\.com/.test(value)
              ? true
              : "Use a YouTube or Vimeo URL.";
          })
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220)
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 6
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first."
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail"
    }
  }
});
