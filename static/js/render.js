function iter(current, way) {
    if (way === "next") {
        if (current === 1) {
            let obj = document.getElementsByClassName("introduction__container-caption")[0]
            obj.animate([{left: "120px", "opacity": 1}, {left: "300px", opacity: 0}], {duration: 1000})
            setTimeout(() => obj.style.opacity = "0", 1000);
        } else if (current === 2) {
            let obj = document.getElementsByClassName("introduction__container-title")[0]
            obj.animate([{top: "500px", "opacity": 1}, {top: "0px", opacity: 0}], {duration: 1000})
            setTimeout(() => window.scrollTo({top: 1200, behavior: "smooth"}), 350);
            setTimeout(() => obj.style.opacity = "0", 1000);
        }
    } else if (way === "back") {
        if (current === 2) {
            let obj = document.getElementsByClassName("introduction__container-title")[0]
            obj.animate([{top: "0px", "opacity": 0}, {top: "500px", opacity: 1}], {duration: 1000})
            setTimeout(() => obj.style.opacity = "1", 1100);
        } else if (current === 1) {
            let obj = document.getElementsByClassName("introduction__container-caption")[0]
            obj.animate([{left: "300px", "opacity": 0}, {left: "120px", opacity: 1}], {duration: 1000})
            setTimeout(() => obj.style.opacity = "1", 1000);
        }
    }
}

window.addEventListener("load", function () {
    let name = document.getElementsByClassName("introduction__container-title")[0]
    let bio = document.getElementsByClassName("introduction__container-caption")[0]

    window.scrollTo({top: 0, behavior: "smooth"})

    setTimeout(function () {
        name.style.top = "500px";
        setTimeout(function () {
            bio.style.opacity = "1";
            bio.style.left = "120px";
        }, 100);
    }, 500);
    setTimeout(function () {
        document.getElementById("mouse-scroll_down").style.opacity = "1";
    }, 2500);
});


let iterationNumber = 1;
let iterating = false;
let iteratingBack = false;


setTimeout(function () {
    console.log("Handled")
    window.addEventListener("wheel", function (event) {
        if (document.body.style.overflow === "") {
            const swipePower = event.deltaY;
            if (swipePower > 120 && iterating === false && iteratingBack === false) {
                iterating = true;
                iter(iterationNumber, "next");
                iterationNumber = 2;
                setTimeout(() => iterating = false, 1000);
            }
        }
    });
}, 1000);

// setTimeout(function () {
//     console.log("handled");
//     window.addEventListener("wheel", function () {
//         if (document.body.style.overflow === "") {
//             const scrollY = Math.sign(event.deltaY);
//             // console.log(scrollY);
//             // console.log(iterating);
//             console.log(currentIteration);
//             if (iterating === false && scrollY === -1 && iteratingBack === false) {
//                 iterating = true;
//                 setTimeout(function () {
//                     iter(currentIteration, "next");
//                 }, 200);
//                 setTimeout(function () {
//                     currentIteration = 2;
//                     iteratingBack = true;
//                     iterating = false;
//                 }, 2600)
//             } else if (iterating === false && scrollY === 1 && iteratingBack === true) {
//                 iterating = true;
//                 setTimeout(function () {
//                     iter(currentIteration, "back");
//                 }, 200);
//                 setTimeout(function () {
//                     currentIteration = 1;
//                     iteratingBack = false;
//                     iterating = false;
//                 }, 2600)
//             }
//         }
//     });
//
// }, 4200);
