<?php
function ajout_tache($date,array $collonne,$nombre){
    $data=array(
        "date_save"=>$date,
        "colonne"=>$collonne,
        "nbr_col"=>$nombre
    );
    array_to_json("taches",$data);
}
function recuper_taches():array{
    $tabtaches=json_to_array("taches");
    $result=[];
    foreach($tabtaches as $user){
        
         $result[]=$user;
    }
    return $result;


}