const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
