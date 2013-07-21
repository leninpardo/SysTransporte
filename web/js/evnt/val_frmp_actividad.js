$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#nombre_previo").required();
	    bval = bval && $( "#productor").required();
	    bval = bval && $( "#id_tipo_actividad").required();
	    bval = bval && $( "#id_actividad").required();
		if($("#id_tipo_actividad").val()==1)
		{
			bval = bval && $( "#cantidad").required();
			bval = bval && $( "#precio").required();
		}
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#costo").required();
		
		if ( bval ) 
		{
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			//alert(str);
			$.post('index.php','controller=p_actividad&action=save&'+str,function(data)
		    {
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=p_actividad');
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
	paginacion('controller=p_actividad');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=p_actividad");
}