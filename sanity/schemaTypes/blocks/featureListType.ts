import { StarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const featureListType = defineType({
    name: "featureList",
    type: "object",
    icon: StarIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "features",
            type: "array",
            of: [
                defineField({
                    name: "feature",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            type: "string",
                        }),
                        defineField({
                            name: "text",
                            type: "string",
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
      select: {
        title: "title",
      },
      prepare({ title }) {
        return {
          title,
          subtitle: "Features",
        };
      },
    },
});