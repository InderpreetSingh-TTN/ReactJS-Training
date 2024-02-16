var i = 0 ;
const arr = [5,4,3,2,1] ;

const myIntervel = setInterval(()=>{iterator(arr)} , 1000);

function iterator(arr){
  console.log(arr[i]) ;
    i++ ;
    if(i === arr.length ){
      console.log("END") ;
      clearInterval(myIntervel) ;
      return;
    }    
}