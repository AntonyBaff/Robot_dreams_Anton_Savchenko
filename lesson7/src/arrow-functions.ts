/* Функція складає тільки числа в масиві, і навіть якщо число задано як string*/

export const addOnlyNumbersInArray = (arr1: (number | string)[]): number | string =>
    arr1.reduce<number>((accumulator, currentValue) => accumulator + Number(currentValue), 0);

const arrayString1: string[] = ['1', '2', '3', '4', '5'];
const arrayNumbers1: number[] = [1, 2, 3, 4, 5];

const sumString1 = addOnlyNumbersInArray(arrayString1);
const sumNumber1 = addOnlyNumbersInArray(arrayNumbers1);

console.log('Sum array with string:', sumString1);
console.log('Sum array with numbers:', sumNumber1);

/* Функція визначає якого типу массив і складає його*/

const addElementsInArray = (arr1: (number | string)[]): number | string => {
    if (arr1.every((item) => typeof item === 'number')) {
        return arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    } else if (arr1.every((item) => typeof item === 'string')) {
        return arr1.reduce((accumulator, currentValue) => accumulator + currentValue, '');
    }
    return 'Error: Mixed types are not allowed';
};

const arrayString2: string[] = ['Hello', ' My', ' Name', ' is', ' Antony'];
const arrayNumbers2: number[] = [1, 2, 3, 4, 5];

const sumString2 = addElementsInArray(arrayString2);
const sumNumber2 = addElementsInArray(arrayNumbers2);

console.log('Sum array with string:', sumString2);
console.log('Sum array with numbers:', sumNumber2);
