<?php require_once('lib/funciones.php');
$obj= new num();
echo $obj->miles(150);
?>
<?php
require_once("model/main.php");
$obj= new Main();
$cabecera=$obj->getHead('v_proyecto');
$r=$obj->index_P("",1,$cabecera,"v_proyecto","");
echo $r;
/*
foreach($r as $key=>$val)
{
echo "-".$val[0];

}*/

?>