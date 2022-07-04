<template>
  <div>
    <h2>
      <slot></slot>
    </h2>
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
export default {}
</script>

<style scoped lang="scss">

.board__col {
  flex: 1;
  padding: 0 40px;
  display: flex;
  flex-direction: column;

  &__right {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: auto;
    flex-grow: 1;
  }

  &__footer {
    margin-top: auto;
  }

  &__footer_gallery {
    display: flex;
    justify-content: space-between;
  }
}

</style>
