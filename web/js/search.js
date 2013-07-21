$(function() {
controller=$('#c').val();
 $( "#q" ).autocomplete({
   minLength: 0,
   source: "index.php?controller="+controller+"&action=search",
   focus: function( event, ui ) {
            $( "#q" ).val( ui.item.name );
            return false;
        },
    select: function( event, ui ) {
            $( "#q" ).val( ui.item.name );
           // $( "#q" ).val( ui.item.id );
			var q=$('#q').val();
			var p=$('#p').val();
                $.ajax({
                    type: "GET",
                    url: "index.php",
                    data: "controller="+controller+"&action=index&q="+q+"&p="+p,
                    success: function(data){
                        $("#cont").empty().append(data);
                        //$("#cont").show("blind");
						 document.getElementById("cont").style.display="none";
			             $("#cont").slideDown("slow");
                    },
		    	   error:function()
	                {
		                alert("ocurrio un error con ajax");
	                }
                });
            return false;
	   }
 }).data( "autocomplete" )._renderItem = function( ul, item ) {
            return $( "<li></li>" )
			
            .data( "item.autocomplete", item)
            .append( "<a>" + item.name+ "</a>" )
	    .appendTo( ul );
        };
		 $( "#q" ).change(function(){
        if ( $( this ).val() == "" ){
           
        }
    });
	$("#_buscar").click(function(){
	 var c=$('#c').val();
	 var qq=$('#q').val();
	 var  pp=$('#p').val();
      $.ajax({
                    type: "GET",
                    url: "index.php",
                    data: "controller="+c+"&action=index&q="+qq+"&p="+pp,
                    success: function(data){
                     document.getElementById("cont").style.display="none";
			             $("#cont").slideDown("slow");
                    },
		    	   error:function()
	                {
		                alert("ocurrio un error con ajax");
	                }
                });
				 return false;
   });	
});