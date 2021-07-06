const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
];

3.1;

function printFirstName(element) {
  console.log(element);
  return element.split(" ")[0];
}

console.log(programmers.map(printFirstName));

3.2;

function printLastName(element) {
  console.log(element);
  return element.split(" ")[1];
}

console.log(programmers.map(printLastName));

3.3;

const vorname = programmers.reduce((foo, currentVal) => {
  if (currentVal) {
    return (currentVal.split(" ")[0].length += foo);
  }
  return 0;
}, 0);

console.log({ vorname });

3.4;

const nachname = programmers.reduce((foo, currentVal) => {
  if (currentVal) {
    return (currentVal.split(" ")[1].length += foo);
  }
  return 0;
}, 0);

console.log({ nachname });

3.5;
let firstName = programmers.map((element) => element.split(" ")[0]);
let firstNameLength = firstName.map((element) => element.length);
let lastName = programmers.map((element) => element.split(" ")[1]);
let lastNameLength = programmers.map((element) => element.split(" ")[1].length);
let fullName = programmers.map((el) => el.split(" "));
let totalName = programmers.map((element) => element.split(" ").join(""));
let totalNameLength = totalName.map((element) => element.length);
let sumOfAllNames = totalNameLength.reduce((acc, el) => acc + el, 0);
console.log(firstNameLength);
console.log(lastNameLength);
console.log(sumOfAllNames);

3.6;

const firstAscneding = programmers.sort(function (a, b) {
  return a.localeCompare(b);
});

console.log(programmers.sort());

3.7;

let lastNameAlphabetical = lastName.sort();

console.log(lastName.sort());

3.8;

const ascending = programmers.sort(
  (a, b) => a.split(" ")[0].length - b.split(" ")[0].length
);

console.log({ foo: programmers });

3.9;

const descending = programmers.sort(
  (b, a) => a.split(" ")[0].length - b.split(" ")[0].length
);

console.log({ foo: programmers });
