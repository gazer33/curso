/** @type {import('next').NextConfig} */
const withPWA = require ('next-pwa');
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'api.escuelajs.co','picsum.photos','empresas.blogthinkbig.com','img.freepik.com'],
  },
});

module.exports = nextConfig