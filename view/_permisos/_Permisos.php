
<script type="text/javascript">
    $(document).ready(function() {
        $("#id_perfil").change(function(){
            vv = $(this).val();
            if(vv!=""){
            $("#result").hide("slow");
            //$("#modulos").hide("slow");
            $("#modulos").load("index.php","controller=_Permisos&action=Modulos&id_perfil="+vv,function(){
                //$("#modulos").show("slow");
				  document.getElementById("modulos").style.display="none";
                  $("#modulos").slideDown("slow");
              });
            }
            else {
                $("#result,#modulos").hide("slow");                
            }
        });
        $("#save").click(function(){
            v = $("#id_perfil").val();
            if(v!=""){
                 $.each($("input:checkbox"), function(){
                    if($(this).attr("checked")){
                    }else {
                      $(this).attr("checked","checked")
                      $(this).val('off');
                    }
                });
                str = $("#frmpermisos").serialize();
                $("#result").hide("slow");
				ver_msg(0,'.::Guardando::..');
                $.get("index.php","controller=_Permisos&action=_Save&"+str, function(data)
                    { 
                 	     
						 msg(1,data.msg,'controller=_Permisos');
					}
                ,'json');
		    }
                else {alert("Porfavor Seleccione un perfil antes de guardar los cambios.");
                      $("#id_perfil").focus();}
        });
	
    });   
</script>
<div class="div_container">
<div class="ui-widget-header" style="margin: 0 auto; width: 99%; margin-top: 0px;">Administracion de Accesos</div>
<div style="padding:10px; float: left; width: 100%;">
   
    <span>Seleccione Perfil:</span>
    <span><?php echo $cargos; ?></span>
    <span><a id="save" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-hover">&nbsp;&nbsp;Guardar Cambios&nbsp;&nbsp</a></span>

</div>
<div style="clear:both"></div><div id="msg">
<div id="modulos" style='clear:both;height: 430px; width:880px; overflow:auto;'>
</div>
</div>
</div>