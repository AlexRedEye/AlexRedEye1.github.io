//declares variable
let name = 'Alex';
//console.log(name);
const interestRate = 0.3;
let isApproved = true;
let selected = null;
let person = 
{
    name: 'Alex',
    age: 18
};
person.age = 18.5;
let selection = 'name';
person[selection] = 'AlexRedEye';

//console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = '42069';
//console.log(selectedColors.length);

function greet(name, lastName)
{
    console.log('Hello ' + name + ' ' + lastName);
}

function square(number)
{
    return number * number;
}

//greet('Alex', 'Marquez');
//greet('Damien', 'Torres');
console.log(square(2));