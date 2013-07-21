<script type="text/javascript" src="web/js/evnt/val_frmmodulo.js" ></script>
<div class='ui-widget-header'>Registro de modulos</div>
	<div id="frmtotal">
	    <div id="msg" ></div>
        <form id="_form" name="_form" action="" method="POST">
			<table  width="550" cellspacing="4"cellpadding="0" border="0" >
			    <tr>
					<td colspan="5">&nbsp;</td>
				</tr>
			    <tr>
			        <td width="109">Padre:</td>
				    <td colspan="3">
                        <input type="hidden" name="oper" id="oper" value="<?php echo $p;?>"/>
                        <input type="hidden" name="id_modulos" id="id_modulos" value="<?php echo $obj->id_modulos; ?>"/>
                        <div>
				             <spam>  <?php echo $ModulosPadres; ?></spam>
				        </div>                                         
					</td>
                                      
                </tr>
				<tr>
			        <td>Descripcion:</td>
					<td colspan="3"><input  type="text"  name="descripcion" id="descripcion" size="40" maxlength="100" value="<?php echo $obj->descripcion;?>"/></td>
	            </tr>
			    <tr>
			        <td>URL:</td>
			        <td colspan="3"><input  type="text"  name="url" id="url" size="40" value="<?php echo $obj->url;?>" maxlength="60" /></td>
		        </tr>
		        <tr>
		            <td>Orden:</td>
		            <td colspan="3"><input  type="text"  name="orden" id="orden" size="10" value="<?php echo $obj->orden;?>" maxlength="10" /></td>
	            </tr>
	            <tr>
			        <td>Estado</td>
						  <?php
					         if( $obj->estado==1){$check="checked='checked'";}
                                else {$check="";}
                            ?>
				    <td colspan="3"><input type="checkbox" <?php echo $check;?> name="estado" id="estado"/></td>
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
    </div><!-- end for frm busqueda-->
                                   
				<!-- end for center-->
					 