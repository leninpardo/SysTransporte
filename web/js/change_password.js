function valida_password()
{
      bval = true;
	    bval = bval && $("#password").required();
		if(bval){
		 
          var pass = $("#password").val();
                $.post("index.php","controller=User&action=validar_pass&pass="+pass,function(data){		
                    if(data.rep=="1" ){
                        $("#msg,#c1").fadeOut();
                      //  $("#dialog").show("highlight");
                        $("#clave,#clave2").attr("disabled",false);
                        $("#clave").focus();
						$("#cambiar_clave").css("display","none");
                        $("#cambiar_clave").css("display","block");
                        //$("#clave").attr("reaonly",true);
                    }
                     else {
					  $("#msg").hide("slow");
					  $("#msg").css("display","none");
					  $("#msg").css("color","red");
					  $("#msg").empty().append('Password Incorrecto');
					  $("#msg").css("display","block");
					  $("#msg").show("slow");
					 
                     }
                },'json');
  }
}


function change_password()
{
       bval = true;
	    bval = bval && $( "#clave").required();
	    bval = bval && $( "#clave2").required();
		if(bval)
		{
		  var c= $( "#clave").val();
		  var c1= $( "#clave2").val();
		  if(c==c1)
		  {
		    $.post("index.php","controller=User&action=change&clave="+c,function(data)
			{ 
			   if(data.rep=="1")
			  {
			  $("#msg").css("color","");
			    ver_msg(2,data.msg)
			   
				;
			  }else
			  {
				  $("#msg").hide("slow");
				  $("#msg").css("display","none"); 
				  $("#msg").css("color","red");
				  $("#msg").empty().append("no se pudo cambiar password");
				  $("#msg").css("display","block");
				  $("#msg").show("slow");
			  }
			
			},'json');
			return false;
		  }
		  else
		  {   $("#msg").hide("slow");
		      $("#msg").css("display","none");
			   $("#msg").css("color","red");
			  $("#msg").empty().append('Las claves no coinciden');
			  $("#msg").css("display","block");
			  $("#msg").show("slow");			  
		  }
		}
}

  