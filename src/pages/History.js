import React from "react";

export const History = () => {
  return (
    <div className="history">
      <h1>Історія</h1>
      <p>
        Коли закінчилася Друга світова війна і Австрія стала незалежною
        державою, її новостворена армія оснащувалася пістолетами ще довоєнного
        виробництва - Walther P38 і Кольт М1911А1. У поліції ситуації була
        гірше: вони отримали модель, вироблену в 20-х роках - Walther PP. Однак
        Австрія ні з ким не воювала і підтримувала чіткий нейтралітет у холодній
        війні, так що задумалися про модернізацію лише в 1980 році, коли держава
        організувала конкурс зі створення нового пістолета, який би отримав і
        поліцейський, і військовий.
      </p>
      <div className="history_orange-glock" />
      <div className="capture">Glock 17</div>
      <p>
        Новий варіант табельної зброї повинен був відповідати вимогам, які
        видало військове міністерство країни:
      </p>
      <ol>
        <li>9 × 19 мм патрони Парабелум;</li>
        <li>Мінімальна кількість патронів в магазині - 8 одиниць;</li>
        <li>
          Пістолет повинен бути безпечним, тому навіть при падінні з висоти 2
          метри не повинно бути мимовільного пострілу;
        </li>
        <li>На кожну тисячу пострілів повинно бути тільки 2 осічки;</li>
        <li>Взаємозамінність деталей.</li>
      </ol>
      <div className="history_blue-glock" />
      <div className="capture">Glock 18</div>

      <p>
        Всім цим вимогам Glock відповідав або перевищував рекомендовані дані.
      </p>
      <div className="history_picture-construction" />
      <div className="capture">
        Конструкція пістолета Glock 17. Як і говорилося, всього 34 деталі
      </div>
      <p>
        Конкуренція була велика, і мало хто розраховував на те, що переможе
        крихітна австрійська фірма, заснована ще в 1963 році під ім'ям Glock.
        Втім, цим проектом вона займалася з 1970 року, що і дозволило їй уявити
        оптимальний варіант автоматичного пістолета. Підкупив і той факт, що
        модель цієї фірми при високих характеристиках коштувала на 25% дешевше
        своїх конкурентів. В результаті Глок легко обійшов конкурентів, і вже в
        1983 році його прийняли на озброєння австрійської армії і поліції.
      </p>
      <div className="history_tactical-pic" />
      <div className="capture">Вичікування ворога</div>
      <p>
        Втім, можливо, якби пістолет використовували лише в Австрії, він би так
        і залишився локально вдалим варіантом. Однак справа в тому, що Глок
        практично повністю зроблений з високоміцного і термостійкого пластика,
        так що його використовували сценаристи у фільмі «Міцний Горішок 2».
        Після чого ця зброя почали показувати практично у всіх фільмах, так чи
        інакше пов'язаних з перестрілками, що дуже добре позначилося на продажах
        і загальної популярності моделі.
      </p>
      <p>
        Крім того, ще одним стрибком популярності було те, що його почали
        використовувати в комп'ютерних тактичних шутерах. До сих пір саме Глок
        залишається символом легендарної комп'ютерної гри Counter-Strike.
      </p>
    </div>
  );
};
