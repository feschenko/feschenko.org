window.addEventListener("load", function () {
    let name = document.getElementsByClassName("container__title")[0]
    let bio = document.getElementsByClassName("container__caption")[0]

    setTimeout(function () {
        name.style.top = "500px";
        setTimeout(function () {
            bio.style.opacity = "1";
            bio.style.left = "150px";
        }, 200);
    }, 1700);
});
