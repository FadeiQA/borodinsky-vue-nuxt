<template>
  <div class="cube" />
</template>

<script>
export default {
  name: 'Cube'
}
</script>

<style scoped lang="scss">
.cube {
  display: inline-block;
  align-items: center;
  height: 20px;
  width: 20px;
  background: white;
  transform: rotate(45deg);
  margin: 30px 0;
}
</style>
