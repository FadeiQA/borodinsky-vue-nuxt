<template>
  <div class="container">
    <header class="header">
      <nav class="content">
        <ul class="menu">
          <li class="menu__active">
            <a class="button menu__item" href="https://www.google.ru/">Главная</a>
          </li>
          <li>
            <a class="button menu__item" href="index.html">Информация</a>
          </li>
          <li>
            <a class="button menu__item" href="index.html">Новости</a>
          </li>
          <li>
            <a class="button menu__item" href="index.html">Прайс-Лист</a>
          </li>
          <li>
            <a class="button menu__item" href="index.html">Магазин</a>
          </li>
          <li>
            <a class="button menu__item" href="index.html">Контакты</a>
          </li>
          <li class="menu__right">
            <a href="index.html" class="button menu__item menu__exit">Вход</a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="content">
      <img src="/content-logo.png" class="logo" alt="logo">
      <section class="about">
        <div>
          <h2 class="title">БЫСТРО</h2>
          <div class="about__cube"></div>
          <p class="text">МЫ ДЕЛАЕМ СВОЮ РАБОТУ БЫСТРО! ДВА ЧАСА ПРОЛЕТЯТ НЕЗАМЕТНО И ВЫ — СЧАСТЛИВЫЙ ОБЛАДАТЕЛЬ СТИЛЬНОЙ СТРИЖКИ-МИНУТКИ!</p>
        </div>
        <div>
          <h2 class="title">КРУТО</h2>
          <div class="about__cube"></div>
          <p class="text">ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ. МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО! ВО ВСЯКОМ СЛУЧАЕ ВНЕШНЕ.</p>
        </div>
        <div>
          <h2 class="title">ДОРОГО</h2>
          <div class="about__cube"></div>
          <p class="text">НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕННЫЙ СТАТУС?</p>
        </div>
      </section>
      <section class="board margin_lg">
        <div class="board__col">
          <h2 class="title margin_lg">НОВОСТИ</h2>
          <div class="news">
            <p class="text">НАМ НАКОНЕЦ ЗАВЕЗЛИ ЯГЕРМАЙСТЕР! ТЕПЕРЬ ВЫ МОЖЕТЕ ПРОПУСТИТЬ СТАКАНЧИК ВО ВРЕМЯ СТРИЖКИ</p>
            <p class="news__date">25 сентября</p>
          </div>
          <div class="news">
            <p class="text">В НАШЕЙ КОМАНДЕ ПОПОЛНЕНИЕ, БОРИС «БРИТВА» СТРИГУНЕЦ, ОБЛАДАТЕЛЬ МНОЖЕСТВА ТИТУЛОВ И НАГРАД ПОПОЛНИЛ НАШИ СТРОЙНЫЕ РЯДЫ</p>
            <p class="news__date">19 сентября</p>
          </div>
          <div class="board__footer">
            <a class="button button_black button_brown-hover" href="https://www.w3schools.com/howto/howto_css_full_page.asp">
              все новости
            </a>
          </div>
        </div>
        <div class="board__col">
          <div class="board__right">
            <h2 class="title margin_lg">ФОТОГАЛЕРЕЯ</h2>
            <img class="gallery-img gallery-img_active" src="/content-gallery-picture.jpg" alt="галерея">
            <div class="board__footer board__footer_gallery">
              <div class="button button_black button_disabled margin_button">
                Назад
              </div>
              <div class="button button_black button_brown-hover">
                Вперед
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="board margin_lg">
        <div class="board__col">
          <h2 class="title margin_lg">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
          <div class="margin_lg">
            <p class="text">BARBERSHOP «BORODINSKI»</p>
            <p class="text">АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. СОБАКИ ПАВЛОВА, Д. 13</p>
          </div>
          <div class="margin_lg">
            <p class="text">ТЕЛЕФОН: +7 (495) 666-02-66</p>
            <p class="text">ВРЕМЯ РАБОТЫ:</p>
            <p class="text">ПН — ПТ: С 10:00 ДО 22:00</p>
            <p class="text">СБ — ВС: С 10:00 ДО 19:00</p>
          </div>
          <div class="board__footer">
            <a class="button button_black button_brown-hover margin_button">
              как проехать
            </a>
            <a class="button button_black button_brown-hover">
              ОБРАТНАЯ СВЯЗЬ
            </a>
          </div>
        </div>
        <div class="board__col">
          <div class="board__right">
            <h2 class="title margin_lg">ЗАПИСАТЬСЯ</h2>
            <p class="text margin_lg">УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ БРОНИ</p>
            <form class="margin_md">
              <div class="form__row margin_md">
                <input class="input" type="date" placeholder="ДД.ММ.ГГГГ">
                <input class="input" type="time" placeholder="--:--">
              </div>
              <div class="form__row">
                <input class="input" type="text" placeholder="ваше имя">
                <input class="input" type="tel" placeholder="телефон">
              </div>
            </form>
            <div class="board__footer">
              <div class="button button_black button_brown-hover button_long">
                отправить
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <section class="content footer__row">
        <div class="footer__col">
          <div>
            <p class="text">BARBERSHOP «BORODINSKI»</p>
            <p class="text">АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. СОБАКИ ПАВЛОВА, Д. 13</p>
            <a class="text text_hover" href="#">КАК НАС НАЙТИ?</a>
            <p class="text">ТЕЛЕФОН: +7 (495) 666-02-66</p>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__friends">
            <p class="text margin_md">ДАВАЙТЕ ДРУЖИТЬ!</p>
            <div>
              <div class="button margin_button social social_vk"></div>
              <div class="button margin_button social social_fb"></div>
              <div class="button social social_instagram"></div>
            </div>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__author">
            <p class="text margin_md">ДИЗАЙН САЙТА:</p>
            <div class="button button_black button_white-hover">
              GLUKHANKO.RU
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
  margin-bottom: 30px;
}

.margin_md {
  margin-bottom: 20px;
}

.margin_button {
  margin-right: 5px;
}

.container {
  background: url("/index-backgound.jpg") no-repeat top, black;
  min-width: 940px;
}

.header {
  background: black;
  color: white;
}

.footer {
  background: url("/footer-background.jpg");
  color: white;
  margin-top: 60px;
  padding: 60px 0 40px 0;
}



.footer__col {
  flex: 1;
  display: flex;
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

.social {
  padding: 0;
  height: 43px;
  width: 43px;
  min-width: auto;
  background: url("/sprites.png") no-repeat, black;
}

.social:hover {
  background: url("/sprites.png") no-repeat, white;
}

.social_vk {
  background-position: 9px -826px;
}

.social_vk:hover {
  background-position: 9px -760px;
}

.social_fb {
  background-position: 14px -549px;
}

.social_fb:hover {
  background-position: 14px -476px;
}

.social_instagram {
  background-position: 12px -690px;
}

.social_instagram:hover {
  background-position: 12px -619px;
}
</style>
