Для настройки приложения используйте команду: npm install
Для запуска приложения в браузере: npm run dev

Проект выполнялся командой разработчиков, для разработки приложения была создана программа в Excel, на которую ориентировались разработчики:
https://docs.google.com/spreadsheets/d/1QJ3Hz_pqjVjb5naNAQx8Lja1aGayc0YoZgR0Pomp4CE/edit?hl=ru&gid=0#gid=0

Для работы с данными пользователя и курсов использовалась база данных Google Firebase

Макет для реализации приложения в figma - https://www.figma.com/design/2Vhk2Zdii1eM7rA0fWQExv/SkyFitnessPro?node-id=44-2420&node-type=frame&t=WpqVNakGxQDxXymN-0

По ТЗ приложение разработано для двух разрешений экранов: 1440px и 375px

Технологии, используемые в разработке:

1) Приложение создано при помощи шаблона Vite;
2) Используется Typescript;
3) Стилизация осуществляется при помощи Tailwind CSS (при этом есть собственные стили внутри tailwind.config.js);
4) Приложение имеет четкую структурированную архитектуру, реализован странично-компонентный подход;
5) Есть роутинг между страницами;
6) При работе используется функционал useContext для глобального состояния, в котором хранятся данные о User, данные существующих курсов, и данные о курсах User, и используются в соответствующих компонентах и страницах;
7) Для реализации состояний различных элементов, компонентов используется повсеместно useState;
8) Для общения с базой данных написаны соответствующие запросы;
9) Использовалось тестирование функций и компонентов при помощи Jest;
10) Есть форматирование и проверки при помощи Eslint и Prettier;


Есть 4 страницы:
1) Главная страница содержит:
    - общий хедер;
    - мотивационный текст и лозунг;
    - карточки возможных направлений;
    - кнопка наверх;

2) Страница курса содержит:
    - общий хедер;
    - наименование и картинку выбранного курса;
    - общую информацию по 3 пунктам о курсе;
    - направления внутри курса;
    - общий блок "начните путь к новому телу";
3) Страница (доступна только залогиненному пользователю) профиля содержит:
    - общий хедер;
    - блок пользователя с данными;
    - блок "мои курсы" со всеми курсами пользователя и их прогрессом;
4) Страница (доступна только залогиненному пользователю) выбранной тренировки содержит:
    - общий хедер;
    - блок с подключаемым видео с ютуб;
    - блок прогресса по упражнениям;

Кликабельность сайта и его функционал:
1) Незалогиненный пользователь имеет доступ только к главной странице и странице курса, при этом динамические элементы, которые зависят от авторизации - имеют соответствующее отображение;
2) При нажатии на кнопку "Войти" открывается модальное окно "Авторизации", можно авторизоваться, есть проверка данных, есть возможность восстановления пароля (пока заглушка);
3) При нажатии кнопки "Зарегистрироваться" - соответственно открывается форма регистрации, есть соответствующие проверки ввода, есть возможность переключения между модалками и возврат на главную по логотипу;
4) Залогиненный пользователь в хедере видет имя "Сергей" (заглушка функционала "добавления имени"), при нажатии на имя открывается модалка, где уже виден "настоящий" email залогиненного пользователя, можно выйти или перейти на "страницу профиля";
5) Карточки курсов имеют переменное состояние в зависимости от того, на какой странице мы находимся:
    - на главной странице значок "плюса" либо "зеленая галочка" (если курс уже добавлен), нажатие на плюс добавляет курс (залогиненному пользователю) и превращается в "зеленую галочку", незалогиненному пользователю выводится алерт, что необходимо "войти";
    - на странице "профиля" вместо "плюса" будет "минус" - при нажатии на него, курс исчезнет со страницы профиля (соответствующие изменения произойдут и на главной), также указывается информация с "прогрессом по курсу" - который считается автоматически
    при заполнении данных на странице выбранной тренировки;
6) При нажатии на карточку курса - попадаем на страницу курса, где отображаются соответствующие данные
7) На странице курса, также в блоке "начните путь к новому телу" есть кнопка добавления курса (для залогиненного) или "войдите, чтобы добавить курс" , которая открывает модалку входа;
8) На странице профиля при нажатии на изменение пароля - открываются поля ввода "старого пароля" и "нового пароля", при этом при вводе неверного "старого пароля" получаем соответствующее сообщение и пароль не меняется, когда все корректно - пароль изменяется;
9) При нажатии на кнопку "начать тренировку/ продолжить тренировки" открывается модалка с выбором тренировок (в соответствии с выбранным курсом) - если упражнение было уже пройдено - то оно недоступно, при выборе упражнения появляется возможноть его начать;
10) На странице выбранной тренировки подключен видеоплеер ютуба, можно смотреть видео, отображается текущий вбитый прогресс по упражнениям, можно заполнить прогресс;
11) При заполнении прогресс вбиваются числа - на выходе получаем процентное соотношение, при этом если вбито число больше возможного (показывается в placeholder) - то подставляется максимальное значение, далее этот прогресс учитывается на странице профиля, также в процентном соотношении от всех возможных значений расчитывается для каждого курса;
12) все кнопки выйти - разлогинивают пользователя и ведут на главную;