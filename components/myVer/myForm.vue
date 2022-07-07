<template>
  <form class="margin_md" @submit.prevent="submit">
    <div class="form__row margin_md">
      <input @input="$store.commit('mutateState',{name: 'date', value: $event.target.value})" :value="$store.state.date" class="input" type="date" placeholder="ДД.ММ.ГГГГ">
      <input @input="$store.commit('mutateState',{name: 'time', value: $event.target.value})" :value="$store.state.time"  class="input" type="time" placeholder="--:--">
    </div>
    <div class="form__row">
      <input @input="$store.commit('mutateState',{name: 'name', value: $event.target.value})" :value="name"  class="input" type="name" placeholder="ваше имя">
      <input @input="tel=$event.target.value" :value="tel"  class="input" type="tel" placeholder="телефон">
    </div>
  </form>
</template>

<script>
export default {
  name: 'MyForm',
  data() {
    return {
      tel: '',
    }
  },
  computed: {
    name() {
      return this.$store.state.name
    }
  }
}
</script>

<style scoped lang="scss">

.form__row {
  display: flex;
  gap: 20px;
}

.input {
  border: 2px solid black;
  background: transparent;
  flex: 1;
  box-sizing: border-box;
  padding: 10px 15px;
  width: 0;
}

</style>
