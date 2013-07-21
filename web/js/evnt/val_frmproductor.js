var band=0;
$(function()
{ 
	
	$("#grabar").click(function()
	{
	 
	  
	    bval = true;
	    bval = bval && $( "#id_agrupacion" ).required();
	    bval = bval && $( "#id_proyecto" ).required();
	    bval = bval && $( "#codigo" ).required();
	    bval = bval && $( "#nombres" ).required();
	    bval = bval && $( "#apellidos" ).required();
	    bval = bval && $( "#dni" ).required();
	    bval = bval && $( "#estado_civil" ).required();
		if(bval&& $( "#estado_civil" ).val()!='soltero')
		{
			bval = bval && $( "#conyuge" ).required();
			bval = bval && $( "#nro_hijos" ).required();
		}else
		{
			$( "#conyuge" ).val('NINGUNO');
			$( "#nro_hijos" ).val(0);
		}
	    
	    bval = bval && $( "#direccion" ).required();
	    bval = bval && $( "#telef" ).required();
	    bval = bval && $( "#fecha_nacimiento" ).required();
		var sexo=document.getElementsByName("sexo");
			//alert(sexo);
		for(i=0;i<sexo.length;i++)
		{
		  if(sexo[i].checked)
		  {
		     var selec=sexo[i].value;
		     break;
		  }
		}
		//alert(selec);
	
		if ( bval ) 
		{ 
		    if($("#dni").val()<9999999)
			  {
			   alert("el dni debe de tener 8 digitos");
			   $("#dni").focus();
			   return false;
			  }
			  
			  
			p=$("#oper").val();
			var flag=0;
			if(p==1)
			{
				//bval = bval && $( "#archivo" ).required();
				var imagePath = window.fotoim.imagePath;
				if(typeof imagePath=='undefined')
				{
					imagePath='view/fotostem/default.jpg';
					flag=1;
				}
				str='id_agrupacion='+$( "#id_agrupacion" ).val();
				str+='&id_proyecto='+$( "#id_proyecto" ).val();
				str+='&sexo='+selec;
				str+='&id_productor='+$( "#id_productor" ).val();
				str+='&codigo='+$("#codigo").val();
				str+='&nombres='+$("#nombres").val();
				str+='&apellidos='+$("#apellidos").val();
				str+='&dni='+$("#dni").val();
				str+='&estado_civil='+$("#estado_civil").val();
				str+='&conyuge='+$("#conyuge").val();
				str+='&nro_hijos='+$("#nro_hijos").val();
				str+='&direccion='+$("#direccion").val();
				str+='&telef='+$("#telef").val();
				str+='&fecha_nacimiento='+$("#fecha_nacimiento").val();
				str+='&foto='+imagePath;
				str+='&oper='+$("#oper").val();
				str+='&estado='+$("#estado").val();
				str+='&flag='+flag;
				//alert(str);
				ver_msg(0,"..::Guardando::..")
				$.post('index.php','controller=productor&action=save&'+str,function(data)
				{
					if(data.rep=="1")
					{
						window.fotoim.document.body.innerHTML='';
						msg(1,'Datos grabados correctamente','controller=productor');
					}
				},'json'); 	
			}
			if(p==2)
			{
				
				str='id_agrupacion='+$( "#id_agrupacion" ).val();
				str+='&id_proyecto='+$( "#id_proyecto" ).val();
				str+='&sexo='+selec;
				str+='&id_productor='+$( "#id_productor" ).val();
				str+='&codigo='+$("#codigo").val();
				str+='&nombres='+$("#nombres").val();
				str+='&apellidos='+$("#apellidos").val();
				str+='&dni='+$("#dni").val();
				str+='&estado_civil='+$("#estado_civil").val();
				str+='&conyuge='+$("#conyuge").val();
				str+='&nro_hijos='+$("#nro_hijos").val();
				str+='&direccion='+$("#direccion").val();
				str+='&telef='+$("#telef").val();
				str+='&fecha_nacimiento='+$("#fecha_nacimiento").val();
				str+='&oper='+$("#oper").val();
				str+='&estado='+$("#estado").val();
				if(band==1)
				{
				 var imagePath = window.fotoim.imagePath;
				 str+='&foto='+imagePath;
				 str+='&fotoq='+$("#fotoq").attr( 'src' );
				 str+='&band=1';
				}else
				{
				 str+='&foto='+$("#fotoq1").val();
				 str+='&fotoq=';
				 str+='&band=0';
				}
				
				
				
				//alert(str);
				ver_msg(0,"..::Guardando::..")
				$.post('index.php','controller=productor&action=save&'+str,function(data)
				{
					if(data.rep=="2")
					{
						ver_msg(2,'Datos modificados correctamente');
					}
				},'json');
			}
		}
	});
	$("#fecha_nacimiento").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		yearRange: "-90:-12"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});
	$("#cancel").click(function()
		{
		 $("#result").slideDown();
		  $("#res").slideUp();
		  document.getElementById("save").style.visibility="visible";
		});
	$("#grabar_ext").click(function()
	{
          bval = true;		 
		  bval = bval && $( "#nombres" ).required();
	      bval = bval && $( "#apellidos" ).required();
	      bval = bval && $( "#dni" ).required();
		
		  if(bval)
		  {
		    var str_ext;
		    var dni=$("#dni").val();
		    str_ext='nombres='+$( "#nombres" ).val();
		    str_ext+='&apellidos='+$("#apellidos").val();
		    str_ext+='&dni='+$("#dni").val();
		  	$.post('index.php','controller=productor&action=save_ext&'+str_ext,function(data)
				{
				  //alert(data);
					if(data.rep=="1")
					{
						$.post('index.php','controller=productor&action=ver_ext&dni='+dni,function(datos)
						{
						   //alert(datos.id_productor+""+datos.productor);
						    opener.document.getElementById("id_productor").value=datos.id_productor;
                            opener.document.getElementById("productor").value=datos.productor;
                            window.close();
						},'json');
					}
				},'json');
				//alert('ok');
				//window.close();
		  }
		  return false;
	});
	$("#estado_civil").change(function()
	{
	  v=$(this).val();
	  if(v!="")
	  {
			  if(v=="soltero")
			  {
				 
				 $("#cc").slideUp();
				
			  }else
			  {
				$("#cc").slideDown();
			  }
	  
	  }
	  return false;
	});
	
});

function uploadImage()
{
	pp=$("#oper").val();
	if(pp==2)
	{
		document.getElementById("fotoq").style.display='none';
		document.getElementById("_form").submit();
		band=1;
	}
	else
	{
		document.getElementById("_form").submit();
	}
	
}
function atras()
{
	paginacion('controller=productor');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=productor");
}

	