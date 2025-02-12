const addElementsInArray2 = (arr2: (number | string) []): number | string =>
    arr2.reduce((accumulator: number, currentValue: number | string) => accumulator + Number(currentValue), 0);

const arrayString = ['10', '20', '30', '40', '50'];
const arrayNumbers = [1, 2, 3, 4, 5];

const sumString = addElementsInArray2(arrayString);
const sumNumber = addElementsInArray2(arrayNumbers);

console.log('Sum array with string:', sumString);
console.log('Sum array with numbers:', sumNumber);
