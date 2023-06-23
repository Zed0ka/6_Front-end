const formSearch = document.querySelector("#formSearch");
formSearch.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const data = await getGamesFunction(formSearch);
    data.forEach(game => {
        createCards(game);
    });
})

// error msg
const $errorDiv = document.querySelector(".error");
document.onerror = (event) => {
    $errorDiv.textContent = event.message;
    $errorDiv.classList.add("active");
}

// DOM : ajout de gameCard
const displayGames = document.querySelector(".cardsContainer");

function createCards({title,game,gameDate,infos,gameType,difficulty,isMulti,isFull,username}) {
    const gameCard = document.createElement ("div"); // carte contenant les infos de jeu :
    gameCard.classList.add("gameCard");
    displayGames.appendChild(gameCard);
    
    const gameCardTitle = document.createElement ("h3"); // titre de carte
    gameCardTitle.classList.add("gameCardTitle");
    gameCardTitle.innerText= `${title}`;
    gameCard.appendChild(gameCardTitle);
    
    const gameCardAuthor = document.createElement ("p"); // auteur.e de la partie
    gameCardAuthor.classList.add("gameCardAuthor");
    gameCardAuthor.innerText= `${username}`;
    gameCard.appendChild(gameCardAuthor);
    
    const linebreak = document.createElement("br");
    gameCard.appendChild(linebreak);
    
    const gameCardGame = document.createElement("p"); // jeu de la partie
    gameCardGame.classList.add("gameCardGame");
    gameCardGame.innerText= `${game}`;
    gameCard.appendChild(gameCardGame);
    
    gameCard.appendChild(linebreak);
    
    const gameCardDate = document.createElement("p"); // date de la partie
    gameCardDate.classList.add("gameCardDate");
    gameCardDate.innerText= (new Date(gameDate)).toLocaleDateString();
    gameCard.appendChild(gameCardDate);
    
    gameCard.appendChild(linebreak);
    
    const displayGameDetail = document.createElement("button"); // infos supp
    displayGameDetail.classList.add("displayGameDetail");
    displayGameDetail.innerText="Ouvrir"
    gameCard.appendChild(displayGameDetail);
    
    const addPlanning = document.createElement("button"); // bouton "ajouter la partie" au planning du user
    addPlanning.classList.add("addPlanning");
    addPlanning.innerText="Je rejoins!"
    gameCard.appendChild(addPlanning);
}

