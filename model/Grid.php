<?php
/*
@autor pedro armando */

require_once('Main.php');
class Grilla 
{
  protected $data=array();
   function asign($titulo,$controller,$cabecera,$rows,$pag,$query,$view,$imprimir=false)
    {
	    $objtotal = new Main();        
        $this->data['total'] = $objtotal->getnum();
		$this->data['titulo']=$titulo;
        $this->data['cabecera'] = $cabecera;
        $this->data['rows'] = $rows;
        $this->data['query'] = $query;
        $this->data['view'] = $view;
        $this->data['imprimir'] = $imprimir;
        $this->data['controller'] = $controller;
        $this->data['pag'] = $pag;
	   return $this->_render();
    }
	function _render()
	{
	$grilla="";
	$grilla.=$this->_header();
    $grilla.=$this->_body();
	$grilla.=$this->_footer();
	$grilla.=$this->_paginador();
	return $grilla;
	
	}
	 function _header()
	{
	$html="";
	$html.="<div id='divBloqueador'></div>";
	$html.="<div class='ui-widget-header' align='center'>". $this->data['titulo']."</div>";
	$html.="<div style='margin: 0 auto; width: 660px; margin-bottom: 5px;' align='center'>";
	//$html.=" <form action='' name='_frm' id='_frm' method='GET'>";
    $html.="	<input type='hidden' name='c' id='c' value=".$this->data['controller']." />";
   // $html.="   <input type='hidden' name='action'  id='action' value='index' />";
    $html.="   <input type='hidden' name='p' id='p' value='1' />";
    $html.="   Buscar: <input   name='q' id='q' class='ui-autocomplete-input text ui-widget-content ui-corner-all' autocomplete='off' role='textbox' aria-autocomplete='list' aria-haspopup='true' style='width: 400px;' />";
    //$html.="    <input type='submit' value='' id='_buscar' class='uiBuscar'   />";
	if($_SESSION['insertar']==1){
	//$html.="	<input type='button' value='Nuevo' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-hover' onclick=\"paginacion('controller=".$this->data['controller']."&action=create');\" />";
    $html.="<label class='uiButton uiButtonConfirm'><input type='button' value='Nuevo' onclick=\"paginacion('controller=".$this->data['controller']."&action=create');\"  /></label>&nbsp;&nbsp;";
   }
    $html.="<label class='uiButton uiButtonConfirm'><input type='button' value='reporte' onclick= 'imprimir(this.form);' /></label>";
   //$html.="   <input type='button' value='reporte' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-hover' onclick= 'imprimir(this.form);' />";
 // $html.=" </form>";
    $html.="  </div>";
	return $html;
	}
	 function _body()
	{
	  $html="<table width='95%' style='border:1px solid #666; font-size:14px; margin-bottom:5px;' align='center'>";
      $html.="<tr  class='ui-widget-header tr-head' style='border-bottom:1px solid #666'>";
	   foreach($this->data['cabecera'] as $t)
	    {
	     $html.="<td style='font-size:13px;font-family:arial;'><a href='javascript:void(0);'  class='order' id='Order".$t."' onclick=\"_order('".$t."','controller=".$this->data['controller']."');\">".$t."</a></td>";
        }
	   if( $this->data['view']){$html.=" <td width='50px' style='font-size:13px;font-family:arial;'>".'ver'."</td>";}
	   if( $this->data['imprimir']){$html.=" <td width='50px' style='font-size:13px;font-family:arial;'>".'imprimir'."</td>";}
       if($_SESSION['editar']==1){ $html.=" <td width='50px' style='font-size:13px;font-family:arial;'>".'editar'."</td>";}
	   if($_SESSION['delete']==1){ $html.=" <td width='40px' style='font-size:13px;font-family:arial;'>".'eliminar'."</td>";}
	   $html.="</tr>";
	   $c=0;
	   if($this->data['query']==0)
		  {
			$r=count($this->data['cabecera']);
			$html.="<td colspan='".$r."' align='center'>&nbsp;&nbsp;la consulta no obtuvo resultados</td>";
		 }
		// $html.=" <tbody >";
       foreach($this->data['rows'] as $val)
       {
          $c++;
		  $html.= "<tr style='border-bottom:1px solid #666; background:#F5F5F5' class='_tr'
         onMouseOver=\"this.style.backgroundColor='#CCC';this.style.cursor='pointer';\" onMouseOut=\"this.style.backgroundColor='#F5F5F5'\"o\"];\">";
		   foreach($this->data['cabecera'] as $key=>$t)
		   {
		     if($key==0){$html.="<td  width='50px' >".$val[$key]."</td>";}
			  else if($key==1)
	           {
	              $html.="<td >&nbsp;&nbsp;".$val[$key]."<input type='hidden' id='cod$val[0]' name='cod$val[0]'/></td>";
	           }else 
	           {
	           		$html.="<td>".$val[$key]."</td>";
	           }
		    }
		 if( $this->data['view']){ $html.=" <td align='center'><a href=\"javascript:popup('index.php?controller=". $this->data['controller']."&action=show&id=".$val[0]."',800,500);\" title='Ver'><img src='web/images/ver.png' border='0'></a></td>";}
		  if( $this->data['imprimir']){ $html.=" <td align='center'><a href=\"javascript:popup('index.php?controller=". $this->data['controller']."&action=_prinft&id=".$val[0]."',850,500);\" title='Ver'><img width='19px' height='19px' src='web/images/imprimir.jpg' border='0'></a></td>";}
		 if($_SESSION['editar']==1){$html.="<td align='center'><a href='javascript:void(0);'onClick=\"paginacion('controller=".$this->data['controller']."&action=_edit&id=".$val[0]."');\" title='Editar'><img src='web/images/edit.png' border='0'></a></td>";}
		 if($_SESSION['delete']==1){$html.="<td align='center' ><div id='_delete".$val[0]."''><a href='javascript:void(0);'onClick=\"eliminar('controller=".$this->data['controller']."&action=_delete&id=".$val[0]."','".$val[0]."','controller=".$this->data['controller']."');\" title='eliminar'><img src='web/images/delete.png' border='0'></a></div></td>";}
		 $html.="</tr>";
		}
		// $html.=" </tbody >";
		for($i=0;$i<($this->data['total']-$c);$i++)
		{
		  $html.= "<tr style='border-bottom:1px solid #666; background:#F5F5F5' 
         onMouseOver=\"this.style.backgroundColor='#CCC';this.style.cursor='pointer';\" onMouseOut=\"this.style.backgroundColor='#F5F5F5'\"o\"];\">";
		   foreach($this->data['cabecera'] as $t)
	       {
	         $html.="<td>&nbsp;</td>";
		   }
		   if($this->data['view']){ $html.="<td>&nbsp;</td>";}
		   if($this->data['imprimir']){ $html.="<td>&nbsp;</td>";}
		   if($_SESSION['editar']==1){ $html.="<td>&nbsp;</td>";}
		   if($_SESSION['delete']==1){ $html.="<td>&nbsp;</td>";}
		   $html.="</tr>";
		}
		return $html;
	}
   function _footer()
	{
	  $html="</table>";
	  return $html;
	}
	 function _paginador()
	{
	  return $this->data['pag'];
	}

}
?>