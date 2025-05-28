module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'https://newbackend-iyol.onrender.com'],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://newbackend-iyol.onrender.com',
            // process.env.NEXT_PUBLIC_STRAPI_URL
          ],
        },
      },
    },
  },
  {
    name: 'strapi::body',
    config: {
      formLimit: '20mb',
      jsonLimit: '20mb',
      textLimit: '20mb',
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
