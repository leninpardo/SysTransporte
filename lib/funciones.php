<?php
function fecha_es($fecha)
{
  $dia=substr($fecha,8,2);
  $mes=substr($fecha,5,2);
  $anio=substr($fecha,0,4);
  
  return "$dia-$mes-$anio";
  }
  
  function fecha_en($fecha)
{
  $dia=substr($fecha,0,2);
  $mes=substr($fecha,3,2);
  $anio=substr($fecha,6,4);
  
  return "$anio-$mes-$dia";
  }
class num
{
	
	public function miles($numerom)
	{
		
		if ($numerom>=1000&&$numerom<2000)
		{
			$num_decenam="mil ".$this->centena($numerom%1000);
		}
		if($numerom>=2000&&$numerom<3000)
		{
			$num_decenam="dos mil ".$this->centena($numerom%1000);
		}
		if($numerom>=3000&&$numerom<4000)
		{
			$num_decenam="tres mil ".$this->centena($numerom%1000);
		}
		if($numerom>=4000&&$numerom<5000)
		{
			$num_decenam="cuatro mil ".$this->centena($numerom%1000);
		}
		if($numerom>=5000&&$numerom<6000)
		{
			$num_decenam="cinco mil ".$this->centena($numerom%1000);
		}
		if($numerom>=6000&&$numerom<7000)
		{
			$num_decenam="seis mil ".$this->centena($numerom%1000);
		}
		if($numerom>=7000&&$numerom<8000)
		{
			$num_decenam="siete mil ".$this->centena($numerom%1000);
		}
		if($numerom>=8000&&$numerom<9000)
		{
			$num_decenam="ocho mil ".$this->centena($numerom%1000);
		}
		if($numerom>=9000&&$numerom<10000)
		{
			$num_decenam="nueve mil ".$this->centena($numerom%1000);
		}
		if($numerom>=10000)
		{
			$num_decenam="!!!!Numero ingresado no se encuentra en el rango!!!!";
		}	
		if ($numerom<1000)
			$num_decenam=$this->centena($numerom);
		
		return $num_decenam;
		
	}
	public function centena($numero)
	{
		
		if ($numero>=100)
		{
			if ($numero>=900&&$numero<=999)
			{
				$num_decena="novecientos ";
				if ($numero>900)
					$num_decena=$num_decena."".$this->decena($numero - 900);
			}
			else if ($numero>=800&&$numero<=899)
			{
				$num_decena="ochocientos ";
				if ($numero>800)
					$num_decena=$num_decena."".$this->decena($numero - 800);
			}
			else if ($numero>=700&&$numero<=799)
			{
				$num_decena="setecientos ";
				if ($numero>700)
					$num_decena=$num_decena."".$this->decena($numero - 700);
			}
			else if ($numero>=600&&$numero<=699)
			{
				$num_decena="seiscientos ";
				if ($numero>600)
					$num_decena=$num_decena."".$this->decena($numero - 600);
			}
			else if ($numero>=500&&$numero<=599)
			{
				$num_decena="quinientos ";
				if ($numero>500)
					$num_decena=$num_decena."".$this->decena($numero - 500);
			}
			else if ($numero>=400&&$numero<=499)
			{
				$num_decena="cuatrocientos ";
				if ($numero>400)
					$num_decena=$num_decena."".$this->decena($numero - 400);
			}
			else if ($numero>=300&&$numero<=399)
			{
				$num_decena="trescientos ";
				if ($numero>300)
					$num_decena=$num_decena."".$this->decena($numero - 300);
			}
			else if ($numero>=200&&$numero<=299)
			{
				$num_decena="doscientos ";
				if ($numero>200)
					$num_decena=$num_decena."".$this->decena($numero - 200);
			}
			else if ($numero>=100&&$numero<=199)
			{
				if ($numero==100)
					$num_decena="cien ";
				else
					$num_decena="ciento "."".$this->decena($numero - 100);
			}
		}
		else
			$num_decena = $this->decena($numero);
		
		return $num_decena;	
		
			
	}
	public function decena($numeros)
	{
		
		
		
		if ($numeros>=90&&$numeros<=99)
		{
			$num_decena="noventa ";
			if ($numeros > 90)
				$num_decena=$num_decena."y ".$this->unidad($numeros - 90);
		}
		else if($numeros>=80&&$numeros<=89)
		{
			$num_decena="ochenta ";
			if ($numeros > 80)
				$num_decena=$num_decena."y ".$this->unidad($numeros - 80);
		}
		else if($numeros>=70&&$numeros<=79)
		{
			$num_decena="setenta ";
			if ($numeros>70)
				$num_decena=$num_decena."y ".$this->unidad($numeros - 70);
		}
		else if($numeros>=60&&$numeros<=69)
		{
			$num_decena="sesenta ";
			if($numeros>60)
				$num_decena=$num_decena."y ".$this->unidad($numeros - 60);
		}
		else if ($numeros>=50&&$numeros<=59)
		{
			$num_decena="cincuenta ";
			if ($numeros>50)
				$num_decena=$num_decena."y ".$this->unidad($numeros - 50);
		}
		else if($numeros>=40&&$numeros<= 49)
		{
			$num_decena="cuarenta ";
			if ($numeros>40)
				$num_decena=$num_decena."y ".$this->unidad($numeros - 40);
		}
		else if($numeros>=30&&$numeros<=39)
		{
			$num_decena="treinta ";
			if ($numeros>30)
				$num_decena=$num_decena."y ".$this->unidad($numeros - 30);
		}
		else if ($numeros>=20&&$numeros<= 29)
		{
			if ($numeros==20)
				$num_decena="veinte ";
			else
			   $num_decena="veinti ".$this->unidad($numeros - 20);
				//return $this->unidad($numeros - 20);
		}
		else if ($numeros>=10&&$numeros<=19)
		{
			switch ($numeros){
			case 10:

				$num_decena="diez ";
				break;

			case 11:

				$num_decena="once ";
				break;

			case 12:

				$num_decena="doce ";
				break;

			case 13:

				$num_decena="trece ";
				break;

			case 14:

				$num_decena="catorce ";
				break;

			case 15:
			
				$num_decena="quince ";
				break;
			
			case 16:
			
				$num_decena="dieciseis ";
				break;
			
			case 17:
			
				$num_decena="diecisiete ";
				break;
			
			case 18:
			
				$num_decena="dieciocho ";
				break;
			
			case 19:
			
				$num_decena="diecinueve ";
				break;
			
			}	
		}
		else
			$num_decena=$this->unidad($numeros);

	     return $num_decena;
	}
	public function unidad($numeraso)
	{
		switch ($numeraso){
		case 9:
				$num = "nueve";
				break;
		case 8:
				$num = "ocho";
				break;
		case 7:
				$num = "siete";
				break;
		case 6:
				$num = "seis";
				break;
		case 5:
				$num = "cinco";
				break;
		case 4:
				$num = "cuatro";
				break;
		case 3:
				$num = "tres";
				break;
		case 2:
				$num = "dos";
				break;
		case 1:
				if ($condicion == 0)
					$num="uno";
				else 
					$num="un";
				break;
		case 0:
				$num = "";
				break;
		}
		return $num;
		
	}
	function ver_decimal($number)
	{
	 
		 $int=(int)($number);
		 $res=($number-$int)*10;
		 $cont=count($res);
		 if($cont==1)
		 {
		  $n=$int.".".$res."0";
		  $d=$res."0";
		 }
		 if($cont==2)
		 {
		  $n=$int.".".$res;
		  $d=$res;
		 }
		  return array('numero'=>$n , 'decimal'=>$d );
	}
}
?>
