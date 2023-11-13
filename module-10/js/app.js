import { getUsers } from "./json-placeholder.js";

getUsers()
.then(response => console.log(response.map(item => item.name)))
.catch(err => console.log(err));