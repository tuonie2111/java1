// Lưu ảnh mặc định
var defaultImage = "images/anh6.jpg";
var defaultTitle = "Hoàng hôn trên mặt hồ";
var defaultDescription =
    "Những đám mây bồng bềnh giữa bầu trời xanh.";


// Khi di chuột hoặc focus vào ảnh
function upDate(previewPic) {

    console.log("Đang xem ảnh: " + previewPic.alt);

    var image = document.getElementById("image");
    var title = document.getElementById("image-title");
    var description =
        document.getElementById("image-description");

    image.style.backgroundImage =
        "url('" + previewPic.src + "')";

    title.textContent = previewPic.alt;

    description.textContent =
        previewPic.getAttribute("data-description");
}


// Khi chuột rời đi hoặc mất focus
function unDo() {

    console.log("Khôi phục ảnh mặc định");

    var image = document.getElementById("image");
    var title = document.getElementById("image-title");
    var description =
        document.getElementById("image-description");

    image.style.backgroundImage =
        "url('" + defaultImage + "')";

    title.textContent = defaultTitle;

    description.textContent = defaultDescription;
}


// Chạy khi trang được tải
function addTabFocus() {

    console.log("Trang đã tải");

    var images =
        document.getElementsByClassName("preview");

    // Tự động thêm tabindex cho tất cả ảnh
    for (var i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        console.log(
            "Đã thêm tabindex cho ảnh " + (i + 1)
        );
    }
}