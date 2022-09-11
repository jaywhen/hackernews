/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
	runtimeCaching,
})

const nextConfig = withPWA({
  reactStrictMode: true,
})

module.exports = nextConfig
