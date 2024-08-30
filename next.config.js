/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig

// next.config.js
// @ts-ignore
const withLess = require('next-with-less');

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        '@primary-color': '#1DA57A',
        '@layout-body-background': '#141414',
        '@component-background': '#141414',
        '@heading-color': '#fff',
        '@text-color': '#fff',
        '@text-color-secondary': 'fade(#fff, 85%)',
        '@border-color-base': '#444',
        '@background-color-light': '#333',
        '@item-hover-bg': '#1f1f1f',
        '@disabled-color': 'fade(#fff, 30%)',
        '@disabled-bg': '#444',
        '@input-placeholder-color': 'fade(#fff, 30%)',
        '@table-header-bg': '#1f1f1f',
        '@table-row-hover-bg': '#1f1f1f',
        '@table-selected-row-bg': '#333',
      },
      javascriptEnabled: true,
    },
  },
});





