<?php
// path initiating a game search

require_once( __DIR__.'/../../utils/joinDB.php');

function cleanText($txt) {
    return htmlentities(strip_tags(stripslashes(trim($txt))));
}

if(isset($_POST["submitSearch"])) { //send the form via submit button : takes every field and create a variable for each field, with its name. Not just a "press the button" thingy
    //if field isn't empty, i'm taking what's entered to send it to get fetch'd
    //* text inputs empty : send every stored games in rdb
    $gameTitleSearch = (!isset($_POST["gameTitleSearch"]) || empty($_POST["gameTitleSearch"])) ? "%" : '%'.cleanText($_POST["gameTitleSearch"]);
    $gameSearch = (!isset($_POST["gameSearch"]) || empty($_POST["gameSearch"])) ? "%" : '%'.cleanText($_POST["gameSearch"]);
    $multiplayerOnly = (!isset($_POST["multiplayerOnly"])) ? 0 : (($_POST['multiplayerOnly'] == "on") ? 1 : 0);
    $alreadyFull = (!isset($_POST["alreadyFull"])) ? 0 : (($_POST['alreadyFull'] == "on") ? 1 : 0);
    $friendsOnly = (!isset($_POST["friendsOnly"])) ? 0 : (($_POST['friendsOnly'] == "on") ? 1 : 0);
    $difficulty = 0;
    $gameType = 0;

        //request to server 
    try { // creation of a prepared request which links the informations
        $stmt = $rdb->prepare("SELECT nom_partie as title, jeu_partie as game, date_partie as gameDate, infos_supp_partie as infos, type_jeu_partie as gameType, difficulte_partie as difficulty, is_multijoueur_partie as isMulti, is_pleine_partie as isFull, utilisateurs.pseudo_utilisateur as username FROM parties INNER JOIN utilisateurs ON fk_utilisateur = id_utilisateur WHERE nom_partie LIKE :gameTitleSearch AND jeu_partie LIKE :gameSearch AND type_jeu_partie = :gameTypeSearch AND difficulte_partie = :difficultySearch AND is_multijoueur_partie = :isMultiplayerSearch AND is_pleine_partie = :isFullSearch AND is_ami_creee = :isFriendMadeSearch;");
    //execution:
    $stmt->bindParam(":gameTitleSearch",$gameTitleSearch);
    $stmt->bindParam(":gameSearch",$gameSearch);
    $stmt->bindParam(":gameTypeSearch",$gameType);
    $stmt->bindParam(":difficultySearch",$difficulty);
    $stmt->bindParam(":isMultiplayerSearch",$multiplayerOnly);
    $stmt->bindParam(":isFullSearch",$alreadyFull);
    $stmt->bindParam(":isFriendMadeSearch",$friendsOnly);
    $stmt->execute();
    $stmtFetch = $stmt->fetchAll(); //récupère TOUS les enr sous forme tableau
    } catch (Exception $e) {
        $error = [
        "code" => 500,
        "message" => "Erreur Serveur".$e->getMessage()
        ];
    }
} else {
    $error = [
        "code" => 400,
        "message" => "Remplir le formulaire svp"
        ];
}

header("Content-Type:application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");

if (isset($error)) {
    http_response_code($error["code"]);
    echo json_encode($error);
} else { //if no error generated : proceed with encoding
    http_response_code(200);
    echo json_encode($stmtFetch);
}

$rdb = null; //cleaning variable
?>
