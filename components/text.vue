<template>
  <div>
  <p>
    <slot></slot>
  </p>
  </div>
</template>

<script>
export default {

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
