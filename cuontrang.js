// Hiển thị hoặc ẩn nút lên đầu trang khi cuộn trang
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Cuộn lên đầu trang khi nhấp vào nút
function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}    