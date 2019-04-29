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
    allPlace = document.body,
    btnPlace = document.querySelector('.btns');

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
                                                                background: black;",
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

let active;
redColor.style.background = "red";
blueColor.style.background = "blue";

btnPaint.addEventListener('click', function () {
    active = 'paint';
    return Activated(active);
});

btnColor.addEventListener('click', function() {
    active = 'color';
    return Activated(active);    
});

btnMove.addEventListener('click', function () {
    active = 'move';
    return Activated(active);
});

btnTransforn.addEventListener('click', function () {
    active = 'transform';
    return Activated(active);
});

redColor.addEventListener('click', function() {
    prevColor.style.background = currentColor.style.background;
    return currentColor.style.background = "red";
});

blueColor.addEventListener('click', function() {
    prevColor.style.background = currentColor.style.background;
    return currentColor.style.background = "blue";
});


let firstItem, secondItem;
workPlace.addEventListener('click', function (){
    if (activePaint == true) {
        document.elementFromPoint(event.pageX, event.pageY).style.background=currentColor.style.background;
        console.log(activePaint);
    }
    if (activeColor == true) {
        setTimeout (function() {
            activeColor = false;
            btnColor.style.textDecoration  = "none";
            }, 0);
        prevColor.style.background = currentColor.style.background;
        currentColor.style.background = document.elementFromPoint(event.pageX, event.pageY).style.backgroundColor;
    }
    if (activeMove == true) {
        activeColor = false;
        var timeLeftFisrt,
            timeTopFirst;
        if (!firstItem) {
            firstItem = document.elementFromPoint(event.pageX, event.pageY);
            firstItem.style.boxShadow = "0 0 10px rgb(157, 16, 238)";
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
            btnMove.style.textDecoration  = "none";
        }
    }
    if (activeTransform == true) {
        let itemBlock = document.elementFromPoint(event.pageX, event.pageY);
        if (itemBlock.style.borderRadius == "100%") {
            itemBlock.style.borderRadius = "0";
        }
        else {
            itemBlock.style.borderRadius = "100%";
        }
    }
});

function Activated (active) {
    switch (active) {
        case "paint":
            activeMove = false; 
            activeTransform = false;
            activeColor = false;
            activePaint = true;
            btnPaint.style.textDecoration  = "underline";;
            btnTransforn.style.textDecoration  = "none";
            btnColor.style.textDecoration  = "none";
            btnMove.style.textDecoration  = "none";
            break;
        case "color":
            activePaint = false;
            activeMove = false; 
            activeTransform = false;
            activeColor = true;
            btnColor.style.textDecoration  = "underline";
            btnPaint.style.textDecoration  = "none"
            btnTransforn.style.textDecoration  = "none";
            btnMove.style.textDecoration  = "none";
            break;
        case "move":
            activePaint = false;
            activeTransform = false;
            activeColor = false;
            activeMove = true; 
            btnMove.style.textDecoration  = "underline";
            btnPaint.style.textDecoration = "none";
            btnColor.style.textDecoration  = "none";
            btnTransforn.style.textDecoration  = "none";
            break;
        case "transform":
            activePaint = false;
            activeMove = false; 
            activeColor = false;
            activeTransform = true;
            btnTransforn.style.textDecoration  = "underline";
            btnPaint.style.textDecoration = "none";
            btnColor.style.textDecoration = "none";
            btnMove.style.textDecoration = "none";
            break;
        default:
            console.log('Error');
            break;
    }
};