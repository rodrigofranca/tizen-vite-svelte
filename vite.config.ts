import { defineConfig } from 'vite';
import * as path from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [svelte()],
    build:
      mode === 'production'
        ? {
            target: ['chrome58'],
            manifest: true,
            lib: {
              // Could also be a dictionary or array of multiple entry points
              entry: path.resolve(__dirname, 'src/main.ts'),
              name: 'TizenSvelteApp',
              formats: ['iife'],
              // the proper extensions will be added
              fileName: 'tizen-svelte-app'
            }
          }
        : {}
  };
  // }
  // if (mode === 'development') {
  //   return {
  //     plugins: [
  //       svelte({
  //         emitCss: false,
  //         exclude: ['./src/export/**/*.svelte']
  //       })
  //       // svg(),
  //       // mkcert(),
  //     ],
  //     server: {
  //       host: 'dev.rfranca.com.br',
  //       port: 443,
  //       https: true
  //     },
  //     resolve: {
  //       alias: {
  //         $: path.resolve('./src')
  //       }
  //     }
  //   };
  // }
  // return {};
});
