let person = {
    name: 'Ashish',
    age: 24
};

//Dot Notation - Preferred
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';

let selection = 'name';
person[selection = 'Mary'];

console.log(person.name);

