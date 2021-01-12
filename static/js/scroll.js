function nextElement() {

}

function scrollMenu() {
    let menuOffset = document.getElementById("menu__container-trigger").offsetTop;
    let menu = document.getElementById("menu__container");
    let windowScroll = Math.round(window.scrollY);

    console.log(windowScroll);

    if (!("menu__container-toggle_on" in menu.classList)) {
        if (menuOffset > windowScroll) {
            setTimeout(function () {
                if (menuOffset > windowScroll) {
                    menu.classList.toggle("menu__container-toggle_on");
                }
            }, 2000);
        } else if (menuOffset < windowScroll) {
            menu.classList.toggle("menu__container-toggle_off");
        }
    }
}


// window.addEventListener("mousewheel", function () {
//     if (document.body.style.overflow === "") {
//         console.log(true);
//     }
//     // scrollMenu();
// });