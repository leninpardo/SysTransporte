function popup(url,width,height)
{	  	    
	cuteLittleWindow = window.open(url, "littleWindow","location=no,width="+width+",height="+height+",top=80,left=300,scrollbars=yes");
}

nro=1; total=0; x=0; color="#d8ffb0";

function devolver_tema_capacitacion(id_tema_capacitacion,tema)
{
    opener.document.getElementById("id_tema_capacitacion").value=id_tema_capacitacion;
    opener.document.getElementById("tema").value=tema;
    window.close();
}

function devolver_productor(id_productor,productor)
{
    opener.document.getElementById("id_productor").value=id_productor;
    opener.document.getElementById("productor").value=productor;
	opener.document.getElementById("id_productor_selec").value=id_productor;
    opener.document.getElementById("productor_selec").value=productor;
	opener.document.getElementById("id_productor_secado").value=id_productor;
    opener.document.getElementById("productor_secado").value=productor;
	opener.document.getElementById("id_productor_descapsulado").value=id_productor;
    opener.document.getElementById("productor_descapsulado").value=productor;
	opener.document.getElementById("id_productor_destestado").value=id_productor;
    opener.document.getElementById("productor_destestado").value=productor;
	opener.document.getElementById("id_productor_prensado").value=id_productor;
    opener.document.getElementById("productor_prensado").value=productor;
	opener.document.getElementById("id_productor_prefiltrado").value=id_productor;
    opener.document.getElementById("productor_prefiltrado").value=productor;
	opener.document.getElementById("id_productor_filtrado").value=id_productor;
    opener.document.getElementById("productor_filtrado").value=productor;
	window.close();
}


function devolver_cliente(id_cliente,cliente,tipo,ruc_dni)
{
    opener.document.getElementById("id_cliente").value=id_cliente;
    opener.document.getElementById("cliente").value=cliente;
	
	if(tipo=='natural')
	{
	   opener.document.getElementById("num").innerHTML='Dni:';
       opener.document.getElementById("tipo_c").value='1';
       opener.document.getElementById("n_c").value='BOLETA';
	}else
	{
	  opener.document.getElementById("num").innerHTML='Ruc:';
      opener.document.getElementById("tipo_c").value='2';
      opener.document.getElementById("n_c").value='FACTURA';
	}
	opener.document.getElementById("ruc_dni").value=ruc_dni;
	
    window.close();
}

function devolver_cliente_venta(id_cliente,cliente)
{
	
    opener.document.getElementById("id_cliente_venta").value=id_cliente;
    opener.document.getElementById("cliente_venta").value=cliente;
	window.close();
}
function devolver_produccion(id,des,stock)
{
 
 if(document.getElementById("cant"+id).value=="" || parseInt(document.getElementById("cant"+id).value<=0))
 {
   alert('La cantidad debe ser mayor o igual a 1');
   document.getElementById("cant"+id).focus();
   return false;
 }else if(document.getElementById("precio"+id).value=="")
	 {
	   alert("selecciones el precio a vender");
	   return false;
	 }
  cant=parseInt(document.getElementById("cant"+id).value);
  if(stock<cant)
  {
     alert("ingrese cantidad menor a estock");
	 document.getElementById("cant"+id).focus();
     return false;
  }else
  {
    opener.document.getElementById("id_prod").value=id;
    opener.document.getElementById("prod").value=des;
    opener.document.getElementById("precio").value=parseFloat(document.getElementById("precio"+id).value);
    opener.document.getElementById("cant").value=cant;
	window.close();
  }
}
function num(idd,precio,val)
{
  if(val=='c'+idd)
  {
  	document.getElementById("c"+idd).style.textDecoration='underline';
  	document.getElementById("cc"+idd).style.textDecoration='none';
    $("#c"+idd).css("background","#009f3c");
    $("#cc"+idd).css("background","#F0F0F0");
  }else if(val=='cc'+idd)
  {
    document.getElementById("cc"+idd).style.textDecoration='underline';
    document.getElementById("c"+idd).style.textDecoration='none';
    $("#cc"+idd).css("background","#009f3c");
    $("#c"+idd).css("background","#F0F0F0");
  }
  document.getElementById("precio"+idd).value=precio;
}
function devolver_prod_acopio(id_productor,productor,capsula,grano)
{
    opener.document.getElementById("id_productor").value=id_productor;
    opener.document.getElementById("productor").value=productor;
    opener.document.getElementById("capsula").value=capsula;
    opener.document.getElementById("grano").value=grano;
    window.close();
}

function devolver_prod_secado_caps(id_secado,productor,capsula)
{
    opener.document.getElementById("id_secado").value=id_secado;
    opener.document.getElementById("productor").value=productor;
    opener.document.getElementById("capsula").value=capsula;
    window.close();
}

function devolver_prod_destestado(id_productor,productor,grano)
{
    opener.document.getElementById("id_productor").value=id_productor;
    opener.document.getElementById("productor").value=productor;
    opener.document.getElementById("grano").value=grano;
    window.close();
}

