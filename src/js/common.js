$(document).ready(function() {


	// accordeon

	$('.js-accordeon-link').on('click', function() {
			var post = $(this).closest('.js-accordeon-item').find('.js-accordeon-post');

		if($(this).hasClass('is-open')){
			post.slideUp();
			$(this).removeClass('is-open');
		}
		else {
			$(this).removeClass('is-open');
			post.slideDown();
			$(this).addClass('is-open');
		};
		return false;
	});

	//close-block
	$('.js-close').on('click', function(){
		$(this).closest('.js-close-block').slideUp();
	});

	// check select

	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).parent().find(".js-select-list");
			var text = select_list.find("li").first().text();
			$(this).find(".js-select-text").text(text);
			$(this).click(function(event){
				if ($(this).hasClass("is-active")) {
				    $(this).removeClass("is-active");
				    select_list.slideUp("fast");
				}
				else {
				    $(".js-select").removeClass("is-active");
				    $(".js-select-list").hide();
				    select_list.slideDown("fast");
				    $(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			select_list.find("li").click(function(event) {
				var id = $(this).attr("data-id");
				var text = $(this).text();
				$(this).parent().parent().find(".js-select-text").text(text);
				$(this).parent().parent().find(".js-select-input").val(id);
				$(this).parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
			});
		});
	}
	select();

	$('.js-select').click(function(event){
	    event.stopPropagation();
	});

	// ui-slider

	function ui_slider() {
	    $(".js-ui-slider").each(function(){
	        var slider = $(this).find(".js-ui-slider-main");
	        var input_from = $(this).find(".js-ui-slider-from");
	        var input_to = $(this).find(".js-ui-slider-to");
	        slider.slider({
	            range: true,
	            min: 0,
	            max: 99000,
	            step: 1,
	            values: [ 5641, 26268 ],
	            slide: function( event, ui ) {
	                $(this).find(".ui-slider-handle").html("<span></span>");
	                var handle_0 = $(this).find(".ui-slider-range").next().find("span")
	                var handle_1 = $(this).find(".ui-slider-range").next().next().find("span");
	                input_from.val(ui.values[0]);
	                input_to.val(ui.values[1]);
	                handle_0.text(ui.values[0]);
	                handle_1.text(ui.values[1]);
	            }
	        });
	        console.log(handle_0);
	        console.log(handle_1);
	        $(this).find(".ui-slider-handle").html("<span></span>");
	        var handle_0 = $(this).find(".ui-slider-range").next().find("span")
	        var handle_1 = $(this).find(".ui-slider-range").next().next().find("span");
	        handle_0.text(slider.slider( "values", 0 ));
	        handle_1.text(slider.slider( "values", 1 ));
	        input_from.val(slider.slider( "values", 0 ));
	        input_to.val(slider.slider( "values", 1 ));
	    });
	}
	ui_slider();


	/* Скрипт для рейтинга */

	$('.stars').each(function(){

		var rating = $(this);
		var rating_input = rating.parents('form').find('input[name="rating"]');
		var stars = $('.star > span', rating);

		rating.find('.descr').hover(function(){
			stars.removeClass('active');
			rating_input.val(0);
		});

		stars.each(function(index){
			var current = index + 1;

			$(this).hover (
				function(){
					stars.removeClass('active').slice(0, current).addClass('active');
				},
				function(){
					rating_input.val(parseFloat($('.active', rating).length/2));
				}
			);

		});

	});


	// slick carousel

	$('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-carousel-preview',
	});
	$('.js-carousel-preview').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.js-carousel',
		dots: false,
		arrows: true,
		infinite: false,
		centerMode: false,
		focusOnSelect: true,
	});

	$(".js-carousel-preview .slick-slide").on("click",function (){
	  $(this).parent().find(".slick-slide").removeClass("is-active");
	  $(this).addClass("is-active")
	  return false;
	});



	// // slick carousel

	// $('.js-swing').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '.js-swing-preview',
	// });
	// $('.js-swing-preview').slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.js-swing',
	// 	dots: false,
	// 	arrows: true,
	// 	vertical: true,
	// 	infinite: false,
	// 	centerMode: false,
	// 	focusOnSelect: true,
	// });

	// $(".js-swing-preview .slick-slide").on("click",function (){
	//   $(this).parent().find(".slick-slide").removeClass("is-active");
	//   $(this).addClass("is-active")
	//   return false;
	// });


	// подмена картинки

	$('.js-take-img').click( function() {
		var src = $('.is_active').attr('src');
		var carousel = $(this).parents('.swing');

		$(this).siblings().removeClass('is_active');
		$(this).addClass('is_active');
		carousel.find('.js-swing__img img').attr('src', carousel.find('.is_active img').attr('src'));
	});










	$('.js-poll').click(function(event) {
		$('.js-togglepoll').toggle();
		return false;
	});

	$('.acco-title').click(function(event) {
		if($(window).width()<767){
			$(this).next().slideToggle();
			$('.js-library').resize();
		}
	});

	/* Для разукраски input[type="file"]*/
	$('input[type="file"].uploadpicker').each(function() {
		var field = $(this);
		var required = field.is('[required]');
		var disabled = field.is('[disabled]');
		field
			.addClass('upload-field-overlay')
			.removeAttr('required')
			.css({
				cursor: 'pointer',
				fontSize: '200px',
				height: 'auto',
				opacity: 0,
				position: 'absolute',
				right: 0,
				top: '-0.5em',
				width: 'auto'
			})
			.wrap('<span class="widget-upload-field"/>')

		var wrapper = field.parent();
		wrapper
			.css({
				backgroundColor: 'transparent',
				display: 'block',
				overflow: 'hidden',
				position: 'relative'
			})
			.prepend('<input class="upload-field-value form-control" type="text"'+(required ? ' required="required"' : '')+(disabled ? ' disabled="disabled"' : '')+' />');

		field.bind('change', function() {
			var values = [this.value.split(/[\/\\]/).pop()];
			if (this.files) {
				values = [];
				for (var i = 0; i < this.files.length; i++) {
					values.push(this.files[i].name);
				}
			}
			var parts = $(this).val();
			wrapper.find('.upload-field-value').val(values.join(', '));
		});
	});

	// main menu dropdown

	$('.js-dropdown').on('click', function() {
		if ($(window).width() > 768) {
			var target = $(this).data('link'),
				targetDropdown = $('#'+target+'');

			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
				targetDropdown.slideUp();
			}
			else {
				$('.js-dropdown').removeClass('is-active');
				$('.js-submenu').hide();
				$(this).addClass('is-active');
				targetDropdown.slideDown();
			}

			return false;
		};

	});


	// sticky footer

	function stickyFooter() {
		var footer = $('.footer'),
			wrap = $('.out');

		// get current footer height
		var	height = footer.outerHeight();

		// set css rules
		wrap.css({
			'margin-bottom': -height,
			'padding-bottom': height
		});

	}
	stickyFooter();

	// sticky header

	function stickyHeader() {
		scroll = $(window).scrollTop();

		if (scroll >= 1) {
			$('.js-header').addClass('is-fixed');
		}
		else {
			$('.js-header').removeClass('is-fixed');
		}
	};
	stickyHeader();

	$(window).scroll(function() {
		stickyHeader();
	});

	// mobile menu toggle

	$('.js-hamb').on('click', function() {
		$('.js-mobnav').slideToggle();
	});







	// side menu toggle

	$(document).on('click', function() {
		$('.js-side-wrap').removeClass('is-visible');
	});

	$('.js-side').on('click', function(event) {
		if ($(this).hasClass('is-visible')) {
			$(this).closest('.js-side-wrap').removeClass('is-visible');
		}
		else {
			$(this).closest('.js-side-wrap').addClass('is-visible');
		}
		event.stopPropagation();
	});

	// toggle hidden elements

	$('.js-hide').on('click', function() {
		var link = $(this).data('link');

		if ($(this).hasClass('is-open')) {
			$('[data-rel = '+link+']').slideUp();
			$(this).text('Показать еще').removeClass('is-open');
		}
		else {
			$('[data-rel = '+link+']').slideDown();
			$(this).text('Скрыть').addClass('is-open');
		}


	});


	$('.js-topper-nav').on('click', function() {
		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$(this).closest('.topper').find('.page-nav').slideUp();
		}
		else {
			$(this).addClass('is-open');
			$(this).closest('.topper').find('.page-nav').slideDown();
		}
	});



	// inner navigation

	 $('.js-innner-nav').on('click', function (){
        var page = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(page).offset().top - 110
        }, 500);
        return false;
    });

	// $(window).resize(function() {
	// 	stickyFooter();
	// 	bannerArea();
	// });




});