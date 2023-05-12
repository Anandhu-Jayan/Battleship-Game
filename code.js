
let parentElement=document.querySelector(".parent");
for(let i=0;i<16;i++){
    let childcell=document.createElement("div");
    childcell.classList.add("cells");
    parentElement.appendChild(childcell);
}

let chooseItem=["ship","submarine","water","water","water","water","water","water","water","water","water","water","water","water","water","water"];
let rollcount=16;
parentElement.addEventListener("click",(event)=>{
let randomroll=-1;
    if(event.target.classList.contains("cells") && event.target.style.backgroundImage==""){
        randomroll=Math.floor(Math.random() * rollcount);
        rollcount--;
        if(chooseItem[randomroll]==="ship"){
            event.target.style.cssText="background-image:url('https://i.ibb.co/ckCh4BW/battleship-ship-boat-army-military-svgrepo-com.jpg')";
            chooseItem.splice(randomroll,1);
            popalert("Won")
            
        }
        else if(chooseItem[randomroll]==="submarine"){
            event.target.style.cssText="background-image:url('https://i.ibb.co/HB5BSwG/submarine-underwater-sea-ship-war-svgrepo-com.jpg')";
            chooseItem.splice(randomroll,1);
            popalert("Lost");
            
        }
        else{
            event.target.style.cssText="background-image:url('https://i.ibb.co/xjPrzfb/waves.jpg');";
            chooseItem.splice(randomroll,1);
        }
    }
})
let rButton=document.querySelector("#reset");
rButton.onclick=()=>{
    let cells=document.querySelectorAll(".cells");
    for(let cell of cells){
        cell.style.backgroundImage="";
        chooseItem=["ship","submarine","water","water","water","water","water","water","water","water","water","water","water","water","water","water"];
        rollcount=16;
    } 
}
const popalert=(result)=>{
    const pop=document.querySelector(".popup");
    const resultElement=document.querySelector("#result");
    pop.style.display="block";
    resultElement.textContent=`You ${result}`;

}
let paButton=document.querySelector("#playagain");
paButton.onclick=()=>{
    const pop=document.querySelector(".popup");
    pop.style.display="none";
    let cells=document.querySelectorAll(".cells");
    for(let cell of cells){
        cell.style.backgroundImage="";
        chooseItem=["ship","submarine","water","water","water","water","water","water","water","water","water","water","water","water","water","water"];
        rollcount=16;
    } 
}