function update(previewPic) {
    console.log("update() được kích hoạt");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("undo() được kích hoạt");

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML =
        "Di chuột hoặc chọn một hình ảnh bên dưới để hiển thị ở đây.";

    imageDiv.style.backgroundImage = "";
}

function addTabFocus() {
    console.log("Trang web đã được tải - addTabFocus() được kích hoạt");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex cho hình ảnh số " + (i + 1));
    }
}
