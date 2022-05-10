// Step 1

// class Car {
//     static comparePrice() {
//         console.dir(this);
//     }
// }

// Car.comparePrice();

// Static method is called on a class, instance method is called on an instance of the class. 


// Step 2
//Instance method

// class Car {
//     static comparePrice() {
//         console.dir(this);
//     }
//     getColor() {
//         console.dir(this)
//     }
// }

// const newCar = new Car();

// newCar.getColor(); // gives me car object
// Car.comparePrice(); // gives me a car class



// Step 3

class Car {
    // constructor(color, price) {
    //     Object.assign(this, {color, price});
    // }

    static comparePrice(car1, car2) {
        return Math.abs(car1.price - car2.price);
    }

    // getColor() {
    //     return this.color;
    // }
}

const redCar = new Car('red', 100);
const blueCar = new Car('blue', 102);

console.log(redCar.getColor()) 
console.log(Car.comparePrice(redCar, blueCar)); 