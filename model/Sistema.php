<?php
include_once("Main.php");
class Sistema extends Main
{
   
    function menu()
    {
        $stmt = $this->db->prepare("
            select m.idModulo,m.submodulo,m.Modulo,m.url from 
Modulo m inner join Permiso p on m.idModulo=p.idModulo where m.estado=0 and  
m.submodulo is null and p.idPerfil=:p1 and p.acceso=0 order by m.orden
            ");
       $stmt->bindValue(':p1', $_SESSION['idperfil'] , PDO::PARAM_INT);
        $stmt->execute();        
        $items = $stmt->fetchAll();
        $cont = 0; 
        $cont2 = 0;
        foreach ($items as $valor)
        {
            $stmt = $this->db->prepare("select m.idModulo,m.submodulo,m.Modulo,m.url
                from Modulo m inner join Permiso p on m.idModulo=p.idModulo where m.estado=0 and m.submodulo=$valor[0] and p.idPerfil=:p1 and p.acceso=0 order by m.orden");
            $stmt->bindValue(':p1', $_SESSION['idperfil'] , PDO::PARAM_INT);
            $stmt->execute();
            $hijos = $stmt->fetchAll();
            $menu[$cont] = array(
			'idmodulo'=>$valor[0],
            'texto' => $valor[2],
            'url' => '',
            'enlaces' => array()
                );
            $cont2 = 0;
            foreach($hijos as $h)
            {
              $menu[$cont]['enlaces'][$cont2] = array('idmodulo'=>$h[0],'texto' => $h[2],'url' => $h[3]);
              $cont2 ++;
            }
            $cont ++;
        }
        return $menu;
    }
}
?>