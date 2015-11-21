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