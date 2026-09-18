import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  sassOptions: {
    // Automatically injects this line at the top of every compiled Sass file
    additionalData: `@use "@/app/styles/variables.scss" as *;`,
  },
};

export default nextConfig;
