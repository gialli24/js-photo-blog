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
const galleryContainerEl = document.querySelector(".gallery-container");

/* Functions */

/**
 * 
 * @param {string} title 
 * @param {string} url 
 * @returns card markup
 */
function addCard(title, url) {
    const markup = `
        <div class="photo-card">
            <img src="${url}" alt="" class="${title}-image">
            <h5>
                ${title}
            </h5>
            <img src="./assets/img/pin.svg" alt="" class="pin">
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

                const markup = addCard(title, thumbnail);
                cards += markup;

            });

            renderCard(cards, domNodeEl);
        })
}

handleCards(endpoint, galleryContainerEl)