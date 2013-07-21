$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
		
	   	bval = bval && $( "#id_fuente" ).required();
	   	bval = bval && $( "#descripcion" ).required();
	    bval = bval && $( "#medida" ).required();
	    bval = bval && $( "#unidad" ).required();
	    bval = bval && $( "#precio_may" ).required();
	    bval = bval && $( "#precio_men" ).required();
		if ( bval ) 
		{
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			//alert(str);
			$.post('index.php','controller=producto&action=save&'+str,function(data)
		    {
			//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=producto');
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
	paginacion('controller=producto');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=producto");
}