<script type="text/javascript" src="web/js/evnt/val_frmtipo_fertilizacion.js" ></script>
<div class='ui-widget-header'>Registro de Tipo de Fertilizacion</div>
<div id="frmtotal">
	<div id="msg" ></div>
	<form id="_form" name="_form" action="" method="GET">
		<table  width="550" cellspacing="4"cellpadding="0" border="0" >
			<tr>
				<td colspan="5">&nbsp;</td>
			</tr>
			<tr>
				<td>Descripcion:</td>
				<td colspan="3"><input name="oper" id="oper" type="hidden" value="<?php echo $p;?>"/>
					<input name="id_tipo_fertilizacion" id="id_tipo_fertilizacion" type="hidden" value="<?php echo $obj->id_tipo_fertilizacion?>"/>
					<input  type="text"  name="tipo_fertilizacion" id="tipo_fertilizacion" size="40" maxlength="100" value="<?php echo $obj->tipo_fertilizacion;?>"/>
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
                                   
			
					 