// DOM : ajout de gameCard
const displayGames = document.querySelector(".displayGames");

// carte contenant les infos de jeu :
const gameCard = document.createElement ("div");
gameCard.classList.add("gameCard");
displayGames.appendChild(".gameCard");

const gameCardTitle = document.createElement ("h3"); // titre de carte
gameCardTitle.classList.add("gameCardTitle");
gameCardTitle.innerText= `${partie[nom_partie]}`;
gameCard.appendChild("gameCardTitle");

const gameCardAuthor = document.createElement ("p"); // auteur.e de la partie
gameCardAuthor.classList.add("gameCardAuthor");
gameCardAuthor.innerText= `${utilisateur[pseudo_utilisateur]}`;
gameCard.appendChild("gameCardAuthor");

const linebreak = document.createElement("br");
gameCard.appendChild(linebreak);

const gameCardGame = document.createElement("p"); // jeu de la partie
gameCardGame.classList.add("gameCardGame");
gameCardGame.innerText= `${jeu[nom_jeu]}`;
gameCard.appendChild("gameCardGame");

gameCard.appendChild(linebreak);

const gameCardDateStamp = document.createElement("p"); // date de la partie
gameCardDateStamp.classList.add("gameCardDateStamp");
gameCardDateStamp.innerText= `${jeu[nom_jeu]}`;
gameCard.appendChild("gameCardDateStamp");

gameCard.appendChild(linebreak);

const displayGameDetail = document.createElement("button"); // infos supp
displayGameDetail.classList.add("displayGameDetail");
displayGameDetail.innerText="Ouvrir"
gameCard.appendChild(".displayGameDetail");

const addPlanning = document.createElement("button"); // bouton "ajouter la partie" au planning du user
addPlanning.classList.add("addPlanning");
addPlanning.innerText="Je rejoins!"
gameCard.appendChild(".addPlanning");