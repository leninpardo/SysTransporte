$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#proyecto").required();
		if ( bval ) 
		{
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=proyecto&action=save&'+str,function(data)
		    {
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=proyecto');
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
	paginacion('controller=proyecto');
}
function imprimir()
{
	window.open("fpdf/reporte.php?tabla=proyecto");
}