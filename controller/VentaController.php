<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of VentaController
 *
 * @author root
 */
require_once 'lib/Controller.php';
require_once 'lib/View.php';
require_once 'model/Viaje.php';
require_once 'model/Caja.php';
class VentaController extends Controller{
    //put your code here
    public function Index()
    {
      //listamos los viajes  
      if (!isset($_GET['p'])){$_GET['p']=1;}
         if(!isset($_GET['q'])){$_GET['q']="";}
		 if(!isset($_GET['order'])){$_GET['order']="";}
       
        $obj = new Viaje();
	    $grilla= new  Grilla();
        $data = array();
	   	$cabecera=$obj->getHead('vista_viajes');
		$data['data'] = $obj->getListaViajes($_GET['q'],$_GET['p'],$cabecera,"vista_viajes",$_GET['order']);
        $data['query'] = $_GET['q'];
        $data['pag'] = $this->Pagination(array('rows'=>$data['data']['rowspag'],'url'=>'controller=Venta&action=Index','query'=>$_GET['q'],'order'=>$_GET['order']));
		$obj->session($_GET['id']);
	    $titulo=$_GET['controller'].' registrados';
	    $data['grilla'] = $grilla->asign($titulo,$_GET['controller'],$cabecera, $data['data']['rows'],$data['pag'],$data['data']['total'],false);
	    $data['controller']=$_GET['controller'];
        $view = new View();
        $view->setData($data);
        $view->setTemplate('view/venta/lista_viajes.php');
        echo $view->renderPartial();
    }
}

?>
