// 시작 화면 크기조절

window.onload = () => {
    const dragscroll = document.querySelector('.dragscroll');
    const content = document.querySelector('.background');

    // 드래그 가능한 영역 크기
    const contentWidth = content.offsetWidth;
    const contentHeight = content.offsetHeight;

    // 화면 크기
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 중앙 위치 계산
    const centerX = (contentWidth - viewportWidth) / 2;
    const centerY = (contentHeight - viewportHeight) / 2;

    // 초기 스크롤 위치 설정
    dragscroll.scrollLeft = centerX;
    dragscroll.scrollTop = centerY;
};


// dim처리

document.getElementById('dim').addEventListener('click', function () {
    this.style.display = 'none';  // dim 효과를 숨김
});


// 랜덤캡슐 이미지 

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".capsules");
    const images = Array.from(container.querySelectorAll(".rancap"));
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageSize = 0; // 이미지 크기 (가로, 세로)
    const minImages = 30; // 최소 이미지 개수 유지

    function getRandomPosition() {
        const x = Math.random() * (containerWidth - imageSize);
        const y = Math.random() * (containerHeight - imageSize);
        return { x, y };
    }

    function createRandomImage() {
        // 랜덤한 이미지 선택 (중복 허용)
        const randomIndex = Math.floor(Math.random() * images.length);
        const newImage = images[randomIndex].cloneNode(); // 기존 이미지 복제
        const { x, y } = getRandomPosition();
        newImage.style.left = `${x}px`;
        newImage.style.top = `${y}px`;
        newImage.style.opacity = "0"; // 처음에는 숨김

        container.appendChild(newImage);

        // 이미지 서서히 나타남
        setTimeout(() => {
            newImage.style.opacity = "1";
        }, 100);

        return newImage;
    }

    function showRandomImage() {
        const newImage = createRandomImage();

        // 2초 후 추가된 이미지 중 하나 제거 (초기 이미지는 유지)
        setTimeout(() => {
            const allImages = Array.from(container.querySelectorAll(".random-image"));
            const extraImages = allImages.slice(minImages); // 최소 개수를 초과한 이미지들만 선택

            if (extraImages.length > 0) {
                const randomToHide = extraImages[Math.floor(Math.random() * extraImages.length)];
                randomToHide.style.opacity = "0";
                setTimeout(() => {
                    if (container.contains(randomToHide)) {
                        randomToHide.remove();
                    }
                }, 1000);
            }
        }, 2000);
    }

    // 2초마다 실행
    setInterval(showRandomImage, 2000);
});