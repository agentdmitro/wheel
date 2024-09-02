addEventListener("DOMContentLoaded", function () {
	const proposalSwiper = new Swiper(".proposal .swiper", {
		slidesPerView: "auto",
		// loop: true,
		spaceBetween: 10,
		pagination: {
			el: ".proposal .swiper-pagination.mob",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".proposal .swiper-button-next",
			prevEl: ".proposal .swiper-button-prev",
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
				pagination: {
					el: ".proposal .swiper-pagination.desktop",
					type: "progressbar",
				},
			},
		},
	});

	// $('.swiper-button-prev').remove();
	// $('.swiper-button-next').remove();

	// const swiper = new Swiper('.swiper', {
	// 	slidesPerView: 1,
	// 	watchOverflow: true,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 	},
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	spaceBetween: 20,
	// 	autoHeight: true
	// });
});
