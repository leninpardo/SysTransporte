<title>registros</title>
<script language="javascript" type="text/javascript" src="web/js/evnt/val_frm<?php echo $controller; ?>.js"></script>
<script type="text/javascript" src="web/js/search.js"></script>
<script type="text/javascript">
	$(function(){
    	$( "#q" ).focus();
    });
</script>
<?php if($controller=='venta'){ ?>
<script type="text/javascript">
    $(document).ready(function(){
			$("._tr").mouseover(function(e)
			{  i = $(this).index();
                 id = $('tbody tr:eq('+i+') td:eq(0)').html();
                 tipo = $('tbody tr:eq('+i+') td:eq(3)').html();
                 estado = $('tbody tr:eq('+i+') td:eq(5)').html();
              // alert(tipo);
                  
                 if (tipo=="CREDITO" && estado==0) 
				    		{
                                  $("#cod"+id).focus().after("<span class='error' >Generar Plan de Cobro</span>");
                             }
				 
				 $('tbody tr:eq('+i+') td:eq(1)').click(function(data)
				 {
				    if(id!=null)
				    	{
				    		if (tipo=='CREDITO'&&estado==0) 
				    			{
                                 
									$.get('index.php', "controller=Plancobro&action=create&id="+id, function(data) 
									{
										$("#cont").empty().append(data);
										//document.getElementById("cont").style.display ="none";
										//$("#cont").slideDown("slow");
									});
                                 
				    			}
				    		//window.location = "index.php?controller=Plancobro&action=create&id="+id;

				    	}
				 });
            });
			$("._tr").mouseout(function()
			{  
				$(".error").remove();
			});
   });
</script>
<?php } ?>
<?php if($controller=='Plancobro'){ ?> 
<script type="text/javascript">
$(document).ready(function()
	{
                $("._tr").each(function(i,j){
                 
						//i = $("._tr").index();
						a=i+1;
						id = $('tbody tr:eq('+a+') td:eq(6)').html();
						color='#009f3b';
						if(id=='DEBE')
						{// alert(id);
						 color='#df6161';
						}
						$('tbody tr:eq('+a+') td:eq(6)').css("background",color);
                });

	});
</script>

<?php } ?>
<style type="text/css">
<!--
.error{
	background-color: #366932;
	padding: 5px 12px;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	margin-left: 45px;
	margin-top: -5px;
	position: absolute;
}
.error:before{
	content: '';
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #366932;
    border-left: 8px solid transparent;
    left: -16px;
    position: absolute;
    top: 5px;
}
#ventana2 {
	position:absolute;
	left:40%;
	top:40%;
	width:350px;
	height:108px;
	z-index:2;
	background-color: #FFFFFF;
	visibility:hidden;
	-moz-border-radius: 9px;
	-webkit-border-radius: 9px;
	border-radius: 9px;
}
#capa2 {
	position:absolute;
	left:0px;
	top:0px;
	width:100%;
	 height:775px;
	z-index:1;
	background-color: #333333;
	opacity: .4 ;
	-moz-opacity:0.4 ;
	filter: alpha(opacity=50);	
	visibility:hidden;	
}
.title
{
    background: #6386a1 url(ventana.png) 50% 50% repeat-x;
	border: 1px solid #63737e;
	color: #ffffff; font-weight: bold; 
	-moz-border-radius: 9px;
	-webkit-border-radius: 9px;
	border-radius: 9px;
}
.btn
{
    background: #3795ca ;
	 font-family: Trebuchet MS, Tahoma, Verdana, Arial, sans-serif; 
	 font-size: 1em; 
     position: relative; 
    padding: 0;
    margin-right: .1em; 
 
    cursor: pointer; 
    text-align: center; 
    overflow: visible;
    border: 1px solid #63737e;
	color: #fff; 
	text-decoration: none; 
}
-->
</style>
<?php
echo $grilla;
?>
<div class='apDiv1'></div>
<!--<div class='error' ></div>-->
<div id="ventana2"></div>
<div id="capa2"></div>