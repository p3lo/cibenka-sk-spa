import { flatRoutes } from 'remix-flat-routes';
/** @type {import('@remix-run/dev/dist/vite/plugin').RemixVitePluginOptions} */
export default {
  ignoredRouteFiles: ['**/*'],
  serverModuleFormat: 'esm',
  unstable_ssr: false,
  tailwind: true,
  postcss: true,
  routes: async (defineRoutes) => {
    return flatRoutes('routes', defineRoutes, {
      ignoredRouteFiles: ['**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
    });
  },
};
