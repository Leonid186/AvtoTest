describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашел на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // нашел поле логин и ввел верный логин
    cy.get('#pass').type('iLoveqastudio1');  // нашел поле пароль и ввел верный пароль
    cy.get('#loginButton').click(); // нашел кнопку войти и нажать на нее 
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
})

it('Прооверка восстанавление пароля', function () {
    cy.visit('https://login.qa.studio/'); //Зашел на сайт
    cy.get('#forgotEmailButton').click(); // нашел кнопку "Забыли пароль?" и нажать на нее 
    cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту для восстановления пароля
    cy.get('#restoreEmailButton').click(); // нашел кнопку "Отправить код и нажал на нее
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст сообщения
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователю
})
it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашел на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // нашел поле логин и ввел верный логин
    cy.get('#pass').type('iLoveqastio1');  // нашел поле пароль и ввел неверный пароль
    cy.get('#loginButton').click(); // нашел кнопку войти и нажать на нее 
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
})

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашел на сайт
    cy.get('#mail').type('german@dolnov.ru'); // нашел поле логин и ввел НЕверный логин
    cy.get('#pass').type('iLoveqastudio1');  // нашел поле пароль и ввел верный пароль
    cy.get('#loginButton').click(); // нашел кнопку войти и нажать на нее 
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
})

it('Логин без @ и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашел на сайт
    cy.get('#mail').type('germandolnikov.ru'); // нашел поле логин и ввел логин без @
    cy.get('#pass').type('iLoveqastudio1');  // нашел поле пароль и ввел верный пароль
    cy.get('#loginButton').click(); // нашел кнопку войти и нажать на нее 
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
})
it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); //Зашел на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашел поле логин и ввел логин строчными буквами
    cy.get('#pass').type('iLoveqastudio1');  // нашел поле пароль и ввел верный пароль
    cy.get('#loginButton').click(); // нашел кнопку войти и нажать на нее 
    cy.get('#messageHeader').contains('«Авторизация прошла успешно»'); // проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
})
})


// + Задача 1 проверка авторизации (верный логин и верный пароль)
// + Найти поле логин и ввести верный логин
// + Найти поле пароль и ввести вверный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, что авторизация прошла успешно(получить нужный текст)
// + Найти кнопку крестик и нажать на нее (крестик должен быть виден пользователю, не скрыт)

// + Задача 2 автотест на проверку логики восстановления пароля:

// + Найти кнопку «Забыли пароль» и нажать на нее
// + Найти поле E-mail и ввести любой e-mail
// + Найти кнопку "Отправить код" и нажать на нее
// + Проверить, что получил текст "Успешно отправили пароль на e-mail"
// + Найти кнопку крестик и нажать на нее (крестик должен быть виден пользователю, не скрыт)

// + Задача 3 проверка на негативный кейс авторизации:

// + Найти поле логин и ввести верный логин 
// + Найти поле пароль и ввести НЕверный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, что авторизация не прошла (получить нужный текст)
// + Найти кнопку крестик и нажать на нее (крестик должен быть виден пользователю, не скрыт)

// + Задача 4 проверка на негативный кейс авторизации:

// + Найти поле логин и ввести НЕверный логин
// + Найти поле пароль и ввести верный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, что авторизация не прошла. Проверить нужный текст
// + Найти кнопку крестик и нажать на нее (крестик должен быть виден пользователю, не скрытый)

// + Задача 5 проверка на негативный кейс валидации (без @):

// + Найти поле логин и ввести логин без @
// + Найти поле пароль и ввести верный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, что получен текст с ошибкой

// + Задача 6 проверка на приведение к строчным буквам в логине: (ТЕСТ УПАЛ)

// + Найти поле логин и ввести логин GerMan@Dolnikov.ru
// + Найти поле пароль и ввести верный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
// + Найти кнопку крести и нажать на нее (кнопка должна быть не скрыта для пользователя)
