
let parentElement=document.querySelector(".parent");
for(let i=0;i<16;i++){
    let childcell=document.createElement("div");
    childcell.classList.add("cells");
    parentElement.appendChild(childcell);
}

let chooseItem=["ship","water"];
parentElement.addEventListener("click",(event)=>{
    
    if(event.target.classList.contains("cells") && event.target.style.backgroundImage==""){
        
        if(chooseItem[Math.floor(Math.random() * 2) ]==="ship")
            event.target.style.cssText="background-image:url('https://i.ibb.co/ckCh4BW/battleship-ship-boat-army-military-svgrepo-com.jpg')";
        else
            event.target.style.cssText="background-image:url('https://i.ibb.co/xjPrzfb/waves.jpg');";
    }
})
let rButton=document.querySelector("input");
rButton.onclick=()=>{
    let cells=document.querySelectorAll(".cells");
    for(let cell of cells){
        cell.style.backgroundImage="";
    } 
}