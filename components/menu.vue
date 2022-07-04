<template>
  <div>
  <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.menu {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 0 60px 0;
  font-size: 0;

  &__active {
    position: relative;
  }

  &__active:before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: white;
  height: 5px;
  }

  &__item {
  padding: 25px 20px;
  line-height: 20px;
  }

  &__right {
    margin-left: auto;
  }

  &__exit {
    display: flex;
    align-items: center;
  }

  &__exit:before {
    content: "";
    display: inline-block;
    height: 18px;
    width: 18px;
    background: url("/sprites.png") no-repeat 0 -211px;
    margin-right: 5px;
  }

  &__item:hover {
    background: #242424;
  }
}
</style>
