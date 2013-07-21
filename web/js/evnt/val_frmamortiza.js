$(function()
{   
	$("#grabar").click(function()
	{            
	    id = $("#id_plan").val();
        if (id=="") {
            $( "#cliente" ).addClass( 'ui-state-error' ).focus();
            return false;
        } else {
            $( "#cliente" ).removeClass( 'ui-state-error' );
        }
		
		ver_msg(0,"..::Guardando::..")
          str = $(this).serialize();
          //alert(id);
                	$.post('index.php','controller=amortiza&action=save&id='+id,function(data)
		    {
	            //alert(data);
                        if(data.rep=="1")
			    {
					ver_msg(2,'Amortizacion Correcta');
                        $.ajax({
                        type: "GET",
                        url: "index.php",
                        data: "controller=amortiza&action=_viewA&cod="+id,
                        success: function(data){
                        $("#currentc").empty().append(data);
                        $("#currentc").show("blind");
                        }
                        });
			   }
			           if(data.rep=="2")
			   {
					
                    msg(1,'El cliente termino de pagar su deuda','controller=amortiza');
			   }
		   },'json');
		 
     
               
		
                
                
    });
	 $( "#cliente" ).autocomplete({
        minLength: 0,
	source: "index.php?controller=amortiza&action=_amortiza",
	focus: function( event, ui ) {
            $( "#cliente" ).val( ui.item.name );
            return false;
        },
	select: function( event, ui ) {
            $( "#cliente" ).val( ui.item.name );
            $( "#id_plan" ).val( ui.item.id );
			cod = $("#id_plan").val();
                $.ajax({
                    type: "GET",
                    url: "index.php",
                    data: "controller=amortiza&action=_viewA&cod="+cod,
                    success: function(data){
                        $("#currentc").empty().append(data);
                        $("#currentc").show("blind");
                    }
                });
            return false;
	}
	}).data( "autocomplete" )._renderItem = function( ul, item ) {

            return $( "<li></li>" )
            .data( "item.autocomplete", item )
            .append( "<a>" + item.name + "</a>" )
	    .appendTo( ul );
        };
        $( "#cliente" ).change(function(){
            if ( $( this ).val() == "" ){
                $( "#id_plan" ).val("");
				
            }
        });

        $(".links" , $('#currentc')[0] ).live("click",function(){
                $.ajax({
                    type: "GET",
                    url: $(this).attr( 'href' ),
                    success: function(data){                        
                        $("#currentc").empty().append(data);
                        $("#currentc").show("blind");
                    }
                });
                return false;
        });
	
});


function atras()
{
	paginacion('controller=perfil');
}
function imprimir()
{
window.open("fpdf/reporte.php?tabla=perfil");
}