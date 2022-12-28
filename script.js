'use strict';
const timer = () => {
   const today = new Date();
   const now = today.toLocaleTimeString('en'); //получаем время
   const days = ['Воскресенье', //получаем день недели
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
   ];

   const day = today.getDay();
   // console.log(days[day]);

   const countTimer = () => {
      const deadline = '31 december 2022';

      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let daysToNewYear = Math.floor(timeRemaining / 60 / 60 / 24);
      let hours = Math.floor(timeRemaining / 60 / 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);

      const nowRus = today.getHours();
      let sayHello;

      if (nowRus < 12 && nowRus > 6) {
         sayHello = "Доброе утро";
      } else if (nowRus >= 12 && nowRus < 18) {
         sayHello = "Добрый день";
      } else {
         sayHello = "Доброй ночи";
      }

      let text = document.createElement('div');
      text.innerHTML = `${sayHello} <br>
      Сегодня: ${days[day]} <br>
      Текущее время: ${now} <br>
      До нового года осталось ${daysToNewYear} дней`;

      document.body.append(text);
   };

   countTimer();

};
timer();