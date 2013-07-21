$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#cant_alm").required();
	    bval = bval && $( "#id_tipo_tostado").required();
	    bval = bval && $( "#cant").required();
	    bval = bval && $( "#fecha").required();
		if ( bval ) 
		{  
			var alm=$( "#cant_alm").val();
			var cant=$( "#cant").val();
			if(alm<parseInt(cant))
			{
				alert("ingrese cantidad de almendra tostada menor o igual que "+alm);
				$( "#alm_e").focus();
				return false;
			}
			
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=tostado&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=tostado');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'ERROR, debe ingresar una cantidad menor de almendra entera');
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
	paginacion('controller=Tostado');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=Tostado");
}