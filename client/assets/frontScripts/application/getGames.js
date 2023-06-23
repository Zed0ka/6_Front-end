const url = 'http://localhost/ADRAR/000_Répertoire_perso_ADRAR/3_Mon_Projet_Fil_Rouge/6_Front-end/backEnd/CRUDgames/routes/getGames.php';

async function getGamesFunction(form){
    const formData = new FormData(form);
    formData.append('submitSearch',""); //Correcting 400 bad Request
    const data = await fetch(url, {
        method: 'POST',
        cache: 'default',
        body: formData
    })
    .then((response)=>{
        //Request error management
        if (!response.ok) {
            throw new Error(`Une erreur est survenue - ${response.status}: ${response.statusText}`);
        } else { //Request ok : parse to js object
            return response.json();
        }
    });
    return data;
}