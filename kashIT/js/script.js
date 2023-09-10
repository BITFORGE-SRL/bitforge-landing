(function ($) {

	"use strict";
	const currentPath = document.currentScript.getAttribute('data-source');

	const teamMembers = [{ description: 'Nam ultricies sed leolet eget vehic. Sed varius non magna quis mats. Integer finibus nil at tempus semper, rokomoni our has auctor leo.', name: 'Andrei Rodin', jobPosition: 'Team Lead', imageSrc: 'images/resource/author-2.jpg' }, { description: 'Nam ultricies sed leolet eget vehic. Sed varius non magna quis mats. Integer finibus nil at tempus semper, rokomoni our has auctor leo.', name: 'Mihuil', jobPosition: 'Database Developer', imageSrc: 'images/resource/author-2.jpg' }]





	const fileTemplates = {
		'about.html': {
			blockIds: 'about.html', renderHtml() {
				renderAbout(this.blockIds)
			}
		},
		'faq.html': { blockIds: 'faq.html', renderHtml() { renderFaq(this.blockIds) } },
		'index-2.html': { blockIds: 'index-2.html', renderHtml() { renderIndex2(this.blockIds) } },
		'index-3.html': { blockIds: ['index-3-first.html', 'index-3-second.html'], renderHtml() { renderIndex3(this.blockIds) } },
		'index.html': { blockIds: 'index.html', renderHtml() { renderIndex(this.blockIds) } },
		'price.html': { blockIds: 'price.html', renderHtml() { renderPrice(this.blockIds) } },
		'services.html': { blockIds: 'services.html', renderHtml() { renderServices(this.blockIds) } },
		'team.html': { blockIds: 'team.html', renderHtml() { renderTeam(this.blockIds) } },
		'testimonial.html': { blockIds: 'testimonial.html', renderHtml() { renderTestimonial(this.blockIds) } }
	}



	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}



	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');

			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}

		}
	}

	headerStyle();


	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa-solid fa-chevron-down fa-fw"></span></div>');

		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function (e) {
			e.preventDefault();
		});

		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function (e) {
			e.preventDefault();
		});

		$('.price-block .features .arrow').on('click', function (e) {
			$(e.target.offsetParent.offsetParent.offsetParent).toggleClass('active-show-hidden')
		});

	}


	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") === FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" === FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}

	if ($('.main-header .header-lower .main-menu .navigation').length) {
		dynamicCurrentMenuClass($('.main-header .header-lower .main-menu .navigation'));
	}



	//Header Search
	if ($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function () {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function () {
			$('body').removeClass('search-active');
		});

		$('.search-popup .color-layer').on('click', function () {
			$('body').removeClass('search-active');
		});
	}



	if ($(".animation_mode").length) {
		$('.animation_mode').marquee({
			speed: 50,
			gap: 20,
			delayBeforeStart: 0,
			direction: 'left',
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}


	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}


	// Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		//$('.mobile-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);

		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function (e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');

			if ($(target).is(':visible')) {
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			} else {
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function (e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');

			if ($(targetInner).is(':visible')) {
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			} else {
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function (e) {
			if (e.keyCode === 27) {
				$('body').removeClass('mobile-menu-visible');
				$('.mobile-menu .navigation > li').removeClass('open');
				$('.mobile-menu .navigation li ul').slideUp(0);
			}
		});

	}



	//Parallax Scene for Icons
	if ($('.parallax-scene-1').length) {
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-2').length) {
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-3').length) {
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-4').length) {
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-5').length) {
		var scene = $('.parallax-scene-5').get(0);
		var parallaxInstance = new Parallax(scene);
	}



	if ($('.paroller').length) {
		$('.paroller').paroller({
			factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			type: 'foreground',     // background, foreground  
			direction: 'horizontal' // vertical, horizontal  
		});
	}




	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
			//animateIn: 'fadeIn',
			loop: true,
			margin: 30,
			nav: true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: ['<span class="fa-solid fa-arrow-left fa-fw"></span>', '<span class="fa-solid fa-arrow-right fa-fw"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 1
				},
				1200: {
					items: 1
				},
				1500: {
					items: 1
				}
			}
		});
	}




	// Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			//animateOut: 'fadeOut',
			//animateIn: 'fadeIn',
			loop: true,
			margin: 30,
			nav: true,
			center: true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: ['<span class="fa-solid fa-arrow-left fa-fw"></span>', '<span class="fa-solid fa-arrow-right fa-fw"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 4
				},
				1500: {
					items: 5
				}
			}
		});
	}


	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
			responsive: {
				0: {
					items: 2
				},
				480: {
					items: 3
				},
				600: {
					items: 4
				},
				800: {
					items: 5
				},
				1024: {
					items: 6
				}
			}
		});
	}




	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1024: {
					items: 3
				}
			}
		});
	}




	// Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
			//animateIn: 'fadeIn',
			loop: true,
			margin: 30,
			nav: true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: ['<span class="fa-solid fa-arrow-left fa-fw"></span>', '<span class="fa-solid fa-arrow-right fa-fw"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}




	// Price Carousel
	if ($('.price-carousel').length) {
		$('.price-carousel').owlCarousel({
			//animateOut: 'fadeOut',
			//animateIn: 'fadeIn',
			loop: true,
			margin: 0,
			nav: true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: ['<span class="fa-solid fa-arrow-left fa-fw"></span>', '<span class="fa-solid fa-arrow-right fa-fw"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}




	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}




	// LightBox Image
	if ($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}


	//LightBox Video
	if ($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
			// disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%'
					},
				},
				srcAction: 'iframe_src',
			},
			fixedContentPos: false
		});
	}


	// Odometer
	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function () {
			var odo = $(".odometer");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}


	//Custom Seclect Box
	if ($('.custom-select-box').length) {
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}


	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}



	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);

		});
	}



	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: true,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}

	function renderAbout(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ description, imageSrc, jobPosition, name }) => {
			const childrenBlock = `<div class="testimonial-block_one">
			<div class="testimonial-block_one-inner">
				<div class="testimonial-block_one-upper-box">
					<div class="testimonial-block_one-author">
						<div class="testimonial-block_one-quote fa-solid fa-quote-left fa-fw"></div>
						<img src=${imageSrc} alt="" />
					</div>
					<div class="testimonial-block_one-text">${description}</div>
				</div>
				<div class="testimonial-block_one-lower-box">
					<h6 class="testimonial-block_one-name">${name}</h6>
					<div class="testimonial-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}

	function renderFaq(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ imageSrc, jobPosition, name }) => {
			const childrenBlock = `<div class="team-block_one col-lg-3 col-md-6 col-sm-12">
			<div class="team-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
				<div class="team-block_one-image">
					<img src=${imageSrc} alt="" />
					<!-- Social Box -->
					<ul class="team-block_one-social">
						<li><a href="https://www.facebook.com/" class="fa fa-facebook-f"></a></li>
						<li><a href="https://www.twitter.com/" class="fa fa-twitter"></a></li>
						<li><a href="https://www.behance.com/" class="fa fa-behance"></a></li>
						<li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
						<li><a href="https://www.youtube.com/" class="fa fa-youtube-play"></a></li>
					</ul>
				</div>
				<div class="team-block_one-content">
					<h4 class="team-block_one-title"><a href="about.html">${name}</a></h4>
					<div class="team-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}

	function renderIndex(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ imageSrc, jobPosition, name }) => {
			const childrenBlock = `<div class="team-block_one col-lg-3 col-md-6 col-sm-12">
			<div class="team-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
				<div class="team-block_one-image">
					<img src=${imageSrc} alt="" />
					<!-- Social Box -->
					<ul class="team-block_one-social">
						<li><a href="https://www.facebook.com/" class="fa fa-facebook-f"></a></li>
						<li><a href="https://www.twitter.com/" class="fa fa-twitter"></a></li>
						<li><a href="https://www.behance.com/" class="fa fa-behance"></a></li>
						<li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
						<li><a href="https://www.youtube.com/" class="fa fa-youtube-play"></a></li>
					</ul>
				</div>
				<div class="team-block_one-content">
					<h4 class="team-block_one-title"><a href="about.html">${name}</a></h4>
					<div class="team-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}

	function renderIndex2(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ imageSrc, jobPosition, name, description }) => {
			const childrenBlock = `<div class="testimonial-block_one">
			<div class="testimonial-block_one-inner">
				<div class="testimonial-block_one-upper-box">
					<div class="testimonial-block_one-author">
						<div class="testimonial-block_one-quote fa-solid fa-quote-left fa-fw"></div>
						<img src=${imageSrc} alt="" />
					</div>
					<div class="testimonial-block_one-text">${description}</div>
				</div>
				<div class="testimonial-block_one-lower-box">
					<h6 class="testimonial-block_one-name">${name}</h6>
					<div class="testimonial-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}

	function renderIndex3(blockIds) {
		blockIds.forEach((blockId, index) => {
			const parentBlock = document.getElementById(blockId);
			teamMembers.forEach(({ imageSrc, jobPosition, name, description }) => {
				const childrenBlock = index === 0 ? `<div class="team-block_one col-lg-3 col-md-6 col-sm-12">
				<div class="team-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div class="team-block_one-image">
						<img src=${imageSrc} alt="" />
						<!-- Social Box -->
						<ul class="team-block_one-social">
							<li><a href="https://www.facebook.com/" class="fa fa-facebook-f"></a></li>
							<li><a href="https://www.twitter.com/" class="fa fa-twitter"></a></li>
							<li><a href="https://www.behance.com/" class="fa fa-behance"></a></li>
							<li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
							<li><a href="https://www.youtube.com/" class="fa fa-youtube-play"></a></li>
						</ul>
					</div>
					<div class="team-block_one-content">
						<h4 class="team-block_one-title"><a href="about.html">${name}</a></h4>
						<div class="team-block_one-designation">${jobPosition}</div>
					</div>
				</div>
			</div>` : `<div class="testimonial-block_two">
			<div class="testimonial-block_two-inner">
				<div class="testimonial-block_two-author">
					<div class="testimonial-block_two-quote fa-solid fa-quote-left fa-fw"></div>
					<img src=${imageSrc} alt="" />
				</div>
				<div class="testimonial-block_two-separator"></div>
				<div class="testimonial-block_two-text">${description}</div>
				<div class="testimonial-block_two-designation">${name}<span> - ${jobPosition}</span></div>
			</div>
		</div>`

				parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
			})
		})
	}

	function renderPrice(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ imageSrc, jobPosition, name }) => {
			const childrenBlock = `<div class="team-block_one col-lg-3 col-md-6 col-sm-12">
			<div class="team-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
				<div class="team-block_one-image">
					<img src=${imageSrc} alt="" />
					<!-- Social Box -->
					<ul class="team-block_one-social">
						<li><a href="https://www.facebook.com/" class="fa fa-facebook-f"></a></li>
						<li><a href="https://www.twitter.com/" class="fa fa-twitter"></a></li>
						<li><a href="https://www.behance.com/" class="fa fa-behance"></a></li>
						<li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
						<li><a href="https://www.youtube.com/" class="fa fa-youtube-play"></a></li>
					</ul>
				</div>
				<div class="team-block_one-content">
					<h4 class="team-block_one-title"><a href="about.html">${name}</a></h4>
					<div class="team-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}

	function renderServices(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ imageSrc, jobPosition, name }) => {
			const childrenBlock = `<div class="team-block_one col-lg-3 col-md-6 col-sm-12">
			<div class="team-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
				<div class="team-block_one-image">
					<img src=${imageSrc} alt="" />
					<!-- Social Box -->
					<ul class="team-block_one-social">
						<li><a href="https://www.facebook.com/" class="fa fa-facebook-f"></a></li>
						<li><a href="https://www.twitter.com/" class="fa fa-twitter"></a></li>
						<li><a href="https://www.behance.com/" class="fa fa-behance"></a></li>
						<li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
						<li><a href="https://www.youtube.com/" class="fa fa-youtube-play"></a></li>
					</ul>
				</div>
				<div class="team-block_one-content">
					<h4 class="team-block_one-title"><a href="about.html">${name}</a></h4>
					<div class="team-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}
	function renderTeam(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ imageSrc, jobPosition, name }) => {
			const childrenBlock = `<div class="team-block_one col-lg-3 col-md-4 col-sm-12">
			<div class="team-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
				<div class="team-block_one-image">
					<img src=${imageSrc} alt="" />
					<!-- Social Box -->
					<ul class="team-block_one-social">
						<li><a href="https://www.facebook.com/" class="fa fa-facebook-f"></a></li>
						<li><a href="https://www.twitter.com/" class="fa fa-twitter"></a></li>
						<li><a href="https://www.behance.com/" class="fa fa-behance"></a></li>
						<li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
						<li><a href="https://www.youtube.com/" class="fa fa-youtube-play"></a></li>
					</ul>
				</div>
				<div class="team-block_one-content">
					<h4 class="team-block_one-title"><a href="about.html">${name}</a></h4>
					<div class="team-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}

	function renderTestimonial(blockId) {
		const parentBlock = document.getElementById(blockId);
		teamMembers.forEach(({ imageSrc, jobPosition, name, description }) => {
			const childrenBlock = `<div class="testimonial-block_one style-two col-lg-4 col-md-6 col-sm-12">
			<div class="testimonial-block_one-inner">
				<div class="testimonial-block_one-upper-box">
					<div class="testimonial-block_one-author">
						<div class="testimonial-block_one-quote fa-solid fa-quote-left fa-fw"></div>
						<img src=${imageSrc} alt="" />
					</div>
					<div class="testimonial-block_one-text">${description}</div>
				</div>
				<div class="testimonial-block_one-lower-box">
					<h6 class="testimonial-block_one-name">${name}</h6>
					<div class="testimonial-block_one-designation">${jobPosition}</div>
				</div>
			</div>
		</div>`

			parentBlock.insertAdjacentHTML('beforeend', childrenBlock)
		})
	}



	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

	$(window).on('load', function () {
		fileTemplates[currentPath].renderHtml()
		handlePreloader();
	});

})(window.jQuery);