function devolver_prod_prensado(id_productor,productor,entera, partida)
{
    opener.document.getElementById("id_productor").value=id_productor;
    opener.document.getElementById("productor").value=productor;
    opener.document.getElementById("entera").value=entera;
    opener.document.getElementById("alm_e").value=entera;
    opener.document.getElementById("partida").value=partida;
    opener.document.getElementById("alm_p").value=partida;
    window.close();
}

function devolver_prod_prefiltrado(id_productor,productor,aceite)
{
    opener.document.getElementById("id_productor").value=id_productor;
    opener.document.getElementById("productor").value=productor;
    opener.document.getElementById("aceite").value=aceite;
    opener.document.getElementById("cant").value=aceite;
    window.close();
}

function devolver_producto_produccion(id_producto,id_fuente,producto)
{
    opener.document.getElementById("id_producto").value=id_producto;
    opener.document.getElementById("producto").value=producto;
    opener.document.getElementById("id_fuente").value=id_fuente;
    window.close();
}

function devolver_parcela(id_parcela,nombre_previo,productor,hectarea)
{
    opener.document.getElementById("id_parcela").value=id_parcela;
    opener.document.getElementById("nombre_previo").value=nombre_previo;
    opener.document.getElementById("productor").value=productor;
    opener.document.getElementById("hectarea").value=hectarea;
    window.close();
}

function devolver_parcela_c(id_parcela,nombre_previo,productor,hectarea)
{
    opener.document.getElementById("id_parcela").value=id_parcela;
    opener.document.getElementById("nombre_previo").value=nombre_previo;
    opener.document.getElementById("productor_c").value=productor;
	opener.document.getElementById("hectarea").value=hectarea;
    window.close();
}


function devolver_cultivo(id_cultivo,cultivo)
{
    opener.document.getElementById("id_cultivo").value=id_cultivo;
    opener.document.getElementById("cultivo").value=cultivo;
    window.close();
}

function devolver_tipo_compra(id_tipo_compra,tipo_compra)
{
    opener.document.getElementById("id_tipo_compra").value=id_tipo_compra;
    opener.document.getElementById("tipo_compra").value=tipo_compra;
    window.close();
}

function devolver_asignar_cultivo(cod,productor,previo,cultivo,area)
{
    opener.document.getElementById("id_det_cultivo").value=cod;
    opener.document.getElementById("nombre_previo").value=previo;
    opener.document.getElementById("productor").value=productor;
    opener.document.getElementById("cultivo").value=cultivo;
    opener.document.getElementById("area").value=area;
    window.close();
}

function devolver_preparacion_terreno(cod,preparacion)
{
    opener.document.getElementById("id_preparacion").value=cod;
    opener.document.getElementById("preparacion_terreno").value=preparacion;
    window.close();
}

function devolver_manejo_maleza(cod,manejo)
{
    opener.document.getElementById("id_manejo").value=cod;
    opener.document.getElementById("manejo_maleza").value=manejo;
    window.close();
}

function devolver_fertilizacion(cod,fertilizacion)
{
    opener.document.getElementById("id_fertilizacion").value=cod;
    opener.document.getElementById("fertilizacion").value=fertilizacion;
    window.close();
}

function devolver_plaga(cod,plaga)
{
    opener.document.getElementById("xid_plaga").value=cod;
    opener.document.getElementById("xplaga").value=plaga;
    window.close();
}
  
function limpiar()
{
	document.getElementById("tema").value="";
	document.getElementById("id_tema_capacitacion").value="";
	document.getElementById("responsable").value="";
	document.getElementById("tema").focus();
}
function agregar_capacitacion()
{
    id=document.getElementById("id_tema_capacitacion").value;
    cap=document.getElementById("tema").value;
    resp=document.getElementById("responsable").value;
	if(cap==""||parseFloat(cap)<1||parseFloat(cap)>1)
    {
        return 0;
    }
	D=document.getElementById("detalle").innerHTML;
	HTML="<div id='det"+nro+"'><table width='100%'>",
    HTML=HTML+"<tr bgcolor='"+color+"'>";
    HTML=HTML+"<td width='10%'>"+nro+"</td>";nro++;
    HTML=HTML+"<td width='50%'>"+"<input type='text'name='temac[]' value='"+cap+"' size='35' readonly='true' /><input type='hidden' name='codigo[]' id='codigo[]' value='"+id+"' size='3'/>"+"</td>";
    HTML=HTML+"<td width='30%'>"+"<input type='text'name='responsablec[]' id='responsablec[]' value='"+resp+"' size='15' readonly='true' />"+"</td>";
    HTML=HTML+"<td width='10%'>"+"<a href ='javascript:eliminarc("+nro+")'title='eliminar registro'>[x]</a>"+"</td>";
    HTML=HTML+"</tr></table>";
    document.getElementById("detalle").innerHTML=D + HTML;
    limpiar();
}

function eliminarc(nro)
{
	nro--;
    if(confirm("Esta seguro que desea eliminar?"))
    {
        document.getElementById("det"+nro).innerHTML="";
        document.getElementById("det"+nro).style.display="none";
    }
}


function enviar(url)
{
	window.location=url;


}