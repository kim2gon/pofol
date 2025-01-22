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

document.getElementById('dim').addEventListener('click', function () {
    this.style.display = 'none';  // dim 효과를 숨김
});

let scale = 1;  // 초기 스케일 값
const content = document.querySelector('.background');

window.addEventListener('wheel', function (event) {
    // 마우스 휠 방향에 따라 비율을 확대 또는 축소
    if (event.deltaY < 0) {
        scale += 0.05;  // 확대
    } else {
        scale -= 0.05;  // 축소
    }

    // 비율의 최소/최대 제한
    if (scale < 0.5) scale = 0.5;
    if (scale > 1.5) scale = 1.5;

    // content 요소의 크기를 동적으로 조정
    content.style.transform = `scale(${scale})`;
    content.style.transformOrigin = 'top left'; // 확대/축소 기준점 설정

    // 기본 스크롤 동작 방지하여 페이지가 스크롤되지 않도록 함
    event.preventDefault();
});