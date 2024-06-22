import { type OverrideProps } from '~lib/type-utils/override-props';
import type Resources from '~types/resources';

/**
 * The type for Metadata to help translate
 */
type MetadataTranslationKey = keyof Resources['metadata'];

/**
 * The props for the Author
 */
export type MetadataAuthor = {
  name?: string;
  url?: string;
};

/**
 * The props for the Icons
 */
export type MetadataIcons = {
  icon?: string;
  shortcut?: string;
  apple?: string;
};

/**
 * The props for the Seo component.
 */
export type Metadata = {
  authors?: MetadataAuthor[];
  description?: string;
  icons?: MetadataIcons;
  keywords?: string | string[];
  title?: string;
  url?: string;
};

/**
 * The props for the Metadata of route
 */
export type MetadataRoute = OverrideProps<
  Metadata,
  {
    description?: MetadataTranslationKey;
    title?: MetadataTranslationKey;
  }
>;
