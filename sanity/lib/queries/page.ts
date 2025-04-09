import { defineQuery } from "next-sanity";

export const PAGE_QUERY = defineQuery(`*[_type == "page" && slug.current == $slug][0] {
  content[] {
    _type == "faqList" => @,
    _type == "featureList" => @,
    _type == "hero" => @,
    _type == "splitImage" => @
  }
}`);
export const SECTION_FIELDS = `
    title,
    description,
    isActive,
    link,
    subtitle
`;
export const HOME_PAGE_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  homePage->{
    content[] {      
      _type == "hero" => @,
      _type == "splitImage" => @,
      _type == "featureList" => @,
      _type == "faqList" => {
        _key,
        _type,
        ${SECTION_FIELDS},
        faqs[]->,
      },
    }
  }
}`);
