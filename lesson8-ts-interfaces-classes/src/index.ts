import { Bike, Car, Engine } from './abstraction';
import { OutputClass } from './class';
import { Output } from './interface';

const carEngine = new Engine('V8', 450);

const myCar = new Car('Tesla', 'Model S', 2022, carEngine);
const myBike = new Bike('Yamaha', 'R1', 2021);

myCar.start();
console.log(myCar.getCarInfo());

myBike.start();
console.log(myBike.getDetails());

export async function getJson(): Promise<Output> {
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
    const json = (await response.json()) as Output;
    return json;
}

(async () => {
    const output = await getJson();
    console.log('ID: ' + output.data[0].id);
    console.log('Relationship data ID: ' + output.data[0].relationships.group.data.id);
    console.log('Attributes description: ' + output.data[0].attributes.description);
})();

(async () => {
    const output = await getJson();
    //console.log(output.data[1])
    const output2 = new OutputClass(output.data[1]);
    output2.shortInfo();
    //console.log(output.data[0].id);
})();
