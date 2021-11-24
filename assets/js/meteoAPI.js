//récupération des éléments DOM
let image = document.querySelector("#image");
let posX = document.querySelector("#posX");
let posY = document.querySelector("#posY");

// creation de l'url
const url1 = "http://api.openweathermap.org/data/2.5/forecast?";
const url2 = document.querySelector(Récupérer la ville dans l'input)
const url3 = "&appid=06a1a61f5da022dda5482cabfeee6442";

/**
 * fonction qui demande une photo avec fetch
 */
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




//[{"breeds":[],"id":"AUsOY15KJ","url":"https://cdn2.thecatapi.com/images/AUsOY15KJ.jpg","width":5392,"height":3595}]