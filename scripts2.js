// ЦИКЛЫ
// 1
let str = ".";
for (let i = 0; i < 5; i++) {
    str = str + "#.";
}
console.log(str);


// 2
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i * i);
    }
}


// 3
let userName = prompt("Введите имя");
for (let i = 0; i < 4; i++) {
    if (i === 2) {
        console.log(`Happy birthday dear ${userName}`);
    } else {
        console.log("Happy birthday to you");
    }
}


// 4
while (true) {
    let name = confirm("Вы согласны?");
    if (name === true) {
        break;
    }
}

// 5
let number = +prompt("Введите число");
let sum = 0;
for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
alert(sum);

// 6
let random;
for (let i = 0; true ; i++) {
    random = Math.random();
    if (random > 0.9) {
        alert(random);
        alert(i);
        break;
    }

}


// 7
for (let i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// 8 (тут ничего не работает, но это то, что я пыталась сделать)
// for (i = 2; i < 10 && i >= 0; i = (i - 1) + (i - 2)) {
//     console.log(i);
// }
//
// let n = 1200;
// const a = (1 + 5 ** 0.5) / 2;
// const b = (1 - 5 ** 0.5) / 2;
// (a ** n  - b ** n) / 5 ** 0.5;
// for (i = 0; i < n && i >= 0; i = (( a ** i - b ** i) / 5 ** 0.5)) {
//     console.log(i);
// }


// 9
let sum = 0;
for (let i = 0; true; i++){
    let number = prompt("Введите число");
    sum = sum + +number;
    if (number === null) {
        alert(i);
        alert(sum);
        alert(sum / i);
        break;
    }
}


// 10

let password = "saw12345";
for (; ;) {
    let enteredPassword = prompt("Введите праоль");
    if (enteredPassword === password) {
        alert("Вы успешно авторизованы");
        break;
    } else if (enteredPassword === null) {
        let cancel = confirm('Вы уверены, что хотите отменить авторизацию?');
        if (cancel === true) {
            alert("Вы отменили авторизацию");
            break
        }
    }
}


// 11

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log( "FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}