
i=0;
function modulo(id_modulo,modulo)
{
   $.get("index.php",""+modulo+"&id="+id_modulo,function(data)
   {
	    
	});
}	
function ver()
{
	document.getElementById("user_panel").style.display='block';
	i++;
	if(i==2)
	  {
		document.getElementById("user_panel").style.display='none';
		 i=0;
	  }
}

function loading()
 {
       HTML="<table width='98%' border='0' align='center' cellpadding='0' cellspacing='1'>    ";
       HTML+="  <tr> ";
       HTML+="  <td style='margin-left:50px;'><b>..:: cargando::..</b>";
       HTML+="  </td> ";
       HTML+="  </tr> ";
       HTML+=" </table> ";
       document.getElementById("ventana").innerHTML=HTML;	  
	   document.getElementById("ventana").style.visibility="visible"; 
       document.getElementById("capa").style.visibility="visible";
	   $("#ventana").fadeOut(1000);
	   $("#ventana").fadeIn(400);
 }
 function cerrar()
 {
	document.getElementById("ventana").style.visibility="hidden"; 
    document.getElementById("capa").style.visibility="hidden";
 }
function cargar_pages(page)
 {  
		loading();
		setTimeout("url('"+page+"')",1500);
 }
  function url(page)
{ 
	cerrar();
	$.get("index.php",""+page,function(data)
	 {
            
	    $("#cont").empty().append(data);
        document.getElementById("cont").style.display="none";
		$("#cont").slideDown("slow");
      });
}
function paginacion(pagina)
{ 
      $.get("index.php",""+pagina,function(data)
	  {
	     $("#cont").empty().append(data);
         document.getElementById("cont").style.display="none";
         $("#cont").fadeIn("slow");
      });
}
function ver_msg(tipo,str)
{
    $("#msg").fadeOut();
    $("#msg").removeClass();
    var img="";
    if(tipo==0){
	  document.getElementById('msg').className='mensaje';
	  img = '<img alt=""  src="web/images/loader.gif" style="margin-right:3px;" />';
	}
    if(tipo==1){
	  document.getElementById('msg').className='mensaje_ok';
      img = '<img alt=""  src="web/images/accept.png" style="margin-right:3px;" />';}
    if(tipo==2){document.getElementById('msg').className='mensaje_ok';
      img = '<img alt=""  src="web/images/accept.png" style="margin-right:3px;" />';}
    if(tipo==3){$("#msg").addClass("mensagillo_ ui-corner-all");img = '';}
    if(tipo==4){$("#msg").addClass("mensagillo_fail_ ui-corner-all");img = '';}
    $("#msg").empty().append(img+''+str);
    $("#msg").fadeIn();
}
function msg(tipo,str,pagina)
{
	   ver_msg(tipo,str);
	   if(tipo==1)
	   {
		setTimeout("paginacion('"+pagina+"')",3000);
	   }
}
function eliminar(ccontroller,id,_href)
{
	  var ccontroller=ccontroller;
	  var id=id;
	  var _href=_href;

	  HTML="<table width='98%' border='0' align='center' cellpadding='0' cellspacing='1'>    ";
	  HTML+="  <tr> ";
	  HTML+="   <td height='25' colspan='3' class='title' align='right'> ";
	  HTML+="    <strong>Confirmacion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='javascript:void(0);' onclick='cancelar();'><img src='web/images/close.png' title='close' border='0'/></a></strong></td> ";
	  HTML+="  </tr> ";
	  HTML+="  <tr> ";
	  HTML+="  <td colspan='3'>realmente deseas eliminar?";
	  HTML+="  </td> ";
	  HTML+="  </tr> "; 
	  HTML+=" <tr>";
	  HTML+="  <td colspan='3' align='center'>"
	  HTML+="<label class='uiButton uiButtonConfirm'><input name='ok' value='aceptar' type='button' onclick='_eliminar(\""+ccontroller+"\",\""+id+"\",\""+_href+"\");' ></label>&nbsp;&nbsp;<label class='uiButton uiButtonConfirm'><input name='cancel' value='cancelar' type='button' onclick='cancelar();'></label>";
	  HTML+="</td>";
	  HTML+="</tr>"; 
	  HTML+=" </table> ";
	  document.getElementById("ventana2").innerHTML=HTML;	  
	  document.getElementById("ventana2").style.visibility="visible"; 
      document.getElementById("capa2").style.visibility="visible";
}
function cancelar()
{
   document.getElementById("ventana2").style.visibility="hidden"; 
   document.getElementById("capa2").style.visibility="hidden";
}
function _eliminar(url,codigo,index)
{
  cancelar();
  eliminando();
  $.get("index.php",""+url,function(data)
 { 
    setTimeout("cerrar()",2000);
    if(data.rep=="1")
     {
        document.getElementById("_delete"+codigo).style.color='#3a57a8';
        setTimeout("document.getElementById('_delete"+codigo+"').innerHTML='"+data.msg+"';",2000);
        setTimeout("paginacion('"+index+"')",4000);
     }else
     {
       setTimeout("alert('"+data.msg+"')",2000);
       setTimeout("paginacion('"+index+"')",3000);
     }
  },'json');
 
}
function eliminando()
 {
       HTML="<table width='98%' border='0' align='center' cellpadding='0' cellspacing='1'>    ";
       HTML+="  <tr> ";
       HTML+="  <td style='margin-left:50px;'><b>..:: eliminando::..</b>";
       HTML+="  </td> ";
       HTML+="  </tr> ";
       HTML+=" </table> ";
       document.getElementById("ventana").innerHTML=HTML;	  
	   document.getElementById("ventana").style.visibility="visible"; 
       document.getElementById("capa").style.visibility="visible";
	   $("#ventana").fadeOut(1000);
	   $("#ventana").fadeIn(400);
 }
 function _order(order,page)
{ 
 	//var enlace=document.getElementsByTagName("a");	
	//var order=enlace['Order[]'].innerHTML;
   $.get("index.php",""+page+"&order="+order,function(data)
	 {
	    $("#cont").empty().append(data);
        document.getElementById("cont").style.display="none";
		$("#cont").fadeIn("slow");
		document.getElementById("Order"+order).style.textDecoration='underline';
     });
}
function ver_reporte_perso()
{
   $(".personaliza").load("view/reporte_estadistico/_frmP.php","",function(){
                   
			});
}




