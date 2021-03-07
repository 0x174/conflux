import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#1F7087',
                secondary: '#66023C',
                tertiary: '#E09F3E',
                accent: '#32292F',
                error: '#b71c1c',
            },
            light: {
                primary: '#1F7087',
                secondary: '#66023C',
                tertiary: '#E09F3E',
                accent: '#32292F',
                error: '#b71c1c',
            },
        },
    },
})