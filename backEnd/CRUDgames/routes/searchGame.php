<?php
// path initiating a game search

require_once './backEnd/utils/joinDB.php';

if(isset($_POST["submit"])) {
    //si le champs n'est pas vide, je prends les infos sélectionnées et je les envoie en SQL via js
    if(!empty($_GET["gameTitleSearch"]) || !empty($_GET["gameSearch"])) {
        $gameTitleSearch = $_GET["gameTitleSearch"];
        $gameSearch = $_GET["gameSearch"];
        $gameType = $_GET["gameType"];
        $difficulty = $_GET["difficulty"];
        $isMultiplayer = $_GET["multiplayerOnly"];
        $isFull = $_GET["alreadyFull"];
        $isFriendMade = $_GET["friendsOnly"];
        //request to server 
        // preparation:
        $data = $rdb->prepare(" SELECT nom_partie as title, 
                                jeu_partie as game, 
                                date_partie as gameDate, 
                                infos_supp_partie as infos, 
                                type_jeu_partie as gameType, 
                                difficulté_partie as difficulty, 
                                is_multijoueur_partie as isMulti, 
                                is_pleine_partie as isFull 
                                FROM parties
                                WHERE title 
                                LIKE '% .$gameTitleSearch. %' 
                                AND game LIKE '% .$gameSearch. %' 
                                AND gameType = $gameType 
                                AND difficulty = $difficulty 
                                AND isMulti = $isMultiplayer 
                                AND isFull = $isFull");
        //execution:
            $rdb->execute();
        }
        // je veux récup les radio et les checkboxes
        // une fois récup, je SQL la demande
        // Besoin d'ajouter des boolean pour les radios et les checkbox dans la BDDr
        // Après recherche, besoin de récup le username du créateur de la partie
    }
?>