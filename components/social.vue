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

.social {
  padding: 0;
  height: 43px;
  width: 43px;
  min-width: auto;
  background: url("/sprites.png") no-repeat, black;

  &:hover {
    background: url("/sprites.png") no-repeat, white;
  }

  &_vk {
    background-position: 9px -826px;
  }

  &_vk:hover {
    background-position: 9px -760px;
  }

  &_fb {
    background-position: 14px -549px;
  }

  &_fb:hover {
    background-position: 14px -476px;
  }

  &_instagram {
    background-position: 12px -690px;
  }

  &_instagram:hover {
    background-position: 12px -619px;
  }
}
</style>
