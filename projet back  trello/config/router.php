<?php
if(isset($_REQUEST["controller"])){
    
    switch($_REQUEST["controller"]){
        case "tache":
            require_once(PATH_SRC."controller/controller.php");
        break;

    }

}
// else{
   
//     require_once(PATH_SRC."controller/controller.php");
// }