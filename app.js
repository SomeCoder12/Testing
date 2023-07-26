// window.addEventListener('mousemove', function(e) {
//     document.querySelector("#coordinateX").innerHTML = "Coordinate X: "+e.clientX
//     document.querySelector("#coordinateY").innerHTML = "Coordinate Y: "+e.clientY
// })
// document.querySelector("#elem").addEventListener('click', function(e) {

//     if (e.target.tagName ==="LI") {
//         e.target.innerHTML = "text!"
//     } else if (e.target.tagName === "UL") {
//         console.log("object")
//         let newLi = document.createElement("li");
//         newLi.innerHTML = "text";
//         document.querySelector("#elem").append(newLi)
//     }
// })

// let box = document.querySelector("#type");

// let box2 = document.querySelector("#type2");
// let paragrph = document.querySelector("#helloWorld");
// box2.addEventListener("keydown", function(e) {
// alert("keyCode: "+e.keyCode+" key: "+e.key)
// console.log(e)
// if (e.key === "Enter") {
//         paragrph.innerHTML = box2.value;
//         box2.value = ""
//     }

// })

// setInterval(() => {
//     let arr = ["Str", "#", "!!!", true]
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     console.log(arr[randomIndex])
// }, 3000);

// let button = document.querySelector("#start");
// button.addEventListener("click", function () {
  let i = 10;
//   setInterval(() => {
//     document.write("<p>", ++i, "</p>");
//   }, 1000);
// });
// let intervalId = setInterval(() => {
    
//         i--;
//         console.log(i)
//         if (i === 0) {
//                 clearInterval(intervalId)
//             }
//         }, 1000);
//         let i = 0;
//         function hello() {
//   setTimeout(() => {
//     console.log(++i);
//     hello();
//   }, i * 1000);
// }
// hello();
// let i2 = 10;
let stopBtn = document.querySelector("#stop");


let interval = setInterval(() => {
  i--
  console.log(i)
  document.querySelector("input").value = i;
  if (i == 0) {
    clearInterval(interval);
    document.querySelector("input").value = 10;
  }
}, 1000);
stopBtn.addEventListener("click", function() {
  clearInterval(interval)
})


  

