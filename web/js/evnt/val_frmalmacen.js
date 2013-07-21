$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#cantidad").required();
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#insumo").required();
	    bval = bval && $( "#stock").required();
	  
		if ( bval ) 
		{		
			var cant=$( "#cantidad").val();
			var stock=$( "#stock").val();
			if(parseInt(cant)>parseInt(stock))
			{
				alert("La cantidad de retiro no debe ser mayor al stock actual= "+stock);
				 $( "#cantidad").focus();
				 return false; 
			}
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=almacen&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=almacen');
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
});

function atras()
{
	paginacion('controller=almacen');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=almacen");
}