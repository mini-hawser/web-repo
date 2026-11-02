let count=0;
const counter=document.getElementById("content");

const btnShow=document.getElementById("show");
const btnAdd=document.getElementById("add");
const btn2=document.getElementById("add2");
const btn3=document.getElementById("add3");
const btnReset=document.getElementById("reset");


btnShow.addEventListener('click',()=>{
    counter.textContent=count;
})
btnAdd.addEventListener('click',()=>{
    count++;
    counter.textContent=count;
})
btn2.addEventListener('click',()=>{
    count+=2;
    counter.textContent=count;
})
btn3.addEventListener('click',()=>{
    count+=3;
    counter.textContent=count;
})
btnReset.addEventListener('click',()=>{
    count=0;
    counter.textContent=count;
})

