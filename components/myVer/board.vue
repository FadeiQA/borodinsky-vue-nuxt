<template>
  <section class="board">
    <div class="board__col">
      <my-title class="margin_lg">{{ titles.left }}</my-title>
      <slot name="content-left" />
      <div class="board__footer">
        <slot name="footer-left" />
      </div>
    </div>

    <div class="board__col">
      <div class="board__right">
        <my-title class="margin_lg">{{ titles.right }}</my-title>
        <slot name="content-right" />
        <div class="board__footer" :class="{ board__footer_gallery: gallery }">
          <slot name="footer-right" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import myTitle from "~/components/myVer/myTitle";
export default {
  name: 'Board',
  props: {
    titles: {
      type: Object,
      default: () => ({
        left: '',
        right: ''
      })
    },
    gallery: {
      type: Boolean,
      default: false
    }
  },
  components: {
    myTitle
  }
}
</script>

<style scoped>
.board {
  padding: 50px 40px;
  display: flex;
  justify-content: space-between;
  background: url("/column-delimiter.png") no-repeat center, url("/content-background.jpg"), white;
}

.board__col {
  flex: 1;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
}

.board__right {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: auto;
  flex-grow: 1;
}

.board__footer {
  margin-top: auto;
}

.board__footer_gallery {
  display: flex;
  justify-content: space-between;
}
</style>
