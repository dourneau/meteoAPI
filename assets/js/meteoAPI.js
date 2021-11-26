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
    console.log(json);
    // Création d'un tableau
    let myList = document.createElement('ul');
    // Placement du tableau après le formulaire
    form.after(myList);
    // Le résultat json est une liste d'une seule valeur
    let liste = json['list'];
    // boucle sur le nombre de résultats: toutes les 3h sur 5 jours soit 20 résultats
    for (let i=0; i<20 ; i++) {
        // la date (timestamp) du jour est associée au mot "dt"
        let dtemps = liste[0].dt;
        // conversion de dtemps en millisecondes
        dtemps = dtemps * 1000;
        // création de la variable date ts
        let ts = new Date(dtemps);
        // conversion de la date en JJ/MM/AA +GMT
        let humanDateFormat = ts.toLocaleString();
        // Affichage dans console
        console.log(humanDateFormat);
        // création d'une ligne du tableau
        let listdate = document.createElement('li');

        listdate.textContent = humanDateFormat;
        myList.appendChild(listdate);
    }





    /*
    // Tentative avec forEach
    json.temps.forEach(dtemps => {
        // si l'élement du tableau temps a la propriété 'dt'
        if (dt.hasOwnProperty('dt')) {
            // j'ajoute la date au tableau
            temps.push(dtemps.dt);
         }
         console.log(temps.length);
    });
    */


    /*
    for (let i=0; i<tps.length;i++) {
        var listItem = document.createElement('li');
        listItem.textContent = tps[i];
        myList.appendChild(listItem);

    } 
    */

}



/*
function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

*/







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