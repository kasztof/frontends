import type { Schemas } from "#shopware";
import { CustomFields } from "../../common/CustomField";
import { CmsPage } from "../cms/CmsPage";
import { SeoUrl } from "../navigation/Navigation";

/**
 * @deprecated use {@link Schemas['LandingPage']} from "#shopware" import instead
 */
export type LandingPage = Schemas["LandingPage"];
// export type LandingPage = {
//   active: boolean;
//   translations: null | unknown;
//   cmsPage: null | CmsPage;
//   cmsPageId: string;
//   name: string;
//   metaTitle: null | string;
//   metaDescription: null | string;
//   keywords: null | string;
//   url: string;
//   slotConfig: null | unknown[];
//   seoUrls: null | SeoUrl[];
//   _uniqueIdentifier: string;
//   versionId: string;
//   translated: {
//     name: string;
//     metaTitle: string | null;
//     metaDescription: string | null;
//     keywords: string | null;
//     url: string;
//   };
//   createdAt: string;
//   updatedAt: Date | string | null;
//   extensions: unknown;
//   id: string;
//   customFields: CustomFields;
//   cmsPageVersionId: string;
//   apiAlias: "landing_page";
// };
