import { defineConfig } from "vite";
// import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  // plugins: [
  //   legacy({
  //     targets: ['defaults', 'not IE 11']
  //   })
  // ],

  build: {
    // cssCodeSplit: false,
    rollupOptions: {
      input: "/src/client/main.js",
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  
});
