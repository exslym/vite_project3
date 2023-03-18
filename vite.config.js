import legacy from '@vitejs/plugin-legacy';
import Path from 'path';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import eslint from 'vite-plugin-eslint';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import pages from './src/pages/pages.config';

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|tiff|webp|svg|avif)$/i,
  exclude: undefined,
  include: undefined,
  excludePublic: ['./public/**/*'],
  includePublic: false, //* 3D-models in public with lossless quality
  logStats: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  png: {
    quality: 100,
    palette: true,
  },
  jpeg: {
    quality: 95,
  },
  jpg: {
    quality: 95,
  },
  tiff: {
    quality: 100,
  },
  gif: {},
  webp: {
    lossless: true,
  },
  avif: {
    lossless: true,
  },
};

const pagesInput = {};
pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});

export default defineConfig({
  root: Path.resolve(__dirname, './src'),
  base: './',
  publicDir: '../public',
  css: {
    devSourcemap: true,
  },
  build: {
    emptyOutDir: true,
    outDir: Path.resolve(__dirname, './build'),
    rollupOptions: {
      input: {
        ...pagesInput,
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
      },
    },
  },
  plugins: [
    eslint(),
    ViteImageOptimizer({
      DEFAULT_OPTIONS,
    }),
    ViteAliases(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true,
  },
});
