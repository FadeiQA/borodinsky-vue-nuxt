<template>
  <div class="container">
    <MyHeader />
    <MyMain />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "~/components/myVer/myHeader";
import MyFooter from "~/components/myVer/myFooter";
import MyMain from "~/components/myVer/myMain";
export default {
  name: 'IndexPage',
  components: {
    MyHeader,
    MyFooter,
    MyMain
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=latin,cyrillic' }
      ]
    }
  }
}
</script>

<style lang="scss">

* {
  font-family: "PT Sans Narrow", sans-serif, Arial;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
}

li {
  list-style-type: none;
}

.margin_lg {
  margin-bottom: 30px !important;
}

.margin_md {
  margin-bottom: 20px !important;
}

.margin_button {
  margin-right: 5px !important;
}

.content {
  margin: 0 auto;
  width: 940px;
}

.container {
  background: url("/index-backgound.jpg") no-repeat top, black;
  min-width: 940px;
}

.header {
  background: black;
  color: white;
}

.footer__friends{
  text-align: center;
  margin: 0 auto;
}

.footer__author {
  display: inline-block;
  text-align: center;
  margin-left: auto;
}
</style>
