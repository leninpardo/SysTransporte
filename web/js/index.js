/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
            var ultimoid = 0;
            var tam_alerts = 4;
            var band = true;
            var dimencion = 'ubigeo.descripcion';
            var page_graph = 'grafico.php';
           $(document).ready(function() {
                $("#grafico").attr("src",page_graph);
               jQuery.easing['BounceEaseOut'] = function(p, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
};
                $("#example").tabs();
                $("#example").css({height:"30px",background:"transparent",border:0,margin:"2px",padding:"1px"});
                $("#example ul").css({background:"transparent",paddingTop:"9px",border:"0"});
                $("#example li").css("float", "right");

                $(".menu_links").click(function(){
                    var page = $(this).attr("id")+'.php';
                    $('#midcontent h6').empty();
                    $('#midcontent h6').html("Loading...");
                    $('#midcontent').load(page,function(){});
                });

                $("#init_session").click(function(){
                    $('#dialog').dialog({
                    draggable: false,
                    show:'fade',
                    autoOpen: false,
                    modal:true,
                    position:'center',
                    width: 300,
                    height:'auto',
                    title: 'Inicio de Sesion',
                    resizable: false,
                    buttons: {}
		});
                  $("#dialog").load("frmlogin.php","",function(data){$("#dialog").empty().append(data);show_me();$.getScript('js/evnt/val_login.js');});
                });
                $("#box").css("display", "none");
                $.post("call/callAlertas.php","",function(data){
                $("#box").empty();
                    $.each(data,function(i,n){
                        if(i==0){ultimoid=n.ids;}
                       html = "";
                       html += "<div id='BoxAlert"+(i+1)+"' class='box_alert'>";
                       html += "<div class='hora'>Hora: "+n.hora+"</div>";
                       html += "<div class='fecha'>Fecha: "+n.fecha+"</div>";
                       html += "<div class='entidad'>Entidad: "+n.entidad+"</div>";
                       html += "<div class='ubigeo'>Lugar: "+n.ubigeo+"</div>";
                       html += "<div class='hechos'>Hechos: "+n.hechos+"</div>";
                       html += "<div class='leer_mas'><a href='javascript:open_detalles("+n.ids+")' class='leer'>Leer m&aacute;s</a></div>";
                       html += "</div>";
                       $("#box").append(html);
                    });
                },'json');
                $("#box").fadeIn();

                $("#nameuser").click(function(){
                    v = $("#opciones").css("visibility");
                    if(v=="hidden"){$("#opciones").css("visibility","visible");}
                        else {$("#opciones").css("visibility","hidden");}
                });


               $.post("call/callMostrarNoticias.php","",function(data){
                $("#mycarousel").empty();
                 noti = "<ul>";
                 cantidad=0;
                 if (data!=null){
                    $.each(data,function(i,n){
                       cantidad=2;
                       noti += "<li><a style='text-decoration: none' href='javascript:open_noticias("+n.idnoticia+")'>";
                       noti += "<div style='height: 138px;border: 1px solid #AAAAAA;-moz-border-radius: 5px'>";
                       noti += "<div style='height: 138px; width: 170px;float: left;padding-left: 4px; padding-top: 4px'>";
                       noti += "<img border='0' src='uploadify/uploads/noticias/"+n.imagen+".JPG' width='165px' height='130px' alt='' align='left'  />";
                       noti += "</div>";
                       noti += "<div style='width: 200px;height: 138px;float: right'>";
                       noti += "<div style='font-weight: bold; background: #669900;font-size: 13px;color:white;margin: 5px'>";
                       noti += "<span style='font-size: 11px;font-style: italic'>" +n.fech_public+ "</span> - " + n.titulo;
                       noti += "</div>";
                       noti += "<div style='font-size: 11px;margin: 10px 5px 5px 5px; color: black'>";
                       noti += n.descripcion;
                       noti += "</div>";
////                       noti += " <div style='float: right'>";
////                       noti += "<a href='javascript:open_noticias("+n.idnoticia+")' class='leer'>[Leer m&aacute;s]&nbsp;&nbsp;</a>";
////                       noti += "</div>";
                       noti += "</div></div></a></li>" ;

                    });}
                
               else{ 
                   cantidad=1;
                   noti+="<li><div align='center' style='padding-top: 60px;height: 78px;width: 757px;border: 1px solid #AAAAAA;-moz-border-radius: 5px'> - SIN NOTICIAS - </div></li>";
               }

                    $("#mycarousel").append(noti+"</ul><div id='mycarousel-stop'></div><div id='mycarousel-play'></div>");
                            $("#mycarousel").jcarousel({
                                //easing: 'BounceEaseOut', //BounceEaseOut
                                wrap: 'last',
                                auto: 3,
                                visible: cantidad,
                                scroll: 1,
                                itemLoadCallback: mycarousel_itemLoadCallback
                });
                  function mycarousel_itemLoadCallback(carousel, state) {

                    if (state != 'init')
                        return;
                    jQuery('#mycarousel-stop').bind('click', function() {
                        carousel.stopAuto();
                        jQuery('#mycarousel-stop').hide();
                        jQuery('#mycarousel-play').show();
                        return false;
                    });
                       jQuery('#mycarousel-play').bind('click', function() {
                        carousel.startAuto();
                        jQuery('#mycarousel-play').hide();
                        jQuery('#mycarousel-stop').show();
                        return false;
                    });
                    jQuery('div.jcarousel_waiting').hide();
                    var waiting = document.getElementById("jc_waiting");
                    waiting.className+=" hidden-waiting";
                }
                  $('#mycarousel-play').hide();
                },'json');

                
                $.post("call/process.php","op=15",function(data){$("#anios").empty().append(data);});
                $(".item_lista").click(function(){
                    var anio = $("#anios").val();
                    var descripcion = $(this).attr("id");
                    var title = $(this).text();
                    dimencion = descripcion;
                    $.post("graph_ajax.php","type="+page_graph+"&title="+title+"&anio="+anio+"&descripcion="+descripcion,function(data){
                        $("#graph").empty().append(data);
                    });
                });
                
             });

           function ver_reporte()
           {
            var anio = $("#anios").val();
            if(page_graph!="grafico.php"){popup("informe.php?type=p&p1="+anio,600,500);}
                else {popup("informe.php?p1="+anio,600,500);}
           }

           function establecer_tipo(pag)
           {
             page_graph = pag;
             $("#grafico").attr("src", page_graph);
           }
             function res_tabulados()
                {
                   var anio = $("#anios").val();
                     var title = $('#'+dimencion).text();
                     popup("view/list/lista_tabulados.php?title="+title+"&por="+dimencion+"&anio="+anio,600,500);
                }

            function show_me()
            {
                $('#dialog').dialog('open');
            }
            function atras(){
                $('#midcontent').load("coments.php",function(){});
            }

            function search_incidencias()
               {

                         if(band){
                         band = false;
                          $.post("call/callAlertasNew.php","ids="+ultimoid,function(data){
                             if(data!=null){
                             $.each(data,function(i,n){
                                        if(i==0){ultimoid=n.ids;}
                                       ultimoid=n.ids;
                                       tam_alerts = tam_alerts+1;
                                       $("#BoxAlert"+(tam_alerts-4)).hide("blind");
                                       $("BoxAlert"+(tam_alerts-4)).remove();
                                       html = "";
                                       html += "<div id='BoxAlert"+(tam_alerts)+"' class='box_alert' style='display:none'>";
                                       html += "<div class='hora'>Hora: "+n.hora+"</div>";
                                       html += "<div class='fecha'>Fecha: "+n.fecha+"</div>";
                                       html += "<div class='entidad'>Entidad: "+n.entidad+"</div>";
                                       html += "<div class='ubigeo'>Lugar: "+n.ubigeo+"</div>";
                                       html += "<div class='hechos'>Hechos: "+n.hechos+"</div>";
                                       html += "<div class='leer_mas'><a href='#' class='leer'>[Leer m&aacute;s]</a></div>";
                                       html += "</div>";
                                       $("#box").append(html);
                                       $("#BoxAlert"+tam_alerts).show("blind",function(){$("#BoxAlert"+tam_alerts).show("highlight");});

                             });
                             }
                           band = true;
                          },'json');
                        }
                }

           setInterval(search_incidencias,5000);

          
           //Funciones para los detalles de las noticias
           function open_detalles(id)
           {
               $('#dialog').empty();
               $('#dialog').dialog({
                    draggable: true,
                    modal:false,
                    show:'highlight',
                    autoOpen: false,                    
                    position:'center',
                    width: 500,
                    height: 'auto',
                    title: 'Detalle de Alertas',
                    resizable: true,
                    buttons: {"Cerrar": function() {
				$(this).dialog("close");
                                }}
                });
                $("#dialog").load("detail_alertas.php","id="+id,function(data){$("#dialog").empty().append(data);show_me();});
                                
           }

           function open_noticias(id)
           {
               $('#dialog').empty();
               $('#dialog').dialog({
                    draggable: true,
                    modal:false,
                    show:'fade',
                    autoOpen: false,
                    position:'center',
                    width: 510,
                    height: 550,
                    title: 'Detalle de Noticia',
                    resizable: false,
                    buttons: {"Cerrar": function() {
				$(this).dialog("close");
                                }}
                });

                $("#dialog").load("view/forms/frmdetalle_noticia.php","id="+id,function(data){$("#dialog").empty().append(data);show_me();});

                show_me();

           }
            function carga_acercade()
                {
                    
                }