import legacy from '@vitejs/plugin-legacy';
import Path, { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import pages from './src/pages/pages.config';

const pagesInput = {};

pages.forEach(page => {
	pagesInput[page.name] = page.path;
});

export default defineConfig({
	// root: Path.resolve(__dirname, './src'),
	root: './src',
	base: './',
	publicDir: '../public',
	// publicDir: false,
	build: {
		emptyOutDir: true,
		// outDir: Path.resolve(__dirname, './build'),
		outDir: '../build',
		rollupOptions: {
			input: {
				...pagesInput,
			},
			output: {
				assetFileNames: assetInfo => {
					let info = assetInfo.name.split('.');
					let extType = info[info.length - 1];
					if (/png|jpe?g|svg|gif|tiff|bmp|webp|ico/i.test(extType)) {
						extType = 'assets/images';
					} else if (/eot|otf|ttf|woff|woff2/.test(extType)) {
						extType = 'assets/fonts';
					} else if (/css|scss|sass/.test(extType)) {
						extType = 'css';
					} else if (/xls|doc|pdf/.test(extType)) {
						extType = 'assets/docs';
					} else if (/js/.test(extType)) {
						extType = 'tools';
					}
					return `${extType}/[name]-[hash][extname]`;
				},
				entryFileNames: 'js/[name]-[hash].js',
				chunkFileNames: 'js/[name]-[hash].js',
			},
			// output: {
			// 	assetFileNames: ({ name }) => {
			// 		if (/\.(gif|jpe?g|tiff|bmp|ico|png|svg)$/.test(name ?? '')) {
			// 			return 'assets/images/[name]-[hash][extname]';
			// 		}
			// 		if (/\.(eot|otf|ttf|fnt|woff|woff2)$/.test(name ?? '')) {
			// 			return 'assets/fonts/[name]-[hash][extname]';
			// 		}
			// 		if (/\.(pdf|doc|docx|xls|xlsx)$/.test(name ?? '')) {
			// 			return 'assets/docs/[name]-[hash][extname]';
			// 		}
			// 		if (/\.css$/.test(name ?? '')) {
			// 			return 'assets/css/[name]-[hash][extname]';
			// 		}
			// 		if (/\js$/.test(name ?? '')) {
			// 			return 'assets/tools/[name]-[hash][extname]';
			// 		}
			// 		return 'assets/[name]-[hash][extname]';
			// 	},
			// 	chunkFileNames: 'js/[name]-[hash].js',
			// 	entryFileNames: 'js/[name]-[hash].js',
			// },
			// output: {
			// 	assetFileNames: assetInfo => {
			// 		let info = assetInfo.name.split('.');
			// 		let extType = info[info.length - 1];
			// 		let assetName = info[info.length - 2];
			// 		let pathName = '';
			// 		if (extType === 'ico' || 'jpg' || 'jpeg' || 'png' || 'gif' || 'webp' || 'tiff' || 'svg') {
			// 			// return 'assets/images/[name]-[hash][extname]';
			// 			pathName = 'images';
			// 			return `${pathName}/[name]-[hash][extname]`;
			// 		} else if (extType === 'eot' || 'otf' || 'fnt' || 'ttf' || 'woff' || 'woff2') {
			// 			// return 'assets/fonts/[name]-[hash][extname]';
			// 			pathName = 'fonts';
			// 			return `${pathName}/${assetName}-[hash][extname]`;
			// 		} else if (
			// 			extType === 'mp4' ||
			// 			'mp3' ||
			// 			'ogg' ||
			// 			'wav' ||
			// 			'pdf' ||
			// 			'doc' ||
			// 			'xls' ||
			// 			'docx' ||
			// 			'xlsx'
			// 		) {
			// 			// return 'assets/docs/[name]-[hash][extname]';
			// 			pathName = 'docs';
			// 			return `${pathName}/[name]-[hash][extname]`;
			// 		} else if (extType === 'css') {
			// 			// return 'assets/css/[name]-[hash][extname]';
			// 			pathName = 'css';
			// 			return `${pathName}/[name]-[hash][extname]`;
			// 		} else if (extType === 'js') {
			// 			// return 'assets/tools/[name]-[hash][extname]';
			// 			pathName = 'tools';
			// 			return `${pathName}/[name]-[hash][extname]`;
			// 		}
			// 		// return 'assets/[name]-[hash][extname]';
			// 		return `${pathName}/[name]-[hash][extname]`;
			// 	},
			// 	chunkFileNames: 'js/[name]-[hash].js',
			// 	entryFileNames: 'js/[name]-[hash].js',
			// },
		},
	},
	server: {
		port: 3000,
		host: '0.0.0.0',
		hmr: true,
	},
	plugins: [
		ViteAliases(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
});
