<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Caja
 *
 * @author root
 */
class Caja extends Main{
    //put your code here
    public function getCaja($ide,$ids)
    {
            $stmt = $this->db->prepare("select max(idcaja),estado from Caja where idEmpleado=:p1 and idSucursal=:p2 and fecha=current_date()");
		$stmt->bindParam(':p1', $ide, PDO::PARAM_INT);
		$stmt->bindParam(':p2',$ids['clave'],PDO::PARAM_INT);
             $stmt->execute();
             return $stmt->fetchObject();
    }
    function verificar_caja()
    {
        $stmt = $this->db->prepare('func_verifica_caja(:p1)');
        $stmt->bindValue(':p1',$_SESSION['idempleado'],PDO::PARAM_INT);
        $stmt->execute();
        $r = $stmt->fetchAll();
        $resp = $r[0][0];
        if($resp==1)
        {
            $msg = "";
        }
        if($resp==2)
        {
            $msg= "EXISTE UN CAJA APERTURADA PERO EN UNA FECHA PASADA, POR FAVOR SIRVASE A CERRAR ESTA CAJA Y POSTERIORMENTE APERTURAR PARA EL DIA DE HOY";
        }
        if($resp==3)
        {
            $msg= "PORFAVOR SIRVASE APERTURAR LA CAJA PARA EL DIA DE HOY PARA EL DESARROLLO DE LOS PROCESOS";
        }        
        return array($resp,$msg);
    }
}

?>
