<template>
  <div class="calculator-display">
      {{ display }}
  </div>
</template>

<script>
export default {
  name: 'calc-display',
  props: {
    display: {
      type: [String, Number]
    }
  },
  data: () => ({

  })
}
</script>

<style>
.calculator-display {
    grid-column: 1/5;
    padding: 15px 25px;

    font-size: 32px;
    text-align: right;

    color: #fff;

    background: #424242;
    border: 1px solid #000;
}
</style>
