import { data } from "../data/list.js";

const ulDOM = document.querySelector('ul');

const data = fetch('https://amik33.github.io/44-grupe-fetch/data/users.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    for (const user of data) {
        console.log(user);
    }
});

// let HTML = '';

// for ( const item of data) {
//     HTML += `<li>${item.id}) ${item.text}</li>`; 
// }
//  ulDOM.innerHTML = HTML;