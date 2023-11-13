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