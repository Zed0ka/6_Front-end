const getGames = new Worker("workerGetGames.js")

const displayGames = document.querySelector(".displayGames")

const gameCard = document.createElement ("div");
gameCard.classList.add("gameCard");
displayGames.appendChild(".gameCard");

const gameCardTitle = document.createElement ("h4");
gameCardTitle.classList.add("gameCardTitle");
gameCardTitle.innerText= `${partie[nom_partie]}`;
gameCard.appendChild("gameCardTitle");

const gameCardAuthor = document.createElement ("p");
gameCardAuthor.classList.add("gameCardAuthor");
gameCardAuthor.innerText= `${utilisateur[pseudo_utilisateur]}`;
gameCard.appendChild("gameCardAuthor");

const linebreak = document.createElement("br");
gameCard.appendChild(linebreak);

const gameCardGame = document.createElement("p");
gameCardGame.classList.add("gameCardGame");
gameCardGame.innerText= `${jeu[nom_jeu]}`;
gameCard.appendChild("gameCardGame");

gameCard.appendChild(linebreak);

const gameCardDateStamp = document.createElement("p");
gameCardDateStamp.classList.add("gameCardDateStamp");
gameCardDateStamp.innerText= `${jeu[nom_jeu]}`;
gameCard.appendChild("gameCardDateStamp");

gameCard.appendChild(linebreak);

const displayGameDetail = document.createElement("button");
displayGameDetail.classList.add("displayGameDetail");
displayGameDetail.innerText="Ouvrir"
gameCard.appendChild(".displayGameDetail");

const addPlanning = document.createElement("button");
addPlanning.classList.add("addPlanning");
addPlanning.innerText="Je rejoins!"
gameCard.appendChild(".addPlanning");