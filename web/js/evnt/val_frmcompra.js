$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#nro_comprobante").required();
	    bval = bval && $( "#productor").required();
	    bval = bval && $( "#id_usuario").required();
		if ( bval ) 
		{
		   if(document.getElementById('detalle').innerHTML=="")
			{
			  $('#msg-parte').show();
			  //document.getElementById('msg-parte').style.display=='block';
			}else{
					ver_msg(0,"..::Guardando::..");
					  if(document.getElementById('nigv').checked)
						  {
						  
						  }else
						  {
							 $("#igv").val(0);
						   }
					str = $(this).serialize();
					//alert(str);
					$.post('index.php','controller=compra&action=save&'+str,function(data)
					{
						//alert(data);
						if(data.rep=="1")
						{
							msg(1,'Datos grabados correctamente','controller=compra');
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


function atras()
{
	paginacion('controller=compra');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=compra");
}
xitem=1; xtotal=0; x=0; color="#d8ffb0";

function limpiar()
{
	document.getElementById("id_cultivo").value="";
	document.getElementById("cultivo").value="";
	document.getElementById("id_tipo_compra").value="";
	document.getElementById("tipo_compra").value="";
	document.getElementById("kilo").value="";
	document.getElementById("costo").value="";
}

function agregar_compra()
{
    id=document.getElementById("id_cultivo").value;
    cu=document.getElementById("cultivo").value;
    idtc=document.getElementById("id_tipo_compra").value;
    tc=document.getElementById("tipo_compra").value;
    kl=document.getElementById("kilo").value;
    co=document.getElementById("costo").value;
	tot=parseFloat(kl)*parseFloat(co);
	if(cu==""||tc==""||kl==""||co=="")
    {
        return 0;
    }
	$('#msg-parte').hide();
	$('#tdigv').show();
	D=document.getElementById("detalle").innerHTML;
	HTML="<div id='det"+nro+"'><table width='100%'>",
    HTML=HTML+"<tr bgcolor='"+color+"'>";
    HTML=HTML+"<td width='5%'>"+nro+"</td>";nro++;
    HTML=HTML+"<td width='35%'>"+"<input type='text'name='xcultivo[]' value='"+cu+"' readonly='true' /><input type='hidden' name='codigo[]' id='codigo[]' value='"+id+"'/>"+"</td>";
	HTML=HTML+"<td width='20%'>"+"<input type='text'name='xtipo_compra[]' value='"+tc+"' readonly='true' size='10' /><input type='hidden' name='xid_tipo_compra[]' id='xid_tipo_compra[]' value='"+idtc+"'/>"+"</td>";
    HTML=HTML+"<td width='10%'>"+"<input type='text'name='xkilo[]' id='xkilo[]' value='"+kl+"' size='1' readonly='true' />"+"</td>";
	HTML=HTML+"<td width='10%'>"+"<input type='text'name='xcosto[]' id='xcosto[]' value='"+co+"' size='1' readonly='true' />"+"</td>";
	HTML=HTML+"<td width='15%'>"+"<input type='text'name='total[]' id='total[]' value='"+tot+"' size='2' readonly='true' />"+"</td>";
	HTML=HTML+"<td width='5%'>"+"<a href ='javascript:eliminarcu("+nro+")'title='eliminar registro'>[x]</a>"+"</td>";
    xtotal=xtotal+tot;
    HTML=HTML+"</tr></table>";
    document.getElementById("detalle").innerHTML=D + HTML;
    limpiar();
    document.getElementById("totalgeneral").innerHTML=xtotal;
    document.getElementById("totalgeneralx").value=xtotal;
}

function eliminarcu(nro)
{
	nro--;
    if(confirm("Esta seguro que desea eliminar?"))
    {
        xtotal=xtotal-tot;
        document.getElementById("totalgeneral").innerHTML=xtotal;
		document.getElementById("det"+nro).innerHTML="";
        document.getElementById("det"+nro).style.display="none";
		total=total-(parseInt(xarea_cultivo));
    }
}
function ver_igv()
{
  if(document.getElementById('nigv').checked)
  {
    $('#igv').show();
	$("#igv").val(18);
  }else
  {
    $('#igv').hide();
	 $("#igv").val(0);
  }
}

