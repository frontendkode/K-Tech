
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/landing/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 28659, hash: '3a1720719c2c34541d1eb6edf49371ea50f9bad1be88c04c80f0ab3be26ea0e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17661, hash: '46acda5a91644798508c735721d793cc199e7ab9fe1b2f66eaa07566d627e64d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DS3LMSF.css': {size: 264623, hash: 'QV1dbhMS7C8', text: () => import('./assets-chunks/styles-7DS3LMSF_css.mjs').then(m => m.default)}
  },
};
