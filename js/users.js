export function renderUsersList(data) {
    const ulDOM = document.querySelector('ul');
    let HTML = '';

    for (const user of data) {
        HTML += `<ul class="service">
                    <il class="service-title">${user.name}</il>
                    <il>${user.age}</il>
                    <il class="service-description">${user.isMarried}</il>
                </ul>`;

    }
        
   ulDOM.innerHTML = HTML;
}