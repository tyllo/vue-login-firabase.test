# vue-login-firabase

Сделать страницу аутентификации на VueJS/Vuex/Vuetify. 
В качестве бэкенда использовать бесплатную версию Firebase (Если не получается, то сделать сервер на NodeJS/ExpressJS).

Перед пользователем появляется страница логина. Ему предлагается войти или зарегистрироваться. При регистрации пользователь вводит емейл (который логин) и дважды пароль (не менее 8 символов, должны быть буквы в uppercase и цифры, пароли должны совпадать).

При регистрации пользователь также вводит имя, фамилию и на которую ему присылается ссылка подтверждения. 

Когда пользователь проследует по ссылке, в базу Firebase сохраняется пользователь. 

При входе пользователю отображается статус активации и происходит автоматический логин, если пользователь залогинился.

На странице логина есть ссылка “забыли пароль?” 
При нажатию на которую пользователю на почту высылается ссылка со сбросом пароля. 
При ее открытии вводится старый пароль и дважды новый пароль. Валидация стандартная. За пример регистрации можно взять регистрацию в Google.
Для стилей испоьзовать Vuetify.

Приложение должно быть доступно на github вместе с базой данных и инструкцией по развертыванию.
