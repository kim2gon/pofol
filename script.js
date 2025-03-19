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

// 재활용 팝업

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

// 캡슐 팝업

let overlay3 = document.querySelector('.overlay3');
let capclick = document.querySelector('.capclick');
let capsulepopup = document.querySelector('.capsulepopup');
let capsulepopup2 = document.querySelector('.capsulepopup2');
let capsuleclicks = document.querySelector('.capsuleclicks');
let cancel2 = document.querySelector('.cancel2');
let cancel3 = document.querySelector('.cancel3');
let backbtn = document.querySelector('.backbtn');
let buybtn = document.querySelector('.buybtn');

capclick.addEventListener('click', function () {
    overlay3.style.display = 'block';
    capsulepopup.style.display = 'block';
    capsulepopup2.style.display = 'none';
    capsuleclicks.style.display = 'block';
    cancel2.style.display = 'block';
});

capsuleclicks.addEventListener('click', function () {
    capsulepopup.style.display = 'none';
    capsulepopup2.style.display = 'block';
    capsuleclicks.style.display = 'none';
    cancel3.style.display = 'block';
    cancel2.style.display = 'none';
    backbtn.style.display = 'block'
    buybtn.style.display = 'block'
});

backbtn.addEventListener('click', function () {
    capsulepopup.style.display = 'block';
    capsulepopup2.style.display = 'none';
    capsuleclicks.style.display = 'block';
    cancel2.style.display = 'block';
    cancel3.style.display = 'none';
    backbtn.style.display = 'none'
    buybtn.style.display = 'none'
});

buybtn.addEventListener('click', function () {
    window.location.href = 'https://www.nespresso.com/kr/ko/order/capsules/vertuo';
});

cancel2.addEventListener('click', function () {
    overlay3.style.display = 'none';
    capsulepopup.style.display = 'none';
    capsuleclicks.style.display = 'none';
    cancel2.style.display = 'none';
});

cancel3.addEventListener('click', function () {
    overlay3.style.display = 'none';
    capsulepopup2.style.display = 'none';
    cancel3.style.display = 'none';
    backbtn.style.display = 'none'
    buybtn.style.display = 'none'
});

let capclicked = document.querySelectorAll('#clicked');
let capchange = document.querySelectorAll('#capchange img');
let capchange2 = document.querySelectorAll('#capchange2 img');

capclicked.forEach(function (clicked) {
    clicked.addEventListener('click', function () {
        capclicked.forEach(function (cap) {
            cap.style.opacity = 0;
        });
        this.style.opacity = 1;
        switch (true) {
            case this.classList.contains('redchoice'):
                capchange.forEach(function (img) {
                    img.src = 'PNG/capsulered.png';
                });
                capchange2.forEach(function (img) {
                    img.src = 'PNG/capsulered2.png';
                });
                break;
            case this.classList.contains('pinkchoice'):
                capchange.forEach(function (img) {
                    img.src = 'PNG/capsulepink.png';
                });
                capchange2.forEach(function (img) {
                    img.src = 'PNG/capsulepink2.png';
                });
                break;
            case this.classList.contains('bluechoice'):
                capchange.forEach(function (img) {
                    img.src = 'PNG/capsuleblue.png';
                });
                capchange2.forEach(function (img) {
                    img.src = 'PNG/capsuleblue2.png';
                });
                break;
            case this.classList.contains('greenchoice'):
                capchange.forEach(function (img) {
                    img.src = 'PNG/capsulegreen.png';
                });
                capchange2.forEach(function (img) {
                    img.src = 'PNG/capsulegreen2.png';
                });
                break;
            case this.classList.contains('brownchoice'):
                capchange.forEach(function (img) {
                    img.src = 'PNG/capsulebrown.png';
                });
                capchange2.forEach(function (img) {
                    img.src = 'PNG/capsulebrown2.png';
                });
                break;
            default:
                break;
        }
    });
});

// 커피머신 상세페이지

let overlay2 = document.querySelector('.overlay2');
let coffeemachine = document.querySelectorAll('.machineclick');
let coffeepopup = document.querySelector('.coffeepopup');
let cancel = document.querySelector('.cancel');

coffeemachine.forEach(function (machine) {
    machine.addEventListener('click', function () {
        overlay2.style.display = 'block';
        coffeepopup.style.display = 'block';
        cancel.style.display = 'block';
    });
});

cancel.addEventListener('click', function () {
    overlay2.style.display = 'none';
    coffeepopup.style.display = 'none';
    cancel.style.display = 'none';
});

let scanbtn = document.querySelector('.scanbtn');
let testbtn = document.querySelector('.testbtn');
let scanimg = document.querySelector('.scanimg');
let scanning = document.querySelector('.scanning');
let testing = document.querySelector('.testing');
let coffee = document.querySelector('.coffee');
let crema = document.querySelector('.crema');
let fall = document.querySelector('.coffeefall');

let isImg = true;

