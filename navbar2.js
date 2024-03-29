window.onload = function() {
    // Lấy ID từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var sectionId = urlParams.get('id');

    // Kiểm tra nếu có ID và thực hiện hàm tương ứng
    if (sectionId) {
        // Thực hiện hàm với ID đã lấy được
        scrollToSection(sectionId);
    }
};

function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var offsetPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
    });
}
