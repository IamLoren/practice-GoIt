const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getUsers() { 
const END_POINT = 'users';
const searchParams = new URLSearchParams({
    _limit: 5,
    _page: 2,
})

return fetch(`${BASE_URL}/${END_POINT}?${searchParams}`)
.then(response => {
    if(!response.ok) {
        throw new Error(response.status)
    }
   return response.json();
})
}

// getUsers()
// .then(response => console.log(response.map(item => item.name)))
// .catch(err => console.log(err));

