function addOnlyNumbersInArray1(arr1: (number | string) []): number | string {
    if (arr1.every((item) => typeof item === 'number')) {
        return arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    } else if (arr1.every((item) => typeof item === 'string')) {
        return arr1.reduce((accumulator, currentValue) => accumulator + currentValue, '');
    }
    return 'Error: Mixed types are not allowed';
}

const arrayString1: string[] = ['Hello', ' My', ' Name', ' is', 'Antony'];
const arrayNumbers1: number[] = [1, 2, 3, 4, 5];

const sumString1 = addOnlyNumbersInArray1(arrayString1);
const sumNumber1 = addOnlyNumbersInArray1(arrayNumbers1);

console.log('Sum array with string:', sumString1);
console.log('Sum array with numbers:', sumNumber1);

