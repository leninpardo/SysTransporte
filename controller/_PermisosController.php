<?php
require_once 'lib/Controller.php';
require_once 'lib/View.php';
require_once 'model/_Permisos.php';
class _PermisosController extends Controller {

    public function Index()
    {
        $data = array();
        $view = new View();
        $data['cargos'] = $this->Select(array('id'=>'id_perfil','name'=>'id_perfil','table'=>'seguridad.perfil','code'=>'0'));
        $view->setData( $data );
        $view->setTemplate( 'view/_Permisos/_Permisos.php' );
       // $view->setLayout( 'template/layout.php');
        //$view->render();
		echo $view->renderPartial();
    }

    public function Modulos()
    {
	    $data = array();
        $objpermisos = new _Permisos();
        $data['mod'] = $objpermisos->Modulos($_GET['id_perfil']);
        $data['id_perfil'] = $_GET['id_perfil'];
        $view = new View();
        $view->setData($data);        
        $view->setTemplate( 'view/_Permisos/_Modulos.php' );
        echo $view->renderPartial();
    }

    function Save()
    {
        $obj = new _Permisos();
        print_r(json_encode($obj->Save($_GET)));
    }
	function _Save()
    {
        $obj = new _Permisos();
        print_r(json_encode($obj->_Save($_GET)));
    }
	 public function q1()
    {
        print_r($_GET);
        foreach ($_GET['codigo'] as $key => $value)
        {  
		       if ($_GET['acceder'][$key]=='on'){$_GET['acceder'][$key]=1;}else{$_GET['acceder'][$key]=0;}
			    if ($_GET['insertar'][$key]=='on'){$_GET['insertar'][$key]=1;}else{$_GET['insertar'][$key]=0;}
                if ($_GET['modificar'][$key]=='on'){$_GET['modificar'][$key]=1;}else{$_GET['modificar'][$key]=0;}
                if ($_GET['eliminar'][$key]=='on'){$_GET['eliminar'][$key]=1;}else{$_GET['eliminar'][$key]=0;}
            echo $value . '-' . $_GET['modificar'][$key] . '-' 
			. $_GET['eliminar'][$key] .'-'.$_GET['insertar'][$key].'-'.$_GET['acceder'][$key].'<br />';
			
        }

    }
}

?>