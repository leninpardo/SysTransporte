<?php    
    global $n;
    if(!isset($_GET['key'])) { $n=rand(1000,9999); } else { $n = base64_decode($_GET['key']); }
?>

        
        <form id="frmperfil" name="frmperfil"method="post"  action="" >
                <table style="width: 100%; font-size: 12px;">
                    <tr>
                        <td>Usuario </td>
                        <td colspan="2">:&nbsp;<input placeholder="Usuario" id="login" name="login" class="text ui-widget-content" style=" width: 80%; text-align: left; " value=""  /></td>
                    </tr>
                    <tr>
                        <td>Password </td>
                        <td colspan="2">:&nbsp;<input placeholder="Password" type="password" id="clave" name="clave" class="text ui-widget-content" style=" width: 80%; text-align: left;" value=""/></td>
                    </tr>
                    <tr>
                        <td>Digite</td>
                        <td width="90">:&nbsp;<input placeholder="capcha" id="codigo" name="codigo" class="text ui-widget-content" style=" width: 80%; text-align: left;" value="" /></td>
                        <td align="left"><img alt=""  src="lib/capcha.php?key=<?php echo $n; ?>" width="60" height="20" border="0" style="float:left" /></td>
                    </tr>
                    <tr>
                        <td colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="3" align="center">
                            <input type="button" id="ingresar" value="Ingresar"  class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-hover" style="width: 90px; height: 23px;"   tabindex="3" />
                        </td>
                    </tr>
                </table>
        </form>
<div id="msg" style="display:none; font-size: 15px; color: red;" align="center"></div>
<div id="loader" style="display:none" align="center"><img src="web/images/cargando.gif" /></div>
<?php echo "<script>CodVali='".$n."';</script>"; ?>

