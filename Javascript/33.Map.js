// The JavaScript ES6 has introduced two new data structures, i.e Map and WeakMap.
// Maps are heterogenius

// Create JavaScript Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}

// Insert Item to Map
// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}
map1.set('google', "google.com");
console.log(map1);

// You can also use objects or functions as keys. For example,

// Map with object key
let map2 = new Map();

let obj = {};
map2.set(obj, {name: 'Jack', age: "26"});

console.log(map2); // Map {{} => {name: "Jack", age: "26"}}


// Access Map Elements
console.log(map1.get('info')); // {name: "Jack", age: "26"}

// JavaScript Map Size
console.log(map1.size); // 2

// Check Map Elements
// You can use the has() method to check if the element is in a Map. For example,
console.log(map1.has('info')); // true

// Removing Elements
// You can use the clear() and the delete() method to remove elements from a Map.

// delete()
// The delete() method returns true if a specified key/value pair 
// exists and has been removed or else returns false.

// removing a particular element
map1.delete('address'); // false
console.log(map1); 

map1.delete('info'); // true
console.log(map1); // Map(1) { 'google' => 'google.com' }


// clear()
// The clear() method removes all key/value pairs from a Map object. For example,
map1.clear();
console.log(map1); // Map {}



// Iterate Through a Map

map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + '- ' + value);
}

// using forEach method() - here we can get value and key. but not k,v
map1.forEach(function(value, key) {
    console.log(key + '- ' + value)
})

// Iterate Over Map Keys
for (let key of map1.keys()) {
    console.log(key)
}

// Iterate Over Map Values
for (let values of map1.values()) {
    console.log(values);
}

// Get Key/Values of Map
for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}


