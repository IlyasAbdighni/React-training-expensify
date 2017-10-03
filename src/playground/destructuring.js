// const person = {
//     name: 'Andrew',
//     age: 30,
//     location: {
//         city: 'Urumqi',
//         temp: 92,
//     },
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age} yaers old.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}.`);
// }

const addressBook = ['ilyas', 26, 'Urumqi'];

const [name = 'Unknown', , city] = addressBook;

console.log(`${name} is living in ${city}`);

