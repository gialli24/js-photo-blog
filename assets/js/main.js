/* 
    endpoint: https://lanciweb.github.io/demo/api/pictures/
    response:
    [
        {
            "id": 1,
            "title": "Skate Park",
            "date": "01-07-2024",
            "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
        },
        {
            "id": 2,
            "title": "Passeggiata",
            "date": "16-07-2024",
            "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
        },
        ...
    ]

    Array of objects with id, title, date, url properties
*/

/* API */
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

/* DOM nodes */
const galleryRowEl = document.querySelector(".gallery-container>.row");

/* Functions */

/**
 * 
 * @param {string} title 
 * @param {string} url 
 * @param {string} date 
 * @returns card markup
 */
function addCard(title, url, date) {
    const colEl = document.createElement("div");
    colEl.className = "col";

    const markup = `
        <div class="photo-card">
            <img src="${url}" alt="${title}-image">
            <div class="card-body">
                <span class="date">${date}<span>
                <h5>
                    ${title}
                </h5>
            </div>
            <img src="./assets/img/pin.svg" alt="" class="pin">
        </div>
    `;

    colEl.innerHTML = markup;

    return colEl;
}

/* API Call */

/**
 * 
 * @param {url} endpoint 
 * @param {HTMLElement} domNodeEl 
 */
function handleCards(endpoint, domNodeEl) {
    fetch(endpoint)
        .then(resp => resp.json())
        .then(data => {
            data.forEach(card => {

                const title = card.title;
                const thumbnail = card.url;
                const date = card.date;

                const colEl = addCard(title, thumbnail, date);
                domNodeEl.appendChild(colEl);

            });
        })
}

handleCards(endpoint, galleryRowEl)