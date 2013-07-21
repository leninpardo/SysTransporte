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
}

?>
