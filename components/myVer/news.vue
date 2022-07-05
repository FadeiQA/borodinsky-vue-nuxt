<template>
  <div class="news">
    <my-text>
      <slot/>
    </my-text>
    <p class="news__date">{{ date }}</p>
  </div>
</template>

<script>
import MyText from "~/components/myVer/myText";

export default {
  name: 'News',
  components: {
    MyText
  },
  props: {
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.news {
  padding-bottom: 20px;

  &__date {
    text-transform: none;
    font-weight: 400;
  }
}
</style>
