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

.footer__row {
  display: flex;
  justify-content: space-between;
}

</style>
