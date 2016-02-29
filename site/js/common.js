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
		$('.js_popup').removeClass('is_active');
		$('.js_popup_filter').removeClass('is_active');
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

	/* Скрипт для рейтинга Большой */
	$('.star__big_wrap').each(function(){

		var rating = $(this);
		var rating_input = rating.parents('form').find('input[name="rating"]');
		var stars = $('.star__big > span', rating);

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

	//Попап поиска < 651px
	if($(document).width() < 651){
		$('.search__field').addClass('js_search');
		$('.btn-search').addClass('js_search');
	};

	// активауия значков рейтинга в статьях
	$('.article__rating').on('click', function() {
		$(this).toggleClass('is_active');
		return false;
	});

	//active icon-star
	$('.clothes__icons, .side__user, .vend,.directory').on('click','.icon-star', function() {
		$(this).toggleClass('is_active');
	});

	// переключатель показа цветов изделия
	$('.js_color').click(function() {
		$(this).siblings().removeClass('is_active');
		$(this).addClass('is_active');
		return false;
	});

	//clone block
	if($(document).width() < 1250){
		var children = $('.js-move_children').remove()
		$('.js-here-chilgren').after(children).css('margin-bottom', '15px');
	};

	// подмена картинки

	$('.js-take-img').click( function() {
		var src = $('.is_active').attr('src');
		var carousel = $(this).parents('.swing');

		$(this).siblings().removeClass('is_active');
		$(this).addClass('is_active');
		carousel.find('.js-swing__img img').attr('src', carousel.find('.is_active img').attr('src'));
	});



	$('.js-take-preview').click( function() {
		var src = $('.is_active').attr('src');
		var carousel = $(this).parents('.carousel');

		$(this).siblings().removeClass('is_active');
		$(this).addClass('is_active');
		carousel.find('.js-carousel__img img').attr('src', carousel.find('.is_active img').attr('src'));
	});

	// slick carousel
	if($(document).width() < 651){
		$('.js-repres_slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			// speed: 600,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 20000,
			prevArrow: $('.js-slider__back'),
			nextArrow: $('.js-slider__next')
		});
	};
	//dirrectory сворачивани текста при <1200
	$('.directory__slide a').on('click', function() {
		var spin = $(this).parent().next('.directory__contant_learn_wrap');
		spin.toggleClass('is_active');
		return false;
	});

	//calendar
	if($(document).width() < 851){
		$('.js-week').on('click', function() {
			$(this).addClass('is_active').siblings().removeClass('is_active');
			$('.js-get-week').slideDown();
			$('.js-get-month').slideUp();
			return false;
		});
		$('.js-month').on('click', function() {
			$(this).addClass('is_active').siblings().removeClass('is_active');
			$('.js-get-month').slideDown();
			$('.js-get-week').slideUp();

			return false;
		});
	}



	// popup
	$('.js_popup').on('click', function() {
		$(this).removeClass('is_active');
		$('.js_popup_filter').removeClass('is_active');
		$('.js_popup_search').removeClass('is_active');
	});


	//popap search
	$('.js_search').on('click', function() {
		$('.js_popup_search').addClass('is_active');
		$('.js_popup').addClass('is_active');
		$('html, body').animate({ scrollTop: $('.out').offset().top }, 500 );
		return false;
	});


	//filter
	$('.js_filter').on('click', function() {
		$('.js_popup_filter').addClass('is_active');
		$('.js_popup').addClass('is_active');
		$('html, body').animate({ scrollTop: $('.out').offset().top }, 500 );
		return false;
	});



	//read more
	$('.photo__height').readmore({
		speed: 75,
		collapsedHeight: 160,
		// heightMargin: 16,
		moreLink: '<a class="read__more" href="#"><span>Показать еще </span><i class="icon-bot"></i></a',
		lessLink: '<a class="read__more" href="#"><span>Скрыть </span><i class="icon-top"></i></a>'
	});
	//read more
	$('.side__text').readmore({
		speed: 75,
		collapsedHeight: 125,
		// heightMargin: 16,
		moreLink: '<a class="read__more" href="#"><span>Читать полностью </span><i class="icon-bot"></i></a',
		lessLink: '<a class="read__more" href="#"><span>Скрыть </span><i class="icon-top"></i></a>'
	});
	//read more
	$('.comunity_height').readmore({
		speed: 75,
		collapsedHeight: 575,
		// heightMargin: 16,
		moreLink: '<a class="read__more" href="#"><span>Показать еще(12)  </span><i class="icon-bot"></i></a',
		lessLink: '<a class="read__more" href="#"><span>Скрыть </span><i class="icon-top"></i></a>'
	});
	//read more
	$('.side__pictures').readmore({
		speed: 75,
		collapsedHeight: 238,
		// heightMargin: 16,
		moreLink: '<a class="read__more" href="#"><span>Все участники </span><i class="icon-next"></i></a',
		lessLink: '<a class="read__more" href="#"><span>Скрыть </span><i class="icon-prev"></i></a>'
	});
	//read more
	$('.js_gang_more').readmore({
		speed: 75,
		collapsedHeight: 380,
		// heightMargin: 16,
		moreLink: '<a class="read__more" href="#"> Показать еще <span> (12) </span></a',
		lessLink: '<a class="read__more" href="#">Скрыть </a>'
	});

	//conntainer half

	$('.js_half_more').readmore({
		speed: 75,
		collapsedHeight: 180,
		// heightMargin: 16,
		moreLink: '<a class="read__more" href="#"> <i class="icon-bot"></i> <span>Еще</span> </a',
		lessLink: '<a class="read__more" href="#"> <i class="icon-top"></i> <span>Скрыть</span> </a>'
	});





});