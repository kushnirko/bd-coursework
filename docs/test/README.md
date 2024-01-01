# Тестування працездатності системи

### Засіб тестування

[Postman](https://www.postman.com/product/what-is-postman/)

### Таблиці, до яких здійснювався доступ

- permission
- right
- role
- user

### Початкове наповнення бази даних

#### permission
<p>
    <img src="./media/start-permission-filling.png">
</p>

#### right
<p>
    <img src="./media/start-right-filling.png">
</p>

#### role
<p>
    <img src="./media/start-role-filling.png">
</p>

#### user
<p>
    <img src="./media/start-user-filling.png">
</p>

## Перегляд довідкової інформації

### Системні дозволи
<p>
    <img src="./media/get-permissions.png">
</p>

### Конкретний системний дозвіл
<p>
    <img src="./media/get-permissions-id.png">
</p>

### Системні права
<p>
    <img src="./media/get-rights.png">
</p>

### Конкретне системне право
<p>
    <img src="./media/get-rights-id.png">
</p>

### Системні ролі
<p>
    <img src="./media/get-roles.png">
</p>

### Конкретна системна роль
<p>
    <img src="./media/get-roles-id.png">
</p>

## Створення нового користувача
<p>
    <img src="./media/post-signup.png">
</p>

## Автентифікація

#### Якщо поточний користувач ще не автентифікований
<p>
    <img src="./media/post-login-good.png">
</p>

#### Якщо поточний користувач уже автентифікований
<p>
    <img src="./media/post-login-bad.png">
</p>

## Завершення сесії

#### Якщо поточний користувач автентифікований
<p>
    <img src="./media/delete-logout-good.png">
</p>

#### Якщо поточний користувач ще не автентифікований
<p>
    <img src="./media/delete-logout-bad.png">
</p>

## Отримання списку зареєстрованих користувачів

#### Як авторизований користувач
<p>
    <img src="./media/get-users-good.png">
</p>

#### Як неавторизований користувач
<p>
    <img src="./media/get-users-bad.png">
</p>

## Отримання інформації про конкретного зареєстрованого користувача

#### Як авторизований користувач
<p>
    <img src="./media/get-users-id-good.png">
</p>

#### Як неавторизований користувач
<p>
    <img src="./media/get-users-id-bad.png">
</p>

## Отримання розширеної інформації про конкретного зареєстрованого користувача

#### Як авторизований користувач
<p>
    <img src="./media/get-users-id-full-good.png">
</p>

#### Як неавторизований користувач
<p>
    <img src="./media/get-users-id-full-bad.png">
</p>

## Оновлення персональних даних поточного користувача
#### Якщо поточний користувач автентифікований
<p>
    <img src="./media/patch-profile-good.png">
</p>

#### Якщо поточний користувач не автентифікований
<p>
    <img src="./media/patch-profile-bad.png">
</p>

## Зміна ролі зареєстрованого користувача

#### Як авторизований користувач
<p>
    <img src="./media/patch-users-id-role-good.png">
</p>

#### Як неавторизований користувач
<p>
    <img src="./media/patch-users-id-role-bad.png">
</p>

## Видалення зареєстрованого користувача

#### Як авторизований користувач
<p>
    <img src="./media/delete-users-id-good.png">
</p>

#### Як неавторизований користувач
<p>
    <img src="./media/delete-users-id-bad.png">
</p>
