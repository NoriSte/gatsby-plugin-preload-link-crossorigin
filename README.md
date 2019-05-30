# gatsby-plugin-preload-link-crossorigin

Quickly add the `crossorigin` attribute to every `<link rel="preload">` tag to turn off the Lighthouse alert.

[![Build Status](https://travis-ci.com/NoriSte/gatsby-plugin-preload-link-crossorigin.svg?branch=master)](https://travis-ci.com/NoriSte/gatsby-plugin-preload-link-crossorigin)
[![Build Cron](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/gatsby-plugin-preload-link-crossorigin)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Open Source
Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Install

`npm install --save gatsby-plugin-preload-link-crossorigin`

## What this plugin does

It simply turn off the

> A preload <link> was found for "http://localhost:9000/component---src-pages-index-js-5338f8c9c4237b27607e.js" but was not used by the browser. Check that you are using the `crossorigin` attribute properly.

Lighthouse alert.

![The Lighthouse
alert](https://raw.githubusercontent.com/NoriSte/gatsby-plugin-preload-link-crossorigin/master/assets/lighthouse-alert.jpg)

**BE AWARE** that doesn't guarantee a higher Lighthouse score! It's up to you to analyze whether or not it
improves your site performance!

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  'gatsby-plugin-preload-link-crossorigin',
]
```

## Contributing

PR or issues are welcome 👋

#### Notes

- if you want to work on the plugin sources, remember that you need to `npm run build` on the root
  then, in every test project, you need to run `npm run plugin:link` to locally use it

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/NoriSte"><img src="https://avatars0.githubusercontent.com/u/173663?v=4" width="100px;" alt="Stefano Magni"/><br /><sub><b>Stefano Magni</b></sub></a><br /><a href="https://github.com/NoriSte/gatsby-plugin-preload-link-crossorigin/commits?author=NoriSte" title="Code">💻</a> <a href="https://github.com/NoriSte/gatsby-plugin-preload-link-crossorigin/commits?author=NoriSte" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
