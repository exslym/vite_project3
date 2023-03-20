### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Production Version

```
npm run build
```

### Preview Build Production Version

```
npm serve
```

### Deployment on GitHub Pages (Optional)

```
npm run deploy
```

This adds gh-pages branch to your project github repository, deploys built project there, hosts the site via GitHub Pages.

### Features:

- `Legacy Browsers` support via **@vite/plugin-legacy** with built-in **babel**
- `SCSS` support via **sass**
- `Linting` support via **eslint**
- `Formatter` support via **prettier**
- `Autoprefix` support via **postcss**
- `Image Optimization` support via **image-minimizer-webpack-plugin** & **svgo**

### When you run `npm run build`:

- All image files (svg, png, jpg/jpeg, webp) gets compressed with lossless quality
  <br />via [image-minimizer-webpack-plugin](https://github.com/webpack-contrib/image-minimizer-webpack-plugin).

Place all external connected files (jQuery and others) in ./tools and provide them path in html file.
