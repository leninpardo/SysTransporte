<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 require_once'lib/MYSQL_spdo.php';
 
class Main {
    protected $db;
    public $rows = 10;
    protected $pag = 5;
	protected $exec;
   
    public function __construct()
		{
				$this->db = MYSQL_spdo::singleton();
				$this->exec=MYSQL_spdo::getExec();
		}    
		public function Query($partSQL)
		{
			return $this->exec." ".$partSQL;
		}

		public function getList() 
		{
			$sth = $this->db->prepare("SELECT * FROM {$this->table}");
			$sth->execute();
			return $sth->fetchAll();
		}
		public function getmodulo($modulo)
		{
			$sth=$this->db->prepare("select id_modulos from modulos where descripcion='".$modulo."'");
			$sth->execute();
			foreach($sth->fetchAll() as $id)
			{
				$cod=$id[0];
			}
			return $cod;
		} 
		 public function session($ID)
      {
       $sql="SELECT * FROM seguridad.permisos WHERE id_perfil=".$_SESSION['id_perfil']." and id_modulos='$ID'";
	   $sth = $this->db->prepare($sql);
			$sth->execute();
			
			foreach($sth->fetchAll() as $row)
			{
				 $_SESSION['editar']=$row[3];
				 $_SESSION['delete']=$row[4];
				 $_SESSION['insertar']=$row[5];
				 $_SESSION['acceder']=$row[6];
			}
      }	
     public function getHead($tabla)
      {
		  $col=new PGSQL_spdo();
		  $bd=$col->db();
          $sql="SELECT COLUMN_NAME FROM information_schema.COLUMNS where table_catalog='$bd' and TABLE_NAME='$tabla'";
	      $sth = $this->db->prepare($sql);
		  $sth->execute();
		  $data=$sth->fetchAll();
		  $fields=array();
		  foreach($data as $rows)
		  {
			array_push($fields,$rows[0]); 
		  }
		 return $fields;
      }	
   /*funcion general para la busqueda ---tipo facebook*/
  public function Search_P($query,$condicion,$table) {
         $query = '%'.$query.'%';
         $sql="select * from " . $table ;
	     $filtro=" where ";
		 $i=0;
	   while($i<count($condicion))
	   {
	      if($i==(count($condicion)-1))
	       {
	          $filtro.="upper(cast( ".$condicion[$i]." as varchar)) like  '".strtoupper($query)."'   ";
	       }else
		   {
               $filtro.="upper(cast( ".$condicion[$i]." as varchar)) like  '".strtoupper($query)."' or  ";
	       }
	      $i++;
	   }
	   $filtro.=" ";
	   $sql.=$filtro." ORDER BY ".$condicion[0]." ASC";
	   $statement = $this->db->prepare($sql);
       $statement->execute();
       return $statement->fetchAll();
    }
/*---------------funcion index general---------------*/	
public function index_P($query , $p,$condicion,$table,$order)
{       $query = '%'.$query.'%';
            $sql="select * from " . $table ;
	     $filtro=" where ";
		 $i=0;
	   while($i<count($condicion))
	   {
	      if($i==(count($condicion)-1))
	       {
	          $filtro.="upper(cast( ".$condicion[$i]." as varchar)) like  '".strtoupper($query)."'   ";
	       }else
		   {
               $filtro.="upper(cast( ".$condicion[$i]." as varchar)) like  '".strtoupper($query)."' or  ";
	       }
	      $i++;
	   }
	    $filtro.=" ";
		if($order=="")
		{
		  $sql.=$filtro." ORDER BY ".$condicion[0]." DESC";
		}else{
	      $sql.=$filtro." ORDER BY ".$order." ASC";
	    }
        $data['total'] = $this->getTotal($sql);
        $data['rows'] =  $this->getRow($sql, $p );
        $data['rowspag'] =  $this->getRowPag($data['total'], $p );
         return $data;
		// return $sql;
}
	/*---------------------*/
    public function getTotal($sql /*, $param */) {
        $statement = $this->db->prepare($sql);
      /*  foreach ($param as $key => $value) {
            switch ($value['type']) {
                case 'STR':
                    $statement->bindParam ($value['key'], $value['value'] , PDO::PARAM_STR);
                    break;
                default:
                    $statement->bindParam ($value['key'], $value['value'] , PDO::PARAM_INT);
                    break;
            }
        }*/
        $statement->execute();
        return $statement->rowCount();
    }
    public function getRow( $sql /*, $param*/ , $p  ) {
        $p = $this->rows*($p-1);
		
        $sql =$sql." LIMIT {$this->rows} OFFSET {$p} ";
        $statement = $this->db->prepare($sql);
        /*foreach ($param as $key => $value) {
            switch ($value['type']) {
                case 'STR':
                    $statement->bindParam ($value['key'], $value['value'] , PDO::PARAM_STR);
                    break;
                default:
                    $statement->bindParam ($value['key'], $value['value'] , PDO::PARAM_INT);
                    break;
            }
        }*/
        $statement->execute();
        return $statement->fetchAll();
    }
    public function getRowPag ( $total_rows , $vp ){
          $data = array();
          if (ceil($total_rows/$this->rows) <= $this->pag) {
              for ($x = 1 ; $x <= ceil($total_rows/$this->rows); $x++) {
                     if ($x == $vp ) {
                            $data[] = array('active'=>1,'type'=>1, 'value'=>$x);
                        } else {
                            $data[] = array('active'=>0,'type'=>1 , 'next'=> 0, 'value'=>$x);
                        }
              }
          } else {
          $flag = TRUE;
          if(ceil($total_rows/$this->rows) % $this->pag != 0) {
                for  ($j = ceil($total_rows/$this->rows); $j >= $this->pag ; $j-- ){
                          if ($j % $this->pag == 0 ){
                              if ($vp > $j ) {
                                  $flag = FALSE;
                                for ($x = $j+1 ; $x <= ceil($total_rows/$this->rows); $x++) {
                                        if ($x == $j+1  ) {
                                            $data[] = array( 'active'=>0, 'type'=>2, 'value'=>$x-1 );

                                        }
                                        if ($x == $vp ) {
                                            $data[] = array( 'active'=>1, 'type'=>1, 'value'=>$x );
                                        } else {
                                            $data[] = array( 'active'=>0, 'type'=>1, 'value'=>$x );
                                        }
                                }
                                  break;
                              }
                              else {

                               break;
                                }
                          }
                }
                if ($flag){
                              for ($x = $vp ; $x <= ceil($total_rows/$this->rows); $x++) {
                                    if (( $x % $this->pag ) == 0 ) {
                                        if ($x - $this->pag <= 0) {
                                            $z = 1;
                                        }
                                        else {
                                            $z = ($x - $this->pag)+1;
                                        }
                                        for ($y = $z; $y <= ($x); $y++) {
                                            if ($y > $this->pag && $y == $z  ) {
                                                $data[] = array( 'active'=>0, 'type'=>2, 'value'=>$y-1 );
                                            }
                                            if ($y == $vp )  {
                                                $data[] = array( 'active'=>1, 'type'=>1, 'value'=>$y );
                                            } else {
                                                $data[] = array( 'active'=>0, 'type'=>1, 'value'=>$y );
                                            }
                                            if ($y == $x && $y != ceil($total_rows/$this->rows)  ) {
                                                $data[] = array( 'active'=>0, 'type'=>3 , 'value'=>$y+1 );
                                            }
                                        }
                                        break;
                                    }
                              }
                }


          }else{
                  for ($x = $vp ; $x <= ceil($total_rows/$this->rows); $x++) {
                                    if (( $x % $this->pag ) == 0 ) {
                                        if ($x - $this->pag <= 0) {
                                            $z = 1;
                                        }
                                        else {
                                            $z = ($x - $this->pag)+1;
                                        }
                                        for ($y = $z; $y <= ($x); $y++) {
                                            if ($y > $this->pag && $y == $z  ) {
                                                $data[] = array( 'active'=>0, 'type'=>2, 'value'=>$y-1 );
                                            }
                                            if ($y == $vp )  {
                                                $data[] = array( 'active'=>1, 'type'=>1, 'value'=>$y );
                                            } else {
                                                $data[] = array( 'active'=>0, 'type'=>1, 'value'=>$y );
                                            }
                                            if ($y == $x && $y != ceil($total_rows/$this->rows)  ) {
                                                $data[] = array( 'active'=>0, 'type'=>3 , 'value'=>$y+1 );
                                            }
                                        }
                                        break;
                                    }
                              }
          }
          }
        return $data;
    }
  public function getnum()
  {
   return $this->rows;
  }
}
?>