function Abrir_ventana (pagina) {
var opciones="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, width=900, height=605, top=40, left=200";
window.open(pagina,"",opciones); 
}


function ampliar_foto(foto)
{
HTML="<table width='98%' border='0' align='center' cellpadding='0' cellspacing='1'>    ";
	  HTML+="  <tr> ";
	  HTML+="   <td height='25' colspan='3' class='title' align='right'> ";
	  HTML+="    <strong>Parcela&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='javascript:void(0);' onclick='cancelar_foto();'><img src='web/images/close.png' title='close' border='0'/></a></strong></td> ";
	  HTML+="  </tr> ";
	  HTML+="  <tr> ";
	  HTML+="  <td colspan='3'><img src='./view/fotos_parcela/"+foto+".jpg' style='width:640px;height:335px;'/>";
	  HTML+="  </td> ";
	  HTML+="  </tr> "; 
	  HTML+=" <tr>";
	  HTML+="  <td colspan='3' align='center'>"
	  HTML+="</td>";
	  HTML+="</tr>"; 
	  HTML+=" </table> ";
      document.getElementById("ventana_foto").innerHTML=HTML;	  
	  document.getElementById("ventana_foto").style.visibility="visible"; 
      document.getElementById("capa_foto").style.visibility="visible";
}
function cancelar_foto()
{
   document.getElementById("ventana_foto").style.visibility="hidden"; 
   document.getElementById("capa_foto").style.visibility="hidden";
}
 
 
