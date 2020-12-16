// 1
let x = +prompt("Введите число");
if (x === 0) {
    alert('Ноль');
} else if (x < 0) {
    alert('Число отрицатльное');
} else if (x > 0) {
    alert('Число положительное');
}


// 2
let myMoney = +prompt('Мои деньги');
let myFriendMoney = +prompt('Деньги моего друга');
if (myMoney + myFriendMoney > 2000) {
    alert('Ура! Едем в Майорку.');
} else {
    alert('Сорян, сегодня только пивасик, друг.')
}


// 3
let age = +prompt('Введите возраст');
if (age > 19 && age < 27) {
    alert("Выслать повестку!");
}


// 4
let busNumber = prompt('Номер маршрутки');
switch (busNumber) {
    case "7":
    case "225":
    case "255":
    alert("Едем домой!")
        break;
    default:
        alert("Ожидаем.");
}


// 5
let day = "Суббота";
switch (day) {
    case "Суббота":
    case "Воскресенье":
        alert("Выходной")
        break;
    default:
        alert("Иди на рабботу")
        break;
}


// 6
let x = +prompt("Введите число X от -20 до 20");
let y = +prompt("Введите число Y от -20 до 20");
if ((x <= 1) && (y >= 3 || y < 0)) {
    alert(x + y);
}else {
    alert("Неверно!");
}


// 7
let x = 3;
let y = 5;
if ((x > 2 && x < 11) || (y >= 6 && y < 14 )) {
    x = x * 2;
    alert(x);
}else {
    x = x + 5;
    alert(x);
}


// 8
let name = prompt("Введите имя");
if (name) {
    alert(`Привет ${name}`);
}else {
    alert("Имя не введено");
}


// 9
let greeting = "";
let lang = prompt("Введите язык");
if (lang === "ru") {
    alert("Привет!");
}else if (lang === "en") {
    alert("Hello!");
}else if (lang === "de") {
    alert("Hallo!");
}else {
    alert("Язык не распознан.");
}

// через switch
let greeting = "";
let lang = prompt("Введите язык");
switch (lang) {
    case "ru":
        alert("Привет!");
        break;
    case "en":
        alert("Hello!");
        break;
    case "de":
        alert("Hallo!");
        break;
    default:
        alert("Язык не распознан.");
}

// 10
let month = new Date();
switch (month.getMonth()) {
    case 11:
    case 0:
    case 1:
        alert("Зима")
        break;
    case 2:
    case 3:
    case 4:
        alert("Весна")
        break;
    case 5:
    case 6:
    case 7:
        alert("Лето")
        break;
    case 8:
    case 9:
    case 10:
        alert("Осень")
        break;
}


// 11
let lang = "ru";
let day = 6;
let result;
switch (lang) {
    case "ru":
        switch (day) {
            case 0:
                result = "Понедельник";
                alert(result);
                break;
            case 1:
                result = "Вторник";
                alert(result);
                break;
            case 2:
                result = "Среда";
                alert(result);
                break;
            case 3:
                result = "Четверг";
                alert(result);
                break;
            case 4:
                result = "Пятница";
                alert(result);
                break;
            case 5:
                result = "Суббота";
                alert(result);
                break;
            case 6:
                result = "Воскресенье";
                alert(result);
                break;
        }
        break;
    case "en":
        switch (day) {
            case 0:
                result = "Monday";
                alert(result);
                break;
            case 1:
                result = "Tuesday";
                alert(result);
                break;
            case 2:
                result = "Wednesday";
                alert(result);
                break;
            case 3:
                result = "Thursday";
                alert(result);
                break;
            case 4:
                result = "Friday";
                alert(result);
                break;
            case 5:
                result = "Saturday";
                alert(result);
                break;
            case 6:
                result = "Sunday";
                alert(result);
                break;
        }
        break;
}


// 12
let name = prompt("Имя");
let age = +prompt("Возраст");
switch (name) {
    case "John":
        switch (age){
            case 29:
                alert(`Привет ${name} ${age}`);
                break;
        }
        break;
    case "Kate":
        switch (age){
            case 15:
                alert(`Привет ${name} ${age}`);
                break;
        }
        break;
    default:
        alert("Пока");
}