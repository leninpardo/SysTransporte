$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#cant").required();
	    bval = bval && $( "#fecha").required();
		if ( bval ) 
		{  
			var c=$( "#cant").val();
			if(parseInt(c)<1)
			{
				alert("ingrese cantidad de aceite mayor que 0");
				$( "#cant").focus();
				return false;
			}
			
			if(parseInt(c)>1000)
			{
				alert("ingrese cantidad de aceite menor que 1000");
				$( "#cant").focus();
				return false;
			}
			
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=filtrado&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=filtrado');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'debe ingresar una cantidad menor de litros de aceite');
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
	paginacion('controller=filtrado');
}
function imprimir()
{
	window.open("fpdf/reporte.php?tabla=filtrado");
}