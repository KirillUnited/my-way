import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
    name: "pageBuilder",
    type: "array",
    of: [
        defineArrayMember({ type: "hero" }),
        defineArrayMember({ type: "serviceList" }),
        defineArrayMember({ type: "servicePackageList" }),
        defineArrayMember({ type: "splitImage" }),
        defineArrayMember({ type: "featureList" }),
        defineArrayMember({ type: "faqList" }),
    ],
    options: {
        insertMenu: {
            views: [
                {
                    name: "grid",
                    previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`,
                },
            ],
        },
    },
});