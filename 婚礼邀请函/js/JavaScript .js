console.log("网页加载成功！");
  // 初始化 Swiper
  const swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直滚动
    loop: false, // 不循环滚动
    pagination: {
      el: '.swiper-pagination', // 分页器
      clickable: true,
    },
  });
// 点击触发物理弹跳
pageFooter.addEventListener('click', () => {
    // 添加动画类名
    pageFooter.classList.add('bouncing');

    // 动画结束后移除类名，恢复常态
    pageFooter.addEventListener('animationend', () => {
        pageFooter.classList.remove('bouncing');
    }, { once: true }); // 只触发一次
});

// 上滑触发（示例：监听 touch 事件）
let startY = 0;
document.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY > 50) { // 判断是否为上滑
        // 添加动画类名
        pageFooter.classList.add('bouncing');

        // 动画结束后移除类名
        pageFooter.addEventListener('animationend', () => {
            pageFooter.classList.remove('bouncing');
        }, { once: true });
    }
});
