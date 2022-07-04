<template>
  <div>
    <h2>
      <slot></clot>
    </h2>
    <div>
      <slot></slot>
    </div>
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

.about {
  color: white;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 60px;

  &>* {
    flex-basis: 280px;
  }
}
</style>
