const http = new httpFetch();

//Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .then(err => console.log(err));

//   User Data
const data = {
  name: "Billy Endres",
  username: "bendres",
  email: "billy@hotmail.com"
};

//Create User
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .then(err => console.log(err));

// Update User
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .then(err => console.log(err));

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .then(err => console.log(err));
