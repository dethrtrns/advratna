import { useMemo } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const CustomLink = ({ href, children, ...rest }) => {
  const router = useRouter();
  const query = useMemo(() => ({ ...router.query }), [router.query]);

  if (typeof href === "string") {
    const finalHref =
      href.startsWith("#") || href.startsWith("/") ? href : `/${href}`;

    return (
      <NextLink
        href={{
          pathname: finalHref,
          query: { ...query, colorScheme: router.query.colorScheme || "light" },
        }}
        {...rest}>
        {children}
      </NextLink>
    );
  } else if (typeof href === "object") {
    if (!href.pathname) {
      throw new Error("Missing pathname in href object");
    }

    const finalQuery = {
      ...href.query,
      ...query,
      colorScheme: router.query.colorScheme || "light",
    };

    return (
      <NextLink
        href={{ ...href, query: finalQuery }}
        {...rest}>
        {children}
      </NextLink>
    );
  } else {
    throw new Error("Invalid href type");
  }
};

export default CustomLink;
