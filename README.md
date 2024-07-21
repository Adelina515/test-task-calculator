# test-task-calculator

Цей проєкт представляє HTML-сторінку з кредитним калькулятором, яка дозволяє користувачам розрахувати денну та загальну суму погашення кредиту на основі введених значень суми позики та періоду погашення. Відсоткова ставка встановлена на рівні 2.2% на день.

Встановлення та запуск проєкту.
Щоб запустити проєкт:

1. склонуйте його з github - clone <https://github.com/Adelina515/test-task-calculator>
2. Перейдіть до директорії з проєктом cd <test-task-calculator>
3. Відкрийте файл index.html у вашому веб-браузері.Проєкт не вимагає додаткових залежностей або серверного середовища.

Опис виконаного завдання.

HTML-форма
Створено HTML-форму, яка містить наступні поля:

Сума кредиту:
Текстове поле для введення суми.
Слайдер для вибору суми в межах від 1000 грн до 50000 грн з кроком 100 грн.

Період погашення:
Текстове поле для введення кількості днів.
Слайдер для вибору періоду погашення від 7 до 60 днів з кроком 1 день.

Кнопка «Отримати кредит»:
Кнопка, яка активується, якщо всі поля заповнені коректно.

Логіка розрахунку
Реалізовано логіку розрахунку денної та повної сум погашень згідно з формулами, наведеними в завданні.

Денна сума погашень:
DR=(LA+(LA∗(IR/100)∗RP))/RP
де:
DR - денна сума погашень,
LA - сума позики,
RP - період погашення (днів),
IR - відсоткова ставка (2.2%).

Сума повного погашення:
TR=DR∗RP
де:
TR - сума повного погашення,
DR - денна сума погашень,
RP - період погашення (днів).
При зміні значень у полях форми автоматично оновлюються результати розрахунків.

Валідація полів
Встановлено ліміти для поля "Сума кредиту":
Мінімальне значення: 1000 грн.
Максимальне значення: 50000 грн.
Крок для слайдеру: 100 грн.

Встановлено ліміти для поля "Період погашення":
Мінімальне значення: 7 днів.
Максимальне значення: 60 днів.
Крок для слайдеру: 1 день.

Додана валідація для полів:
Поля повинні бути заповнені.
Значення полів повинні знаходитися в межах встановлених лімітів.
При порушенні умов валідації відображається повідомлення про помилку.
Кнопка «Отримати кредит» неактивна при наявності помилок.

Стилізація
Використано CSS для створення візуально приємної форми. Виконаний мінімалістичний підхід до стилізації для зручності користувача. Кольори обрані, які асоціюються з грішми. В заповненому полі - рамка поля стає зеленою, в іншому випадку - червоною. По закінченню операції розроблена тематична анімація, що відображає успішно отриманий кредит та з'являється повідомлення, що кредит отримано. Натиснувши в повідомленні, що кредит отримано - "ok", всі поля очищаються і відображаються в початковій формі для введення нових даних.
Адаптивний дизайн забезпечує коректне відображення на різних пристроях.
