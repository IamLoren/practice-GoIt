import { getStudents, getStudentById } from "./students-api.js";


getStudents().then(console.log).catch(console.log);
getStudentById(5).then(console.log).catch(console.log);