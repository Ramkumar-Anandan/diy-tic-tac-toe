const boxElement=document.querySelectorAll(".box");

const class1="text";

var i=0;
boxElement.forEach(box=>{
    console.log(box)
    box.addEventListener('click',handleClick,{once:true})
})



function handleClick(e){
    console.log(e.target.getAttribute('id'))
    i=e.target.getAttribute('id');
    console.log("working");
    boxElement[i-1].classList.add(class1);
    boxElement[i-1].innerHTML="X";
}

// for(var i = 0; i < boxElement.length; i++){
//     var num = Math.floor(Math.random() * tileNumbers.lenth);
//     boxElement.classList.add(class1);
//     //tileNumbers.pop(num);
// }