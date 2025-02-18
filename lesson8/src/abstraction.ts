abstract class Vehicle {

    constructor(public brand: string, public model: string, public year: number) {}

    abstract start(): void;

    getDetails(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

class Engine {

    constructor(public type: string, public horsepower: number) {}

    getEngineInfo(): string {
        return `Engine: ${this.type}, ${this.horsepower} HP`;
    }
}

class Car extends Vehicle {
    private engine: Engine;

    constructor(brand: string, model: string, year: number, engine: Engine) {
        super(brand, model, year);
        this.engine = engine;
    }

    start(): void {
        console.log(`Car ${this.getDetails()} is starting...`);
    }

    getCarInfo(): string {
        return `${this.getDetails()} | ${this.engine.getEngineInfo()}`;
    }
}

class Bike extends Vehicle {
    constructor(brand: string, model: string, year: number) {
        super(brand, model, year);
    }

    start(): void {
        console.log(`Bike ${this.getDetails()} is starting...`);
    }
}

export { Vehicle, Car, Bike, Engine };
