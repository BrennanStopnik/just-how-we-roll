/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
// let button_d6 = document.querySelector("#d6-button");
let img_d6 = document.querySelector("#d6-roll");
let mean_d6 = document.querySelector("#d6-rolls-mean");
let median_d6 = document.querySelector("#d6-rolls-median");

let img_d_d6_roll = document.querySelector("#double-d6-buttons");
let img_d_d6_1 = document.querySelector("#double-d6-roll-1");
let img_d_d6_2 = document.querySelector("#double-d6-roll-2");
let mean_d_d6 = document.querySelector("#double-d6-rolls-mean");
let median_d_d6 = document.querySelector("#double-d6-rolls-median");

let img_d12 = document.querySelector("#d12-roll");
let mean_d12 = document.querySelector("#d12-rolls-mean");
let median_d12 = document.querySelector("#d12-rolls-median");

let img_d20 = document.querySelector("#d20-roll");
let mean_d20 = document.querySelector("#d20-rolls-mean");
let median_d20 = document.querySelector("#d20-rolls-median");

let reset_button = document.querySelector("#reset-button");

/*******************
 * EVENT LISTENERS *
 *******************/
img_d6.addEventListener('click', d6RollFunc);
img_d6.addEventListener('click', function(){
    meanD6(sixes);
});
img_d6.addEventListener('click', function(){
    medianD6(sixes);
})

img_d_d6_roll.addEventListener('click', dd6RollFunc);
img_d_d6_roll.addEventListener('click', function(){
    meanDD6(doubleSixes);
});
img_d_d6_roll.addEventListener('click', function(){
    medianDD6(doubleSixes);
})

img_d12.addEventListener('click', d12RollFunc);
img_d12.addEventListener('click', function(){
    meanD12(twelves);
});
img_d12.addEventListener('click', function(){
    medianD12(twelves);
})

img_d20.addEventListener('click', d20RollFunc);
img_d20.addEventListener('click', function(){
    meanD20(twenties);
});
img_d20.addEventListener('click', function(){
    medianD20(twenties);
})


reset_button.addEventListener('click', resetFunction);

/******************
 * RESET FUNCTION *
 ******************/
 resetFunction();


function resetFunction(){
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    img_d6.src = "images/start/d6.png";
    mean_d6.innerText = "N/A";
    median_d6.innerText = "N/A";

    img_d_d6_1.src = "images/start/d6.png";
    img_d_d6_2.src = "images/start/d6.png";
    mean_d_d6.innerText = "N/A";
    median_d_d6.innerText = "N/A";

    img_d12.src = "images/start/d12.jpeg";
    mean_d12.innerText = "N/A";
    median_d12.innerText = "N/A";

    img_d20.src = "images/start/d20.jpg";
    mean_d20.innerText = "N/A";
    median_d20.innerText = "N/A";

}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6RollFunc(){
    let res = getRandomNumber(6);
    console.log(res);

    if (res === 1){
        img_d6.src = "images/d6/1.png";
    } else if (res === 2){
        img_d6.src = "images/d6/2.png";
    } else if (res === 3){
        img_d6.src = "images/d6/3.png";
    } else if (res === 4){
        img_d6.src = "images/d6/4.png";
    } else if (res === 5){
        img_d6.src = "images/d6/5.png";
    } else if (res === 6){
        img_d6.src = "images/d6/6.png";
    }   

    sixes.push(res);
    console.log(sixes)
}

