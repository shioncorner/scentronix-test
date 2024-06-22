import { type OverrideProps } from '~lib/type-utils/override-props';
import type { MetadataAuthor, MetadataRoute } from '~types/metadata';

/**
 * The props for the site config.
 */
export type SiteConfigProps = OverrideProps<
  MetadataRoute,
  {
    author: MetadataAuthor;
  }
> & {
  ogType: 'article' | 'book' | 'profile' | 'website';
};
