import { defineField, defineType } from "sanity";
import { Settings } from "lucide-react";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: Settings,
  fields: [
    defineField({
      name: "title",
      title: "Studio Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "heroVideoUrl",
      title: "Hero YouTube or Vimeo URL",
      type: "url"
    }),
    defineField({
      name: "heroPoster",
      title: "Hero Poster Image",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string"
        })
      ]
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "email"
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string"
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Use country code without plus sign."
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url"
    })
  ],
  preview: {
    select: {
      title: "title"
    }
  }
});
