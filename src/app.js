import Vue from 'vue';
import Accordion from './components/Accordion.vue';

new Vue({
  el: '#app',
  data: {
    item: '',
    items: [
      {text:'item1', checked: true, id: 1}, 
      {text:'item2', checked: false, id: 2},
      {text: 'item3', checked: true, id: 3}],
    hidden: false,
    price: 100,
  },
  components: {
    Accordion,
  },
  computed: {
    tax: function () {
      return this.price * 0.1;
    },
    total: function () {
      return parseInt(this.price) + parseInt(this.tax);
    },
  },
  methods: {
    moneyFormat: function (price) {
      return '$' + price;
    }
  }

});