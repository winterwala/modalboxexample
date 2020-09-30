const showmodal = document.querySelector(".about button");
console.log(showmodal);
const modalbg = document.querySelector(".modalbg");
console.log(modalbg);
const closebtn= document.querySelector(".close");
const submitbtn = document.querySelector("#submit");
function show(){
    showmodal.addEventListener("click", ()=>{
        modalbg.classList.add("modalappear");
    })
}

function close(){
    closebtn.addEventListener("click", ()=>{
        modalbg.classList.remove("modalappear");
    })
}

function submit(){
    submitbtn.addEventListener("click", ()=>{
        modalbg.classList.remove("modalappear");
        alert("Your details have been submitted!");
    })
}
show();
close();
submit();
