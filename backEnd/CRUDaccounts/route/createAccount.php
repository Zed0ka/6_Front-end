<?php
//todo fetch createAccount.js

include_once "./backEnd/utils/joinDB.php";

if(isset($_POST["submit"])) {
        if(!empty($_POST["pseudo_utilisateur"]) && !empty($_POST["login_utilisateur"]) && !empty($_POST["mdp_utilisateur"])){
            $pseudo     = $_POST["pseudo_utilisateur"];
            $userLog    = $_POST["login_utilisateur"];
            $mdp        = $_POST["mdp_utilisateur"];
            $avatar     = $_POST["avatar_utilisateur"];
            try {
                $req = $bdd->prepare("INSERT INTO utilisateur(pseudo_utilisateur, login_utilisateur, mdp_utilisateur, avatar_utilisateur) 
                                    VALUES(:pseudo, :userLog, :mdp, :avatar)");
                $req->execute([
                    "pseudo"=>$pseudo, 
                    "userLog"=>$userLog, 
                    "mdp"=>$mdp, 
                    "avatar"=>$avatar
                    ]);
                echo 'Le compte '.$pseudo.' a été ajouté à la BDD avec succès';
            } catch(Exception $error) {
                die("Erreur :".$error->getMessage());
            }
        } else {
            echo 'Veuillez remplir tous les champs obligatoire';
        }
    }
?>