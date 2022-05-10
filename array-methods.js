const items = [
    { name: 'Bike',     price: 100 },
    { name: 'TV',       price: 200 },
    { name: 'Album',    price: 10 },
    { name: 'Book',     price: 5 },
    { name: 'Phone',    price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

// FILTER
const filteredItems = items.filter((item) => {
    return item.price <= 100
});

// console.log(items);
// console.log(filteredItems);


// MAP
const itemNames = items.map((item) => {
return item.price
});

// console.log(itemNames);


// FIND
const findItems = items.find((item) => {
    return item.name === 'Book'
});

// console.log(findItems);



// FOR EACH
items.forEach((item) => {
    console.log(item.name);
});



// SOME FUNCTION
const inexpensiveItems = items.some((item) => {
    return item.price <= 100
});

// console.log(inexpensiveItems);


// EVERY 
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 1000
});

// console.log(hasInexpensiveItems);


// REDUCE
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);

// console.log(total);



// INCLUDES

const things = [1, 2, 3, 4, 5]

const includesTwo = things.includes(2);

console.log(includesTwo);