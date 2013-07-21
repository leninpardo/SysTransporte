$(function()
{   
	$("#_form").submit(function()
	{            
	    bval = true;
	    bval = bval && $( "#id_interes").required();
	    bval = bval && $( "#cuota").required();
	    bval = bval && $( "#fecha").required();
		 if ( bval ) 
		 {
		 ver_msg(0,"..::Guardando::..")
          str = $(this).serialize();
         // alert(str);
               $.post('index.php','controller=PlanCobro&action=save&'+str,function(data)
		    {
	            //alert(data);
                        if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=PlanCobro');
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
	paginacion('controller=PlanCobro');
}
function imprimir()
{
window.open("fpdf/reporte2.php?tabla=PlanCobro");
}