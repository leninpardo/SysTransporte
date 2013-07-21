var band=0;
$(function()
{   
	$("#grabar").click(function()
	{            
		hec=$("#hectareas").val();
		si_pr=$("#si_produccion").val();
		si_ef=$("#si_e_fenologico").val();
		si_am=$("#si_ampliar").val();
		hac=parseFloat(si_pr)+parseFloat(si_ef)+parseFloat(si_am);
		if(hac>hec)
		{
			alert("suma de hectareas en produccion, estado fenologico y por ampliar no coinciden con la hectarea total del terreno");
			return 0;
		}
		bval = true;
	    bval = bval && $( "#id_productor").required();
	    bval = bval && $( "#nombre_previo").required();
	    bval = bval && $( "#ubicacion").required();
	    bval = bval && $( "#hectareas").required();
	    bval = bval && $( "#si_produccion").required();
	    bval = bval && $( "#si_e_fenologico").required();
	    bval = bval && $( "#si_ampliar").required();
	    bval = bval && $( "#departamento").required();
	    bval = bval && $( "#provincia").required();
	    bval = bval && $( "#distrito").required();
	    bval = bval && $( "#sector").required();
		if ( bval )
		{
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
				str='id_productor='+$( "#id_productor" ).val();
				str+='&nombre_previo='+$( "#nombre_previo" ).val();
				str+='&ubicacion='+$( "#ubicacion" ).val();
				str+='&hectareas='+$("#hectareas").val();
				str+='&si_produccion='+$("#si_produccion").val();
				str+='&si_e_fenologico='+$("#si_e_fenologico").val();
				str+='&si_ampliar='+$("#si_ampliar").val();
				str+='&sector='+$("#sector").val();
				str+='&foto='+imagePath;
				str+='&oper='+$("#oper").val();
				str+='&flag='+flag;
				ver_msg(0,"..::Guardando::..")
				$.post('index.php','controller=parcela&action=save&'+str,function(data)
				{
					if(data.rep=="1")
					{
						window.fotoim.document.body.innerHTML='';
						msg(1,'Datos grabados correctamente','controller=parcela');
					}
				},'json'); 	
			}
			if(p==2)
			{
				
				str='id_parcela='+$( "#id_parcela" ).val();
				str+='&id_productor='+$( "#id_productor" ).val();
				str+='&nombre_previo='+$( "#nombre_previo" ).val();
				str+='&ubicacion='+$( "#ubicacion" ).val();
				str+='&hectareas='+$("#hectareas").val();
				str+='&si_produccion='+$("#si_produccion").val();
				str+='&si_e_fenologico='+$("#si_e_fenologico").val();
				str+='&si_ampliar='+$("#si_ampliar").val();
				str+='&sector='+$("#sector").val();
				str+='&oper='+$("#oper").val();
				if(band==1)
				{
					var imagePath = window.fotoim.imagePath;
					str+='&foto='+imagePath;
					str+='&fotoq='+$("#fotoq").attr( 'src' );
					str+='&band=1';
				}
				else
				{
					str+='&foto='+$("#fotoq1").val();
					str+='&fotoq=';
					str+='&band=0';
				}
				//alert(str);
				ver_msg(0,"..::Guardando::..")
				$.post('index.php','controller=parcela&action=save&'+str,function(data)
				{
					//alert(data);
					if(data.rep=="2")
					{
						ver_msg(2,'Datos modificados correctamente');
					}
				},'json');
			}
		}
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
	paginacion('controller=parcela');
}
function imprimir()
{
	window.open("fpdf/reporte2.php?tabla=parcela");
}