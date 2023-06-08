let urlUsers = "https://jsonplaceholder.typicode.com/users";
let usersArray = [];

function fetchUsers() {
  fetch(urlUsers)
    .then((response) => response.json())
    .then((users) => users.forEach((user) => usersArray.push(user.name)));
}

function renderUser() {
  let htmlUser = ` <option value="" disabled selected hidden>Select user</option>`;
  usersArray.forEach(function (elem) {
    htmlUser += ` <option>${elem}</option> `;
  });
  return htmlUser;
}

export { fetchUsers, renderUser };
