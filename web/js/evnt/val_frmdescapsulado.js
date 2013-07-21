$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#productor").required();
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#cantidad").required();
	    bval = bval && $( "#neto").required();
		if ( bval ) 
		{  

			var cc=$( "#cantidad").val();
			var capsula=$( "#capsula").val();
			if(capsula=="")
			{
				capsula=0;
			}
			if(cc>parseInt(capsula))
			{
				alert("ingrese cantidad menor o igual que "+capsula);
				$( "#cantidad").focus();
				return false;
			}
			if(parseInt(cc)<1)
			{
				alert("ingrese cantidad mayor que "+cc);
				$( "#cantidad").focus();
				return false;
			}
			if(parseInt($("#neto").val())>=parseInt(cc))
			{
				alert("la cantidad neta debe ser menor que la cantidad");
				$( "#neto").focus();
				return false;
			}
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=descapsulado&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=descapsulado');
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
	paginacion('controller=descapsulado');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=descapsulado");
}