import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/lib/locale/ru';
import { DEFAULT_LOCALE } from '@/helpers/params';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru },
    current: DEFAULT_LOCALE,
  },
  theme: {
    themes: {
      light: {
        primary: '#6200ea', // deep-purple accent-4
      },
    },
  },
});
