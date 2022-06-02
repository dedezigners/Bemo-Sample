import Vue from 'vue';
import App from './componenets/App';
import VModal from 'vue-js-modal';

require('./bootstrap');
Vue.use(VModal);

new Vue({
    el: '#app',
    template: '<app/>',
    components: { App }
});