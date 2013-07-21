$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#productor").required();
	    bval = bval && $( "#alm_e").required();
	    bval = bval && $( "#alm_p").required();
	    bval = bval && $( "#l_aceite").required();
	    bval = bval && $( "#kg_pellet").required();
	    bval = bval && $( "#fecha").required();
		if ( bval ) 
		{  
			var e=$( "#entera").val();
			var p=$( "#partida").val();
			var ent=$( "#alm_e").val();
			var part=$( "#alm_p").val();
			if(e<parseInt(ent))
			{
				alert("ingrese cantidad de almendra entera menor o igual que "+e);
				$( "#alm_e").focus();
				return false;
			}
			if(p<parseInt(part))
			{
				alert("ingrese cantidad de almendra partida menor o igual que "+p);
				$( "#alm_p").focus();
				return false;
			}
			
			if(0>(parseInt(ent))+(parseInt(part)))
			{
				alert("ingrese cantidad de almendra mayor a 0 ");
				$( "#alm_e").focus();
				return false;
			}
			if(((parseInt(ent))+(parseInt(part)))<(((parseInt(l_aceite))/0.92)+(parseInt(kg_pellet))))
			{
				alert("la suma de los Kgs de aceite y pellets debe ser menor a la cantidad de almendra");
				$( "#alm_e").focus();
				return false;
			}
			if(0>(((parseInt(l_aceite))/0.92)+(parseInt(kg_pellet))))
			{
				alert("la suma de los Kgs de aceite y pellets debe ser mayor a 0");
				$( "#alm_e").focus();
				return false;
			}
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=prensado&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=prensado');
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
	paginacion('controller=prensado');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=prensado");
}