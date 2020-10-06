import styledComponentsConfig from '@irvingjs/styled';

const config = {
  name: 'irving-dev-app',
  packages: [
    styledComponentsConfig,
  ],
  getAppTemplateVars: {
    head: {
      link: () => `
      <link rel='stylesheet' id='atomic-blocks-fontawesome-css'  href='https://alley-demo.go-vip.net/cars/wp-content/plugins/atomic-blocks/dist/assets/fontawesome/css/all.css?ver=1600912082' type='text/css' media='all' />
      <link rel='stylesheet' id='atomic-blocks-style-css-css'  href='https://alley-demo.go-vip.net/cars/wp-content/plugins/atomic-blocks/dist/blocks.style.build.css?ver=1600912082' type='text/css' media='all' />
      <link rel='stylesheet' id='all-css-4' href='https://alley-demo.go-vip.net/cars/wp-content/mu-plugins/jetpack-8.9/modules/contact-form/css/grunion.css?m=1601576440g' type='text/css' media='all' />
      `, /* eslint-disable-line max-len */
    },
  },
};

export default config;
