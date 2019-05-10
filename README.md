# gatsby-preload-link-crossorigin
Quickly add the `crossorigin` attribute to every `<link rel="preload">` tag to turn off the Lighthouse alert.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.com/NoriSte/gatsby-preload-link-crossorigin.svg?branch=master)](https://travis-ci.com/NoriSte/gatsby-preload-link-crossorigin)
[![Open Source
Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Install

`npm install --save gatsby-preload-link-crossorigin`

## What this plugin does

It simply turn off the

> A preload <link> was found for "http://localhost:9000/component---src-pages-index-js-5338f8c9c4237b27607e.js" but was not used by the browser. Check that you are using the `crossorigin` attribute properly.

Lighthouse alert.

![The Lighthouse alert](https://raw.githubusercontent.com/NoriSte/gatsby-preload-link-crossorigin/master/assets/lighthouse-alert.jpg)

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  'gatsby-preload-link-crossorigin',
]
```

## Contributing

PR or issues are welcome 👋

#### Notes

- if you want to work on the plugin sources, remember that you need to `npm run build` on the root
  then, in every test project, you need to run `npm run plugin:link` to locally use it
