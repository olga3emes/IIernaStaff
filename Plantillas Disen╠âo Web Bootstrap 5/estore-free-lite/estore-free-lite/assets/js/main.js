
//===== Preloader
window.onload = function () {
    window.setTimeout(fadeout, 200);
}

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}


$(function() {
    
    "use strict";

    /*=============================================
    =                  Sticky                     =
    =============================================*/

	$(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    /*=====  End of Sticky  ======*/
    
    
    /*=============================================
    =            product quantity                =
    =============================================*/

	$('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    
    /*=====  End of product quantity  ======*/
    
    
    
    /*=============================================
    =              Nice Select                    =
    =============================================*/

	$('select').niceSelect();
    
    /*=====  End of   ======*/    
    
    
    /*=============================================
    =                Mobile Menu                  =
    =============================================*/

    /*-------- Mobile Menu Sidebar 1 --------*/
    
    $('.mobile-menu-open-1').on('click', function(){
        $('.navbar-sidebar-1').addClass('open')
        $('.overlay-1').addClass('open')
    });
    
    $('.close-mobile-menu-1').on('click', function(){
        $('.navbar-sidebar-1').removeClass('open')
        $('.overlay-1').removeClass('open')
    });
    
    $('.overlay-1').on('click', function(){
        $('.navbar-sidebar-1').removeClass('open')
        $('.overlay-1').removeClass('open')
    });
    
    
    /*-------- Mobile Menu Dark Sidebar 1 --------*/
    
    $('.mobile-menu-dark-open-1').on('click', function(){
        $('.navbar-sidebar-dark-1').addClass('open')
        $('.overlay-dark-1').addClass('open')
    });
    
    $('.close-mobile-menu-dark-1').on('click', function(){
        $('.navbar-sidebar-dark-1').removeClass('open')
        $('.overlay-dark-1').removeClass('open')
    });
    
    $('.overlay-dark-1').on('click', function(){
        $('.navbar-sidebar-dark-1').removeClass('open')
        $('.overlay-dark-1').removeClass('open')
    });
    

    /*-------- Mobile Menu Sidebar 2 --------*/
    
    $('.mobile-menu-open-2').on('click', function(){
        $('.navbar-sidebar-2').addClass('open')
        $('.overlay-2').addClass('open')
    });
    
    $('.close-mobile-menu-2').on('click', function(){
        $('.navbar-sidebar-2').removeClass('open')
        $('.overlay-2').removeClass('open')
    });
    
    $('.overlay-2').on('click', function(){
        $('.navbar-sidebar-2').removeClass('open')
        $('.overlay-2').removeClass('open')
    });
    

    /*-------- Mobile Menu Dark Sidebar 2 --------*/
    
    $('.mobile-menu-open-dark-2').on('click', function(){
        $('.navbar-sidebar-dark-2').addClass('open')
        $('.overlay-dark-2').addClass('open')
    });
    
    $('.close-mobile-menu-dark-2').on('click', function(){
        $('.navbar-sidebar-dark-2').removeClass('open')
        $('.overlay-dark-2').removeClass('open')
    });
    
    $('.overlay-dark-2').on('click', function(){
        $('.navbar-sidebar-dark-2').removeClass('open')
        $('.overlay-dark-2').removeClass('open')
    });


    /*-------- Mobile Menu Sidebar 3 --------*/
    
    $('.mobile-menu-open-3').on('click', function(){
        $('.navbar-sidebar-3').addClass('open')
        $('.overlay-3').addClass('open')
    });
    
    $('.close-mobile-menu-3').on('click', function(){
        $('.navbar-sidebar-3').removeClass('open')
        $('.overlay-3').removeClass('open')
    });
    
    $('.overlay-3').on('click', function(){
        $('.navbar-sidebar-3').removeClass('open')
        $('.overlay-3').removeClass('open')
    });


    /*-------- Mobile Menu Dark Sidebar 3 --------*/
    
    $('.mobile-menu-open-dark-3').on('click', function(){
        $('.navbar-sidebar-dark-3').addClass('open')
        $('.overlay-dark-3').addClass('open')
    });
    
    $('.close-mobile-menu-dark-3').on('click', function(){
        $('.navbar-sidebar-dark-3').removeClass('open')
        $('.overlay-dark-3').removeClass('open')
    });
    
    $('.overlay-dark-3').on('click', function(){
        $('.navbar-sidebar-dark-3').removeClass('open')
        $('.overlay-dark-3').removeClass('open')
    });


    /*-------- Mobile Menu Sidebar 4 --------*/
    
    $('.mobile-menu-open-4').on('click', function(){
        $('.navbar-sidebar-4').addClass('open')
        $('.overlay-4').addClass('open')
    });
    
    $('.close-mobile-menu-4').on('click', function(){
        $('.navbar-sidebar-4').removeClass('open')
        $('.overlay-4').removeClass('open')
    });
    
    $('.overlay-4').on('click', function(){
        $('.navbar-sidebar-4').removeClass('open')
        $('.overlay-4').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar 4 --------*/
    
    $('.mobile-menu-open-dark-4').on('click', function(){
        $('.navbar-sidebar-dark-4').addClass('open')
        $('.overlay-dark-4').addClass('open')
    });
    
    $('.close-mobile-menu-dark-4').on('click', function(){
        $('.navbar-sidebar-dark-4').removeClass('open')
        $('.overlay-dark-4').removeClass('open')
    });
    
    $('.overlay-dark-4').on('click', function(){
        $('.navbar-sidebar-dark-4').removeClass('open')
        $('.overlay-dark-4').removeClass('open')
    });


    /*-------- Mobile Menu Sidebar 5 --------*/
    
    $('.mobile-menu-open-5').on('click', function(){
        $('.navbar-sidebar-5').addClass('open')
        $('.overlay-5').addClass('open')
    });
    
    $('.close-mobile-menu-5').on('click', function(){
        $('.navbar-sidebar-5').removeClass('open')
        $('.overlay-5').removeClass('open')
    });
    
    $('.overlay-5').on('click', function(){
        $('.navbar-sidebar-5').removeClass('open')
        $('.overlay-5').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar 5 --------*/
    
    $('.mobile-menu-open-dark-5').on('click', function(){
        $('.navbar-sidebar-dark-5').addClass('open')
        $('.overlay-dark-5').addClass('open')
    });
    
    $('.close-mobile-menu-dark-5').on('click', function(){
        $('.navbar-sidebar-dark-5').removeClass('open')
        $('.overlay-dark-5').removeClass('open')
    });
    
    $('.overlay-dark-5').on('click', function(){
        $('.navbar-sidebar-dark-5').removeClass('open')
        $('.overlay-dark-5').removeClass('open')
    });


    /*-------- Mobile Menu Sidebar 6 --------*/
    
    $('.mobile-menu-open-6').on('click', function(){
        $('.navbar-sidebar-6').addClass('open')
        $('.overlay-6').addClass('open')
    });
    
    $('.close-mobile-menu-6').on('click', function(){
        $('.navbar-sidebar-6').removeClass('open')
        $('.overlay-6').removeClass('open')
    });
    
    $('.overlay-6').on('click', function(){
        $('.navbar-sidebar-6').removeClass('open')
        $('.overlay-6').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar  6 --------*/
    
    $('.mobile-menu-open-dark-6').on('click', function(){
        $('.navbar-sidebar-dark-6').addClass('open')
        $('.overlay-dark-6').addClass('open')
    });
    
    $('.close-mobile-menu-dark-6').on('click', function(){
        $('.navbar-sidebar-dark-6').removeClass('open')
        $('.overlay-dark-6').removeClass('open')
    });
    
    $('.overlay-dark-6').on('click', function(){
        $('.navbar-sidebar-dark-6').removeClass('open')
        $('.overlay-dark-6').removeClass('open')
    });


    /*-------- Mobile Menu Sidebar 7 --------*/
    
    $('.mobile-menu-open-7').on('click', function(){
        $('.navbar-sidebar-7').addClass('open')
        $('.overlay-7').addClass('open')
    });
    
    $('.close-mobile-menu-7').on('click', function(){
        $('.navbar-sidebar-7').removeClass('open')
        $('.overlay-7').removeClass('open')
    });
    
    $('.overlay-7').on('click', function(){
        $('.navbar-sidebar-7').removeClass('open')
        $('.overlay-7').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar  7 --------*/

    $('.mobile-menu-open-dark-7').on('click', function(){
        $('.navbar-sidebar-dark-7').addClass('open')
        $('.overlay-dark-7').addClass('open')
    });
    
    $('.close-mobile-menu-dark-7').on('click', function(){
        $('.navbar-sidebar-dark-7').removeClass('open')
        $('.overlay-dark-7').removeClass('open')
    });
    
    $('.overlay-dark-7').on('click', function(){
        $('.navbar-sidebar-dark-7').removeClass('open')
        $('.overlay-dark-7').removeClass('open')
    });

    /*-------- Mobile Menu Sidebar 8 --------*/
    
    $('.mobile-menu-open-8').on('click', function(){
        $('.navbar-sidebar-8').addClass('open')
        $('.overlay-8').addClass('open')
    });
    
    $('.close-mobile-menu-8').on('click', function(){
        $('.navbar-sidebar-8').removeClass('open')
        $('.overlay-8').removeClass('open')
    });
    
    $('.overlay-8').on('click', function(){
        $('.navbar-sidebar-8').removeClass('open')
        $('.overlay-8').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar 8 --------*/

    $('.mobile-menu-open-dark-8').on('click', function(){
        $('.navbar-sidebar-dark-8').addClass('open')
        $('.overlay-dark-8').addClass('open')
    });
    
    $('.close-mobile-menu-dark-8').on('click', function(){
        $('.navbar-sidebar-dark-8').removeClass('open')
        $('.overlay-dark-8').removeClass('open')
    });
    
    $('.overlay-dark-8').on('click', function(){
        $('.navbar-sidebar-dark-8').removeClass('open')
        $('.overlay-dark-8').removeClass('open')
    });

    /*-------- Mobile Menu Sidebar 9--------*/
    
    $('.mobile-menu-open-9').on('click', function(){
        $('.navbar-sidebar-9').addClass('open')
        $('.overlay-9').addClass('open')
    });
    
    $('.close-mobile-menu-9').on('click', function(){
        $('.navbar-sidebar-9').removeClass('open')
        $('.overlay-9').removeClass('open')
    });
    
    $('.overlay-9').on('click', function(){
        $('.navbar-sidebar-9').removeClass('open')
        $('.overlay-9').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar 9 --------*/

    $('.mobile-menu-open-dark-9').on('click', function(){
        $('.navbar-sidebar-dark-9').addClass('open')
        $('.overlay-dark-9').addClass('open')
    });
    
    $('.close-mobile-menu-dark-9').on('click', function(){
        $('.navbar-sidebar-dark-9').removeClass('open')
        $('.overlay-dark-9').removeClass('open')
    });
    
    $('.overlay-dark-9').on('click', function(){
        $('.navbar-sidebar-dark-9').removeClass('open')
        $('.overlay-dark-9').removeClass('open')
    });

    /*-------- Mobile Menu Sidebar 10--------*/
    
    $('.mobile-menu-open-10').on('click', function(){
        $('.navbar-sidebar-10').addClass('open')
        $('.overlay-10').addClass('open')
    });
    
    $('.close-mobile-menu-10').on('click', function(){
        $('.navbar-sidebar-10').removeClass('open')
        $('.overlay-10').removeClass('open')
    });
    
    $('.overlay-10').on('click', function(){
        $('.navbar-sidebar-10').removeClass('open')
        $('.overlay-10').removeClass('open')
    });
    
    /*-------- Mobile Menu Dark Sidebar 10 --------*/

    $('.mobile-menu-open-dark-10').on('click', function(){
        $('.navbar-sidebar-dark-10').addClass('open')
        $('.overlay-dark-10').addClass('open')
    });
    
    $('.close-mobile-menu-dark-10').on('click', function(){
        $('.navbar-sidebar-dark-10').removeClass('open')
        $('.overlay-dark-10').removeClass('open')
    });
    
    $('.overlay-dark-10').on('click', function(){
        $('.navbar-sidebar-dark-10').removeClass('open')
        $('.overlay-dark-10').removeClass('open')
    });

    /*-------- Mobile Menu Sidebar 11--------*/
    
    $('.mobile-menu-open-11').on('click', function(){
        $('.navbar-sidebar-11').addClass('open')
        $('.overlay-11').addClass('open')
    });
    
    $('.close-mobile-menu-11').on('click', function(){
        $('.navbar-sidebar-11').removeClass('open')
        $('.overlay-11').removeClass('open')
    });
    
    $('.overlay-11').on('click', function(){
        $('.navbar-sidebar-11').removeClass('open')
        $('.overlay-11').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar 11 --------*/

    $('.mobile-menu-open-dark-11').on('click', function(){
        $('.navbar-sidebar-dark-11').addClass('open')
        $('.overlay-dark-11').addClass('open')
    });
    
    $('.close-mobile-menu-dark-11').on('click', function(){
        $('.navbar-sidebar-dark-11').removeClass('open')
        $('.overlay-dark-11').removeClass('open')
    });
    
    $('.overlay-dark-11').on('click', function(){
        $('.navbar-sidebar-dark-11').removeClass('open')
        $('.overlay-dark-11').removeClass('open')
    });


    /*-------- Mobile Menu Sidebar 12 --------*/
    
    $('.mobile-menu-open-12').on('click', function(){
        $('.navbar-sidebar-12').addClass('open')
        $('.overlay-12').addClass('open')
    });
    
    $('.close-mobile-menu-12').on('click', function(){
        $('.navbar-sidebar-12').removeClass('open')
        $('.overlay-12').removeClass('open')
    });
    
    $('.overlay-12').on('click', function(){
        $('.navbar-sidebar-12').removeClass('open')
        $('.overlay-12').removeClass('open')
    });

    /*-------- Mobile Menu Dark Sidebar 12 --------*/

    $('.mobile-menu-open-dark-12').on('click', function(){
        $('.navbar-sidebar-dark-12').addClass('open')
        $('.overlay-dark-12').addClass('open')
    });
    
    $('.close-mobile-menu-dark-12').on('click', function(){
        $('.navbar-sidebar-dark-12').removeClass('open')
        $('.overlay-dark-12').removeClass('open')
    });
    
    $('.overlay-dark-12').on('click', function(){
        $('.navbar-sidebar-dark-12').removeClass('open')
        $('.overlay-dark-12').removeClass('open')
    });

    
    /*-------- Navbar Menu Vertical Toggle 2 Function --------*/

    $("#toggle-menu").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu").on('click', function() {
        $('.menu-vertical').slideToggle();
    });
    
    /*-------- Navbar Menu Vertical Dark Toggle 2 Function --------*/

    $("#toggle-menu-dark").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark").on('click', function() {
        $('.menu-vertical-dark').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 3 Function --------*/

    $("#toggle-menu-2").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-2").on('click', function() {
        $('.menu-vertical-2').slideToggle();
    });

    /*-------- Navbar Menu Vertical Dark Toggle 3 Function --------*/

    $("#toggle-menu-dark-2").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark-2").on('click', function() {
        $('.menu-vertical-dark-2').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 4 Function --------*/

    $("#toggle-menu-4").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-4").on('click', function() {
        $('.menu-vertical-4').slideToggle();
    });

    /*-------- Navbar Menu Vertical Dark Toggle 4 Function --------*/

    $("#toggle-menu-dark-4").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark-4").on('click', function() {
        $('.menu-vertical-dark-4').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 5 Function --------*/

    $("#toggle-menu-5").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-5").on('click', function() {
        $('.menu-vertical-5').slideToggle();
    });

    /*-------- Navbar Menu Vertical Dark Toggle 5 Function --------*/

    $("#toggle-menu-dark-5").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark-5").on('click', function() {
        $('.menu-vertical-dark-5').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 6 Function --------*/

    $("#toggle-menu-6").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-6").on('click', function() {
        $('.menu-vertical-6').slideToggle();
    });

    /*-------- Navbar Menu Vertical Dark Toggle 6 Function --------*/

    $("#toggle-menu-dark-6").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark-6").on('click', function() {
        $('.menu-vertical-dark-6').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 8 Function --------*/

    $("#toggle-menu-8").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-8").on('click', function() {
        $('.menu-vertical-8').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 8 Function --------*/

    $("#toggle-menu-dark-8").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark-8").on('click', function() {
        $('.menu-vertical-dark-8').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 10 Function --------*/

    $("#toggle-menu-10").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-10").on('click', function() {
        $('.menu-vertical-10').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 10 Function --------*/

    $("#toggle-menu-dark-10").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark-10").on('click', function() {
        $('.menu-vertical-dark-10').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 11 Function --------*/

    $("#toggle-menu-11").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-11").on('click', function() {
        $('.menu-vertical-11').slideToggle();
    });

    /*-------- Navbar Menu Vertical Toggle 11 Function --------*/

    $("#toggle-menu-dark-11").on('click', function() {
        $(this).toggleClass('active');
    });
    $("#toggle-menu-dark-11").on('click', function() {
        $('.menu-vertical-dark-11').slideToggle();
    });


    /*-------- Window Resize javascript Responsive Function --------*/
    
    let body = document.querySelector('body');
    function displayWindowSize(){
       var w = document.documentElement.clientWidth;

       if (w > 991) {
           // YOUR CODE...
           $('.main-navbar').removeClass('mobile-menu');
           $('.mega-dropdown-menu').removeClass('mobile-menu-dropdown');

           /*-------- Mobile Menu javascript Function --------*/
    
            /*Variables*/
            var $offCanvasNav = $('.mobile-menu');
            var $offCanvasNavSubMenu = $offCanvasNav.find('.sub-mega-dropdown, .sub-menu, .mega-dropdown-list ul');

            /*Add Toggle Button With Off Canvas Sub Menu*/
            $offCanvasNavSubMenu.parent().prepend('<span class="d-none"></span>');

            /*Close Off Canvas Sub Menu*/
            $offCanvasNavSubMenu.slideDown();

            /*Category Sub Menu Toggle*/
            $offCanvasNav.on('click', 'li a, li .menu-expand, .mega-dropdown-list .mega-title', function (e) {
                var $this = $(this);
                if (($this.parent().attr('class').match(('menu-item-has-children')))) {
                    
                    if ($this.siblings('ul:visible').length) {
                        e.preventDefault();
                            $this.parent('li').removeClass('active');
                            $this.siblings('ul').slideDown();
                        } else {
                            $this.parent('li').addClass('active');
                            $this.closest('li').siblings('li').find('ul:visible').slideDown();
                            $this.closest('li').siblings('li').removeClass('active');
                            $this.siblings('ul').slideUp();
                        }
                }
            });
       }
       else{
           // YOUR CODE...
           $('.main-navbar').addClass('mobile-menu');
           $('.mega-dropdown-menu').addClass('mobile-menu-dropdown');

           /*-------- Mobile Menu javascript Function --------*/
    
            /*Variables*/
            var $offCanvasNav = $('.mobile-menu');
            var $offCanvasNavSubMenu = $offCanvasNav.find('.sub-mega-dropdown, .sub-menu, .mega-dropdown-list ul');

            /*Add Toggle Button With Off Canvas Sub Menu*/
            $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand d-lg-none"></span>');

            /*Close Off Canvas Sub Menu*/
            $offCanvasNavSubMenu.slideUp();

            /*Category Sub Menu Toggle*/
            $offCanvasNav.on('click', 'li a, li .menu-expand, .mega-dropdown-list .mega-title', function (e) {
                var $this = $(this);
                if (($this.parent().attr('class').match(('menu-item-has-children')))) {
                    
                    if ($this.siblings('ul:visible').length) {
                        e.preventDefault();
                            $this.parent('li').removeClass('active');
                            $this.siblings('ul').slideUp();
                        } else {
                            $this.parent('li').addClass('active');
                            $this.closest('li').siblings('li').find('ul:visible').slideUp();
                            $this.closest('li').siblings('li').removeClass('active');
                            $this.siblings('ul').slideDown();
                        }
                }
            });
       }
    } 
    window.addEventListener("resize", displayWindowSize);
    displayWindowSize();    
	
    
    /*=====  End of Mobile Menu  ======*/
    
    
    /*=============================================
    =              Form Validate                  =
    =============================================*/

	$.validate({
        lang: 'es',
    });
    
    /*=====  End of Form Validate  ======*/
    
    
    /*=============================================
    =          Toggle Password Show               =
    =============================================*/

	 $(".toggle-password").click(function() {

      $(this).toggleClass("mdi-eye-outline mdi-eye-off-outline");
        
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
    
    /*=====  End of   ======*/ 
    
    
    /*=============================================
    =              Accordion Steps                =
    =============================================*/

     /*-------- Checkout Steps --------*/

    $('#checkout-steps').vjaccordionsteps({

    });

    /*-------- Checkout Steps Dark --------*/

    $('#checkout-steps-dark').vjaccordionsteps({

    });
    
    /*=====  End of Accordion Steps  ======*/
    
    
    /*=============================================
    =                  Formatter                  =
    =============================================*/

	$('#credit-input').formatter({
        'pattern': '{{9999}} {{9999}} {{9999}} {{9999}}',
    });
    
    /*=====  End of Formatter  ======*/


    /*=============================================
    =           Product Size Active               =
    =============================================*/

	$('.filter-size ul li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/
    
    
    /*=============================================
    =                 Price Range                 =
    =============================================*/

     /*-------- Slider Range --------*/

	$( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmount" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmount" ).val( "$" + ui.values[ 1 ] );
        }
    });

    $( "#minAmount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmount" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );


    /*-------- Slider Range 2 --------*/

	$( "#slider-range2" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmount2" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmount2" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#minAmount2" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );


    /*-------- Slider Range Dark --------*/

    $( "#slider-range-dark" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmountDark" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmountDark" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#minAmountDark" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmountDark" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );


    /*-------- Slider Range Dark 2 --------*/

    $( "#slider-range-dark2" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmountDark2" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmountDark2" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#minAmountDark2" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmountDark2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
    
    /*=====  End of Price Range  ======*/


    /*=============================================
    =           Slick product Active  1           =
    =============================================*/

    $('.product-active').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    /*=====  End of Slick Collection Active  ======*/


    /*=============================================
    =           Product Item Active               =
    =============================================*/

	$('.items-wrapper .single-item').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/


    /*=============================================
    =           Product size Active               =
    =============================================*/

	$('.size-select li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/


    /*=============================================
    =           Product Country Active               =
    =============================================*/

	$('.country-select li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/

    
    /*=============================================
    =           Product Color Active               =
    =============================================*/

    $('.color-select li').each(function() {
		var get_color = $(this).attr('data-color');
		$(this).css("background-color", get_color);
    });
    
	$('.color-select li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
    });
    
    /*=====  End of Product Size Active ======*/
    
    
    /*=============================================
    =        slick Slider Product Details         =
    =============================================*/

    /*-------- Product Details 1 --------*/

    $('.product-image-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-thumb-image-active-1',
        speed: 600,
    });

    
    
    $('.product-thumb-image-active-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-image-active-1',
        dots: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-up"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-down"></i></span>',
        focusOnSelect: true,
        vertical: true,
        speed: 600,
    });

    /*-------- Product Details 2 --------*/

    $('.product-image-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-thumb-image-active-2',
        speed: 600,
    });
    
    $('.product-thumb-image-active-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-image-active-2',
        dots: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        focusOnSelect: true,
        speed: 600,
    });
    
    /*=====  End of slick Slider Product Details ======*/

    /*=============================================
    =     slick Slider Content Card Style 3       =
    =============================================*/

    $('.content-preview-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        dots: false,
        fade: true,
        asNavFor: '.content-thumb-active',
        speed: 400,
    });
    
    $('.content-thumb-active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.content-preview-active',
        dots: false,
        infinite: false,
        arrows: false,
        focusOnSelect: true,
        speed: 400,
    });

    /*=====  End of slick Slider Content Card Style 3 ======*/
    
    /*=============================================
    =               Content Active                =
    =============================================*/

	$('.content-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Content Active  ======*/

    /*=============================================
    =            Header Items Active              =
    =============================================*/

	$('.header-items-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =          Header 4 Slider Active             =
    =============================================*/

	$('.header-4-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =          Header 5 Slider Active             =
    =============================================*/

	$('.header-5-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =          Header 7 Slider Active             =
    =============================================*/

	$('.header-7-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =               Rating Active                 =
    =============================================*/

    /*-------- Rating 1 --------*/

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
        
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });
        
    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });
    
    
    /* 2. Action to perform on click */
    var spansCounts =  $('#stars li').length
    $('#stars li').on('click', function(e) {
        console.log($(this).index())
        $('#stars li').removeClass('selected');

        for(var i=0 ; i < $(this).index() + 1; i++){
            $('#stars li').eq(i).addClass('selected')
        }
    })    


    /*-------- Rating 2 --------*/

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars2 li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
        
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });
        
    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });
    
    
    /* 2. Action to perform on click */
    var spansCounts =  $('#stars2 li').length
    $('#stars2 li').on('click', function(e) {
        console.log($(this).index())
        $('#stars2 li').removeClass('selected');

        for(var i=0 ; i < $(this).index() + 1; i++){
            $('#stars2 li').eq(i).addClass('selected')
        }
    })    

    /*=====  End of Rating Active ======*/
    
    /*=============================================
    =                                    =
    =============================================*/

	
    
    /*=====  End of   ======*/
    
    
    
    
    //====== counter up 
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: '+'
    });
    cu.start();
    
    
    
    // client-logo-active 
    $('.client-logo-active').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        arrows: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    // client-logo-active 
    $('.three-column-slider').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        arrows: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    
    
    
    
    
});





