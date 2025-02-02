/*Підготувати файл arrays.js, у якому додати 4 масиви, по 1 на кожен базовий 
тип (рядок, число, boolean, any), та виконати вивчені операції над ними 
включно з перебором (forEach() та map()).*/

const arrString = ["one", "two", "three", "four", "five"];
const arrNumber = [1, 2, 3, 4, 5];
const arrBool = [true, false, true, false, false];
const arrAny = ["one", 2, true, 4, "five"];

arrString.push("six");
console.log(arrString);

arrNumber.unshift(0);
console.log(arrNumber);

arrString.pop();
console.log(arrString);

arrNumber.shift();
console.log(arrNumber);

const filteredAny = arrAny.filter((el) => typeof el === 'boolean');
console.log(filteredAny);

const onlyTrue = arrBool.filter(Boolean);
console.log(onlyTrue);

const foundNumber = arrNumber.find(num => num === 3);
console.log(foundNumber);

const sortedStringArray = arrString.sort((a, b) => a + b);
console.log(sortedStringArray);

const arrForEach = [];
arrAny.forEach((el, i) => {
    if (typeof el === 'string') {
        arrForEach.push(el);
        console.log(i);
    }
});
console.log(arrForEach);

arrNumber.forEach(num => {
    console.log(num + 2);
});

const doubled = arrNumber.map(num => num * 2);
console.log(doubled);

const arrNumbers2 = arrAny.map((el) => {
    if (typeof el === 'number') {
        return el;
    }
    return "Not a number";
});
console.log(arrNumbers2);