let count=0;
let entries=document.getElementById("entry");
let countEl=document.getElementById("count-el");
function increment(){
    count+=1;
    countEl.innerText=count;
}
function save(){
    entries.textContent+=count + " - ";
    count=0;
    countEl.innerText=count;
}