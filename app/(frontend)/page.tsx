import { HOME_PAGE_QUERY } from '@/sanity/lib/queries';
import { PageBuilder } from '@/components/PageBuilder';
import { sanityFetch } from '@/sanity/lib/live';

export default async function Home() {
  const { data: page } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  return page?.homePage?.content ? (
    <PageBuilder content={page?.homePage?.content as any} />
  ) : null;
}
