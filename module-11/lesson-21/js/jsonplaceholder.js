import { params } from "./params.js";
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//const BASE_URL = 'https://jsonplaceholder.typicode.com';
//import axios from axios;
const END_POINT = 'users'
// ! fetch
// export function getUsers() {
//
//   const searchParams = new URLSearchParams({
//     _limit: 5,
//     _page: 2,
//   });

//   return fetch(`${BASE_URL}/${END_POINT}?${searchParams}`).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// ! axios


function getUsers(page,perPage) { 
    //return axios.get(`${BASE_URL}/${END_POINT}`).then(res => res.data) 
  return  axios.get(`/${END_POINT}`,{
    params: {
      _limit: perPage,
     _page: page,
    }
  }) 
}  







// ! pagination
const ulEl = document.querySelector('.js-gallery');
const loadBtn = document.querySelector('.js-load-more-btn');


let page = 1;
const perPage = 5;
const totalUser = 10;
document.addEventListener('DOMContentLoaded', renderPage);
loadBtn.addEventListener('click', onMoreData)

function renderPage() { 
    getUsers(page,perPage)
        .then(res => { 
            const markup = res.data
                .map(({ id, name }) => `<li>${id} - ${name}</li>`).join('');
            ulEl.insertAdjacentHTML('beforeend', markup);
                const lastPage =Math.ceil(totalUser/perPage)
            if (lastPage === page) { 
                alert(`The are is no more users `)
                loadBtn.style.display = 'none'
            }
        })
        .cath(error => console.log(error.message));

}
function onMoreData() { 
    page += 1;
    renderPage();

}
