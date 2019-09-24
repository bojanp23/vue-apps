<template>
  <button class="btn" @click="action">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'calc-btn',
  props: {
    action: {
      type: Function
    }
  },
  data: () => ({

  })
}
</script>

<style>
  .btn {
    padding: 25px;
    font-size: 22px;
    line-height: 1;

    background: #E5E5E5;
    border: 1px solid #000;

    outline: none;
  }
</style>
