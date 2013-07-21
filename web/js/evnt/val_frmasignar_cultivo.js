$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#asignar_cultivo").required();
		if ( bval ) 
		{
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=asignar_cultivo&action=save&'+str,function(data)
		    {
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=asignar_cultivo');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'Datos modificados correctamente');
				}
			},'json');
			/* $.post("index.php","controller=asignar_cultivo&action=q1&"+str,function(data)
			{
			alert(data);
			
			}); */
		}
        return false;
	});
});


function atras()
{
	paginacion('controller=asignar_cultivo');
}
function imprimir()
{
	window.open("fpdf/reporte.php?tabla=asignar_cultivo");
}
nro=1; total=0; x=0; color="#d8ffb0";

function limpiar()
{
	document.getElementById("id_cultivo").value="";
	document.getElementById("cultivo").value="";
	document.getElementById("area_cultivo").value="";
	document.getElementById("nro_plantas").value="";
	document.getElementById("rendimiento").value="";
}

function agregar_cultivo()
{
    hectarea=document.getElementById("hectarea").value;
	id=document.getElementById("id_cultivo").value;
    xcultivo=document.getElementById("cultivo").value;
    xarea_cultivo=document.getElementById("area_cultivo").value;
    xrendimiento=document.getElementById("rendimiento").value;
    xnro_plantas=document.getElementById("nro_plantas").value;
	xarea_cultivo=parseFloat(xarea_cultivo);
	
	if(xcultivo==""||xarea_cultivo=="")
    {
        return 0;
    }
	if(xarea_cultivo>hectarea)
	{
		alert("ingrese un numero menor a la hectarea total del predio");
		return false;
	}
		total=total+(parseInt(xarea_cultivo));
	if(total>hectarea)
	{
		alert("ha superado el numero de hectareas ");
		total=total-(parseInt(xarea_cultivo));
		return false;
	}
	D=document.getElementById("detalle").innerHTML;
	HTML="<div id='det"+nro+"'><table width='100%'>",
    HTML=HTML+"<tr bgcolor='"+color+"'>";
    HTML=HTML+"<td width='5%'>"+nro+"</td>";nro++;
    HTML=HTML+"<td width='40%'>"+"<input type='text'name='xcultivo[]' value='"+xcultivo+"' readonly='true' /><input type='hidden' name='codigo[]' id='codigo[]' value='"+id+"' size='10'/>"+"</td>";
    HTML=HTML+"<td width='10%'>"+"<input type='text'name='xarea_cultivo[]' id='xarea_cultivo[]' value='"+xarea_cultivo+"' size='3' readonly='true' />"+"</td>";
	HTML=HTML+"<td width='20%'>"+"<input type='text'name='xnro_plantas[]' id='xnro_plantas[]' value='"+xnro_plantas+"' size='8' readonly='true' />"+"</td>";
	HTML=HTML+"<td width='20%'>"+"<input type='text'name='xrendimiento[]' id='xrendimiento[]' value='"+xrendimiento+"' size='8' readonly='true' />"+"</td>";
    HTML=HTML+"<td width='5%'>"+"<a href ='javascript:eliminarc("+nro+")'title='eliminar registro'>[x]</a>"+"</td>";
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
		total=total-(parseInt(xarea_cultivo));
    }
}