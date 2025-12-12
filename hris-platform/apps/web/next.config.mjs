import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@hris/ui', '@hris/types', '@hris/utils'],
  experimental: {
    turbo: {
      resolveAlias: {
        '@hris/ui': '../../packages/ui/src',
        '@hris/types': '../../packages/types/src',
        '@hris/utils': '../../packages/utils/src',
      },
    },
  },
};

export default withNextIntl(nextConfig);
