$(document).ready(function()
    {
        $("#reporte").change(function()
        {
            vv = $(this).val();
            if(vv=="")
            {
                $("#mostrar_").css("display","none");
                $("#mostrar_2").css("display","none");
                $("#mostrar_3").css("display","none");
                $("#mostrar_4").css("display","none");
                $("#mostrar_5").css("display","none");
				$("#s_actividad").css("display","none");
				$("#mostrar_6").css("display","none");
				$("#mostrar_7").css("display","none");
                
            }
            if(vv==1)
            {
                $("#mostrar_").css("display","none");
                $("#mostrar_").css("display","block");
                $("#mostrar_2").css("display","none");
                $("#mostrar_3").css("display","none");
                $("#mostrar_4").css("display","none");
                $("#mostrar_5").css("display","none");
				$("#s_actividad").css("display","none");
				$("#mostrar_6").css("display","none");
				$("#mostrar_7").css("display","none");
            }
            if(vv==2)
            {    $("#mostrar_").css("display","none");
			     $("#mostrar_2").css("display","none");
				 $("#mostrar_2").css("display","block");
				 $("#mostrar_3").css("display","none");
				 $("#mostrar_4").css("display","none");
				 $("#mostrar_5").css("display","none");
				 $("#s_actividad").css("display","none");
				 $("#s_actividad").css("display","block");
				 $("#mostrar_6").css("display","none");
				 $("#mostrar_7").css("display","none");
            }			
			 if(vv==3)
            {    $("#mostrar_").css("display","none");
			     $("#mostrar_2").css("display","none");
				 $("#mostrar_3").css("display","none");
				 $("#mostrar_3").css("display","block");
				 $("#mostrar_4").css("display","none");
				 $("#mostrar_5").css("display","none");
				 $("#s_actividad").css("display","none");
				 $("#mostrar_6").css("display","none");
				 $("#mostrar_7").css("display","none");
			}
			
			 if(vv==4)
            {    $("#mostrar_").css("display","none");
			     $("#mostrar_2").css("display","none");
				 $("#mostrar_3").css("display","none");
				 $("#mostrar_4").css("display","none");
				 $("#mostrar_4").css("display","block");
				 $("#mostrar_5").css("display","none");
				 $("#s_actividad").css("display","none");
				 $("#mostrar_6").css("display","none");
				 $("#mostrar_7").css("display","none");
            }
			if(vv==5)
            {    
				$("#mostrar_").css("display","none");
				$("#mostrar_2").css("display","none");
				$("#mostrar_3").css("display","none");
				$("#mostrar_4").css("display","none");
				$("#mostrar_5").css("display","none");
				$("#mostrar_5").css("display","block");
				$("#s_actividad").css("display","none");
				$("#mostrar_6").css("display","none");
				$("#mostrar_7").css("display","none");
            }	
			if(vv==6)
            {    
				$("#mostrar_").css("display","none");
				$("#mostrar_2").css("display","none");
				$("#mostrar_3").css("display","none");
				$("#mostrar_4").css("display","none");
				$("#mostrar_5").css("display","none");
				$("#mostrar_5").css("display","none");
				$("#s_actividad").css("display","none");
				$("#mostrar_6").css("display","none");
				$("#mostrar_6").css("display","block");
				$("#mostrar_7").css("display","none");
            }	

			if(vv==7)
            {    
				$("#mostrar_").css("display","none");
				$("#mostrar_2").css("display","none");
				$("#mostrar_3").css("display","none");
				$("#mostrar_4").css("display","none");
				$("#mostrar_5").css("display","none");
				$("#mostrar_5").css("display","none");
				$("#s_actividad").css("display","none");
				$("#mostrar_6").css("display","none");
				$("#mostrar_6").css("display","none");
				$("#mostrar_7").css("display","none");
				$("#mostrar_7").css("display","block");
            }			
          
        });
		$("#compra_c").change(function()
		{
			cc = $(this).val();
			if(cc=="")
			{
				$("#c_productor").css("display","none");
				$("#c_agrupacion").css("display","none");
				$("#c_agrupacion").css("display","block");
				$("#co_anio").css("display","none");
				$("#co_mes").css("display","none");
			}
			if(cc==1)
			{
				$("#c_productor").css("display","none");
				$("#c_agrupacion").css("display","none");
				$("#c_agrupacion").css("display","block");
				$("#co_anio").css("display","none");
				$("#co_anio").css("display","block");
				$("#co_mes").css("display","none");
			} 
			
			if(cc==2)
			{
				$("#c_productor").css("display","none");
				$("#c_agrupacion").css("display","none");
				$("#c_agrupacion").css("display","block");
				$("#co_anio").css("display","none");
				$("#co_anio").css("display","block");
				$("#co_mes").css("display","none");
				$("#co_mes").css("display","block");
			}
			if(cc==3)
			{
				$("#c_productor").css("display","none");
				$("#c_productor").css("display","block");
				$("#c_agrupacion").css("display","none");
				$("#co_anio").css("display","none");
				$("#co_anio").css("display","block");
				$("#co_mes").css("display","none");
			}
			if(cc==4)
			{
				$("#c_productor").css("display","none");
				$("#c_productor").css("display","block");
				$("#c_agrupacion").css("display","none");
				$("#co_anio").css("display","none");
				$("#co_anio").css("display","block");
				$("#co_mes").css("display","none");
				$("#co_mes").css("display","block");
			}
		});
		
		
		$("#produccion").change(function()
		{
			pp = $(this).val();
			if(pp=="")
			{
				
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
			}
			if(pp==1)
			{
				$("#seleccion_p").css("display","none");
				$("#seleccion_p").css("display","block");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
			} 
			
			if(pp=="2")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#secado_p").css("display","block");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
			}
			
			if(pp=="3")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#descapsulado_p").css("display","block");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
				
			}
			
			if(pp=="4")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#destestado_p").css("display","block");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
				
			}
			if(pp=="5")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#prensado_p").css("display","block");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
			}
			if(pp=="6")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#tostado_p").css("display","block");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
			}
			
			if(pp=="7")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#harina_p").css("display","block");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
			}	
			
			if(pp=="8")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#prefiltrado_p").css("display","block");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
			}	
			
			if(pp=="9")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#filtrado_p").css("display","block");
				$("#produccion_p").css("display","none");
			}
			
			if(pp=="10")
			{
				$("#seleccion_p").css("display","none");
				$("#secado_p").css("display","none");
				$("#descapsulado_p").css("display","none");
				$("#destestado_p").css("display","none");
				$("#prensado_p").css("display","none");
				$("#tostado_p").css("display","none");
				$("#harina_p").css("display","none");
				$("#prefiltrado_p").css("display","none");
				$("#filtrado_p").css("display","none");
				$("#produccion_p").css("display","none");
				$("#produccion_p").css("display","block");
			}
			
		});
		
		
		
		$("#m_produccion").change(function()
		{
			pro = $(this).val();
			if(pro=="")
			{
				$("#mm_prod_a").css("display","none");
				$("#mm_prod_m").css("display","none");
				
			}
			
			if(pro=="1")
			{
				$("#mm_prod_a").css("display","none");
				$("#mm_prod_a").css("display","block");
				$("#mm_prod_m").css("display","none");
				
			}	
			
			if(pro=="2")
			{
				$("#mm_prod_a").css("display","block");
				$("#mm_prod_m").css("display","none");
				$("#mm_prod_m").css("display","block");
				
			}
			
				
		});
		
		
		$("#m_filtrado").change(function()
		{
			fil = $(this).val();
			if(fil=="")
			{
				$("#mm_filt_a").css("display","none");
				$("#filt_p").css("display","none");
			}
			
			if(fil=="1")
			{
				$("#mm_filt_a").css("display","none");
				$("#mm_filt_a").css("display","block");
				$("#filt_p").css("display","none");
			}	
			
			if(fil=="2")
			{
				$("#mm_filt_a").css("display","block");
				$("#filt_p").css("display","none");
				$("#filt_p").css("display","block");
			}
			
		
		
			
			
		});
		
		
		
		$("#m_prefiltrado").change(function()
		{
			pref = $(this).val();
			if(pref=="")
			{
				$("#mm_pref_a").css("display","none");
				$("#mm_pref_m").css("display","none");
				$("#pref_p").css("display","none");
			}
			
			if(pref=="1")
			{
				$("#mm_pref_a").css("display","none");
				$("#mm_pref_a").css("display","block");
				$("#mm_pref_m").css("display","none");
				$("#pref_p").css("display","none");
			}	
			
			if(pref=="2")
			{
				$("#mm_pref_a").css("display","block");
				$("#mm_pref_m").css("display","none");
				$("#mm_pref_m").css("display","block");
				$("#pref_p").css("display","none");
			}
			
			if(pref=="3")
			{
				$("#mm_pref_a").css("display","block");
				$("#mm_pref_m").css("display","none");
				$("#pref_p").css("display","none");
				$("#pref_p").css("display","block");
			}
			if(pref=="4")
			{
				$("#mm_pref_a").css("display","block");
				$("#mm_pref_m").css("display","block");
				$("#pref_p").css("display","none");
				$("#pref_p").css("display","block");
			}
			
			
		});
		
			
		$("#m_venta").change(function()
		{
			vent = $(this).val();
			if(vent=="")
			{
				$("#venta_a").css("display","none");
				$("#venta_m").css("display","none");
				$("#venta_p").css("display","none");
				$("#ver_dibujo_v").css("display","none");
				$("#venta_f").css("display","none");
				$("#venta_f_2").css("display","none");
			}
			
			if(vent=="1")
			{
				$("#venta_a").css("display","none");
				$("#venta_a").css("display","block");
				$("#venta_m").css("display","none");
				$("#venta_p").css("display","none");
				$("#ver_dibujo_v").css("display","block");
				$("#venta_f").css("display","none");
				$("#venta_f_2").css("display","none");
			}	
			
			if(vent=="2")
			{
				$("#venta_a").css("display","block");
				$("#venta_m").css("display","none");
				$("#venta_m").css("display","block");
				$("#venta_p").css("display","none");
				$("#ver_dibujo_v").css("display","block");
				$("#venta_f").css("display","none");
				$("#venta_f_2").css("display","none");
			}
			
			if(vent=="3")
			{
				$("#venta_a").css("display","block");
				$("#venta_m").css("display","none");
				$("#venta_p").css("display","none");
				$("#venta_p").css("display","block");
				$("#ver_dibujo_v").css("display","block");
				$("#venta_f").css("display","none");
				$("#venta_f_2").css("display","none");
			}
			if(vent=="4")
			{
				$("#venta_a").css("display","block");
				$("#venta_m").css("display","block");
				$("#venta_p").css("display","none");
				$("#venta_p").css("display","block");
				$("#ver_dibujo_v").css("display","block");
				$("#venta_f").css("display","none");
				$("#venta_f_2").css("display","none");
			}
				if(vent=="5")
			{
				$("#venta_a").css("display","block");
				$("#venta_m").css("display","none");
				$("#venta_p").css("display","none");
				$("#ver_dibujo_v").css("display","block");
				$("#venta_f").css("display","none");
				$("#venta_f_2").css("display","none");
			}
				if(vent=="6")
			{
				$("#venta_a").css("display","none");
				$("#venta_m").css("display","none");
				$("#venta_p").css("display","none");
				$("#ver_dibujo_v").css("display","block");
				$("#venta_f").css("display","none");
				$("#venta_f").css("display","block");
				$("#venta_f_2").css("display","none");
			}	
			if(vent=="7")
			{
				$("#venta_a").css("display","none");
				$("#venta_m").css("display","none");
				$("#venta_p").css("display","none");
				$("#ver_dibujo_v").css("display","block");
				$("#venta_f").css("display","none");
				$("#venta_f").css("display","block");
				$("#venta_f_2").css("display","none");
				$("#venta_f_2").css("display","block");
			}
			
			
		});
		
		
		$("#m_harina").change(function()
		{
			har = $(this).val();
			if(har=="")
			{
				$("#mm_hari_a").css("display","none");
				$("#mm_hari_m").css("display","none");
				$("#hari_p").css("display","none");
			}
			
			if(har=="1")
			{
				$("#mm_hari_a").css("display","none");
				$("#mm_hari_a").css("display","block");
				$("#mm_hari_m").css("display","none");
				$("#hari_p").css("display","none");
			}	
			
			if(har=="2")
			{
				$("#mm_hari_a").css("display","block");
				$("#mm_hari_m").css("display","none");
				$("#mm_hari_m").css("display","block");
				$("#hari_p").css("display","none");
			}
		
			
			
		});
		
		
		
		$("#m_tostado").change(function()
		{
			tost = $(this).val();
			if(tost=="")
			{
				$("#mm_tost_a").css("display","none");
				$("#mm_tost_m").css("display","none");
				$("#tost_p").css("display","none");
			}
			
			if(tost=="1")
			{
				$("#mm_tost_a").css("display","none");
				$("#mm_tost_a").css("display","block");
				$("#mm_tost_m").css("display","none");
				$("#tost_p").css("display","none");
			}	
			
			if(tost=="2")
			{
				$("#mm_tost_a").css("display","block");
				$("#mm_tost_m").css("display","none");
				$("#mm_tost_m").css("display","block");
				$("#tost_p").css("display","none");
			}
			
			
			
			
		});
		
		
		
		
		$("#m_prensado").change(function()
		{
			pren = $(this).val();
			if(pren=="")
			{
				$("#mm_prens_a").css("display","none");
				$("#mm_prens_m").css("display","none");
				$("#prens_p").css("display","none");
			}
			
			if(pren=="1")
			{
				$("#mm_prens_a").css("display","none");
				$("#mm_prens_a").css("display","block");
				$("#mm_prens_m").css("display","none");
				$("#prens_p").css("display","none");
			}	
			
			if(pren=="2")
			{
				$("#mm_prens_a").css("display","block");
				$("#mm_prens_m").css("display","none");
				$("#mm_prens_m").css("display","block");
				$("#prens_p").css("display","none");
			}
			
			if(pren=="3")
			{
				$("#mm_prens_a").css("display","block");
				$("#mm_prens_m").css("display","none");
				$("#prens_p").css("display","none");
				$("#prens_p").css("display","block");
			}
			if(pren=="4")
			{
				$("#mm_prens_a").css("display","block");
				$("#mm_prens_m").css("display","block");
				$("#prens_p").css("display","none");
				$("#prens_p").css("display","block");
			}
			
			
		});
		
		
		
		
		
		$("#m_destestado").change(function()
		{
			dest = $(this).val();
			if(dest=="")
			{
				$("#mm_dest_a").css("display","none");
				$("#mm_dest_m").css("display","none");
				$("#dest_p").css("display","none");
			}
			
			if(dest=="1")
			{
				$("#mm_dest_a").css("display","none");
				$("#mm_dest_a").css("display","block");
				$("#mm_dest_m").css("display","none");
				$("#dest_p").css("display","none");
			}	
			
			if(dest=="2")
			{
				$("#mm_dest_a").css("display","block");
				$("#mm_dest_m").css("display","none");
				$("#mm_dest_m").css("display","block");
				$("#dest_p").css("display","none");
			}
			
			if(dest=="3")
			{
				$("#mm_dest_a").css("display","block");
				$("#mm_dest_m").css("display","none");
				$("#dest_p").css("display","none");
				$("#dest_p").css("display","block");
			}
			if(dest=="4")
			{
				$("#mm_dest_a").css("display","block");
				$("#mm_dest_m").css("display","block");
				$("#dest_p").css("display","none");
				$("#dest_p").css("display","block");
			}
			
			
		});
		
		
		
		
		$("#m_seleccion").change(function()
		{
			ss = $(this).val();
			if(ss=="")
			{
				$("#mm_sel_a").css("display","none");
				$("#mm_sel_m").css("display","none");
				$("#selec_p").css("display","none");
			}
			
			if(ss=="1")
			{
				$("#mm_sel_a").css("display","none");
				$("#mm_sel_a").css("display","block");
				$("#mm_sel_m").css("display","none");
				$("#selec_p").css("display","none");
			}	
			
			if(ss=="2")
			{
				$("#mm_sel_a").css("display","block");
				$("#mm_sel_m").css("display","none");
				$("#mm_sel_m").css("display","block");
				$("#selec_p").css("display","none");
			}
			
			if(ss=="3")
			{
				$("#mm_sel_a").css("display","block");
				$("#mm_sel_m").css("display","none");
				$("#selec_p").css("display","none");
				$("#selec_p").css("display","block");
			}
			if(ss=="4")
				{
					$("#mm_sel_a").css("display","block");
					$("#mm_sel_m").css("display","block");
					$("#selec_p").css("display","none");
					$("#selec_p").css("display","block");
				}
			
			
		});
		
		$("#m_secado").change(function()
		{
			se = $(this).val();
			if(se=="")
			{
				$("#mm_seca_a").css("display","none");
				$("#mm_seca_m").css("display","none");
				$("#seca_p").css("display","none");
			}
			
			if(se=="1")
			{
				$("#mm_seca_a").css("display","none");
				$("#mm_seca_a").css("display","block");
				$("#mm_seca_m").css("display","none");
				$("#seca_p").css("display","none");
			}	
			
			if(se=="2")
			{
				$("#mm_seca_a").css("display","block");
				$("#mm_seca_m").css("display","none");
				$("#mm_seca_m").css("display","block");
				$("#seca_p").css("display","none");
			}
			
			if(se=="3")
			{
				$("#mm_seca_a").css("display","block");
				$("#mm_seca_m").css("display","none");
				$("#seca_p").css("display","none");
				$("#seca_p").css("display","block");
			}
			if(se=="4")
				{
					$("#mm_seca_a").css("display","block");
					$("#mm_seca_m").css("display","block");
					$("#seca_p").css("display","none");
					$("#seca_p").css("display","block");
				}
			
			
		});
		
		
		$("#m_descapsulado").change(function()
		{
			des = $(this).val();
			if(des=="")
			{
				$("#mm_descap_a").css("display","none");
				$("#mm_descap_m").css("display","none");
				$("#desca_p").css("display","none");
			}
			
			if(des=="1")
			{
				$("#mm_descap_a").css("display","none");
				$("#mm_descap_a").css("display","block");
				$("#mm_descap_m").css("display","none");
				$("#desca_p").css("display","none");
			}	
			
			if(des=="2")
			{
				$("#mm_descap_a").css("display","block");
				$("#mm_descap_m").css("display","none");
				$("#desca_p").css("display","none");
				$("#desca_p").css("display","block");
			}
			if(des=="3")
				{
					$("#mm_descap_a").css("display","block");
					$("#mm_descap_m").css("display","block");
					$("#desca_p").css("display","none");
					$("#desca_p").css("display","block");
				}
			
			
		});
		
		
	    $("#se_actividad").change(function()
		{
			ss = $(this).val();
			if(ss==0)
            {
                $("#previo").css("display","none");
				$("#previo1").css("display","none");
				$("#a_anio").css("display","none");
				$("#a_anio1").css("display","none");
				$("#a_mes").css("display","none");
				$("#tip_act").css("display","none");
				$("#tip_act1").css("display","none");
            }
			if(ss==1)
            {
                $("#previo").css("display","none");
                $("#previo").css("display","block");
				$("#previo1").css("display","none");
                $("#previo1").css("display","block");
				$("#a_anio").css("display","none");
                $("#a_anio").css("display","block");
				$("#a_anio1").css("display","none");
                $("#a_anio1").css("display","block");
				$("#a_mes").css("display","none");
				$("#tip_act").css("display","none");
				$("#tip_act1").css("display","none");
            }
			if(ss==2)
			{
				$("#previo").css("display","none");
                $("#previo").css("display","block");
				$("#previo1").css("display","none");
                $("#previo1").css("display","block");
				$("#a_anio").css("display","none");
                $("#a_anio").css("display","block");
				$("#a_anio1").css("display","none");
                $("#a_anio1").css("display","block");
				$("#a_mes").css("display","none");
                $("#a_mes").css("display","block");
                $("#tip_act").css("display","none");
				$("#tip_act1").css("display","none");
			}
			if(ss==3)
			{
				$("#previo").css("display","none");
                $("#previo").css("display","block");
				$("#previo1").css("display","none");
                $("#previo1").css("display","block");
				$("#a_anio").css("display","none");
                $("#a_anio").css("display","block");
				$("#a_anio1").css("display","none");
                $("#a_anio1").css("display","block");
				$("#a_mes").css("display","none");
                $("#tip_act").css("display","none");
                $("#tip_act").css("display","block");
				$("#tip_act1").css("display","none");
                $("#tip_act1").css("display","block");
			}
			if(ss==4)
			{
				$("#previo").css("display","none");
                $("#previo").css("display","block");
				$("#previo1").css("display","none");
                $("#previo1").css("display","block");
				$("#a_anio").css("display","none");
                $("#a_anio").css("display","block");
				$("#a_anio1").css("display","none");
                $("#a_anio1").css("display","block");
				$("#a_mes").css("display","none");
                $("#a_mes").css("display","block");
                $("#tip_act").css("display","none");
                $("#tip_act").css("display","block");
				$("#tip_act1").css("display","none");
                $("#tip_act1").css("display","block");
			}
        });
		$("#jornada").change(function()
		{
			vv = $(this).val();
			if(vv=="")
			{
			$("#j_a").css("display","none");
			$("#j_m").css("display","none");
			
			
				
			}
			if(vv==1)
			{
				$("#j_a").css("display","none");
				$("#j_a").css("display","block");
				$("#j_m").css("display","none");
			} 
			
			if(vv==2)
			{
				$("#j_a").css("display","none");
				$("#j_m").css("display","none");
				$("#j_m").css("display","block");
			} 
		});
		$("#retiro").change(function()
		{
			vv = $(this).val();
			if(vv=="")
			{
			$("#m_a").css("display","none");
			$("#m_m").css("display","none");
			
			
				
			}
			if(vv==1)
			{
				$("#m_a").css("display","none");
				$("#m_a").css("display","block");
				$("#m_m").css("display","none");
			} 
			
			if(vv==2)
			{
				$("#m_a").css("display","none");
				$("#m_m").css("display","none");
				$("#m_m").css("display","block");
			} 
		});
	});
	
	
	