function dd6RollFunc(){
    let res1 = getRandomNumber(6);
    let res2 = getRandomNumber(6)
    console.log(res1, res2);
    let result = res1 + res2;


    if (res1 === 1 && res2 === 1){
        img_d_d6_1.src = "images/d6/1.png";
        img_d_d6_2.src = "images/d6/1.png";
    } else if (res1 === 2 && res2 === 1){
        img_d_d6_1.src = "images/d6/2.png";
        img_d_d6_2.src = "images/d6/1.png";
    } else if (res1 === 3 && res2 === 1){
        img_d_d6_1.src = "images/d6/3.png";
        img_d_d6_2.src = "images/d6/1.png";
    } else if (res1 === 4 && res2 === 1){
        img_d_d6_1.src = "images/d6/4.png";
        img_d_d6_2.src = "images/d6/1.png";
    } else if (res1 === 5 && res2 === 1){
        img_d_d6_1.src = "images/d6/5.png";
        img_d_d6_2.src = "images/d6/1.png";
    } else if (res1 === 6 && res2 === 1){
        img_d_d6_1.src = "images/d6/6.png";
        img_d_d6_2.src = "images/d6/1.png";
    } else if (res1 === 1 && res2 === 2){
        img_d_d6_1.src = "images/d6/1.png";
        img_d_d6_2.src = "images/d6/2.png";
    } else if (res1 === 2 && res2 === 2){
        img_d_d6_1.src = "images/d6/2.png";
        img_d_d6_2.src = "images/d6/2.png";
    } else if (res1 === 3 && res2 === 2){
        img_d_d6_1.src = "images/d6/3.png";
        img_d_d6_2.src = "images/d6/2.png";
    } else if (res1 === 4 && res2 === 2){
        img_d_d6_1.src = "images/d6/4.png";
        img_d_d6_2.src = "images/d6/2.png";
    } else if (res1 === 5 && res2 === 2){
        img_d_d6_1.src = "images/d6/5.png";
        img_d_d6_2.src = "images/d6/2.png";
    } else if (res1 === 6 && res2 === 2){
        img_d_d6_1.src = "images/d6/6.png";
        img_d_d6_2.src = "images/d6/2.png";
    } else if (res1 === 1 && res2 === 3){
        img_d_d6_1.src = "images/d6/1.png";
        img_d_d6_2.src = "images/d6/3.png";
    } else if (res1 === 2 && res2 === 3){
        img_d_d6_1.src = "images/d6/2.png";
        img_d_d6_2.src = "images/d6/3.png";
    } else if (res1 === 3 && res2 === 3){
        img_d_d6_1.src = "images/d6/3.png";
        img_d_d6_2.src = "images/d6/3.png";
    } else if (res1 === 4 && res2 === 3){
        img_d_d6_1.src = "images/d6/4.png";
        img_d_d6_2.src = "images/d6/3.png";
    } else if (res1 === 5 && res2 === 3){
        img_d_d6_1.src = "images/d6/5.png";
        img_d_d6_2.src = "images/d6/3.png";
    } else if (res1 === 6 && res2 === 3){
        img_d_d6_1.src = "images/d6/6.png";
        img_d_d6_2.src = "images/d6/3.png";
    } else if (res1 === 1 && res2 === 4){
        img_d_d6_1.src = "images/d6/1.png";
        img_d_d6_2.src = "images/d6/4.png";
    } else if (res1 === 2 && res2 === 4){
        img_d_d6_1.src = "images/d6/2.png";
        img_d_d6_2.src = "images/d6/4.png";
    } else if (res1 === 3 && res2 === 4){
        img_d_d6_1.src = "images/d6/3.png";
        img_d_d6_2.src = "images/d6/4.png";
    } else if (res1 === 4 && res2 === 4){
        img_d_d6_1.src = "images/d6/4.png";
        img_d_d6_2.src = "images/d6/4.png";
    } else if (res1 === 5 && res2 === 4){
        img_d_d6_1.src = "images/d6/5.png";
        img_d_d6_2.src = "images/d6/4.png";
    } else if (res1 === 6 && res2 === 4){
        img_d_d6_1.src = "images/d6/6.png";
        img_d_d6_2.src = "images/d6/4.png";
    } else if (res1 === 1 && res2 === 5){
        img_d_d6_1.src = "images/d6/1.png";
        img_d_d6_2.src = "images/d6/5.png";
    } else if (res1 === 2 && res2 === 5){
        img_d_d6_1.src = "images/d6/2.png";
        img_d_d6_2.src = "images/d6/5.png";
    } else if (res1 === 3 && res2 === 5){
        img_d_d6_1.src = "images/d6/3.png";
        img_d_d6_2.src = "images/d6/5.png";
    } else if (res1 === 4 && res2 === 5){
        img_d_d6_1.src = "images/d6/4.png";
        img_d_d6_2.src = "images/d6/5.png";
    } else if (res1 === 5 && res2 === 5){
        img_d_d6_1.src = "images/d6/5.png";
        img_d_d6_2.src = "images/d6/5.png";
    } else if (res1 === 6 && res2 === 5){
        img_d_d6_1.src = "images/d6/6.png";
        img_d_d6_2.src = "images/d6/5.png";
    } else if (res1 === 1 && res2 === 6){
        img_d_d6_1.src = "images/d6/1.png";
        img_d_d6_2.src = "images/d6/6.png";
    } else if (res1 === 2 && res2 === 6){
        img_d_d6_1.src = "images/d6/2.png";
        img_d_d6_2.src = "images/d6/6.png";
    } else if (res1 === 3 && res2 === 6){
        img_d_d6_1.src = "images/d6/3.png";
        img_d_d6_2.src = "images/d6/6.png";
    } else if (res1 === 4 && res2 === 6){
        img_d_d6_1.src = "images/d6/4.png";
        img_d_d6_2.src = "images/d6/6.png";
    } else if (res1 === 5 && res2 === 6){
        img_d_d6_1.src = "images/d6/5.png";
        img_d_d6_2.src = "images/d6/6.png";
    } else if (res1 === 6 && res2 === 6){
        img_d_d6_1.src = "images/d6/6.png";
        img_d_d6_2.src = "images/d6/6.png";
    }   

    doubleSixes.push(result);
    console.log(doubleSixes);
}

