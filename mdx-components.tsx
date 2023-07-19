import { CustomLink } from "@/Components/CustomLink";
import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-12 mb-6">{children}</h2>
    ),
    pre: ({ children }) => (
      <pre className="my-6 p-4 rounded-md bg-gray-800 text-white text-sm overflow-x-auto">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="text-sm font-mono bg-gray-800 text-white px-2 mx-1 py-1 rounded-md">
        {children}
      </code>
    ),
    ul: ({ children }) => (
      <ul className="list-disc" style={{ paddingLeft: "revert" }}>
        {children}
      </ul>
    ),
    a: ({ children, ...props }) => (
      <a
        className="text-blue-500 hover:text-blue-700 transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    // a: ({ children, ...props }) => (
    //   <CustomLink {...props}>{children}</CustomLink>
    // ),
    ...components,
  };
}
