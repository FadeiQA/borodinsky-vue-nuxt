<template>
  <div>
    <slot>

    </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.board {
  padding: 50px 40px;
  display: flex;
  justify-content: space-between;
  background: url("/column-delimiter.png") no-repeat center, url("/content-background.jpg"), white;
}

</style>

