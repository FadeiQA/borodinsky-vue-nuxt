<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.form__row {
  display: flex;
  gap: 20px;
}
</style>
