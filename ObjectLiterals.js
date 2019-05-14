const person = {
  firstName: "Billy",
  lastName: "Endres",
  age: 24,
  email: "billy@hotmail.com",
  hobbies: ["surfing", "rock climbing", "surfing"],
  address: {
    city: "Victoria",
    Province: "BC"
  },
  getBirthYear: function() {
    return 1994 - this.age;
  }
};

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.province;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
