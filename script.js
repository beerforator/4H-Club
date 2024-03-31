"use strict";

// Running Line
var wrapper = document.querySelectorAll('.running-line'),
    marquee1 = document.querySelectorAll('.line')[0],   
    marquee2 = document.querySelectorAll('.line')[1],
    wrapperWidth = wrapper.offsetWidth,
    marqueeWidth = marquee1.scrollWidth;

function move() {
  var currentTX = getComputedStyle(marquee1).transform.split(',');
  if( currentTX[4] === undefined ) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }
  
  if(-currentTX >= marqueeWidth) {
    marquee1.style.transform = 'translateX(' + wrapperWidth + 'px)';
    marquee2.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
  } else {
    marquee1.style.transform = 'translateX(' + currentTX + 'px)';
    marquee2.style.transform = 'translateX(' + currentTX + 'px)';
  }
}

var interval = setInterval(move, 40);

move()

// Sliders

function circleSwiper(ScrollLine, nextBtn, prevBtn) {
    let num1 = document.getElementById('var1');
    console.log(num1);
    let offst = 0;
    let widthh = ScrollLine.offsetWidth;
    let ent = ScrollLine.firstElementChild.offsetWidth + 20;
    
    setInterval(() => {
        if (num1.innerHTML == 6) {
            nextBtn.setAttribute('disabled', true);
        } else {
            nextBtn.removeAttribute('disabled');
        }

        if (num1.innerHTML == 1) {
            prevBtn.setAttribute('disabled', true);
        } else {
            prevBtn.removeAttribute('disabled');
        }
    }, 10);
    
    setInterval(() => {
        offst += ent;

        if ( offst > widthh) {
            offst = 0;
            num1.innerHTML = 0;
        }
        ScrollLine.style.left = -offst + 'px';
        num1.innerHTML = +num1.innerHTML + 1;
    }, 4000);
    
    nextBtn.addEventListener('click', () => {
        offst += ent;
        if ( offst > widthh) {
            offst = 0;
            num1.innerHTML = 0;
        }
        num1.innerHTML = +num1.innerHTML + 1;
        ScrollLine.style.left = -offst + 'px';
    });

    prevBtn.addEventListener('click', () => {
        offst -= ent;
        if (offst < 0) {
            offst = 0;
            num1.innerHTML = 0;
        }
        
        num1.innerHTML = +num1.innerHTML - 1;
        ScrollLine.style.left = -offst + 'px';
    });
}

function verticalSwiper(ScrollLine, nextBtn, prevBtn) {
    let num2 = document.getElementById('var2');
    let offst = 0;
    let widthh = 1775;
    let ent = ScrollLine.firstElementChild.offsetWidth + 15;
    
    setInterval(() => {
        if (num2.innerHTML == 5) {
            nextBtn.setAttribute('disabled', true);
        } else {
            nextBtn.removeAttribute('disabled');
        }

        if (num2.innerHTML == 1) {
            prevBtn.setAttribute('disabled', true);
        } else {
            prevBtn.removeAttribute('disabled');
        }
    }, 10);
    
    nextBtn.addEventListener('click', () => {
        offst += ent;
        if ( offst > widthh) {
            offst = 0;
            num2.innerHTML = 0;
        }
        num2.innerHTML = +num2.innerHTML + 1;
        ScrollLine.style.left = -offst + 'px';
    });

    prevBtn.addEventListener('click', () => {
        offst -= ent;
        if (offst < 0) {
            offst = 0;
            num2.innerHTML = 0;
        }
        
        num2.innerHTML = +num2.innerHTML - 1;
        ScrollLine.style.left = -offst + 'px';
    });
}

verticalSwiper(document.querySelector('.steps-grid'), document.getElementById('step-btn-r'), document.getElementById('step-btn-l'));

circleSwiper(document.querySelector('.sportsmens-slider'), document.getElementById('sport-btn-r'), document.getElementById('sport-btn-l'));

// Toggles
const anchors = document.querySelectorAll('button[href*="#sup"]')

console.log(anchors)

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)
        
        console.log(blockID)
        
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}