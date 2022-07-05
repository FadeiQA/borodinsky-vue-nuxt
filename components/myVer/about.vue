<template>
  <section class="about">
    <div>
      <my-title>БЫСТРО</my-title>
      <Cube />
      <my-text>МЫ ДЕЛАЕМ СВОЮ РАБОТУ БЫСТРО! ДВА ЧАСА ПРОЛЕТЯТ НЕЗАМЕТНО И ВЫ — СЧАСТЛИВЫЙ ОБЛАДАТЕЛЬ СТИЛЬНОЙ СТРИЖКИ-МИНУТКИ!</my-text>
    </div>
    <div>
      <my-title>КРУТО</my-title>
      <Cube />
      <my-text>ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ. МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО! ВО ВСЯКОМ СЛУЧАЕ ВНЕШНЕ.</my-text>
    </div>
    <div>
      <my-title>ДОРОГО</my-title>
      <Cube />
      <my-text>НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕННЫЙ СТАТУС?</my-text>
    </div>
  </section>
</template>

<script>
import myTitle from "~/components/myVer/myTitle";
import myText from "~/components/myVer/myText";
import Cube from "~/components/myVer/cube";

export default {
  name: 'About',
  components: {
    myTitle,
    myText,
    Cube
  }
}
</script>

<style scoped>

.about {
  color: white;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 60px;
}

.about>* {
  flex-basis: 280px;
}
</style>
