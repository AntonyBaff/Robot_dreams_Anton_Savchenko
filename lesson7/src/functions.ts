function addElementsInArray1(arr1: (number | string)[]): number | string {
    return arr1.reduce((accumulator: number, currentValue: number | string) => accumulator + Number(currentValue), 0);
}

const arrayString1: string[] = ['10', '20', '30', '40', '50'];
const arrayNumbers1: number[] = [1, 2, 3, 4, 5];

const sumString1 = addElementsInArray1(arrayString1);
const sumNumber1 = addElementsInArray1(arrayNumbers1);

console.log('Sum array with string:', sumString1);
console.log('Sum array with numbers:', sumNumber1);
