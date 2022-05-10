/** @type {import('next').NextConfig} */
// TODO: Test if next transpile module causing performance issues (example affecting page loading time)
const withTM = require('next-transpile-modules')(['@uiball/loaders']);

module.exports = withTM({
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    domains: ['65.108.153.196'],
  },
});
