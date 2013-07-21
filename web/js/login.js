$(document).ready(function()
 {
	$('#dialog').dialog(
	{
		draggable: false,
		show:'fade',
		autoOpen: false,
		modal:true,
		position:'center',
		width: 300,
		height:'auto',
		title: 'Inicio de Sesion',
		resizable: false,
		buttons:{}
	});
	$("#dialog").load("frmlogin.php","",function(data){$("#dialog").empty().append(data);show_me();$.getScript('web/js/evnt/val_login.js');});
});
function show_me()
{
   $( "#dialog" ).dialog( "open" );
}