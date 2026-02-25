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
    const markup = `
        <div class="col">
            <div class="photo-card">
                <img src="${url}" alt="${title}-image">
                <div class="card-body">
                    <p class="date">${date}<p>
                    <h5>
                        ${title}
                    </h5>
                </div>
                <img src="./assets/img/pin.svg" alt="" class="pin">
            </div>
        </div>
    `;

    return markup;
}

/**
 * 
 * @param {string} markup 
 * @param {HTMLElement} domNode 
 */
function renderCard(markup, domNodeEl) {
    domNodeEl.innerHTML += markup;
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
            let cards = "";

            data.forEach(card => {

                const title = card.title;
                const thumbnail = card.url;
                const date = card.date;

                const markup = addCard(title, thumbnail, date);
                cards += markup;

            });

            renderCard(cards, domNodeEl);
        })
}

handleCards(endpoint, galleryRowEl)