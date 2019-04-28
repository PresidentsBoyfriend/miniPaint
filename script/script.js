let activePaint = false, 
    activeColor = false,
    activeMove = false, 
    activeTransform = false;

//кнопки и окно
let btnPaint = document.querySelector('.btn-paint'), 
    btnColor = document.querySelector('.btn-color'),
    btnMove = document.querySelector('.btn-move'),
    btnTransforn = document.querySelector('.btn-transform'),
    workPlace = document.querySelector('.workPlace'),
    allPlace = document.body;

//Блоки
let block0 = document.getElementById("block0").style.cssText =" position: absolute; \
                                                                top: 0;\
                                                                left: 0;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block1 = document.getElementById("block1").style.cssText =" position: absolute; \
                                                                top: 0;\
                                                                left: 205px;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block2 = document.getElementById("block2").style.cssText =" position: absolute; \
                                                                top: 0;\
                                                                left: 410px;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block3 = document.getElementById("block3").style.cssText =" position: absolute; \
                                                                top: 205px;\
                                                                left: 0;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: black;",
    block4 = document.getElementById("block4").style.cssText =" position: absolute; \
                                                                top: 205px;\
                                                                left: 205px;\
                                                                margin: 5px;\
                                                                border-radius: 100%;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block5 = document.getElementById("block5").style.cssText =" position: absolute; \
                                                                top: 205px;\
                                                                left: 410px;\
                                                                margin: 5px;\
                                                                border-radius: 100%;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block6 = document.getElementById("block6").style.cssText =" position: absolute; \
                                                                top: 410px;\
                                                                left: 0;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: white;",
    block7 = document.getElementById("block7").style.cssText =" position: absolute; \
                                                                top: 410px;\
                                                                left: 205px;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block8 = document.getElementById("block8").style.cssText =" position: absolute; \
                                                                top: 410px;\
                                                                left: 410px;\
                                                                margin: 5px;\
                                                                border-radius: 100%;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;";
           
let currentColor = document.querySelector('.currentDott'),
    prevColor =  document.querySelector('.prevDott'),
    redColor = document.querySelector('.redDott'),
    blueColor = document.querySelector('.blueDott');

redColor.style.background = "red";
blueColor.style.background = "blue";

btnPaint.addEventListener('click', function () {
    activeMove = false; 
    activeTransform = false;
    activeColor = false;
    activePaint = true;
});

btnMove.addEventListener('click', function () {
    activePaint = false;
    activeTransform = false;
    activeColor = false;
    activeMove = true; 
});

btnTransforn.addEventListener('click', function () {
    activePaint = false;
    activeMove = false; 
    activeColor = false;
    activeTransform = true;
});

btnColor.addEventListener('click', function() {
    activePaint = false;
    activeMove = false; 
    activeTransform = false;
    activeColor = true;
});
let firstItem, secondItem;
workPlace.addEventListener('click', function (){
    if (activeMove == true) {
        var timeLeftFisrt,
            timeTopFirst;
        if (!firstItem) {
            firstItem = document.elementFromPoint(event.pageX, event.pageY);
            firstItem.style.boxShadow = "0 0 10px rgb(157, 16, 238)";
            console.log(timeLeftFisrt);
        }
        else {
            secondItem = document.elementFromPoint(event.pageX, event.pageY);
            firstItem.style.boxShadow = "none";
            timeTopFirst = firstItem.style.top;
            timeLeftFisrt = firstItem.style.left;
            firstItem.style.top = secondItem.style.top;
            firstItem.style.left = secondItem.style.left;
            secondItem.style.top = timeTopFirst;
            secondItem.style.left = timeLeftFisrt;
            firstItem = undefined;
            secondItem = undefined;
            activeMove = false;

        }
        
    }
    // console.log(firstItem);
    // console.log(secondItem);
});


allPlace.addEventListener('click', function() {
    if (activeColor == true) {
        prevColor.style.background = currentColor.style.background;
        currentColor.style.background = document.elementFromPoint(event.pageX, event.pageY).style.backgroundColor;
    }
})

