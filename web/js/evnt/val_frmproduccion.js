$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#producto").required();
	    bval = bval && $( "#cant").required();
	    bval = bval && $( "#unid").required();
	    bval = bval && $( "#fecha").required();
		if ( bval ) 
		{  
			var c=$( "#cant").val();
			var u=$( "#unid").val();
			if(parseInt(c)<1 || parseInt(u)<1)
			{
				alert("ingrese cantidad mayor que 0");
				$( "#cant").focus();
				return false;
			}
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=produccion&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=produccion');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'debe ingresar una cantidad menor de materia prima');
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
});

function atras()
{
	paginacion('controller=produccion');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=produccion");
}