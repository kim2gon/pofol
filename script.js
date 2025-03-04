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
    const minImages = 30; // 최소 이미지 개수
    let createdImages = []; // 생성된 이미지들을 저장하는 배열

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
        newImage.style.position = "absolute"; // 위치 지정
        newImage.style.left = `${x}px`;
        newImage.style.top = `${y}px`;
        newImage.style.opacity = "0"; // 처음에는 숨김
        newImage.classList.add("random-image"); // 클래스 추가

        container.appendChild(newImage);
        createdImages.push(newImage); // 배열에 추가

        // 이미지 서서히 나타남
        setTimeout(() => {
            newImage.style.opacity = "1";
        }, 100);
    }

    function removeRandomImage() {
        if (createdImages.length > minImages) {
            const randomIndex = Math.floor(Math.random() * createdImages.length);
            const randomImage = createdImages[randomIndex]; // 랜덤한 이미지 선택

            if (randomImage) {
                randomImage.style.opacity = "0"; // 서서히 사라짐
                setTimeout(() => {
                    if (container.contains(randomImage)) {
                        randomImage.remove(); // 완전히 삭제
                        createdImages.splice(randomIndex, 1); // 배열에서도 제거
                    }
                }, 1000);
            }
        }
    }

    function showRandomImage() {
        createRandomImage(); // 새로운 이미지 생성
        setTimeout(removeRandomImage, 2000); // 2초 후 랜덤한 이미지 삭제
    }

    // 처음 페이지 열리면 30개의 이미지 생성
    for (let i = 0; i < minImages; i++) {
        createRandomImage();
    }

    // 2초마다 실행
    setInterval(showRandomImage, 2000);
});

let overlay = document.querySelector('.overlay');
let recycle = document.querySelector('.recyclepopup');

document.querySelector('.capcase').addEventListener('click', function () {
    overlay.style.display = 'block';
    recycle.style.display = 'block';
});


recycle.addEventListener('click', function () {
    window.location.href = 'https://www.nespresso.com/kr/ko/made-with-care';
});

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    recycle.style.display = 'none';
});

// 커피머신 상세페이지

let overlay2 = document.querySelector('.overlay2');
let coffeemachine = document.querySelectorAll('.machineclick');
let coffeepopup = document.querySelector('.coffeepopup');

coffeemachine.forEach(function (machine) {
    machine.addEventListener('click', function () {
        coffeemachine.forEach(function (e) {
            overlay2.style.display = 'block';
            coffeepopup.style.display = 'block';
        });
    });
});

overlay2.addEventListener('click', function () {
    overlay2.style.display = 'none';
    coffeepopup.style.display = 'none';
});

let scanbtn = document.querySelector('.scanbtn');
let testbtn = document.querySelector('.testbtn');

scanbtn.addEventListener('click', function () {
    if (scanbtn.style.opacity == 1) {
        scanbtn.style.opacity = 0;
        testbtn.style.opacity = 1;
    } else {
        scanbtn.style.opacity = 1;
    };
});

testbtn.addEventListener('click', function () {
    if (testbtn.style.opacity == 1) {
        testbtn.style.opacity = 0;
        scanbtn.style.opacity = 1;
    } else {
        testbtn.style.opacity = 1;
    };
});

let btncolors = document.querySelectorAll('#colors');
let pinkbtn = document.querySelector('.pinkbtn');
let whitebtn = document.querySelector('.whitebtn');
let redbtn = document.querySelector('.redbtn');
let blackbtn = document.querySelector('.blackbtn');
let yellowbtn = document.querySelector('.yellowbtn');
let bluebtn = document.querySelector('.bluebtn');
let greenbtn = document.querySelector('.greenbtn');

btncolors.forEach(function (colors) {
    colors.addEventListener('click', function () {
        btncolors.forEach(function (e) {
            e.classList.remove('colors');
        });
        colors.classList.add('colors');
    });
});

/*
pinkbtn.addEventListener('click', function () {
    if (pinkbtn.style.opacity == 1) {
        pinkbtn.style.opacity = 0;
        btncolors.style.opacity = 1;
    } else {
        pinkbtn.style.opacity = 1;
    };
});

whitebtn.addEventListener('click', function () {
    if (whitebtn.style.opacity == 1) {
        whitebtn.style.opacity = 0;
        btncolors.style.opacity = 1;
    } else {
        whitebtn.style.opacity = 1;
    };
});
*/