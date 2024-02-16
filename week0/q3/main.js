let i = 0 ;
    
const btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
  i++ ;
  btn.innerHTML=i;
})