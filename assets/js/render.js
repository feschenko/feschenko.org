function iter(current, way) {
    if (way === "next") {
        let obj = document.getElementsByClassName("introduction__container-caption")[0];
        if (current === 1) {
            obj.animate([{left: "120px", "opacity": 1}, {left: "300px", opacity: 0}], {duration: 1000});
            setTimeout(() => obj.style.opacity = "0", 1000);
            setTimeout(function () {
                obj.innerHTML = "Just some cool and blah blah blah blah blah blah info about me and my projects blah blah foo bar.";
                obj.animate([{left: "0px", "opacity": 0}, {left: "120px", opacity: 1}], {duration: 1000});
                setTimeout(function (){
                    obj.style.left = "120px";
                    obj.style.opacity = "1";
                }, 200);
            }, 900);
            // } else if (current === 2 ) {
            //     obj.animate([{left: "-150px", "opacity": 1}, {left: "300px", opacity: 0}], {duration: 1000});
            //     setTimeout(() => obj.style.opacity = "0", 1000);
            // }
        } else if (current === 2) {
            obj.animate([{left: "120px", "opacity": 1}, {left: "300px", opacity: 0}], {duration: 1000});
            setTimeout(() => obj.style.opacity = "0", 1000);
            setTimeout(function () {
                obj.innerHTML = "Peee poo kek sdofsdakjf jasjdj asj jdjasj djasj djasj djasjdjasj jdjasdjasjj.";
                obj.animate([{left: "0px", "opacity": 0}, {left: "120px", opacity: 1}], {duration: 1000});
                setTimeout(function (){
                    obj.style.left = "120px";
                    obj.style.opacity = "1";
                }, 200);
            }, 900);
        }
    }
}


function mouseScrollAnimation() {
    setTimeout(function () {
        let mouseScroll = document.getElementById("mouse-scroll");
        mouseScroll.style.opacity = "1";
    }, 2500);
}

function range(first, last) {
    let result = [];
    for (let i = first; i <= last; i++) {
        result.push(i);
    }
    return result;
}


// function changeNameToFacts() {
//     let title = document.getElementsByClassName("introduction__container-title")[0];
//     const titleLength = title.innerText.length;
//
//     for (var char in range(1, titleLength).reverse()) {
//         setTimeout(() => {
//             console.log("kekic = ", char)
//         }, 1000);
//         // setTimeout(function () {
//             // title.innerHTML = title.innerText.slice(0, range(1, titleLength).reverse()[char] - 1);
//             // console.log(title.innerText.slice(0, range(1, titleLength).reverse()[char] - 1) + "kekek");
//         // }, 3500);
//     }
// }
//
// function ke(i) {
//     se
// }


window.addEventListener("load", function () {
    let title = document.getElementsByClassName("introduction__container-title")[0];
    let caption = document.getElementsByClassName("introduction__container-caption")[0];

    window.scrollTo({top: 0, behavior: "smooth"});


    mouseScrollAnimation();

    setTimeout(function () {
        title.style.top = "500px";
        // changeNameToFacts();
        setTimeout(function () {
            caption.style.opacity = "1";
            caption.style.left = "120px";
        }, 100);
    }, 450);
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