scanbtn.addEventListener('click', function () {
    if (isImg) {
        scanbtn.style.opacity = 0;
        testbtn.style.opacity = 1;
        scanimg.style.display = 'block';
        scanning.style.display = 'block';
        testing.style.display = 'none';
        isImg = false;
    } else {
        scanbtn.style.opacity = 1;
        scanimg.style.display = 'none';
        scanning.style.display = 'none';
        isImg = true;
    };
});

testbtn.addEventListener('click', function () {
    if (isImg) {
        testbtn.style.opacity = 0;
        scanbtn.style.opacity = 1;
        scanimg.style.display = 'none';
        scanning.style.display = 'none';
        testing.style.display = 'block';
        coffeetest();
        isImg = false;
    } else {
        testbtn.style.opacity = 1;
        testing.style.display = 'none';
        isImg = true
    };
});

let btncolors = document.querySelectorAll('#colors');
let head = document.querySelector('.machinehead img');
let joint = document.querySelector('.headjoint');

let currentAnimation = null;  // 현재 진행 중인 애니메이션을 추적할 변수

// 각 버튼에 클릭 이벤트를 추가합니다.
btncolors.forEach(function (colors) {
    colors.addEventListener('click', function () {
        // 애니메이션이 진행 중이라면 중단
        if (currentAnimation) {
            currentAnimation.cancel(); // 기존 애니메이션 중단
        }

        // 선택된 버튼에 색상 클래스를 추가하고 나머지 버튼에서는 제거
        btncolors.forEach(function (e) {
            e.classList.remove('colors');
        });
        colors.classList.add('colors');

        // 클릭된 버튼에 해당하는 애니메이션 실행
        jointmove1();
    });
});

function jointmove1() {
    currentAnimation = joint.animate([
        { transform: 'translate(0, 0)' },             // 초기 위치
        { transform: 'translate(0, 287px)' }          // 287px 내려옴
    ], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    }).onfinish = function () {
        jointmove2(); // 다음 실행
    };
}

function jointmove2() {
    currentAnimation = joint.animate([
        { transform: 'translate(0, 287px)' },         // 내려온 상태에서 시작
        { transform: 'translate(0, 0)' }             // 287px 올라감
    ], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    }).onfinish = function () {
        jointmove3(); // 다음 실행
    };

    currentAnimation = head.animate([
        { transform: 'translate(0, 0)' },             // 처음 위치에서 시작
        { transform: 'translate(0, -287px)' }         // 287px 올라감
    ], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    });
}

function jointmove3() {
    // head.src 변경은 jointmove3가 시작되기 전에 처리
    const activeButton = document.querySelector('.colors');
    switch (activeButton.classList[0]) {
        case 'pinkbtn':
            head.src = 'PNG/machine/pinkhead.png';
            break;
        case 'whitebtn':
            head.src = 'PNG/machine/whitehead.png';
            break;
        case 'redbtn':
            head.src = 'PNG/machine/redhead.png';
            break;
        case 'blackbtn':
            head.src = 'PNG/machine/blackhead.png';
            break;
        case 'yellowbtn':
            head.src = 'PNG/machine/yellowhead.png';
            break;
        case 'bluebtn':
            head.src = 'PNG/machine/bluehead.png';
            break;
        case 'greenbtn':
            head.src = 'PNG/machine/greenhead.png';
            break;
        default:
            break;
    }

    currentAnimation = joint.animate([
        { transform: 'translate(0, 0)' },             // 올라간 상태에서 시작
        { transform: 'translate(0, 287px)' }          // 다시 287px 내려옴
    ], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    }).onfinish = function () {
        jointmove4(); // 다음 실행
    };

    currentAnimation = head.animate([
        { transform: 'translate(0, -287px)' },         // head가 올라간 상태에서 시작
        { transform: 'translate(0, 0)' }               // head도 내려옴
    ], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    });
}

function jointmove4() {
    currentAnimation = joint.animate([
        { transform: 'translate(0, 287px)' },         // 내려온 상태에서 시작
        { transform: 'translate(0, 0)' }             // 원래 위치로 올라감
    ], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    });

    currentAnimation = head.animate([
        { transform: 'translate(0, -287px)' },         // 287px 올라간 상태에서 시작
        { transform: 'translate(0, 0)' }               // head는 그대로 내려옴
    ], {
        duration: 0,
        fill: 'forwards'
    });
}

function coffeetest() {
    coffee.animate([
        { transform: 'translate(0,0)' },
        { transform: 'translate(0,-51px)' }
    ], {
        duration: 2000,
        easing: 'ease',
        fill: 'forwards'
    });

    crema.animate([
        { transform: 'translate(0,0)' },
        { transform: 'translate(0,-57px)' }
    ], {
        duration: 2000,
        easing: 'ease',
        fill: 'forwards'
    });

    fall.animate([
        { transform: 'translate(0,0)' },
        { transform: 'translate(0,131px)' }
    ], {
        duration: 100,
        easing: 'ease',
        fill: 'forwards'
    });
} 