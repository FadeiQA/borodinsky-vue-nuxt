<template>
  <form class="margin_md" @submit.prevent="submit">
    <div class="form__row margin_md">
      <my-input @input="$emit('dateChange', $event)" :value="date" type="date" placeholder="ДД.ММ.ГГГГ"/>
      <my-input @input="$emit('timeChange', $event)" :value="time" type="time" placeholder="--:--"/>
    </div>
    <div class="form__row">
      <my-input @input="$emit('nameChange', $event)" :value="name" type="name" placeholder="ваше имя"/>
      <my-input @input="$emit('telChange', $event)" :value="tel" type="tel" placeholder="телефон"/>
    </div>
  </form>
</template>

<script>
import myInput from "~/components/myVer/myInput";
export default {
  name: 'MyForm',
  components: {myInput},
  props: {
    tel: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="scss">

.form__row {
  display: flex;
  gap: 20px;
}

</style>
