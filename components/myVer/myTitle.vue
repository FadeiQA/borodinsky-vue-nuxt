<template>
  <h2 class="title"><slot /></h2>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style scoped lang="scss">
.title {
  margin: 0;
  padding: 0;
  font-size: 30px;
  line-height: 42px;
}
</style>
