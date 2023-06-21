const url = 'http://localhost/ADRAR/000_Répertoire_perso_ADRAR/3_Mon_Projet_Fil_Rouge/6_Front-end/backEnd/CRUDgames/routes/getGames.php';
const getGamesHeaders = new Headers();
getGamesHeaders.append("Content-Type", "application/json");

async function getGamesFunction(){
    const request = await fetch(url, {
        method: 'GET',
        headers: getGamesHeaders,
        mode: 'cors',
        cache: 'default',
    })
    .then((request)=>{
        //Request error management
        if (!request.ok) {
            throw new Error(`Une erreur est survenue : ${request.status}`);
        } else { //Request ok : parse to js object
            let data = request.json();
        }
    })
}

getGamesFunction();