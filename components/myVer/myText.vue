<template>
  <p class="text" :class="{ 'text_hover': withAnimation }">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'Text',
  props: {
    withAnimation: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.text {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: inherit;

  &_hover {
    text-decoration: underline;
  }

  &_hover:hover {
    text-decoration: none;
  }
}
</style>
