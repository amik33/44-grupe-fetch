import { data } from "../data/list.js";

console.log(data);

const ulDOM = document.querySelector('ul');

let HTML = '';

for ( const item of data) {
    HTML += `<li>${item.id}) ${item.text}</li>`; 
}
 ulDOM.innerHTML = HTML;