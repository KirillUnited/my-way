import { defineQuery } from 'next-sanity';
export const serviceQuery = defineQuery(`*[_type == "service"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  description,
  price,
  duration,
  category->{
    name,
    "slug": slug.current
  }
}`);

export const serviceBySlugQuery = defineQuery(`*[_type == "service" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  description,
  price,
  duration,
  category->{
    name,
    "slug": slug.current
  }
}`);
