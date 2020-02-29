new WOW().init();

function greeting() {
  let time = new Date().getHours();
  let greeting;
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("welcome").innerHTML = greeting;
}

//$(".languages")
//.hover
// function() {
//   let i = 0;
//   function move() {
//     if (i == 0) {
//       i = 0;
//       let elem = document.getElementById("myBar");
//       let number = document.getElementById("number");
//       var width = 0;
//       let id = setInterval(frame, 50);
//       function frame() {
//         if (width >= 80) {
//           clearInterval(id);
//           i = 0;
//         } else {
//           width++;
//           elem.style.width = width + "%";
//           number.innerHTML = width + "%";
//         }
//       }
//     }
//   }
// }
// ,
// function() {
//   width++;
//   elem.style.width = width + "%";
//   number.innerHTML = width + "%";
//   $("#myBar").addClass("myBar");
// }
//, function () { $(this).removeClass('hover') }
//();

document.addEventListener("DOMContentLoaded", function(event) {
  // var elem = document.getElementById("bar");
  // var width = 1;
  // var id = setInterval(frame, 100);

  // function frame() {
  //   if (width >= 100) {
  //     clearInterval(id);
  //   } else {
  //     width++;
  //     elem.style.width = width + "%";
  //     document.getElementById("value").innerHTML = width + "%";
  //   }
  // }

  var elem = document.getElementById("bar");
  var id = setInterval(frame, 100);
  let width = document.getElementById("value").value;
  var x = (document.getElementById("demo").innerHTML = x);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      document.getElementById("value").innerHTML = width + "%";
    }
  }
});
