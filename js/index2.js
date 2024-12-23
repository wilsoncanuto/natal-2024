// -----------------------------------------------------
//função para o menu sticky header

//When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyMenu()};

function stickyMenu() {

	var header = document.getElementById("menu-header");
	var logo = document.getElementById("logo");

	// Get the offset position of the navbar
	var sticky = slide.offsetTop;

	  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	  if (window.pageYOffset > sticky) {
	    header.classList.add("menu-header-sticky");
	    logo.classList.add("logo-sticky");
	  } else {
	    header.classList.remove("menu-header-sticky");
	    logo.classList.remove("logo-sticky");	    
	  }

	//altera o tamanho do menu para esconder 

		//seleciona o menu somente se tiver a classe sticky 
	  var menuSticky = document.querySelector(".menu-header-sticky")
	  var menuMobile = document.getElementById("menu-mobile")
	   
	   //se o menu estiver com o sticky, altera o translateY do 
	   //menu mobile manter ele escondido
	   if(menuSticky != null) {
	   	menuMobile.classList.remove("menu-translateY");
	   	menuMobile.classList.add("menu-translateY-sticky");
	   } 
	   /* se o menu nao estiver com o sticky, retorna o tranlateY
	   ao valor anterior, para que a animação do dropdown não 
	   deixe um vão*/
	   else {
			menuMobile.classList.add("menu-translateY");
	   	menuMobile.classList.remove("menu-translateY-sticky");
	   }


}
// -----------------------------------------------------
   

// -----------------------------------------------------
//função para fazer o scroll suave dos links

let go = (elem) => {
	// ao clicar em um link, recolhe o menu dropdown
	// $('html').toggleClass('menu-active');
	    // e.preventDefault();
  window.scroll({       // 1
      top: document
    .querySelector( elem )
      .offsetTop-35,       // 2
      left: 0,
      behavior: 'smooth'// 3
   });
}


//-----------------------------------------------------

//-----------------------------------------------------
// BG PARALLAX
//colocar a classe bgparallax para os backgrounds e 
//objparallax para os demais elementos
// colocar o atributo data-speed="" nos elementos 
//para controlar a velocidade deles


$(document).ready(function(){

	// parallax para o bg para o slide
 //  $('.bgParallax').each(function(){
 //    var $obj = $(this);
    
 //    $(window).scroll(function() {
 //        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

 //        var bgpos = '25% '+ yPos + 'px';

 //        $obj.css('background-position', bgpos );

 //    }); 
	// });

	// parallax para o bg do quem somos
  $('.bgParallax2').each(function(){
    var $obj = $(this);
    
    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = '35% '+ yPos + 'px';

        $obj.css('background-position', bgpos );

    }); 
	});

  //parallax para outros objetos
	$('.objParallax').each(function(){
    var $obj = $(this);
    
    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var objpos = '0% '+ yPos + 'px';

        $obj.css('translate', objpos );
    });  
	});
});

// ---------------------------------------------------------------
// menu mobile
$(document).ready(function(){
	$('.menu-anchor').on('click touchstart', function(e){
			// adiciona o efeito transition no menu
	    // $('.menu-mobile').addClass('menu-transition');
	    $('html').toggleClass('menu-active');
	    e.preventDefault();    
	    $(window).scroll(() => {
	    	$('html').removeClass('menu-active');
	    })
	});

});
