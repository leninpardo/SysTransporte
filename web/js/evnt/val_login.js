
$(document).ready(function() 
{
	$("#ingresar").click(function()
	{
		if($("#codigo").val()==CodVali)
		{                
			$("#msg").empty();
			$("#loader").css("display","block");
			str=$("#frmperfil").serialize();  
                     
			$.post("process.php",str,function(data){
			if(data.rep=="1")
			{
				window.location="index.php";
			}
			else 
			{
				$("#btnlogueo").css("display","inline");
				$("#loader").css("display","none");
				$("#msg").empty().append(data.msg);
				$("#msg").show("slow");}
			},'json');
		}
		else 
		{
			$("#msg").empty().append("Codigo de Verficacion incorrecto");$("#msg").show("slow");
		}
	});
});

  