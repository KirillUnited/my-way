import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import NextImage from "next/image";
import { components } from "@/sanity/portableTextComponents";

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

    if (!post) {
        notFound();
    }

    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            {post?.mainImage ? (
                <NextImage
                    className="w-full aspect-[800/300]"
                    src={urlFor(post.mainImage)
                        .width(800)
                        .height(300)
                        .quality(80)
                        .auto("format")
                        .url()}
                    alt={post?.mainImage?.alt || ""}
                    width="800"
                    height="300"
                />
            ) : null}
            <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
            <hr />
            {
                post?.body && (
                    <article className="prose dark:prose-invert">
                        <PortableText value={post?.body} components={components} />
                    </article>
                )
            }
            <Link href="/blog">&larr; Return to index</Link>
        </main>
    );
}