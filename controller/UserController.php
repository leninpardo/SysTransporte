<?php
require_once 'lib/Controller.php';
require_once 'lib/View.php';
require_once 'model/User.php';
require_once 'model/Grid.php';
require_once 'model/Caja.php';
class UserController extends Controller 
{
	function login()
	{
            $caja=new Caja();
		$obj=new  User();
		$_p = $obj->Start();
        if ($_p['flag'] == 1) 
		{
                  
			$obj = $_p['obj'];
		    $_SESSION['usuario']=$obj->usuario;
			$_SESSION['idperfil']=$obj->idperfil;
			$_SESSION['perfil']=$obj->perfil;
                       $_SESSION['idsucursal']=$obj->idsucursal;
			$_SESSION['sucursal']=$obj->sucursal;
			$_SESSION['idusuario']=$obj->idusuario;
                        
                        $rsCaja=$caja->getCaja($obj->idusuario, $obj->idsucursal);
                        if($rsCaja->estado==0)
                        {
                          $_SESSION['idcaja']=$obj->idcaja;  
                        }
			print_r(json_encode(array("rep"=>"1","msg"=>"Ok")));
        } 
		else
        {
		   print_r(json_encode(array("rep"=>"0","msg"=>"Usuario o Clave incorrectos")));
        }
    }

    function logout()
	{
        session_destroy();
		echo"<script>window.location='home.php';</script>";
        //header('Location: login.php');
    }
    public function Index()
    {
        if (!isset($_GET['p'])){$_GET['p']=1;}
        if(!isset($_GET['q'])){$_GET['q']="";}
		if(!isset($_GET['order'])){$_GET['order']="";}
        $obj = new User();
        $data = array();
	    $grilla= new  Grilla();
	    $cabecera=$obj->getHead('v_usuario');
        $data['data'] = $obj->index_P($_GET['q'],$_GET['p'],$cabecera,"seguridad.v_usuario",$_GET['order']);
        $data['query'] = $_GET['q'];
        $data['pag'] = $this->Pagination(array('rows'=>$data['data']['rowspag'],'url'=>'index.php?controller=User&action=Index','query'=>$_GET['q'],'order'=>$_GET['order']));
	    $obj->session($_GET['id']);
	    $titulo=$_GET['controller'].' registrados';
	    $data['grilla'] = $grilla->asign($titulo,$_GET['controller'],$cabecera, $data['data']['rows'],$data['pag'],$data['data']['total'],true);
	    $data['controller']=$_GET['controller'];
        $view = new View();
        $view->setData($data);
        $view->setTemplate('view/master/grilla.php');
        echo $view->renderPartial();

    }
	 public function search()
    {
	   $obj = new User();
	   $columnas=$obj->getHead('v_usuario');
       $data = array();
       $view = new View();
       $data['value'] = $obj->Search_P($_GET["term"],$columnas,"seguridad.v_usuario");
       $data['num']=$columnas;
       $view->setData( $data );
       $view->setTemplate( 'view/_Json.php' );
       echo $view->renderPartial();
    }
	public function Panel()
	{
	  $obj = new User();
	  $data=array();
	  $data['obj']=$obj->show($_SESSION['id_usuario']);
	  $data['url']="view/fotos_user/";
	  $view = new View();
	  $view->setData($data);
	  $view->setTemplate('view/user/_panel.php');
	  echo $view->renderPartial();
	}
	/*funcion k te muestra el formulario de cambio de password*/
	public function change_password()
	{
	  $view = new View();
	  $view->setTemplate('view/user/_password.php');
	  echo $view->renderPartial();
	}
	/*mustra el formulario de actualizacion de foto*/
	public function photo()
	{
	  $view = new View();
	  $view->setTemplate('view/user/_foto.php');
	  echo $view->renderPartial();
	}
	public function save_photo()
	{
	    $obj = new User();
		$r=$obj->photo($_SESSION['id_usuario'],$_FILES['archivo']);
		$data=array();
		$data['obj']=$obj->show($_SESSION['id_usuario']);
		$data['url']="view/fotos_user/";
		$view = new View();
		 $view->setData($data);
        $view->setTemplate( 'view/user/_panel.php' );
        $view->setLayout( 'template/Layout.php' );
        $view->render();
    }
	public function save_photo_temp()
	{
	$obj= new User();
	$imagePath=$obj->save_photo_temp();
	echo "<img width='153px' height='150px' src='" . strtoupper($imagePath) . "' />";
	//echo $imagePath;
	 echo "<script>imagePath='".$imagePath."'; </script>"; 
	
	}
	public function create()
	{
		if($_SESSION['insertar']==1)
		{
			$data=array();
			$data['perfil']=$this->Select(array('id'=>'id_perfil','name'=>'id_perfil','table'=>'seguridad.sv_perfil','code'=>'0'));
			$data['p']=1;
			$view = new View();
			$view->setData($data);
			$view->setTemplate('view/user/_frm.php');
			echo $view->renderPartial();
		}
		else
		{
			echo "<script>alert('no tiene permiso para insertar');
			window.location='index.php?controller=User';</script>";
		}
	}
	public function _edit() 
	{
	   if($_SESSION['editar']==1)
	   {
	      $obj = new User();
          $data=array();
		  $obj=$obj->show($_GET['id']);
		  $data['obj']=$obj;
		   $data['p']=2;
		  $data['perfil']=$this->Select(array('id'=>'id_perfil','name'=>'id_perfil','table'=>'seguridad.perfil','code'=>$obj->id_perfil));
		  $view = new View();
	      $view->setData($data);
          $view->setTemplate('view/user/_frm.php');
        echo $view->renderPartial();
		}else
		{
		echo 
		"<script>alert('no tiene permiso para editar');
	     window.location='index.php?controller=User';</script>";
		}
	
	}
	
	public function validar()
	
	{
		$obj = new User();
		print_r(json_encode($obj->validar($_GET['U'])));
	}
	public function save()
	{
		$obj = new User();
		print_r(json_encode($obj->newUser($_POST)));
	}
	public function validar_pass()
	{
	    $obj = new User();
		print_r(json_encode($obj->Validar_pass($_POST['pass'],$_SESSION['id_usuario'])));

	}
	public function change()
	{
	    $obj = new User();
		print_r(json_encode($obj->change($_POST['clave'],$_SESSION['id_usuario'])));
	}
	
	public function show()
	{
	    $obj = new User();
	    $data=array();
		$obj=$obj->show($_GET['id']);
		$data['obj']=$obj;
		 $data['perfil']=$this->Select_ajax(array('id'=>'id_perfil','name'=>'id_perfil','table'=>'seguridad.perfil','code'=>$obj->id_perfil));
		$view = new View();
	    $view->setData($data);
	    $view->setTemplate('view/user/_show.php');
		$view->setLayout('template/listas.php');
		$view->render();
	}
	public function _delete()
    { if($_SESSION['delete']==1)
	  {
         $obj = new User();
         $c=$obj->deleteUser($_GET['id']);
	     if ($c){echo json_encode(array('rep'=>'1','msg'=>'ELIMINADO'));} 
		 else{echo json_encode(array('rep'=>'2','msg'=>'.::no se pudo eliminar::..'));}
		
	   }else
	   {
	   echo "<script>alert('no tiene permiso para eliminar');window.location='index.php';</script>";
	   }
    }
}
?>
