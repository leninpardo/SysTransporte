$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#productor").required();
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#tipo").required();
	    bval = bval && $( "#cantidad").required();
	    bval = bval && $( "#neto").required();
	    bval = bval && $( "#hinicio").required();
	    bval = bval && $( "#hfin").required();
		if ( bval ) 
		{  
			var cant=$( "#tipo").val();
			var cc=$( "#cantidad").val();
			
             if($( "#hminicio").val()=="")
			 {
			   $( "#hminicio").val(0.00);
			 } 
			 if($( "#hmfin").val()=="")
			 {
			    $( "#hmfin").val(0.00);
			 }
		
			if(cc>parseInt(cant))
			{
				alert("ingrese cantidad menor o igual que "+cant);
				$( "#cantidad").focus();
				return false;
			}
			if(parseInt(cc)<1)
			{
				alert("ingrese cantidad mayor que "+cc);
				$( "#cantidad").focus();
				return false;
			}
			if(parseInt($("#neto").val())> parseInt(cc))
			{
				alert("la cantidad neta debe ser menor que la cantidad");
				$( "#neto").focus();
				return false;
			}
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=secado&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=secado');
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
	
	
	
     $("#hinicio").timepicker({});
     $("#hfin").timepicker({});
  
});
function devolver_prod_seleccion(id_secado,productor,tipo,can)
{ 
    opener.document.getElementById("id_seleccion").value=id_secado;
    opener.document.getElementById("productor").value=productor;
   opener.document.getElementById("tipo_sel").innerHTML=tipo;
    opener.document.getElementById("tipo").value=can;
    window.close();
}
function atras()
{
	paginacion('controller=secado');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=secado");
}