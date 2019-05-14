// document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);

function getJson() {
  fetch("http://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}
