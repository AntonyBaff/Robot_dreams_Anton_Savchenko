function addElementsInArray(arr1) {
    return arr1.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
}

const arrayString = ['10', '20', '30', '40', '50'];
const arrayNumbers = [1, 2, 3, 4, 5];

const sumString = addElementsInArray(arrayString);
const sumNumber = addElementsInArray(arrayNumbers);

console.log('Sum array with string:', sumString);
console.log('Sum array with numbers:', sumNumber);
