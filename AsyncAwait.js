class httpFetch {
  //Make HTTP Get Request
  async get(url) {
    const response = await fetch(url);
    //Proceed once promise is resolved
    const resData = await response.json();
    //Proceed once second promise is resolved
    return resData;
  }

  //Make HTTP Post Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //Make HTTP Put Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = response.json();
    return resData;
  }

  //Make HTTP Delete Request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const resData = await "Resource Deleted";
    return resData;
  }
}

// async function getUsers() {
//   //Await response of fetch call
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   //Proceed once promise is resolved
//   const data = await response.json();
//   //Proceed once second promise is resolved
//   return data;
// }

// getUsers().then(users => console.log(users));
