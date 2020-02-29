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
  // var id = setInterval(frame, 100);
  // var x = (document.getElementById("demo").innerHTML = x);
  // function frame() {
  //   var width = document.getElementById("value").value;
  //   if (width >= 100) {
  //     clearInterval(id);
  //   } else {
  //     var width = document.getElementById("value").value;
  //     width++;
  //     elem.style.width = width + "%";
  //     document.getElementById("number").innerHTML = width + "%";
  //   }
  // }
});

function skillsetAnim() {
  const p = document.querySelectorAll(".skillset progress");
  console.log(p.length);

  for (let i = 0; i <= p.length; i++) {
    let val = Math.floor(p[i].getAttribute("number"));
    p[i].setAttribute("value", val);
    p[i].style.setProperty("--value", val + "%");
  }
}

function languagesAnim() {
  const p = document.querySelectorAll(".languages progress");
  console.log(p.length);

  for (let i = 0; i <= p.length; i++) {
    let val = Math.floor(p[i].getAttribute("number"));
    p[i].setAttribute("value", val);
    p[i].style.setProperty("--value", val + "%");
  }
}

window.onload = function() {
  skillset.onmouseover = skillset.onmouseout = eventSkillset;
  languages.onmouseover = languages.onmouseout = eventLanguages;
  //test.onmouseover = test.onmouseout = handler;

  function eventSkillset(event) {
    function str(el) {
      if (!el) return "null";
      return el.className || el.tagName;
    }
    if (event.type == "mouseover") {
      skillsetAnim();
    }
    // if (event.type == "mouseout") {
    //   languagesAnim();
    // }
  }

  function eventLanguages(event) {
    function str(el) {
      if (!el) return "null";
      return el.className || el.tagName;
    }
    if (event.type == "mouseover") {
      languagesAnim();
    }
    // if (event.type == "mouseout") {
    //   languagesAnim();
    // }
  }

  // function handler(event) {
  //   function str(el) {
  //     if (!el) return "null";
  //     return el.className || el.tagName;
  //   }
  //   if (event.type == "mouseover") {
  //     skillsetAnim();
  //   }
  //   // if (event.type == "mouseout") {
  //   //   languagesAnim();
  //   // }
  // }
};
