import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useMantineTheme } from '@mantine/core'

const CustomLink = ({ href, children, ...rest }) => {
    const router = useRouter();
    const theme = useMantineTheme();
  const query = useMemo(() => ({ ...router.query }), [router.query]);

  // Ensure href is a string or object
  // just to try amend commit
  if (typeof href === "string") {
    // Construct the final href with the appropriate prefix
    let finalHref = href.startsWith("#") ? href : `/${href}`;

    // Append query parameters to href
    finalHref += `${finalHref.includes("?") ? "&" : "?"}${new URLSearchParams({
      ...query,
      colorScheme: router.query.colorScheme,
    }).toString()}`;

    return (
      <NextLink
        href={finalHref}
        {...rest}>
        {children}
      </NextLink>
    );
  } else if (typeof href === "object") {
    // Ensure href has pathname
    if (!href.pathname) {
      throw new Error("Missing pathname in href object");
    }

    // Ensure href has query
    if (!href.query) {
      throw new Error("Missing query in href object");
    }

    // Append colorScheme to query object
    const finalQuery = {
      ...href.query,
      ...query,
      colorScheme: router.query.colorScheme,
    };

    // Construct the final href with the pathname and query parameters
    const finalHref = {
      ...href,
      query: finalQuery,
    };

    return (
      <NextLink
        href={finalHref}
        {...rest}>
        {children}
      </NextLink>
    );
  } else {
    throw new Error("Invalid href type");
  }
};


export default CustomLink;
