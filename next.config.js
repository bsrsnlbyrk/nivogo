/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

module.exports = nextConfig;
