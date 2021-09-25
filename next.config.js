module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },

    // reactStrictMode: true,
    images: {
        domains: ["images.unsplash.com", "previews.123rf.com", "i.imgur.com"],
    },
};
