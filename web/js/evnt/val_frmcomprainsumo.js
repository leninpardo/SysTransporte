var cp = 0;
$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#raz_social").required();
	    bval = bval && $( "#numero").required();
	    //bval = bval && $( "#insumo").required();
	    bval = bval && $( "#fecha").required();
		
		if ( bval ) 
		{
			if(document.getElementById('detalle_insumo').innerHTML=="")
			{
			  $('#msg-parte').show();
			  //document.getElementById('msg-parte').style.display=='block';
			}else{
			  
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			//alert(str);
			$.post('index.php','controller=comprainsumo&action=save&'+str,function(data)
		    {
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=comprainsumo');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'Datos modificados correctamente');
				}
			},'json');
		 
			}
			/* $('#msg-parte').show();// primer detalle
				 return false;*/
			   
		  
		}
        return false;
	});
	$("#fecha").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		yearRange: "-25:+0"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});
});
function devolver_proveedor(id,r)
{ 
    opener.document.getElementById("id_proveedor").value=id;
    opener.document.getElementById("raz_social").value=r;
    window.close();
}
function devolver_insumo(idd,i,u)
{ //alert('ok');
    opener.document.getElementById("id_insumo").value=idd;
    opener.document.getElementById("insumo").value=i;
    opener.document.getElementById("unidad").value=u;
    window.close();
}


function devolver_insumo_stock(i1,i2,i3)
{ //alert('ok');
    opener.document.getElementById("id_detalle").value=i1;
    opener.document.getElementById("insumo").value=i2;
    opener.document.getElementById("stock").value=i3;
    window.close();
}

function atras()
{
	paginacion('controller=comprainsumo');
}

xitem=1; xtotal=0; x=0; color="#d8ffb0";

function limpiar()
{
	document.getElementById("id_insumo").value="";
	document.getElementById("insumo").value="";
	document.getElementById("cant").value="";
	document.getElementById("precio").value="";
}


function agregar_comprainsumo()
{
  bval = true;
  bval = bval && $( "#insumo").required();
  bval = bval && $( "#precio").required();
  if(bval){
 if(document.getElementById("cant").value=="" || parseInt(document.getElementById("cant").value<=0))
 {
  alert("cantidad debe ser mayor o igual a 1");
  return false;
 }else{
     $('#msg-parte').hide();
     
   idi=document.getElementById("id_insumo").value;
    insumo=document.getElementById("insumo").value;
    cant=parseInt(document.getElementById("cant").value);
    precio=parseFloat(document.getElementById("precio").value);
	tot=parseFloat(cant)*parseFloat(precio);
	 
    D=document.getElementById("detalle_insumo").innerHTML;
	HTML="<div id='det"+nro+"'><table width='100%'>",
	HTML+="<tr bgcolor='"+color+"'>";
	HTML+="<td width='5%'>"+nro+"</td>";nro++;
	HTML+="<td width='40%'>"+"<input type='text'name='insumos[]' value='"+insumo+"' readonly='true' size='30'/><input type='hidden' name='codigo[]' id='codigo[]' value='"+idi+"'/>"+"</td>";
	HTML+="<td width='10%'>"+"<input type='text'name='precios[]' id='precios[]'value='"+precio+"' readonly='true' size='5'/></td>";
	HTML+="<td width='10%'>"+"<input type='text'name='cantidad[]' id='cantidad[]'value='"+cant+"' readonly='true' size='5' /></td>";
	HTML+="<td width='10%'>"+"<input type='text'name='subtotal[]' id='subtotal[]'value='"+tot+"' readonly='true' size='5' /></td>";
   HTML=HTML+"<td width='5%'>"+"<a href ='javascript:eliminarci("+nro+")'title='eliminar registro'>[x]</a>"+"</td>";
    xtotal=xtotal+tot;
   HTML=HTML+"</tr></table>";
    document.getElementById("detalle_insumo").innerHTML=D + HTML;
	limpiar();
	document.getElementById("totalgeneral").innerHTML=xtotal;
	document.getElementById("totalgeneralx").value=xtotal;
  }
  }else
  {
  return false;
  }
}

function eliminarci(nro)
{
	nro--;
    if(confirm("Esta seguro que desea eliminar?"))
    {
        xtotal=xtotal-tot;
		document.getElementById("totalgeneral").innerHTML=xtotal;
		document.getElementById("det"+nro).innerHTML="";
        document.getElementById("det"+nro).style.display="none";
		//total=total-(parseInt(xarea_cultivo));
		
    }

}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=comprainsumo");
}

