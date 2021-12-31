$(document).ready(function(){   
	
	// AGREGANDO CLASE ACTIVE A LA CATEGORÍA TODOS ====================
	$('.lista_categorias .categoria[category="todos"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.categoria').click(function(){ 
		var catProduct = $(this).attr('category');   
		
		//AGREGADO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.categoria').removeClass('ct_item-active');  
		$(this).addClass('ct_item-active');   

		// OCULTANDO PRODUCTOS =========================
		function ocultarProductos(){
			$('.producto').hide(); 
		} setTimeout(ocultarProductos,150); 

		// MOSTRANDO PRODUCTOS =========================
		function mostrarProductos(){
			$('.producto[category="'+catProduct+'"]').show();   
		} setTimeout(mostrarProductos,150);
	});
	
	// MOSTRANDO TODOS LOS PRODUCTOS =======================
	$('.categoria[category="todos"]').click(function(){   
		function mostrarTodos(){
			$('.producto').show(); 
		} setTimeout(mostrarTodos,200);
	});
	
});