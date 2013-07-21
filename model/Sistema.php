<?php
include_once("Main.php");
class Sistema extends Main
{
   
    function menu()
    {
        $stmt = $this->db->prepare("select m.id_modulos,m.idpadre,m.descripcion,m.url from seguridad.modulos m inner join seguridad.permisos p on m.id_modulos=p.id_modulos where m.estado=1 and m.idpadre is null and p.id_perfil=:p1 and p.acceder=1 order by m.orden");
        $stmt->bindValue(':p1', $_SESSION['id_perfil'] , PDO::PARAM_INT);
        $stmt->execute();        
        $items = $stmt->fetchAll();
        $cont = 0; 
        $cont2 = 0;
        foreach ($items as $valor)
        {
            $stmt = $this->db->prepare("select m.id_modulos,m.idpadre,m.descripcion,m.url from seguridad.modulos m inner join seguridad.permisos p on m.id_modulos=p.id_modulos where m.estado=1 and m.idpadre=".$valor['id_modulos']." and p.id_perfil=:p1 and p.acceder=1 order by m.orden");
            $stmt->bindValue(':p1', $_SESSION['id_perfil'] , PDO::PARAM_INT);
            $stmt->execute();
            $hijos = $stmt->fetchAll();
            $menu[$cont] = array(
			'idmodulo'=>$valor['id_modulos'],
            'texto' => $valor['descripcion'],
            'url' => '',
            'enlaces' => array()
                );
            $cont2 = 0;
            foreach($hijos as $h)
            {
              $menu[$cont]['enlaces'][$cont2] = array('idmodulo'=>$h['id_modulos'],'texto' => $h['descripcion'],'url' => $h['url']);
              $cont2 ++;
            }
            $cont ++;
        }
        return $menu;
    }
}
?>