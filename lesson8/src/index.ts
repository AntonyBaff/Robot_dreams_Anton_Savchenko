import { Bike, Car, Engine } from "./abstraction";



const carEngine = new Engine("V8", 450);

const myCar = new Car("Tesla", "Model S", 2022, carEngine);
const myBike = new Bike("Yamaha", "R1", 2021);

myCar.start();
console.log(myCar.getCarInfo());

myBike.start();
console.log(myBike.getDetails());
