document.addEventListener('DOMContentLoaded', function(event) {
  new WOW().init();

  function greeting() {
    let time = new Date().getHours();
    let greeting;
    if (time < 10) {
      greeting = 'Good morning';
    } else if (time < 20) {
      greeting = 'Good day';
    } else {
      greeting = 'Good evening';
    }
    document.getElementById('welcome').innerHTML = greeting;
  }
});

function skillsetAnim() {
  const p = document.querySelectorAll('.skillset progress');
  const lp = document.querySelectorAll('.skillset li p'); //anim num
  console.log(p.length, lp.length);

  for (let i = 0; i <= p.length; i++) {
    let val = Math.floor(p[i].getAttribute('data-value'));
    lp[i].setAttribute('style', 'width:' + val + '%'); //anim num
    p[i].setAttribute('value', val);
    p[i].style.setProperty('--value', val + '%');
  }
}

function languagesAnim() {
  const p = document.querySelectorAll('.languages progress');
  const lp = document.querySelectorAll('.languages li p'); //anim num
  console.log(p.length, lp.length);

  for (let i = 0; i <= p.length; i++) {
    let val = Math.floor(lp[i].getAttribute('data-value'));
    // for (let j = 0; j <= val; j++) {
    //   // val += j;
    //   lp[i].setAttribute('style', 'width:' + j + '%'); //anim num
    //   lp[i].setAttribute('data-value', j); //anim num
    //   p[i].setAttribute('value', j);
    // } /// document.get style [data-value]
    lp[i].setAttribute('style', 'width:' + val + '%'); //anim num
    p[i].setAttribute('value', val);
    p[i].style.setProperty('--value', val + '%');
  }
}

window.onload = function() {
  skillset.onmouseover = skillset.onmouseout = eventSkillset;
  languages.onmouseover = languages.onmouseout = eventLanguages;
  //test.onmouseover = test.onmouseout = handler;

  function eventSkillset(event) {
    function str(el) {
      if (!el) return 'null';
      return el.className || el.tagName;
    }
    if (event.type == 'mouseover') {
      skillsetAnim();
    }
  }

  function eventLanguages(event) {
    function str(el) {
      if (!el) return 'null';
      return el.className || el.tagName;
    }
    if (event.type == 'mouseover') {
      languagesAnim();
    }
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
