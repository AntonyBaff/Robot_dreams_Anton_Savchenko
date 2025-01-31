//==================COMPARISONS=======================

const number_2 = 2;
const number_4 = 4;
console.log(number_2 > number_4);
console.log(number_2 === number_4);
console.log(number_4 >= number_2);
console.log(number_2 != number_4);

const stringHello = 'Hello';
const stringWorld = 'World';
const string4 = '4';
console.log(stringHello !== number_2);
console.log(stringWorld === stringHello);
console.log(stringHello > stringWorld);
console.log(string4 == number_4);
console.log(string4 === number_4);


const boolFalse = false;
console.log(true != false);
console.log(false === false);

const nullVar = null;
const stringNull = 'null';
console.log(nullVar == number_2);
console.log(nullVar == null);
console.log(stringNull == nullVar);

const undefinedVar = undefined;
console.log(undefinedVar == undefined);
console.log(undefinedVar == true);
console.log(undefinedVar != true);

const obj1 = {
    key: 'value',
    key2: 'value2'
};

const obj2 = {
    key: 'value',
    key2: 'value2'
};

console.log(obj1 === obj2);
console.log(obj1 == boolFalse);

//================LOGICAL=======================
console.log("------LOGICAL---------");

console.log(number_2 || number_4);
console.log(number_4 || number_2);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(null || "Hello");
console.log("Hello" || "World");

console.log(number_2 && number_4);
console.log(number_4 && number_2);
console.log(false && true);
console.log(null && false);
console.log(true && true);

console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!!true);

console.log(number_2 ?? null);
console.log(undefined ?? true);
console.log(undefined ?? null);
console.log(stringHello ?? nullVar);
