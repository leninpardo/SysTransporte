$(function()
{   
	$("#_form").submit(function()
	{            
	    bval = true;
	    bval = bval && $( "#raz_social").required();
	    bval = bval && $( "#direccion").required();
	    bval = bval && $( "#ruc").required();
	    bval = bval && $( "#telefono").required();
	    bval = bval && $( "#email").email();
		 if ( bval ) 
		 {
		 ver_msg(0,"..::Guardando::..")
          str = $(this).serialize();
                	$.post('index.php','controller=proveedor&action=save&'+str,function(data)
		    {
	            
                        if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=proveedor');
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
	paginacion('controller=proveedor');
}
function imprimir()
{
window.open("fpdf/reporte2.php?tabla=proveedor");
}