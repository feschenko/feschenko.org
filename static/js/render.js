// let iterationNumber = 1;
// let iterating = false;
// let stageNumber = 1;
//
//
// function scrollToIntroduction() {
//     startOver();
//     window.scrollTo({top: 0, behavior: "smooth"});
// }
//
//
// function iter(current, way) {
//     if (way === "next") {
//         let obj = document.getElementsByClassName("introduction__container-caption")[0];
//         if (current === 1) {
//             obj.animate([{left: "120px", opacity: 1}, {left: "300px", opacity: 0}], {duration: 1000});
//             setTimeout(() => obj.style.opacity = "0", 1000);
//             setTimeout(function () {
//                 obj.innerHTML = "I'm a software engineer from Belarus. <br> Now I'm doing computer science and learning " +
//                     "more about data science. Coding and learning every day to become better."
//                 obj.animate([{left: "0px", opacity: 0}, {left: "120px", opacity: 1}], {duration: 1000});
//                 setTimeout(function (){
//                     obj.style.left = "120px";
//                     obj.style.opacity = "1";
//                 }, 200);
//             }, 900);
//         } else if (current === 2) {
//             obj.animate([{left: "120px", opacity: 1}, {left: "300px", opacity: 0}], {duration: 1000});
//             setTimeout(() => obj.style.opacity = "0", 1000);
//             setTimeout(function () {
//                 obj.innerHTML = "My main language is python 🐍 At this week I'm spent " + pythonHoursSpent + " hours on it. <br> I also like C++, but I use it only on competitions.";
//                 obj.animate([{left: "0px", opacity: 0}, {left: "120px", opacity: 1}], {duration: 1000});
//                 setTimeout(function (){
//                     obj.style.left = "120px";
//                     obj.style.opacity = "1";
//                 }, 200);
//             }, 900);
//         } else if (current === 3) {
//             stage("free-scroll");
//         }
//     }
// }
//
// function stage(next) {
//     if (next === "free-scroll") {
//         let headerMenu = document.getElementById("menu__container");
//         headerMenu.style.backgroundImage = document.getElementById("introduction__container").style.backgroundImage;
//         headerMenu.style.opacity = "1";
//         const scrollTo = document.getElementById("introduction__container").offsetHeight;
//         setTimeout(() => document.body.style.overflow = "auto", 1200);
//         window.scrollTo({top: scrollTo, behavior: "smooth"});
//         stageNumber = 2;
//     }
// }
//
// function startOver() {
//     document.getElementsByClassName("introduction__container-caption")[0].innerHTML = "And here is a small introduction to me :)";
//     document.getElementById("menu__container").style.backgroundImage = "";
//     window.scrollTo({top: 0, behavior: "smooth"});
//     document.body.style.opacity = "0";
//     iterating = true;
//     iterationNumber = 1;
//     iterating = false;
// }
//
// function mouseScrollAnimation() {
//     setTimeout(function () {
//         let mouseScroll = document.getElementById("mouse-scroll");
//         mouseScroll.style.opacity = "1";
//     }, 2500);
// }
//
// window.addEventListener("load", function () {
//     let title = document.getElementsByClassName("introduction__container-title")[0];
//     let caption = document.getElementsByClassName("introduction__container-caption")[0];
//
//     window.scrollTo({top: 0, behavior: "smooth"});
//
//     mouseScrollAnimation();
//
//     setTimeout(function () {
//         title.style.top = "500px";
//         setTimeout(function () {
//             caption.style.opacity = "1";
//             caption.style.left = "120px";
//         }, 100);
//     }, 450);
// });
//
//
// setTimeout(function () {
//     window.addEventListener("wheel", function (event) {
//         if (document.body.style.overflow === "") {
//             const swipePower = event.deltaY;
//             if (swipePower < -100 && iterating === false) {
//                 iterating = true;
//                 iter(iterationNumber, "next");
//                 iterationNumber = iterationNumber + 1;
//                 setTimeout(() => iterating = false, 1800);
//             }
//         } else if (document.body.style.overflow === "auto" && window.scrollY < 920) {
//             startOver();
//         }
//     });
// }, 1000);
//
//
