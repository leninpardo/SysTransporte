$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
	    bval = bval && $( "#productor").required();
	    bval = bval && $( "#grano").required();
	    bval = bval && $( "#fecha").required();
	    bval = bval && $( "#cantidad").required();
	    bval = bval && $( "#almendra_entera").required();
	    bval = bval && $( "#almedra_partida").required();
		if ( bval ) 
		{  
			var gr=$( "#grano").val();
			var cc=$( "#cantidad").val();
			var ent=$( "#almendra_entera").val();
			var part=$( "#almedra_partida").val();
			if(gr=="")
			{
				gr=0;
			}
			if(gr<parseInt(cc))
			{
				alert("ingrese cantidad menor o igual que "+gr);
				$( "#cantidad").focus();
				return false;
			}
			if(parseInt(cc)<(parseInt(ent))+(parseInt(part)))
			{
				alert("la suma de los kilos de almendra entera y partida debe ser menor que "+cc);
				$( "#cantidad").focus();
				return false;
			}
			if(parseInt(cc)<1)
			{
				alert("ingrese cantidad mayor que "+cc);
				$( "#cantidad").focus();
				return false;
			}
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			$.post('index.php','controller=destestado&action=save&'+str,function(data)
		    {
				//alert(str);
				//alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=destestado');
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
	paginacion('controller=destestado');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=destestado");
}