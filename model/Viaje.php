<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Viaje
 *
 * @author root
 */
class Viaje extends Main{
    //put your code here
    public function getListaViajes()
    {
     $data=$this->db->query("select *from vista_viajes");
     $rs=$data->db->execute();
     return $rs->fetchAll();
    
    }
}

?>
