import Vue from 'vue';
import Accordion from './components/Accordion.vue';
import List from './components/List.vue';

new Vue({
  el: '#app',

  components: {
    Accordion,
    List
  },

  data: {
    items: [
      {text:'item1', checked: true, id: 1}, 
      {text:'item2', checked: false, id: 2},
      {text: 'item3', checked: true, id: 3}
    ]
  }

});