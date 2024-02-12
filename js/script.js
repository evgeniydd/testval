const animationImage = document.getElementById('animationImage');
const imageContainer = document.getElementById('imageContainer');
const button_no = document.querySelector('.btn-no');
const button_yes = document.querySelector('.btn-yes');
const heading_changed = document.querySelector('.heading-changed');

function moveButton() {
	const randomX = Math.floor(Math.random() * window.innerWidth);
	const randomY = Math.floor(Math.random() * window.innerHeight);

	button_no.style.left = `${randomX}px`;
	button_no.style.top = `${randomY}px`;

	test();
}

const test = () => {
	const imageWrapper = document.createElement('div');
	imageWrapper.classList.add('imageWrapper');

	const image = document.createElement('img');
	image.src = 'images/yeah-right копия.png';
	imageWrapper.appendChild(image);

	imageContainer.appendChild(imageWrapper);

	// Анимация показа картинки
	setTimeout(function () {
		imageWrapper.style.transform = 'translateX(0)';
	}, 10);

	// Скрытие картинки через секунду
	setTimeout(function () {
		imageWrapper.style.transform = 'translateX(-100%)';
	}, 2000);

	// Удаление картинки из контейнера после завершения анимации
	setTimeout(function () {
		imageContainer.removeChild(imageWrapper);
	}, 3000);
};

button_yes.addEventListener('click', function (e) {
	e.preventDefault();

	const mainImage = document.querySelector('.main_image');
	mainImage.src = 'images/2.gif';
	button_no.style.display = 'none';
	heading_changed.textContent = 'Yeeeaah, I Love You <3';
	button_yes.style.left = '46%';
	button_yes.style.top = '150%';
	button_yes.disabled = true;
});
