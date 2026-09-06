import createMDX from '@next/mdx';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  trailingSlash: true,
  // Старые адреса с GitHub Pages жили под /rotshield-site/ — ссылки на них
  // уже разошлись, пусть ведут на те же страницы.
  redirects: async () => [
    { source: '/rotshield-site/:path*', destination: '/:path*', permanent: true },
  ],
};

export default withMDX(nextConfig);
