import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import siteSettingsType from './siteSettingsType'
import { serviceType } from './serviceType'
import { serviceListType } from './blocks/serviceListType';
import { servicePackageType } from './servicePackageType';
import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { faqType } from "./faqType";
import { faqListType } from "./blocks/faqListType";
import { featureListType } from "./blocks/featureListType";
import { heroType } from "./blocks/heroType";
import { splitImageType } from "./blocks/splitImageType";
import { servicePackageListType } from './blocks/servicePackageListType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [    
    blockContentType, 
    categoryType, 
    postType, 
    authorType, 
    siteSettingsType, 
    serviceType,
    serviceListType,
    servicePackageType,
    servicePackageListType,
    pageType,
    pageBuilderType,
    faqType,
    faqListType,
    featureListType,
    heroType,
    splitImageType
  ],
}
