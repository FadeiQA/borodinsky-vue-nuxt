<template>
  <header class="header">
    <nav class="content">
      <Menu />
    </nav>
  </header>
</template>

<script>
import Menu from "~/components/myVer/menu";
export default {
  name: 'MyHeader',
  components: {
    Menu
  }
}
</script>

<style scoped>
.header {
  background: black;
  color: white;
}
</style>
