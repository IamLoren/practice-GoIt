const BASE_URL = 'https://64c770650a25021fde927baf.mockapi.io/';
const ENDPOINT = 'bc65-students';

// get
export async function getStudents () {
  const response = await axios.get(`${BASE_URL}${ENDPOINT}`)
  return response.data
  // return fetch(`${BASE_URL}${ENDPOINT}`)
  // .then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }
  //   return res.json();
  // });
};


// get
export async function getStudentById(id) {
  const response = await axios.get(`${BASE_URL}${ENDPOINT}/${id}`)
  return response.data

  // return fetch(`${BASE_URL}${ENDPOINT}/${id}`).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }
  //   return res.json();
  // });
}
// POST
export async function addStudent(student) {
  const response = await axios.post(`${BASE_URL}${ENDPOINT}`, student,{
      headers: {
        'content-type': 'application/json',
      },
    })
  return response.data


  // return fetch(`${BASE_URL}${ENDPOINT}`, {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify(student),
  // }).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }
  //   return res.json();
  // });
}
// PUT
export async function updateStudent(id, data) {

  const response = await axios.put(`${BASE_URL}${ENDPOINT}/${id}`, data,{
    headers: {
      'content-type': 'application/json',
    },
  })
return response.data


  // return fetch(`${BASE_URL}${ENDPOINT}/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // }).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }
  //   return res.json();
  // });
}

// DELETE
export async function deleteStudent(id) {
  const response = await axios.delete(`${BASE_URL}${ENDPOINT}/${id}`)
  // return response.data

  // return fetch(`${BASE_URL}${ENDPOINT}/${id}`, {
  //   method: 'DELETE',
  // }).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }
  //   return res.json();
  // });
}
