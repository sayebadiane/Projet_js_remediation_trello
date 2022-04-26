<?php
// if(isset($_REQUEST))
require_once(PATH_SRC."modele/tache.php");
if($_SERVER["REQUEST_METHOD"]=="POST"){ 
    if(isset($_REQUEST['action'])){
        if($_REQUEST['action']=='test'){
                 $date=$_POST["date"];
                 $json=$_POST["json"];
                 $nbr_colonne=$_POST["nbr_colonne"];
                 $json1=json_decode($json,true);
                 var_dump($json1);
                 ajout_tache($date,$json1,$nbr_colonne);
        }
       
    }

 }
 if($_SERVER["REQUEST_METHOD"]=="GET"){
    if(isset($_REQUEST['action'])){
        if($_REQUEST['action']=='liste'){
            $tabtache=recuper_taches();
            $tabtache=end($tabtache);
            $json_tache=json_encode($tabtache,JSON_PRETTY_PRINT);
            //return $json_tache;
            var_dump($json_tache);
            echo $json_tache;
        }
    }

 }