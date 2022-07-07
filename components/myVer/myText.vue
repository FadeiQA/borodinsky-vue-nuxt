<template>
  <component :is="withAnimation && to ? 'nuxt-link': 'p'" :to="to"  class="text" :class="{ 'text_hover': withAnimation }">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Text',
  props: {
    withAnimation: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ''
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
