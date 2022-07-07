<template>
  <footer class="footer">
    <section class="content footer__row">
      <div class="footer__col">
        <div>
          <my-text>BARBERSHOP «BORODINSKI»</my-text>
          <my-text>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. СОБАКИ ПАВЛОВА, Д. 13</my-text>
          <my-text withAnimation to="/">КАК НАС НАЙТИ?</my-text>
          <my-text>ТЕЛЕФОН: +7 (495) 666-02-66</my-text>
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__friends">
          <my-text class="margin_md">ДАВАЙТЕ ДРУЖИТЬ!</my-text>
          <social/>
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__author">
          <my-text class="text margin_md">ДИЗАЙН САЙТА:</my-text>
          <btn :types="btnTypes">
            GLUKHANKO.RU
          </btn>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
import MyText from "~/components/myVer/myText";
import btn from "~/components/MyVer/btn";
import social from "~/components/myVer/social";

export default {
  name: "MyFooter",
  components: {MyText, btn, social},
  computed: {
    btnTypes() {
      return ['black', 'white-hover']
    }
  }
  }


</script>

<style scoped lang="scss">


.footer {
  background: url("static/footer-background.jpg");
  color: white;
  margin-top: 60px;
  padding: 60px 0 40px 0;

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__col {
    flex: 1;
    display: flex;
  }

  &__friends {
    text-align: center;
    margin: 0 auto;
  }

  &__author {
    display: inline-block;
    text-align: center;
    margin-left: auto;
  }
}
</style>
