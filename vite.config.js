import { defineConfig } from 'vite';

export default defineConfig({
  base: '%ВАШЕ ПРЕФИКС%',
  build: {
    cssCodeSplit: false,
  },
});
