<template>
  <main class="content">
    <img src="/content-logo.png" class="logo" alt="logo">
    <About/>
    <Board :titles="{left: 'НОВОСТИ', right: 'ФОТОГАЛЕРЕЯ'}" gallery class="margin_lg">
      <template v-slot:content-left>
        <News date="25 сентября">
          НАМ НАКОНЕЦ ЗАВЕЗЛИ ЯГЕРМАЙСТЕР! ТЕПЕРЬ ВЫ МОЖЕТЕ ПРОПУСТИТЬ СТАКАНЧИК ВО ВРЕМЯ СТРИЖКИ
        </News>
        <News date="19 сентября">
          В НАШЕЙ КОМАНДЕ ПОПОЛНЕНИЕ, БОРИС «БРИТВА» СТРИГУНЕЦ, ОБЛАДАТЕЛЬ МНОЖЕСТВА ТИТУЛОВ И НАГРАД ПОПОЛНИЛ НАШИ
          СТРОЙНЫЕ РЯДЫ
        </News>
      </template>
      <template v-slot:footer-left>
        <btn :types="['black', 'brown-hover']" to="/">
          все новости
        </btn>
      </template>
      <template v-slot:content-right>
        <img class="gallery-img gallery-img_active" src="/content-gallery-picture.jpg" alt="галерея">
      </template>
      <template v-slot:footer-right>
        <btn :types="['black', 'disabled']" to="/" class="margin_button">
          Назад
        </btn>
        <btn :types="['black', 'brown-hover']">
          Вперед
        </btn>
      </template>
    </Board>
    <Board :titles="{left: 'КОНТАКТНАЯ ИНФОРМАЦИЯ', right: 'ЗАПИСАТЬСЯ'}" class="margin_lg">
      <template v-slot:content-left>
        <div class="margin_lg">
          <my-text>BARBERSHOP «BORODINSKI»</my-text>
          <my-text>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. СОБАКИ ПАВЛОВА, Д. 13</my-text>
        </div>
        <div class="margin_lg">
          <my-text>ТЕЛЕФОН: +7 (495) 666-02-66</my-text>
          <my-text>ВРЕМЯ РАБОТЫ:</my-text>
          <my-text>ПН — ПТ: С 10:00 ДО 22:00</my-text>
          <my-text>СБ — ВС: С 10:00 ДО 19:00</my-text>
        </div>
      </template>
      <template v-slot:footer-left>
        <btn :types="['black', 'brown-hover']" class="margin_button">
          как проехать
        </btn>
        <btn :types="['black', 'brown-hover']">
          ОБРАТНАЯ СВЯЗЬ
        </btn>
      </template>
      <template v-slot:content-right>
        <my-text class="margin_lg">УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ БРОНИ</my-text>
        <my-form v-model="data" ref="asd"/>
      </template>
      <template v-slot:footer-right>
        <btn :types="['black', 'brown-hover', 'long']" :formcom="asd">
          отправить
        </btn>
      </template>
    </Board>
  </main>
</template>

<script>
import About from "~/components/myVer/about";
import Board from "~/components/myVer/board";
import Btn from "~/components/myVer/btn";
import News from "~/components/myVer/news";
import MyText from "~/components/myVer/myText";
import MyForm from "~/components/myVer/myForm";

export default {
  name: "MyMain",
  components: {MyForm, Btn, About, Board, News, MyText},
  methods: {
    submit(_ev) {
      console.log(_ev)
    }
  },
  data() {
    return {
      data: {
        name: '',
        tel: '',
        time: '',
        date: '',
      }
    }
  },
  mounted() {
    this.asd = this.$refs.asd
  }
}
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 80px auto;
}
</style>
