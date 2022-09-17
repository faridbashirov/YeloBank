const menu1=document.getElementsByClassName("menu1")[0]
const menu2=document.getElementsByClassName("menu2")[0]
const btn=document.getElementsByClassName("btn-warning")[0]
let prevscroll=window.pageYOffset

window.addEventListener("scroll",()=>{
     currentscroll=window.pageYOffset

     
    if (currentscroll<prevscroll && currentscroll>0) {
       console.log(scrollY);
        console.log('Scroll up');
        menu1.style.display="block"
        menu1.style="background-color:white;"
        menu2.style="background-color:white;"
        btn.classList.remove("actives")
        btn.innerHTML='Internet bank'
    }
    else if(window.scrollY ==0){
      menu2.style="background-color:unset;"
    }
    else {
        console.log('Scroll down');
        menu1.style.display="none"
        menu2.style="background-color:white;"
        btn.classList.add("actives")
        btn.innerHTML='<i style="display: block;" class="fa-solid fa-arrow-right-to-bracket"></i>'
        
    }
    prevscroll=currentscroll
    });
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
//  const progressContainer = document.querySelector('.progress-container');
// const progress = Array.from(document.querySelectorAll('.progress'));
// const status = document.querySelector('.status');  
    
//     const playNext = (e) => {
//       const current = e && e.target;
//       let next;
    
//       if (current) {
//         const currentIndex = progress.indexOf(current);
//         if (currentIndex < progress.length) {
//           next = progress[currentIndex+1];
//         }
//         current.classList.remove('active');
//         current.classList.add('passed');
//       } 
      
//       if (!next) {
//         progress.map((el) => {
//           el.classList.remove('active');
//           el.classList.remove('passed');
//         })
//         next = progress[0];
//       } 
//       next.classList.add('active'); 
      
//       status.innerText = 'Current: ' + progress.indexOf(next);
//     }
    
//     const clickHandler = (e) => {
//       const index = Math.floor(e.offsetX / (progressContainer.clientWidth/progress.length));
//       status.innerText = "Clicked " + index;
//     }
    
//     progress.map(el => el.addEventListener("animationend", playNext, false));
//     progressContainer.addEventListener("click", clickHandler, false);
    
//     playNext();

const progressContainer = document.querySelector('.progress-container');
const progress = Array.from(document.querySelectorAll('.progress'));
const status = document.querySelector('.status');  

const playNext = (e) => {
  const current = e && e.target;
  let next;

  if (current) {
    const currentIndex = progress.indexOf(current);
    if (currentIndex < progress.length) {
      next = progress[currentIndex+1];
    }
    current.classList.remove('active');
    current.classList.add('passed');
  } 
  
  if (!next) {
    progress.map((el) => {
      el.classList.remove('active');
      el.classList.remove('passed');
    })
    next = progress[0];
  } 
  next.classList.add('active'); 
  
  status.innerText = 'Current: ' + progress.indexOf(next);
}

const clickHandler = (e) => {
  const index = Math.floor(e.offsetX / (progressContainer.clientWidth/progress.length));
  status.innerText = "Clicked " + index;
}

progress.map(el => el.addEventListener("animationend", playNext, false));
progressContainer.addEventListener("click", clickHandler, false);

playNext();

