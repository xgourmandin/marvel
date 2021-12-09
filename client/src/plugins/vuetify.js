import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#e23636",
        secondary: "#000000",
        accent: "#518cca",
        warning: "#f78f3f",
        error: "#e23636"
      }
    }
  }
});
