function iter(current, way) {
    if (way === "next") {
        let obj = document.getElementsByClassName("introduction__container-caption")[0];
        if (current === 1) {
            obj.animate([{left: "120px", "opacity": 1}, {left: "300px", opacity: 0}], {duration: 1000});
            setTimeout(() => obj.style.opacity = "0", 1000);
            setTimeout(function () {
                // obj.style.left = "150px";
                obj.innetText = "Just some cool and blah blah blah blah blah blah info about me and my projects blah blah foo bar.";
                obj.animate([{left: "0px", "opacity": 0}, {left: "120px", opacity: 1}], {duration: 1000});
                setTimeout(function (){
                    obj.style.left = "120px";
                    obj.style.opacity = "1";
                }, 200);
            }, 1300);
            // } else if (current === 2 ) {
            //     obj.animate([{left: "-150px", "opacity": 1}, {left: "300px", opacity: 0}], {duration: 1000});
            //     setTimeout(() => obj.style.opacity = "0", 1000);
            // }
        }
    }
}

window.addEventListener("load", function () {
    let name = document.getElementsByClassName("introduction__container-title")[0];
    let bio = document.getElementsByClassName("introduction__container-caption")[0];

    window.scrollTo({top: 0, behavior: "smooth"});

    setTimeout(function () {
        name.style.top = "500px";
        setTimeout(function () {
            bio.style.opacity = "1";
            bio.style.left = "120px";
        }, 100);
    }, 450);
    setTimeout(function () {
        let mouseScroll = document.getElementById("mouse-scroll_down");
        mouseScroll.style.opacity = "1";
    }, 2500);
});


let iterationNumber = 1;
let iterating = false;
let iteratingBack = false;


setTimeout(function () {
    window.addEventListener("wheel", function (event) {
        if (document.body.style.overflow === "") {
            const swipePower = event.deltaY;
            if (swipePower > 120 && iterating === false && iteratingBack === false) {
                iterating = true;
                iter(iterationNumber, "next");
                iterationNumber = 2;
                setTimeout(() => iterating = false, 200);
            }
        } else if (document.body.style.overflow === "auto") {
            setTimeout(function () {
                if (window.scrollY < 940) {
                    document.body.style.overflow = "hidden";
                    window.scrollTo({top: 0, behavior: "smooth"});
                }
            }, 1500);
        }
    });
}, 1000);