function valida_envia(){ 
   	//valido el nombre 
   	if (document.fvalida.nombre.value.length==0){ 
      	 alert("Tiene que escribir su nombre") 
      	 document.fvalida.nombre.focus() 
      	 return 0; 
   	} 

   	//valido la edad. tiene que ser entero mayor que 18 
   	edad = document.fvalida.edad.value 
   	edad = validarEntero(edad) 
   	document.fvalida.edad.value=edad 
   	if (edad==""){ 
      	 alert("Tiene que introducir un número entero en su edad.") 
      	 document.fvalida.edad.focus() 
      	 return 0; 
   	}else{ 
      	 if (edad<18){ 
         	 alert("Debe ser mayor de 18 años.") 
         	 document.fvalida.edad.focus() 
         	 return 0; 
      	 } 
   	} 

   	//valido el interés 
   	if (document.fvalida.interes.selectedIndex==0){ 
      	 alert("Debe seleccionar un motivo de su contacto.") 
      	 document.fvalida.interes.focus() 
      	 return 0; 
   	} 

   	//el formulario se envia 
   	alert("Muchas gracias por enviar el formulario"); 
   	document.fvalida.submit(); 
} 


	$("#fecha_venta").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		yearRange: "-25:+0"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});	
	
	$("#fecha_venta_2").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		yearRange: "-25:+0"
		/*minDate: '-65Y',
		maxDate: '-15Y'*/
	});