// import { data } from "../data/list.js";

import { renderUsersList } from "./users.js";

const url = 'https://amik33.github.io/44-grupe-fetch';
const sourceCSS = '/css/main.css';
fetch(url + sourceCSS)
    .then(res => res.text())
    .then(css => {
        const headDOM = document.querySelector('head');
        if (headDOM) {
            headDOM.insertAdjacentHTML('beforeend', `<style>${css}</style>`);
        }
    });

    const sourceUsers = '/data/users.json';
    fetch(url + sourceUsers)
        .then(res => res.json())
        .then(renderUsersList)
        .catch(console.error)
        .finally(() => {
            console.log('GRAND FINAL!!!');
        });

// const res = await fetch(url + sourceUsers);
// const data = await res.json();
// renderUsersList(data);
