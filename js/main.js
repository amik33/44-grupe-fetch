// import { data } from "../data/list.js";

const ulDOM = document.querySelector('ul');
let HTML = '';
const data = fetch ('https://amik33.github.io/44-grupe-fetch/data/users.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    for (const user of data) {
        HTML += `<ul class="service">
        <il class="service-title">${user.name}</il>
        <il>${user.age}</il>
        <il class="service-description">${user.isMarried}</il>
        </ul>`;
        ulDOM.innerHTML = HTML;
    }
});


// for ( const item of data) {
//     HTML += `<li>${item.id}) ${item.text}</li>`;
//      ulDOM.innerHTML = HTML;
// }

