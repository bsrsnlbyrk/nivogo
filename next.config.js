/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/partnerlerimiz",
        destination: "/partners",
      },
      {
        source: "/partnerlerimiz/:path",
        destination: "/partners-detail",
      },
      {
        source: "/hakkimizda",
        destination: "/about",
      },
      {
        source: "/nasil-calisir",
        destination: "/how-it-works",
      },
      {
        source: "/bize-ulasin",
        destination: "/contact",
      },
      {
        source: "/giris",
        destination: "/auth",
      },
      {
        source: "/hesap-olustur",
        destination: "/auth",
      },
    ];
  },
};

module.exports = nextConfig;
