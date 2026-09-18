import { resolve } from "node:path";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next/dev" : ".next/build",
  outputFileTracingRoot: resolve(__dirname, "../.."),
  outputFileTracingIncludes: {
    "/components/*": [
      "./src/app/*/components/*/example.tsx",
      "../../packages/earthling-ui/src/components/*/index.tsx",
      "../../packages/earthling-ui/dist/components/*/index.d.ts",
    ],
    "/llms.txt": ["../../packages/earthling-ui/llms.txt"],
  },
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});

export default withMDX(nextConfig);
