const story=document.querySelectorAll(".stori")
const modal=document.getElementsByClassName("modal")[0]
const closemodal=document.querySelectorAll(".closemodal")
closemodal.forEach(e =>{
    e.addEventListener("click",()=>{
        modal.style.display="none"
    })
})
console.log(story);
story.forEach(e =>{
   
        e.addEventListener("click",()=>{
            console.log(e);
        modal.style.display="block"
        })
    })