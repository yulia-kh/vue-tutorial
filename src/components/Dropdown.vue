<template>
  <select name="dropdown" id="dropdown" v-model="selectedOption" v-on:change="optionChanged">
    <option value="0">Option 1</option>
    <option value="1">Option 2</option>
    <option value="2">Option 3</option>
  </select>
</template>

<script>
export default {
  name: 'Dropdown',

  data: function () {
    return {
      selectedOption: null,
      }
  },

  methods: {
    optionChanged: function (value) {
      this.$emit('update:option', this.selectedOption);
    }
  }
}
</script>