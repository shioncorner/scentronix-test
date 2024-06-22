import NextLink from 'next/link';
import { type ComponentProps, memo, useMemo } from 'react';

import { type OverrideProps } from '~lib/type-utils/override-props';
import { cn } from '~lib/utils/cn';
import { isAbsoluteHref, isLocaleHref } from '~lib/utils/href';
import { localizeRelativeUrl } from '~lib/utils/url';
import type { Language } from '~types/language';

type NextLinkProps = ComponentProps<typeof NextLink>;

/**
 * The props for the Link component.
 */
type LinkProps = OverrideProps<
  NextLinkProps,
  {
    disabled?: boolean;
    href: string;
    locale: Language;
  }
>;

/**
 *
 * A custom implementation of the Next.js Link component. This component
 * sets the scroll prop to true by default, which will scroll the page to
 * the top when the route changes. This is the desired behavior for most
 * links on the site.
 *
 * Implemented the locally, memoized `url` property, this prevents stale cache
 * data when using the Link component with dynamic segments by ensuring that
 * the locale is set for the url.
 *
 * Furthermore the `I18nMiddleware` was optimized so that URL's that already contain
 * a locale are not checked by the rest of the middleware.
 *
 * @param disabled - Whether the link is disabled. Default is false.
 * @param href - The URL to link to.
 * @param locale - The locale to use for localization.
 * @param scroll - Whether to scroll to the top of the page when the route changes. Default is true.
 * @param otherLinkProps - Any additional props to pass to the Next.js Link component.
 * @returns - The rendered Link component.
 */
export const Link = memo(function Link({
  className,
  disabled = false,
  href,
  locale,
  scroll = true,
  ...otherLinkProps
}: LinkProps) {
  const url = useMemo(() => {
    if (isAbsoluteHref(href)) {
      return href;
    }

    if (isLocaleHref(href, locale)) {
      return href;
    }

    return localizeRelativeUrl(href, locale);
  }, [locale, href]);

  return (
    <NextLink
      aria-disabled={disabled}
      className={cn(className, 'text-sm font-medium', {
        'pointer-events-none opacity-50': disabled,
      })}
      href={url}
      locale={locale}
      scroll={scroll}
      tabIndex={disabled ? -1 : undefined}
      {...otherLinkProps}
    />
  );
});
