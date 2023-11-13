import { getStudents, getStudentById, addStudent } from "./students-api.js";


getStudents().then(console.log).catch(console.log);
// getStudentById(5).then(console.log).catch(console.log);

const student = {
    firstName: 'Sister',
    lastName: 'Miller',
    country: 'Ukraine',
    age: 35,
    city: 'Lviv',
};
// addStudent(student).then(console.log).catch(console.log);