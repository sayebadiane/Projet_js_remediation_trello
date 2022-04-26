<?php
function json_to_array(string $key):array{ 
  $datajson=file_get_contents(PATH_DATA);
  $data=json_decode($datajson,true);
    return ($data[$key]);
  

}

function json_to_array_all():array{ 
  $datajson=file_get_contents(PATH_DATA);
  $data=json_decode($datajson,true);
    return $data;
}


/// Enregistrer et mise a jour des donne du fichier
function array_to_json(string $key, array $data){
  $array=json_to_array_all();
  $array[$key][]=$data;
  $json=json_encode($array,JSON_PRETTY_PRINT);
  file_put_contents(PATH_DATA,$json);
    

}