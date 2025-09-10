import type { NextConfig } from "next";

const repoName = "numaeon";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Generate a static export for GitHub Pages
  output: "export",
  // Use path prefix only for GitHub Pages builds
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  // Expose base path to the client for constructing asset URLs
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
  // Disable image optimization in export mode
  images: { unoptimized: true },
};

export default nextConfig;
