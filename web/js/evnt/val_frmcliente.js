$(function()
{   
	$("#_form").submit(function()
	{            
		bval = true;
		
	   	bval = bval && $( "#id_tipo_cliente" ).required();
		if(bval&& $( "#id_tipo_cliente" ).val()==1)
		{
		  bval = bval && $( "#nombre_c" ).required();
	      bval = bval && $( "#ap_c" ).required();
	      bval = bval && $( "#am_c" ).required();
		  bval = bval && $( "#dni_c" ).required();
		}
		
		if(bval&& $( "#id_tipo_cliente" ).val()==2)
		{
		    bval = bval && $( "#raz_social" ).required();
		    bval = bval && $( "#ruc_c" ).required();
		}
	 //   bval = bval && $( "#direccion_c" ).required();
	  // bval = bval && $( "#telef_c" ).required();
		
	   
	
	    //bval = bval && $( "#fecha_nac" ).required();
	    bval = bval && $( "#estado" ).required();
		if ( bval ) 
		{
		  
			ver_msg(0,"..::Guardando::..")
			str = $(this).serialize();
			//alert(str);
			$.post('index.php','controller=cliente&action=save&'+str,function(data)
		    {
			 //alert(data);
				if(data.rep=="1")
			    {
					msg(1,'Datos grabados correctamente','controller=cliente');
				}
				if(data.rep=="2")
				{
					ver_msg(2,'Datos modificados correctamente');
				}
			},'json');
		}
        return false;
	});
	
	$("#fecha_nac").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		yearRange: "-100:+0"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});
	$("#id_tipo_cliente").change(function()
	{
		 idd=$(this).val();
		 if(idd==1)
		 {
			  document.getElementById("dni").style.display="block";
			  document.getElementById("ruc").style.display="none";
			  $(".nat").slideDown();
			  $(".raz").slideUp();
			  
		 }
		 if(idd==2)
		 {
			 document.getElementById("ruc").style.display="block";
			 document.getElementById("dni").style.display="none";
			 $(".raz").slideDown();
			 $(".nat").slideUp();
		 }
	});
	
	if($( "#id_tipo_cliente" ).val()!="")
	{
	  if($( "#id_tipo_cliente" ).val()==1)
	  {
		  document.getElementById("dni").style.display="block";
		  document.getElementById("ruc").style.display="none";
		  $(".nat").slideDown();
		  $(".raz").slideUp();
		  
	  }if($( "#id_tipo_cliente" ).val()==2)
	  {
		  document.getElementById("dni").style.display="none";
		  document.getElementById("ruc").style.display="block";
		  $(".raz").slideDown();
		  $(".nat").slideUp();
		  
	  }
	 
	}
	
	$( "#fecha_nac").val('1000-01-01');
	$("#cancel").click(function()
		{
		 $("#result").slideDown();
		  $("#res").slideUp();
		  document.getElementById("save").style.visibility="visible";
		});
	$("#grabar_ext").click(function()
	{
          bval = true;		 
		  bval = bval && $( "#id_tipo_cliente" ).required();

	      //bval = bval && $( "#dni_c" ).required();
		 if(bval&& $( "#id_tipo_cliente" ).val()==1)
		 {
		   bval = bval && $( "#nombre_c" ).required();
	       bval = bval && $( "#ap_c" ).required();
	       bval = bval && $( "#am_c" ).required();
		   bval = bval && $( "#dni_c" ).required();
		 }
		 if(bval&& $( "#id_tipo_cliente" ).val()==2)
		 {
		    bval = bval && $( "#raz_social" ).required();
		    bval = bval && $( "#ruc_c" ).required();
		 }
		  if(bval)
		  {
		    var str_ext;
		    str_ext='nombre_c='+$( "#nombre_c" ).val();
		    str_ext+='&id_tipo_cliente='+$( "#id_tipo_cliente" ).val();
		    str_ext+='&ap_c='+$("#ap_c").val();
		    str_ext+='&am_c='+$("#am_c").val();
		    str_ext+='&dni_c='+$("#dni_c").val();
		    str_ext+='&ruc_c='+$("#ruc_c").val();
		    str_ext+='&raz_social='+$("#raz_social").val();
			//alert(str_ext);
		  	$.post('index.php','controller=cliente&action=save_ext&'+str_ext,function(data)
				{
				  //alert(data);
					if(data.rep=="1")
					{
						$.post('index.php','controller=cliente&action=ver_ext&id_cliente='+data.id,function(datos)
						{
						   
						    opener.document.getElementById("id_cliente").value=datos.id_cliente;
                            opener.document.getElementById("cliente").value=datos.cliente;
							    if(datos.id_tipo==1)
									{
									   opener.document.getElementById("num").innerHTML='Dni:';
									}else
									{
									  opener.document.getElementById("num").innerHTML='Ruc:';
									}
									opener.document.getElementById("ruc_dni").value=datos.ruc_dni;
                            window.close();
							
						},'json');
					}
				},'json');
				//alert('ok');
				//window.close();
		  }
		  return false;
	});
});



function atras()
{
	paginacion('controller=cliente');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=cliente");
}