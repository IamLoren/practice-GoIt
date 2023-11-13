const BASE_URL = 'https://64c770650a25021fde927baf.mockapi.io/';
const ENDPOINT = 'bc65-students';

export function getStudents() {
    return fetch(`${BASE_URL}${ENDPOINT}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json();
        })
}

export function getStudentById(id) {
    return fetch(`${BASE_URL}${ENDPOINT}/${id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json();
        })
}

export function addStudent(student) {
    return fetch(`${BASE_URL}${ENDPOINT}`, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json();
    })
}

export function updateStudent(id,data) {
    return fetch(`${BASE_URL}${ENDPOINT}/${id}`, {
        method: 'PUT', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status)
        }
        return res.json();
    })

}