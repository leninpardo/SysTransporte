<?php
	require_once 'lib/Controller.php';
	require_once 'lib/View.php';
	require_once 'model/Index.php';
   //require_once 'model/Sistema.php';
	class IndexController extends Controller 
	{
		public function Index() 
		{
			$Index = new Index();
			$data = array();
			$data['html'] = $Index->index();
			$view = new View();
			$view->setData($data);
			$view->setTemplate('view/_Index.php');
			$view->setLayout('template/Layout.php');
			$view->render();
		}
		 
	}
?>
