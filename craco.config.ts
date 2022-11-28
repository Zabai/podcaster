import path from "path";

export default {
  webpack: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/features": path.resolve(__dirname, "src/features"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
