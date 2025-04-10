import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
    name: "page",
    title: "Page",
    type: "document",
    icon: DocumentIcon,
    groups: [{
        title: 'SEO',
        name: 'seo'
    },
    {
        title: 'Main',
        name: 'main',
        default: true
    }],
    fields: [
        defineField({
            title: "Seo",
            name: "seo",
            type: "seoMetaFields",
            group: "seo"
        }),
        defineField({
            name: "title",
            type: "string",
            group: "main"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
            group: "main"
        }),
        defineField({
            name: "content",
            type: "pageBuilder",
            group: "main"
        }),
        defineField({
            name: "mainImage",
            type: "image",
            options: {
                hotspot: true,
            },
            group: "main"
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "slug.current",
        },
    },
});