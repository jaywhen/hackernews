/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
	runtimeCaching,
})

const nextConfig = withPWA({
  reactStrictMode: true,
})

module.exports = nextConfig
