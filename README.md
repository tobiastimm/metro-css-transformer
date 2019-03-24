# metro-css-transformer

> Experimental CSS transformer for metro

I'm trying to use [`metro`](https://facebook.github.io/metro/) as a web bundler and the first issues I have occurred were `css` files. This transformer is pretty hackish. Maybe there is a better way to load the css, but I was quite happy that it works 😄.

## Install

> I haven't released a npm package yet!

### With `npm`

```bash
npm install --save-dev metro-css-transformer
```

### With `yarn`

```
yarn add -D metro-css-transformer
```

## Usage

In your `metro.config.js` add

```js
 resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'css'],
    // other options ...
  },
  transformer: {
    babelTransformerPath: require.resolve('./lib/metro-css-transformer'),
    // other options ...
  },
```

## License

[MIT](./LICENSE)
