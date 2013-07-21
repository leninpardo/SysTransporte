$(function()
{ 
	$("#Subir").click(function()
	{
	  bval = true;
	  bval = bval && $( "#archivo" ).required();
	  if(bval)
	  {
	    $("#frmfoto").submit();
	 
	  }
	});
	$("#grabar").click(function()
	{
	 
	  
	    bval = true;
	    bval = bval && $( "#id_perfil" ).required();
	    bval = bval && $( "#usuario_nombres" ).required();
	    bval = bval && $( "#usuario_appaterno" ).required();
	    bval = bval && $( "#usuario_apmaterno" ).required();
	    bval = bval && $( "#usuario_direccion" ).required();
	    bval = bval && $( "#usuario_telefono" ).required();
	    bval = bval && $( "#usuario_numdoc" ).required();
	    bval = bval && $( "#usuario_nick" ).required();
	    bval = bval && $( "#usuario_password" ).required();
	    bval = bval && $( "#usuario_fechanac" ).required();
	   
		if ( bval ) 
		{ 
		 
		    usuario=$("#usuario_nick").val();
			p=$("#oper").val();
			var band=0;
			if(p==1)
			{
			bval = bval && $( "#archivo" ).required();
			  $.get('index.php','controller=User&action=validar&U='+usuario,function(dato)
			 {
			   
			  if(dato.rep=="1" )
				{
					$("#usuario_nick").addClass('ui-state-error');
					$("#usuario_nick").focus(); 
					$("#resp").addClass("mensaje_error ");
					img = '<img alt=""  src="./images/exclamation.png" style="margin-right:3px;" />';
					$("#resp").empty().append(img+'usuario ya existe');
					$("#resp").fadeIn();
					return false;			  
				}else
				{
				    $("#usuario_nick").removeClass('ui-state-error');
					$("#resp").fadeOut();
					$("#resp").removeClass();
					var imagePath = window.fotoim.imagePath;
					if(typeof imagePath=='undefined')
					{
						imagePath='view/fotostem/default.jpg';
						band=1;
					}
					//alert(imagePath);
					 //str = $("#_form").serialize();
					 str='id_perfil='+$( "#id_perfil" ).val();
					 str+='&usuario_nombres='+$("#usuario_nombres").val();
					 str+='&usuario_appaterno='+$("#usuario_appaterno").val();
					 str+='&usuario_apmaterno='+$("#usuario_apmaterno").val();
					 str+='&usuario_direccion='+$("#usuario_direccion").val();
					 str+='&usuario_telefono='+$("#usuario_telefono").val();
					 str+='&usuario_numdoc='+$("#usuario_numdoc").val();
					 str+='&usuario_nick='+$("#usuario_nick").val();
					 str+='&usuario_password='+$("#usuario_password").val();
					 str+='&usuario_fechanac='+$("#usuario_fechanac").val();
					 str+='&foto='+imagePath;
					 str+='&oper='+$("#oper").val();
					 str+='&band='+band;
					 //alert(str);
					 ver_msg(0,"..::Guardando::..")
						$.post('index.php','controller=User&action=save&'+str,function(data)
		             {
	                 
                      
			            
					      if(data.rep=="1")
			             {
						 window.fotoim.document.body.innerHTML='';
				           msg(1,'Datos grabados correctamente','controller=User');
			            }
			           if(data.rep=="2")
					   {
						ver_msg(2,'Datos modificados correctamente');
						
					   }
		             },'json');
				 
				}
			 },'json');
			}if(p==2)
			{ 
			         str='id_perfil='+$( "#id_perfil" ).val();
			         str+='&id_usuario='+$( "#id_usuario" ).val();
					 str+='&usuario_nombres='+$("#usuario_nombres").val();
					 str+='&usuario_appaterno='+$("#usuario_appaterno").val();
					 str+='&usuario_apmaterno='+$("#usuario_apmaterno").val();
					 str+='&usuario_direccion='+$("#usuario_direccion").val();
					 str+='&usuario_telefono='+$("#usuario_telefono").val();
					 str+='&usuario_numdoc='+$("#usuario_numdoc").val();
					 str+='&usuario_nick='+$("#usuario_nick").val();
					 str+='&usuario_password='+$("#usuario_password").val();
					 str+='&usuario_fechanac='+$("#usuario_fechanac").val();
					 //str+='&foto='+imagePath;
					 str+='&oper='+$("#oper").val();
					// alert(str);
					 $.post('index.php','controller=User&action=save&'+str,function(data)
		             {
					
			           if(data.rep=="2")
					   {
						ver_msg(2,'Datos modificados correctamente');
						
					   }
		             },'json');
			}
		 
		}
		
	});
	$("#usuario_fechanac").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		yearRange: "-100:+0"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});
});
function uploadImage()
{
  document.getElementById("_form").submit();
}
function atras()
{
paginacion('controller=user');
}

	