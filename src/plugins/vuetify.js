import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E87722',
        secondary: '#C25608',
        accent: '#F2B411',
        error: '#E32315',
        header: '#FFFFFF',
        textcolor: '#63666A',
        textlink: '#005187',
        success: '#627D32',
        fade:'#f5f5f5'
      }

    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
