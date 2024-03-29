function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
        var navbarHeight = document.querySelector('.navbar').offsetHeight; // Đổi '.navbar' thành class hoặc id của navbar thực tế
        var elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth' // Thêm hiệu ứng smooth scroll
        });
    
}