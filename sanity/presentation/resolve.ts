import {
    defineLocations,
    PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
    locations: {
        // ...other locations
        post: defineLocations({
            select: {
                title: 'title',
                slug: 'slug.current',
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || 'Untitled',
                        href: `/blog/${doc?.slug}`,
                    },
                    { title: 'Posts index', href: `/blog` },
                ],
            }),
        }),
        page: defineLocations({
            select: {
                title: "title",
                slug: "slug.current",
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || "Untitled",
                        href: `/${doc?.slug}`,
                    },
                ],
            }),
        }),
    },
};