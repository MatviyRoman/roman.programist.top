<<<<<<< HEAD
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

$(".languages").hover(
  function() {
    let i = 0;
    function move() {
      if (i == 0) {
        i = 0;
        let elem = document.getElementById("myBar");
        let number = document.getElementById("number");
        var width = 0;
        let id = setInterval(frame, 50);
        function frame() {
          if (width >= 80) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            number.innerHTML = width + "%";
          }
        }
      }
    }
  }
  // ,
  // function() {
  //   width++;
  //   elem.style.width = width + "%";
  //   number.innerHTML = width + "%";
  //   $("#myBar").addClass("myBar");
  // }
  //, function () { $(this).removeClass('hover') }
);

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
});
=======
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

$(".languages").hover(
  function() {
    let i = 0;
    function move() {
      if (i == 0) {
        i = 0;
        let elem = document.getElementById("myBar");
        let number = document.getElementById("number");
        var width = 0;
        let id = setInterval(frame, 50);
        function frame() {
          if (width >= 80) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            number.innerHTML = width + "%";
          }
        }
      }
    }
  }
  // ,
  // function() {
  //   width++;
  //   elem.style.width = width + "%";
  //   number.innerHTML = width + "%";
  //   $("#myBar").addClass("myBar");
  // }
  //, function () { $(this).removeClass('hover') }
);

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
});
>>>>>>> 2d92c93ae83e19fdb78878fbe828612d2f9432c4
