<?php
define("ROOT",str_replace("public".DIRECTORY_SEPARATOR."index.php","",$_SERVER["SCRIPT_FILENAME"]));
// define("ROOT",str_replace("public".DIRECTORY_SEPARATOR."index.php","",$_SERVER['SCRIPT_FILENAME']));
define("PATH_SRC",ROOT."src".DIRECTORY_SEPARATOR);
define("PATH_ORM",ROOT."orm".DIRECTORY_SEPARATOR);
define("PATH_VALIDATOR",ROOT."validator.php".DIRECTORY_SEPARATOR);
define("PATH_ROLE",ROOT."role.php".DIRECTORY_SEPARATOR);
define("PATH_ROUTER",ROOT."router.php".DIRECTORY_SEPARATOR);
define("PATH_DATA",ROOT."data".DIRECTORY_SEPARATOR."db.json");
define("web_ROOT",$_SERVER["SCRIPT_FILENAME"]);

