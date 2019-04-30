let btnPaint = document.querySelector('.btn-paint'), 
    btnColor = document.querySelector('.btn-color'),
    btnMove = document.querySelector('.btn-move'),
    btnTransforn = document.querySelector('.btn-transform'),
    workPlace = document.querySelector('.workPlace'),
    allPlace = document.body;


let block0 = document.getElementById("block0").style.cssText = JSON.parse(localStorage.getItem("block0")) || " position: absolute; \
                                                                top: 0;\
                                                                left: 0;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block1 = document.getElementById("block1").style.cssText = JSON.parse(localStorage.getItem("block1")) || "position: absolute;\
                                                                top: 0; left: 205px;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block2 = document.getElementById("block2").style.cssText = JSON.parse(localStorage.getItem("block2")) || "position: absolute; \
                                                                top: 0;\
                                                                left: 410px;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block3 = document.getElementById("block3").style.cssText = JSON.parse(localStorage.getItem("block3")) ||" position: absolute; \
                                                                top: 205px;\
                                                                left: 0;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: black;",
    block4 = document.getElementById("block4").style.cssText = JSON.parse(localStorage.getItem("block4")) ||" position: absolute; \
                                                                top: 205px;\
                                                                left: 205px;\
                                                                margin: 5px;\
                                                                border-radius: 100%;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: black;",
    block5 = document.getElementById("block5").style.cssText = JSON.parse(localStorage.getItem("block5")) ||" position: absolute; \
                                                                top: 205px;\
                                                                left: 410px;\
                                                                margin: 5px;\
                                                                border-radius: 100%;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block6 = document.getElementById("block6").style.cssText = JSON.parse(localStorage.getItem("block6")) ||" position: absolute; \
                                                                top: 410px;\
                                                                left: 0;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: white;",
    block7 = document.getElementById("block7").style.cssText = JSON.parse(localStorage.getItem("block7")) ||" position: absolute; \
                                                                top: 410px;\
                                                                left: 205px;\
                                                                margin: 5px;\
                                                                height: 200px;\
                                                                width: 200px;\
                                                                background: #5c5c5c;",
    block8 = document.getElementById("block8").style.cssText = JSON.parse(localStorage.getItem("block8")) ||" position: absolute; \
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
    blueColor = document.querySelector('.blueDott'),
    greenColor = document.querySelector('.greenDott'),
    yellowColor = document.querySelector('.yellowDott');

currentColor.style.cssText = JSON.parse(localStorage.getItem("currColor")) || "background: white;";
prevColor.style.cssText = JSON.parse(localStorage.getItem("prevColor")) || "background: white;";

redColor.style.background = "red";
blueColor.style.background = "blue";
greenColor.style.background = "green";
yellowColor.style.background = "yellow";


let active,
    firstItem, 
    secondItem;


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

greenColor.addEventListener('click', function() {
    prevColor.style.background = currentColor.style.background;
    return currentColor.style.background = "green";
});

yellowColor.addEventListener('click', function() {
    prevColor.style.background = currentColor.style.background;
    return currentColor.style.background = "yellow";
});


workPlace.addEventListener('click', function (){
    if (document.elementFromPoint(event.pageX, event.pageY) == workPlace) {
        console.log('Stop');
    }
    else {
        switch (active) {
            case "paint":
                paint();    
                break;
            case "color":
                getColor(); 
                break;
            case "move":
                move();
                break;
            case "transform":
                transform();
                break;
            default:
            console.log('Error');
                break;
        }
    }
});

function paint() {
    document.elementFromPoint(event.pageX, event.pageY).style.background=currentColor.style.background;
    return LocalStorage();
};

function getColor() {
    setTimeout (function() {
        active = undefined;
        btnColor.style.textDecoration  = "none";
        return LocalStorage();
        }, 0);
    prevColor.style.background = currentColor.style.background;
    currentColor.style.background = document.elementFromPoint(event.pageX, event.pageY).style.backgroundColor;
};

