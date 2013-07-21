$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#cant_pellet").required();
	    bval = bval && $( "#cant").required();
	    bval = bval && $( "#fecha").required();
		if ( bval ) 
		{  
			var pellet=$( "#cant_pellet").val();
			var cant=$( "#cant").val();
			if(pellet<parseInt(cant))
			{
				alert("ingrese cantidad de harina menor o igual que "+pellet);
				$( "#alm_e").focus();
				return false;
			}
			
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=Harina&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=Harina');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'ERROR, debe ingresar una cantidad menor de pellets');
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
	paginacion('controller=Harina');
}
function imprimir()
{
	window.open("fpdf/reporte.php?tabla=Harina");
}