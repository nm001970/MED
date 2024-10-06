// document.addEventListener("DOMContentLoaded", function () {

//     //show/hide mobile menu (mobile)
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const mobileMenuBtn = document.querySelector('.menu-btn');
//     document.querySelectorAll('.js-btn-menu').forEach(function (item) {
//       item.addEventListener('click', function () {
//         if (document.body.classList.contains('_show-header-menu')) {
//           document.body.classList.remove('_show-header-menu');
//           mobileMenuBtn.classList.remove('_active');
//           mobileMenu.classList.remove('_active');
//         } else {
//           document.body.classList.add('_show-header-menu');
//           mobileMenuBtn.classList.add('_active');
//           mobileMenu.classList.add('_active');
//           window.scrollTo(0, 0)
//         }
//       })
//     })

//     //modal
//     //get modal window ID from button, link
//     document.querySelectorAll('[data-modal]').forEach(function (item) {
//       item.addEventListener('click', function () {
//         let modalId = this.getAttribute('href') || this.getAttribute('data-modal');
//         if (!modalId) return;
//         openModal(modalId.replace("#", ""));
//       })
//     })
//     //show modal window by ID
//     function openModal(modalId) {
//       document.getElementById(modalId).classList.add('_active')
//       document.body.classList.add('_show-modal');
//     }
//     //hide modal window by click
//     document.querySelectorAll('.js-modal-hide').forEach(function (item) {
//       item.addEventListener('click', function (e) {
//         if (e.target.classList.contains('js-modal-hide')) {
//           let modal = this.closest('.modal');
//           let modalID = modal.getAttribute('id');
//           closeModal(modalID);
//         }
//       })
//     })
//     //close modal window by id or all
//     function closeModal(modalId) {
//       if (modalId) {
//         document.getElementById(modalId).classList.remove('_active')
//       } else {
//         document.querySelectorAll('.modal._active').forEach(function (item) {
//           item.classList.remove('_active')
//         })
//       }
//       document.body.classList.remove('_show-modal');
//     }

//     //tooltip
//     let tooltipElem;
//     document.addEventListener('mouseover', function (e) {
//       let target = e.target;
//       let tooltipHtml = target.dataset.tooltip;
//       if (!tooltipHtml) {
//         return;
//       }

//       tooltipElem = document.createElement('div');
//       tooltipElem.className = 'tooltip';
//       tooltipElem.innerHTML = tooltipHtml;
//       document.body.append(tooltipElem);

//       let coords = target.getBoundingClientRect();

//       let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//       if (left < 0) left = 0;

//       let top = coords.top - tooltipElem.offsetHeight - 5;
//       if (top < 0) {
//         top = coords.top + target.offsetHeight + 5;
//       }

//       tooltipElem.style.left = left + 'px';
//       tooltipElem.style.top = top + 'px';

//       top = coords.top - tooltipElem.offsetHeight - 5;
//       if (top < 0) {
//         top = coords.top + target.offsetHeight + 5;
//       }
//       tooltipElem.style.top = top + 'px';
//     });
//     document.addEventListener('mouseout', function (e) {
//       hideTooltip()
//     });
//     window.addEventListener('scroll', function (e) {
//       hideTooltip()
//     });
//     function hideTooltip() {
//       if (tooltipElem) {
//         tooltipElem.remove();
//         tooltipElem = null;
//       }
//     }

//     //nice-select2
//     if (document.getElementById('select-region')) {
//       NiceSelect.bind(document.getElementById('select-region'));
//     }


//     //autoCompleteJS
//     /*if (document.getElementById('autoComplete')) {
//       const autoCompleteJS = new autoComplete({
//         selector: '#autoComplete',
//         threshold: 3,
//         data: {
//           src: ['окна пластиковые москва',
//             'окна пластиковые москва2',
//             'окна пластиковые москва3',
//             'окна пластиковые москва4',
//             'окна пластиковые москва5',
//             'окна пластиковые москва6',
//             'окна пластиковые москва7',
//             'окна пластиковые москва8',
//             'пример',
//             'пример2',
//             'пример3',
//             'пример4',
//             'пример5',
//             'пример6',
//             'пример7'],
//           cache: true,
//         },
//         resultsList: {
//           element: (list, data) => {
//             if (!data.results.length) {
//               const message = document.createElement('div');
//               message.setAttribute('class', 'no_result');
//               message.innerHTML = 'Не найдено результатов для "' + data.query + '"</span>';
//               list.prepend(message);
//             }
//           },
//           noResults: true,
//           maxResults: 10
//         },
//         resultItem: {
//           highlight: true
//         },
//         events: {
//           input: {
//             selection: (event) => {
//               const selection = event.detail.selection.value;
//               autoCompleteJS.input.value = selection;
//             },
//             focus: (event) => {
//               autoCompleteJS.start();
//             }
//           }
//         }
//       });
//     }*/

//   });

console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");

		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 0.5,
		pointerEvents: "none",
	})
		.to(
		currentInfoEl.querySelectorAll(".text"),
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "-120px",
			opacity: 0,
		},
		"-="
	)
		.call(() => {
		swapInfosClass(direction);
	})
		.call(() => initCardEvents())
		.fromTo(
		direction === "right"
		? nextInfoEl.querySelectorAll(".text")
		: previousInfoEl.querySelectorAll(".text"),
		{
			opacity: 0,
			translateY: "40px",
		},
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "0px",
			opacity: 1,
		}
	)
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 1,
		pointerEvents: "all",
	});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		delay: 0.5,
		duration: 0.4,
		stagger: 0.1,
		opacity: 1,
		translateY: 0,
	})
		.to(
		[buttons.prev, buttons.next],
		{
			duration: 0.4,
			opacity: 1,
			pointerEvents: "all",
		},
		"-=0.4"
	);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
						duration: 0.8,
						opacity: 0,
						pointerEvents: "none",
					})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();
