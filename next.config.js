/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["sr", "en"],
        defaultLocale: "en"
    },
    images: {
        domains: ["imgur.com", "i.imgur.com"]
    }
}

module.exports = nextConfig
