const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [{
            source: '/:path*',
            headers: [
                {key:'referrer-policy', value: 'no-referrer'}
            ]
        }]
    }
}

module.exports = withSentryConfig(nextConfig, {
  org: "myself-o6x",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  tunnelRoute: "/monitoring",
});
