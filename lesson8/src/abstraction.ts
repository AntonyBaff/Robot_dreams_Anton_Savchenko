abstract class Vehicle {
    public constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    public abstract start(): void;

    public getDetails(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

class Engine {
    public constructor(
        public type: string,
        public horsepower: number
    ) {}

    public getEngineInfo(): string {
        return `Engine: ${this.type}, ${this.horsepower} HP`;
    }
}

class Car extends Vehicle {
    private engine: Engine;

    public constructor(brand: string, model: string, year: number, engine: Engine) {
        super(brand, model, year);
        this.engine = engine;
    }

    public start(): void {
        console.log(`Car ${this.getDetails()} is starting...`);
    }

    public getCarInfo(): string {
        return `${this.getDetails()} | ${this.engine.getEngineInfo()}`;
    }
}

class Bike extends Vehicle {
    public constructor(brand: string, model: string, year: number) {
        super(brand, model, year);
    }

    public start(): void {
        console.log(`Bike ${this.getDetails()} is starting...`);
    }
}

export { Vehicle, Car, Bike, Engine };
