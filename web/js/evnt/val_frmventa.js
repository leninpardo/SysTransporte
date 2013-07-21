var item=0;
var xtotal=0;
$(function()
{  
     $("#agregarc").click(function()
	 {
	    bval = true;
	    bval = bval && $( "#prod").required();
		if(bval)
		{
		   id_prod=$( "#id_prod").val();
		   prod=$("#prod").val();
		   precio=$("#precio").val();
		   cant=$( "#cant").val();
		   item+=1;
		   band=true;
		   $(".tr_p").each(function(i,j){
                  id_pp = $(".tr_p td:eq(0) :input").val();
                    if(id_pp==id_prod){band=false;limpiar();alert('este producto ya fue agregado');return false; }
					
                });
				if(band){
				 $('#msg-parte').hide();
				  sub=precio*cant;
		           xtotal=xtotal+sub;
				   var str="<tr id='"+item+"' class='tr_p'>";
					   str+="<td>"+item+"<input name='codigo[]' id='codigo[]' value='"+id_prod+"' type='hidden'/></td>";
					   str+="<td width='50%'>"+"<input name='producto[]' id='producto[]' value='"+prod+"' type='text' size='40'/>"+"</td>";
					   str+="<td width='18%'>"+"<input name='precios[]' id='precios[]' value='"+precio+"' type='text' size='5'/>"+"</td>";
					   str+="<td width='15%'>"+"<input name='canti[]' id='canti[]' value='"+cant+"' type='text' size='5'/>"+"</td>";
					   str+="<td width='17%'>"+"<input name='sub[]' id='sub[]'value='"+sub+"' type='text' size='10'/>"+"</td>";
					   str+="<td width='5%'><a href='javascript:eliminar_p("+item+","+xtotal+","+sub+");'>[x]</a></td>";
					   var _dato= $(str);
					   $("#detalle_producto").append(_dato);
					   $("#i").val(1);
					   $("#totalgeneral").empty().append(xtotal);
					   limpiar();
			   }
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
	$("#_form").submit(function()
	{ 
	    bval = true;
	    bval = bval && $( "#cliente").required();
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#id_tipo_venta").required();
		if ( bval ) 
		{
		  if(document.getElementById('i').value==0)
			{
			  $('#msg-parte').show();
			}else
			{
			ver_msg(0,"..::Guardando::..")
			  str = $(this).serialize();
			//alert(str);
				$.post('index.php','controller=venta&action=save&'+str,function(data)
				{
					//alert(data);
					if(data.rep=="1")
					{
						msg(1,'Datos grabados correctamente','controller=venta');
					}
					if(data.rep=="2")
					{
						ver_msg(2,'Datos modificados correctamente');
					}
				  },'json');
			}
			
		}
		return false;
	});
});
function limpiar()
{
	document.getElementById("id_prod").value="";
	document.getElementById("prod").value="";
	document.getElementById("precio").value="";
	document.getElementById("cant").value="";
}

function eliminar_p(id,tt,sss)
{  
   xtotal=tt-sss;
  $("#totalgeneral").empty().append(tt-sss);
  if(id>=item){item--;}
  $("#i").val(0);
  $("#"+id).remove();
  
}
function atras()
{
paginacion('controller=venta');
}

function imprimir()
{
window.open("fpdf/reporte2.php?tabla=venta");
}
	