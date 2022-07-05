<template>
  <form class="margin_md" @submit.prevent="submit">
    <div class="form__row margin_md">
      <input @input="$store.commit('mutateState',{name: 'date', value: $event.target.value})" :value="$store.state.date" class="input" type="date" placeholder="ДД.ММ.ГГГГ">
      <input @input="$store.commit('mutateState',{name: 'time', value: $event.target.value})" :value="$store.state.time"  class="input" type="time" placeholder="--:--">
    </div>
    <div class="form__row">
      <input @input="$store.commit('mutateState',{name: 'name', value: $event.target.value})" :value="$store.state.name"  clas="input" type="text" placeholder="ваше имя">
      <input @input="$store.commit('mutateState',{name: 'tel', value: $event.target.value})" :value="$store.state.tel"  class="input" type="tel" placeholder="телефон">
    </div>
  </form>
</template>

<script>
export default {
  name: 'MyForm',
}
</script>

<style scoped>

</style>
