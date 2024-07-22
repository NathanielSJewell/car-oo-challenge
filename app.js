// PART 1
//Create a class for Vehicle.
class Vehicle {
	constructor(make, model, year) {
		//What user passes in to a new created object should add the properties of make, model, and year.
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return `Beep.`;
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

let myVehicle = new Vehicle(`Honda`, `Accord`, 2005);

// PART 2
// Create a class for Car
class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

let myFirstCar = new Car(`Toyota`, `Corolla`, 2005);

//Create a class for motorcycle
class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return `VROOM!!!`;
	}
}

let myFirstMotorcycle = new Motorcycle(`Honda`, `Nighthawk`, 2000);

//Create a class for garage.
class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(vehicle) {
		if (typeof vehicle === `object` && this.vehicles.length <= garage.capacity) {
			this.vehicles.push(vehicle);
			console.log(`Vehicle Added!!`);
		}
		if (typeof vehicle !== `object`) {
			console.log(`Only vehicles are allowed in here!!`);
		}
		if (this.vehicles.length > garage.capacity) {
			this.vehicles.pop();
			console.log(`Garage is full!!`);
		}
	}
}

//provide garage with the capacity
let garage = new Garage(2);
