<script type="text/javascript" src="web/js/evnt/val_frmp_actividad.js" ></script>
<script type="text/javascript">
    $(document).ready(function()
	{
	    $("#id_tipo_actividad").change(function()
		{
            vv = $(this).val();
			$("#id_actividad").empty();
            $.get("index.php","controller=p_actividad&action=_actividad&cod="+vv, function(data)
			{ 
				$("#id_actividad").append(data);
			});
			if(vv==1)
            {
                $("#_plantacion").css("display","none");
                $("#_plantacion").css("display","block");
				$("#plantacion").css("display","none");
                $("#plantacion").css("display","block");
            }
			else
			{
				$("#_plantacion").css("display","none");
				$("#plantacion").css("display","none");
			}
        });
    }); 
</script>
<div class='ui-widget-header'>Registro de Actividades de la Parcela</div>
<div id="frmtotal">
	<div id="msg" ></div>
	<form id="_form" name="_form" action="" method="GET">
		<table  width="550" cellspacing="4"cellpadding="0" border="0" >
			<tr>
				<td colspan="5">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="3" width="60">Parcela:</td>
				<td>
					<input type="hidden" name="id_parcela" id="id_parcela" value="<?php echo $obj->id_parcela; ?>"/>
					<input type="text" name="nombre_previo" id="nombre_previo" value="<?php echo $obj->nombre_previo; ?>" readonly="true" size="15"/>
					<input  type="button"name="agregar" id="agregar" value="..." onclick="popup('index.php?controller=parcela&action=mostrar',700,324)"/>
				</td>
			</tr>
			<tr>
				<td colspan="3">Productor:</td>
				<td>
					<input type="text" name="productor" id="productor" value="<?php echo $obj->productor; ?>" readonly="true" size="30"/>
					<input type="hidden" name="hectarea" id="hectarea" value="<?php echo $obj->hectarea; ?>" readonly="true" size="2"/>
			   </td>
			</tr>
			<tr>
				<td colspan="3">Tipo Actividad :</td>
				<td>
					<input type="hidden" name="oper" id="oper" value="<?php echo $p;?>"/>
					<div>
						 <spam>  <?php echo $t_actividad; ?></spam>
					</div>                                         
				</td>
			</tr>
			<tr>
				<td colspan="3">Actividad :</td>
				<td>
					<?php if($p==1){?>
					<?php if($id_actividad==0){ ?>
						<select name="id_actividad" id="id_actividad" class="text ui-widget-content ui-corner-all" style="width:200px"></select>
					<?php }
						else {echo $id_actividad; }}
					?>
					<?php {echo $id_actividad; }?>
				</td>
			</tr>
			
			<tr>
				<td colspan="3"><div  id="_plantacion" style="display:none;"> Cantidad:</div></td>
				<td>
				<?php
				if($p==2)
				{
					if($obj->id_tipo_actividad==1)
					{
						echo("<div  id='plantacion'>");
					}
					else
					{
						echo("<div  id='plantacion' style='display:none;'>");
					}
				}
				else
				{
					echo("<div  id='plantacion' style='display:none;'>");
				}
				?>
				
				<input type="text" name="cantidad" id="cantidad" value="<?php echo $obj->cantidad; ?>" size="5" maxlength="8" onkeypress="return permite(event,'num')"/>
				Precio: <input type="text" name="precio" id="precio" value="<?php echo $obj->precio; ?>" size="5" maxlength="8" onkeypress="return permite(event,'num')"/>
				</div>
				</td>
			</tr>
			<tr>
				<td colspan="3">Fecha :</td>
				<td>
					<input name="id_detalle_actividad" id="id_detalle_actividad" type="hidden" value="<?php echo $obj->id_detalle_actividad ?>"/>
					<input name="fecha" id="fecha" value="<?php echo $obj->fecha; ?>" size="8" maxlength="10" readonly="true">
					Costo jornada:
					<input type="text" name="costo" id="costo" value="<?php echo $obj->costo; ?>" size="5" maxlength="8" onkeypress="return permite(event,'num')"/>
			   </td>
			</tr>
			<tr>
				<td colspan="5">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="5" align="center" >
					<?php if($p==1){?>
					<label class='uiButton uiButtonConfirm'><input type="submit" name="grabar" id="grabar" value="registrar"  /></label>
					<?php }if($p==2){?>
					<label class='uiButton uiButtonConfirm'> <input type="submit" name="actualiza" id="actualiza" value="actualizar"  /></label>
					<?php }?>
					<label class='uiButton uiButtonConfirm'> <input type="button" name="regresar" id="regresar" value="atras"  onclick="atras();"/></label>							
				</td>
			</tr>
		</table>
	</form>
</div>