// JS fragment import example
// import * as functions from "./modules/functions.js";
// functions.isWebp();
// functions.spollers();

// БАЗОВІ СКРИПТИ
import "./modules/base.js";

//  СЛАЙДЕР
import "./libs/swiper-bundle.min.js";
import "./modules/slider.js";

addEventListener("DOMContentLoaded", function () {
	if ($(".faq__item").length) {
		$(".faq__item-head").on("click", function () {
			$(this).toggleClass("active");
			$(this).next().slideToggle();
		});
	}
});

// ANIMATIONS
// import './modules/anim.js';

// ТАБИ
// import "./modules/tabs.js";

// VIDEO
import "./modules/video.js";

// Динамический адаптив
// Документация: https://github.com/FreelancerLifeStyle/dynamic_adapt#readme
//import './libs/dynamicAdapt.js';

// 2 ВАРІАНТ ТАБУ НА ЧИСТОМУ JS
// import "./modules/tabs2.js";

//  IMAGES LAZY LOAD
// import Bound from './libs/bounds.js'

// const boundary = Bound({
// 	margins: {bottom: 100}
// })

// const image = document.querySelectorAll('img[data-src]')

// const whenImageEnters = (image) => {
// 	return () => {
// 		image.src = image.dataset.src
// 	}
// }

// image.forEach(img => {
// 	boundary.watch(img, whenImageEnters(img))
// })
