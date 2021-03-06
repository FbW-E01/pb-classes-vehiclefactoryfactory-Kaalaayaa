// Vehicle Factory Factory
// Create "factory factory" function that returns a constructor function.

// The factory factory takes in one parameter, "type".

// Each created factory needs to create objects with this given type.

// Each created factory needs to take in three parameters and save them to the created objects:

// make
// model
// Use your factory factory to create at least five factories, such as

// bicycle factory
// car factory
// boat factory
// blimp factory
// train factory
// Lastly, use those factories to create some vehicles.

// Store all your created vehicles inside one array, loop over that array and print out each vehicle.

// Question: Check the type of your factories and of the objects that your factories create - what is the type of a factory and what is the type of a created object? Add your answer as comments into into your solution file.

function factoryFactory(type){

    return function Factory(make, model){
        this.type = type;
        this.make = make;
        this.model = model;
    }
}

const bicycleFactory = factoryFactory("bike");
const CarFactory = factoryFactory("car");
const BoatFactory = factoryFactory("boat");
const BlimpFactory = factoryFactory("blimp");
const TrainFactory = factoryFactory("train");

const bike = new bicycleFactory("something", "something else");
const car = new CarFactory("something", "something else");
const boat = new BoatFactory("something", "something else");
const blimp = new BlimpFactory("something", "something else");
const train = new TrainFactory("something", "something else");


const all = [bike, car, boat, blimp, train];

for( vehicle in all){
    console.log(all[vehicle]);
}