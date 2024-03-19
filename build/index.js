"use strict";
const nickname = 'Gilerme';
const age = 20;
const on = true;
let multiType = 200;
multiType = 'Texto';
let allTypes = 'Pode tudo';
allTypes = 309;
allTypes = false;
let iDontKnow = 'desconheço';
iDontKnow = 145;
const arrayString = [];
arrayString.push(3);
const anotherArray = ['Azulejo', 'Pastel'];
const tupla = ['Eu', 3, 'Aló'];
const obj = {
    name: 'Gilerme',
    age: 20,
    handsome: true
};
const obj2 = {
    color: 'blue'
};
const obj3 = {
    name: 'Robertin',
    'Species': 'Peixe'
};
const myResult = 634;
const myPhrase = 'So sei que nada sei';
const gilerme = {
    name: 'Gilerme',
    age: 20
};
const sosquiker = {
    name: 'sosquiker',
    age: 20,
    class: 'samurai'
};
function test() {
    return 'Teste executado com sucesso';
}
function test2() {
    console.log('Teste executado com sucesso');
}
function test3(a, b) {
    return a + b;
}
function test4(a, b, c) {
    return a + b - (c || 0);
}
function test5(a, b, c = 0) {
    return a + b - c;
}
function test6({ name, age }) {
    console.log(`${name} tem ${age} anos`);
}
function printLog(value) {
    console.log(value);
}
printLog(10);
printLog('Alo Alo');
function teste12(a, b, c) {
    console.log(`A:${a}, B:${b}, C:${c}`);
}
teste12(12, 'teste', true);
const testFunc = (a, b) => {
    return a + b;
};
testFunc(2, 3);
