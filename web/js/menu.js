(function($) {
$.fn.generaMenu = function(menu) 
{
  this.each(function()
  {
    var capaMenu=$(this);
    jQuery.each(menu, function() 
    {
	  var capa=$("<div></div>");
	  capaMenu.append(capa);
	  var capaPadre=$('<h3></h3>');
      capa.append(capaPadre);
	  //var menuid="'"+this.idmodulo+"'";
      //var _id=this.idmodulo;
	  var enlacepadre=$('<a title="'+this.texto+'"  href="">'+this.texto+'</a>');
	  capaPadre.append(enlacepadre);
	  var capahijo=$('<div></div>');
	  capa.append(capahijo);
	  var subLista = $('<ul class="items_menus"></ul>');
	   capahijo.append(subLista);
	      jQuery.each(this.enlaces, function()
		   {
		     var subElemento = $('<li></li>');
		      subLista.append(subElemento);
			  var menu_id="'"+this.idmodulo+"'";
			  var urlsub="'"+this.url+"'";
			  var subEnlace = $('<a  onclick="modulo('+menu_id+','+urlsub+');" href="javascript:cargar_pages(' +urlsub + ')">' + this.texto + '</a>');
		      subElemento.append(subEnlace);
		   });
	});
  });
 return this;
};

})(jQuery);