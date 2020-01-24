<template>
  <div>
    <p>{{ item.text }}</p>
    <p @click=" toggle = !toggle">Details</p>
    <p v-if="toggle">{{ item.checked }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
    props: ['item'],
  data: function () {
    return {
      toggle: false
      }
  }
  }
</script>


<style></style>