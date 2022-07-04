<template>
  <div>
    <p>
      <slot></slot>
    </p>
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

.news {
  padding-bottom: 20px;

  &__date {
    text-transform: none;
    font-weight: 400;
  }
}
</style>
