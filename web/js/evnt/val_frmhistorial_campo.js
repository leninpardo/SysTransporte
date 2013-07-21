$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#nombre_previo").required();
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#cultivo").required();
	    bval = bval && $( "#preparacion_terreno").required();
	    bval = bval && $( "#manejo_maleza").required();
	    bval = bval && $( "#fertilizacion").required();
		if ( bval ) 
		{
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			//alert(str);
			$.post('index.php','controller=historial_campo&action=save&'+str,function(data)
		    {
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=historial_campo');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'Datos modificados correctamente');
				}
			},'json');
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
	
	$("#fechap").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		yearRange: "-25:+0"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});
	
	$("#fecham").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		yearRange: "-25:+0"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});
	
	$("#fechaf").datepicker({
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
	paginacion('controller=historial_campo');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=historial_campo");
}
nro=1; total=0; x=0; color="#d8ffb0";

function limpiar()
{
	document.getElementById("xid_plaga").value="";
	document.getElementById("xplaga").value="";
}

function agregar_plaga()
{
    plaga=document.getElementById("xplaga").value;
	id=document.getElementById("xid_plaga").value;	
	if(plaga==""||id=="")
    {
        return 0;
    }
	D=document.getElementById("detalle").innerHTML;
	HTML="<div id='det"+nro+"'><table width='100%'>",
    HTML=HTML+"<tr bgcolor='"+color+"'>";
    HTML=HTML+"<td width='20%'>"+nro+"</td>";nro++;
    HTML=HTML+"<td width='60%'>"+"<input type='text'name='plaga[]' value='"+plaga+"' readonly='true' /><input type='hidden' name='codigo[]' id='codigo[]' value='"+id+"' size='20'/>"+"</td>";
	HTML=HTML+"<td width='20%'>"+"<a href ='javascript:eliminarc("+nro+")'title='eliminar registro'>[x]</a>"+"</td>";
    HTML=HTML+"</tr></table>";
    document.getElementById("detalle").innerHTML=D + HTML;
    limpiar();
}

function eliminarc(nro)
{
	nro--;
    if(confirm("Esta seguro que desea eliminar?"))
    {
        document.getElementById("det"+nro).innerHTML="";
        document.getElementById("det"+nro).style.display="none";
    }
}