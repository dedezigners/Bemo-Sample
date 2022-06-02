import Vue from 'vue';
import App from './componenets/App';


require('./bootstrap');

new Vue({
    el: '#app',
    template: '<app/>',
    components: { App }
});