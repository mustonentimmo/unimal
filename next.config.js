/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@uiball/loaders']);

module.exports = withTM({
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST,
  },
});
