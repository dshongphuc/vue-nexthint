import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(() => {
  if(process.env.MODE === 'demo') {
    return {
      plugins: [vue()],
      root: "./demo",
    }
  }
  
  return {
    plugins: [vue()],
    resolve: {
      dedupe: [
        'vue'
      ]
    },
    build: {
      minify: true,
      lib: {
        entry: path.resolve(__dirname, "src/main.ts"),
        name: "VueTabComplete",
        fileName: format => `main.${format}.js`,
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ["vue"],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: "Vue",
          },
          // Use `index.css` for css
          assetFileNames: assetInfo => {
            if (assetInfo.name == "style.css") return "index.css"
            return assetInfo.name
          },
        },
      },
    },
  }
})
