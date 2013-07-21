$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#tipo_fertilizacion").required();
		if ( bval ) 
		{
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=tipo_fertilizacion&action=save&'+str,function(data)
		    {
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=tipo_fertilizacion');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'Datos modificados correctamente');
				}
			},'json');
		}
        return false;
	});
});


function atras()
{
	paginacion('controller=tipo_fertilizacion');
}
function imprimir()
{
	window.open("fpdf/reporte.php?tabla=tipo_fertilizacion");
}