function move() {
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
        active = undefined;
        btnMove.style.textDecoration  = "none";
        return LocalStorage();
    }
};

function transform() {
    let itemBlock = document.elementFromPoint(event.pageX, event.pageY);
    if (itemBlock.style.borderRadius == "100%") {
        itemBlock.style.borderRadius = "0";
    }
    else {
        itemBlock.style.borderRadius = "100%";
    }
    return LocalStorage();
};

function Activated (active) {
    switch (active) {
        case "paint":
            btnPaint.style.textDecoration  = "underline";;
            btnTransforn.style.textDecoration  = "none";
            btnColor.style.textDecoration  = "none";
            btnMove.style.textDecoration  = "none";
            break;
        case "color":
            btnColor.style.textDecoration  = "underline";
            btnPaint.style.textDecoration  = "none"
            btnTransforn.style.textDecoration  = "none";
            btnMove.style.textDecoration  = "none";
            break;
        case "move":
            btnMove.style.textDecoration  = "underline";
            btnPaint.style.textDecoration = "none";
            btnColor.style.textDecoration  = "none";
            btnTransforn.style.textDecoration  = "none";
            break;
        case "transform":
            btnTransforn.style.textDecoration  = "underline";
            btnPaint.style.textDecoration = "none";
            btnColor.style.textDecoration = "none";
            btnMove.style.textDecoration = "none";
            break;
        default:
            btnTransforn.style.textDecoration  = "none";
            btnPaint.style.textDecoration = "none";
            btnColor.style.textDecoration = "none";
            btnMove.style.textDecoration = "none";
            break;
    }
};

function LocalStorage() {
    currentColor = document.querySelector('.currentDott');
    let curr = currentColor.style.cssText;
    let currColor = JSON.stringify(curr);
    localStorage.setItem("currColor", currColor);

    prevColor =  document.querySelector('.prevDott');
    let prev = prevColor.style.cssText;
    let preColor  = JSON.stringify(prev);
    localStorage.setItem("prevColor", preColor);

    block0 = document.getElementById("block0").style.cssText;
    let itemBlock0 = JSON.stringify(block0);
    localStorage.setItem("block0", itemBlock0);

    block1 = document.getElementById("block1").style.cssText;
    let itemBlock1 = JSON.stringify(block1);
    localStorage.setItem("block1", itemBlock1);

    block2 = document.getElementById("block2").style.cssText;
    let itemBlock2 = JSON.stringify(block2);
    localStorage.setItem("block2", itemBlock2);

    block3 = document.getElementById("block3").style.cssText;
    let itemBlock3 = JSON.stringify(block3);
    localStorage.setItem("block3", itemBlock3);

    block4 = document.getElementById("block4").style.cssText;
    let itemBlock4 = JSON.stringify(block4);
    localStorage.setItem("block4", itemBlock4);

    block5 = document.getElementById("block5").style.cssText;
    let itemBlock5 = JSON.stringify(block5);
    localStorage.setItem("block5", itemBlock5);

    block6 = document.getElementById("block6").style.cssText;
    let itemBlock6 = JSON.stringify(block6);
    localStorage.setItem("block6", itemBlock6);

    block7 = document.getElementById("block7").style.cssText;
    let itemBlock7 = JSON.stringify(block7);
    localStorage.setItem("block7", itemBlock7);

    block8 = document.getElementById("block8").style.cssText;
    let itemBlock8 = JSON.stringify(block8);
    localStorage.setItem("block8", itemBlock8);
};

allPlace.addEventListener('keydown', function (e) {
    switch (event.keyCode) {
        case 27:
            active = undefined;
            Activated(active);
            break;
        case 80:
            active = "paint";
            Activated(active);
            break;
        case 67:
            active = "color";
            Activated(active);
            break;
        case 77:
            active = "move";
            Activated(active);
            break;
        case 84:
            active = "transform";
            Activated(active);
            break;
        case 109:
            localStorage.clear();
            location.reload();
            break;
        default:
            break;
    }
});