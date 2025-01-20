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
}