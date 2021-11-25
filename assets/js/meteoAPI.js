//récupération des éléments DOM
let city = document.querySelector("#city");
let form = document.querySelector("#form");
let button = document.querySelector("#button");
let adress = document.querySelector("#button");

// creation de l'url
const url1 = "http://api.openweathermap.org/data/2.5/forecast?q=";
//const url2 = document.querySelector(Récupérer la ville dans l'input);
const url3 = "&appid=06a1a61f5da022dda5482cabfeee6442";

// Ecouter les boutons play/pause et pbInput
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.city.value);
    const name = event.target.city.value;
    console.log(name);
    buildUrl(name);
});
 
// Construire l'Url
const buildUrl = (nom) => {
    url = url1+nom+url3;
    console.log(url);
    askMeteo(url)
}

/**
 * fonction qui va chercher le résultat de la page Météo
 */
function askMeteo(url) {
    console.log(url);
    fetch(url)
        .then(fetchOK,fetchNop)
        .then(trtJson)
        .catch( err => {
            console.log(err)
        })
}

/**
 * fonction qui traite la reponse du fetch demandé à la météo API si elle est ok
 * @param {*} reponse 
 * @returns la reponse au format json
 */
 const fetchOK = (reponse) => {
    console.log(reponse.json);
    return reponse.json();
}

/**
 * fonction qui prends en charge la reponse jsonifier de la cat api
 * @param {*} json 
 */
 const trtJson = (json) => {
    console.log(json[0]);
    let tab = json[0];
        // tableau pour stocker les races
        let breeds = [];
        // on parcours le table de breeds
        tab.breeds.forEach(breed => {
            // si l'élement du tableau breeds a la propriété 'name'
            if (breed.hasOwnProperty('name')) {
                // j'ajoute le nom de la race au tableau
                breeds.push(breed.name);
             }
        });
        // Si j'ai au moins une race dans le tableau, je stocke la concaténation du tableau dans title
        // sinon je stocke "The Cat API"
        let title = breeds.length > 0 ? breeds.join(' ') : "The Cat API";
        changeTitle(title); // changement du titre
}
/**
 * fonction qui traite la reponse du fetch demandé à la cat api si elle est pas ok
 * @param {*} err 
 */
 const fetchNop = (err) => {
    console.log(err);
}





/**
 * fonction qui demande une photo avec fetch
 */

/** 
function askImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function(value){
        return value[0];
    })
    .then(function(objet){
        let urlImage = objet.url;
        image.setAttribute("src",urlImage);
    })
    .catch(function(error){
        console.log(error);
    })
}

//écoute le bouton pour detecter le clic
helloBtn.addEventListener("click", askImage);

*/

//[{"breeds":[],"id":"AUsOY15KJ","url":"https://cdn2.thecatapi.com/images/AUsOY15KJ.jpg","width":5392,"height":3595}]