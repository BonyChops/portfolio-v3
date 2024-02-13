import nextMdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import shiki from "shiki";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        /** @type {Partial<import("rehype-pretty-code").Options>} */
        ({
          theme: "github-light",
          getHighlighter: shiki.getHighlighter,
        }),
      ],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.simpleicons.org"],
    unoptimized: true,
  },
  output: "export",
};

export default withBundleAnalyzer(withMDX(nextConfig));
