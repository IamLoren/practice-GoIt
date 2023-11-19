const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getUsers(limit, page) { 
const END_POINT = 'users';
const searchParams = new URLSearchParams({
    _limit: limit,
    _page: page,
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

