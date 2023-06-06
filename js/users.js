/**
 * Pagal gautus vartotoju duomenis yra sugeneruojamas HTML.
 * @param {Object[]} data Vartotoju duomenu sarasas.
 * @param {string} data[].name Vartotojo vardas;
 * @param {number} data[].age Vartotojo amzius metais;
 * @param {boolean} data[].isMarried Vartotojo vedybinis statusas;
 * @returns 
 */

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

/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
// Project.prototype.assign = function (employees) {
//     // ...
// };