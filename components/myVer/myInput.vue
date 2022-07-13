<template>
      <input @input="handleInput" :value="value" class="input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
  name: "myInput",
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods :{
    handleInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  border: 2px solid black;
  background: transparent;
  flex: 1;
  box-sizing: border-box;
  padding: 10px 15px;
  width: 0;
}
</style>
