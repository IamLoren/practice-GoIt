import { getUsers } from "./json-placeholder.js";

getUsers(3, 1)
.then(response => console.log(response.map(item => item.name)))
.catch(err => console.log(err));