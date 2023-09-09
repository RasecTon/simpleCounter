let num = 0;

const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const changeColor = document.querySelector(".counter");


decreaseBtn.addEventListener('click', function(){   
    num--;
    document.getElementById("counter").innerHTML = num;
    if (num < 0){
        changeColor.classList.add("lessThan0");
        changeColor.classList.remove("moreThan0");
    } else if (num > 0){
        changeColor.classList.add("moreThan0");
        changeColor.classList.remove("lessThan0");
    }



})

increaseBtn.addEventListener('click', function(){
    num++;
    document.getElementById("counter").innerHTML = num;
    if (num < 0){
        changeColor.classList.add("lessThan0");
        changeColor.classList.remove("moreThan0");
    } else if (num > 0){
        changeColor.classList.add("moreThan0");
        changeColor.classList.remove("lessThan0");
    }
})

resetBtn.addEventListener('click', function(){
    num = 0;
    document.getElementById("counter").innerHTML = 0;
})

