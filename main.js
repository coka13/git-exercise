const changeStyle=document.querySelector(".style");
changeStyle.addEventListener("click",(e)=>{
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
})