<?php
// path initiating a game search

require_once 'C:\Users\Cedric Drouille\Desktop\Papiers\WebDev\ADRAR\000_Répertoire_perso_ADRAR\3_Mon_Projet_Fil_Rouge\6_Front-end\backEnd\CRUDgames\routes\getGames.php';

if(isset($_GET["submit"])) :
    //if field isn't empty, i'm taking what's entered to send it to get fetch'd
    if(!empty($_GET["gameTitleSearch"]) || !empty($_GET["gameSearch"])) :
        //request to server 
        //preparation:
        $stmt = $rdb->prepare(" SELECT nom_partie as title, 
                                jeu_partie as game, 
                                date_partie as gameDate, 
                                infos_supp_partie as infos, 
                                type_jeu_partie as gameType, 
                                difficulté_partie as difficulty, 
                                is_multijoueur_partie as isMulti, 
                                is_pleine_partie as isFull 
                                FROM parties
                                WHERE title 
                                LIKE % :gameTitleSearch %       
                                AND game LIKE % :gameSearch % 
                                AND gameType = :gameTypeSearch 
                                AND difficulty = :difficultySearch 
                                AND isMulti = :isMultiplayerSearch 
                                AND isFull = :isFullSearch; 
                                SELECT pseudo_utilisateur as makerName 
                                FROM utilisateurs
                                WHERE parties(fk_utilisateur) = utilisateurs(id_utilisateur)");
        //execution:
        $stmt->bindParam(":gameTitleSearch",$_GET["gameTitleSearch"]);
        $stmt->bindParam(":gameSearch",$_GET["gameSearch"]);
        $stmt->bindParam(":gameTypeSearch",$_GET["gameType"]);
        $stmt->bindParam(":difficultySearch",$_GET["difficulty"]);
        $stmt->bindParam(":isMultiplayerSearch",$_GET["multiplayerOnly"]);
        $stmt->bindParam(":isFullSearch",$_GET["alreadyFull"]);
        $stmt->bindParam(":isFriendMadeSearch",$_GET["friendsOnly"]);
        $rdb->execute();
        $stmtFetch = $rdb->fetchAll();
        $json_stmt = json_encode($stmtFetch);
        header("HTTP/1.1 200 Success");
        header("content-type:application/json; charset=utf-8");
        body($json_stmt);
    endif;
endif;
$rdb = null; //cleaning variable
?>