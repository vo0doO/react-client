## Здесь - рабочее, базовое приложение, в него предлагается нарастить функциональность.

### Приложение во многом похоже на то - что работает на сайте [qiwi.ru](!https://qiwi.ru).

Оно работает в связке с бэкендом [node server](!https://github.com/vo0doo/node_server), размещенным по [адресу](!https://nrfs.ipfs.dedyn.io:2211/api/).

Бэкенд также можно поднять локально при желании, дополнить функционал и развернуть в продакшн.

В текущей реализации, приложение-boilerplate, содержит страницу авторизации и маршрутизации: на страницу со скиском пользователей и поиском; на страницы каждого пользователя в отдельности; на станицы со списком платежей пользователя с фильтром по диапазону дат.

Данные для авторизации:
```
email: noob@e.ru
password: noob
```

### Далее предполагается описание запросов пользовательских данных с сервера и каких-то операции над ними в авторизированной зоне

Рекомендуется пользоваться [API-документацей](https://vo0doo.github.io/node_server/#api-healthcheck)

Полученный при авторизации JWT-токен потребуется для доступа к [запросам авторизованной зоны](https://vo0doo.github.io/node_server/#api-User)

JWT-токен необходимо указать в заголовке Authorization после ключевого слова Bearer.

#### Для запуска приложения достаточно выполнить:
*при условии установленной среды Node.js >= 8.11

```
npm start
```