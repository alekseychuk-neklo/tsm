let clients = [
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 3},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 2},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 1},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 4},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 1000},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 2},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 2},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 2},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 2},
    {name: 'String', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 2},
];

let alcohol ={
    martini: 12.3,
    vodka: 8.4,
    bear: 2.2,
    viskarik: 10,
    rom: 8.2,
}

function init(){
    clients.forEach(function (element) {
        let canBuy =checkAge(element.age);
        let alcoholPrice = getAlcoholByName(element.alcoholName);
        let sum =calculatePrice(alcoholPrice, element.alcoholCount);
        let haveMoney = haveEnoughMoney(element.balance, sum);
        if(canBuy && haveMoney){
            element.balance -= sum;
            let rubles =Math.trunc(sum);
            let cents = (sum - rubles).toFixed(2)*100;
             console.log(`${element.name}, вот ваш заказ: ${element.alcoholName} в количестве ${element.alcoholCount} шт. С вас ${rubles} ${getWord(rubles, ['рубль', 'рубля', 'рублей'])} ${cents} ${getWord(rubles, ['копейка', 'копейки', 'копеек'])}` )
        }else {
            console.log('Не пробам!!!!!!!')
        }

    })
}


function checkAge(age){
    return parseInt(age)>=18;
}

function getAlcoholByName(name){
    return alcohol[name];
}

function calculatePrice(price, count){
        return (price * count).toFixed(2);
}

function haveEnoughMoney(balance, sum){
    return balance>=sum;
}

function getWord(digit, words) {
    digit = Math.abs(digit) % 100;
    let modulo = digit % 10;
    if (digit > 10 && digit < 20) {
        return words[2];
    }
    if (modulo > 1 && modulo < 5) {
        return words[2];
    }
    if (modulo == 1) {
        return words[0];
    }
    return words[2];
}

init();

