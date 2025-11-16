
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/landing/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 28659, hash: '99e32d29f68e53235d27a464c56cdd18effc5e9833199978f8c90f75cdc1ae5a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17661, hash: '13ffbf69fe7662202cccbdc97a06fb571bd8949e05412a1d7c5629e1f70cb0e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DS3LMSF.css': {size: 264623, hash: 'QV1dbhMS7C8', text: () => import('./assets-chunks/styles-7DS3LMSF_css.mjs').then(m => m.default)}
  },
};