function d12RollFunc(){
    let res = getRandomNumber(12)
    console.log(res);

    if (res === 1){
        img_d12.src = "images/numbers/1.png";
    } else if (res === 2){
        img_d12.src = "images/numbers/2.png";
    } else if (res === 3){
        img_d12.src = "images/numbers/3.png";
    } else if (res === 4){
        img_d12.src = "images/numbers/4.png";
    } else if (res === 5){
        img_d12.src = "images/numbers/5.png";
    } else if (res === 6){
        img_d12.src = "images/numbers/6.png";
    } else if (res === 7){
        img_d12.src = "images/numbers/7.png";
    } else if (res === 8){
        img_d12.src = "images/numbers/8.png";
    } else if (res === 9){
        img_d12.src = "images/numbers/9.png";
    } else if (res === 10){
        img_d12.src = "images/numbers/10.png";
    } else if (res === 11){
        img_d12.src = "images/numbers/11.png";
    } else if (res === 12){
        img_d12.src = "images/numbers/12.png";
    }
    twelves.push(res);
    console.log(twelves);
}

function d20RollFunc(){
    let res = getRandomNumber(20)
    console.log(res);

    if (res === 1){
        img_d20.src = "images/numbers/1.png";
    } else if (res === 2){
        img_d20.src = "images/numbers/2.png";
    } else if (res === 3){
        img_d20.src = "images/numbers/3.png";
    } else if (res === 4){
        img_d20.src = "images/numbers/4.png";
    } else if (res === 5){
        img_d20.src = "images/numbers/5.png";
    } else if (res === 6){
        img_d20.src = "images/numbers/6.png";
    } else if (res === 7){
        img_d20.src = "images/numbers/7.png";
    } else if (res === 8){
        img_d20.src = "images/numbers/8.png";
    } else if (res === 9){
        img_d20.src = "images/numbers/9.png";
    } else if (res === 10){
        img_d20.src = "images/numbers/10.png";
    } else if (res === 11){
        img_d20.src = "images/numbers/11.png";
    } else if (res === 12){
        img_d20.src = "images/numbers/12.png";
    } else if (res === 13){
        img_d20.src = "images/numbers/13.png";
    } else if (res === 14){
        img_d20.src = "images/numbers/14.png";
    } else if (res === 15){
        img_d20.src = "images/numbers/15.png";
    } else if (res === 16){
        img_d20.src = "images/numbers/16.png";
    } else if (res === 17){
        img_d20.src = "images/numbers/17.png";
    } else if (res === 18){
        img_d20.src = "images/numbers/18.png";
    } else if (res === 19){
        img_d20.src = "images/numbers/19.png";
    } else if (res === 20){
        img_d20.src = "images/numbers/20.png";
    }
    twenties.push(res);
    console.log(twenties);
}


/****************
 * MATH SECTION *
 ****************/
function meanD6(sixes){
    let sum = 0;
    let mean = 0;
    let len = sixes.length;
    for (let i of sixes){
        sum += i;
    }
    mean = Math.ceil(sum / len);
    mean_d6.innerText = mean;
}

function meanDD6(doubleSixes){
    let sum = 0;
    let mean = 0;
    let len = doubleSixes.length;
    for (let i of doubleSixes){
        sum += i;
    }
    mean = Math.ceil(sum / len);
    mean_d_d6.innerText = mean;
}

function meanD12(twelves){
    let sum = 0;
    let mean = 0;
    let len = twelves.length;
    for (let i of twelves){
        sum += i;
    }
    mean = Math.ceil(sum / len);
    mean_d12.innerText = mean;
}

function meanD20(twenties){
    let sum = 0;
    let mean = 0;
    let len = twenties.length;
    for (let i of twenties){
        sum += i;
    }
    mean = Math.ceil(sum / len);
    mean_d20.innerText = mean;
}

