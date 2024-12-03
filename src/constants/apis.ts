export const apiPaths = {
  auth: {
    login: '/login',
    register: '/member',
  },
  presentation: {
    slides: '/store',
    createOutlines: '/slide-outline',
    slide: '/slides',
    create: '/slides',
    update: '/slides',
    script: '/script',
  },
  contact: {
    sendMessage: '/contact',
  },
} as const;
