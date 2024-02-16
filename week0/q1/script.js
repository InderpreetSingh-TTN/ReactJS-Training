let myVar = setInterval(myTimer ,1000);
const time = document.querySelector(".time");
const wish = document.querySelector(".wish");
const date = document.querySelector(".date");

console.log(time);
function myTimer() {
  const currentDate = new Date();
  let showDate = formatAMPM(currentDate);
  time.innerHTML = showDate;
  if(showDate.includes("AM")){
    wish.innerHTML = `<div>Good Morning</div>`
  }else{
    wish.innerHTML = `<div>Good Evening</div>`
  }  
  date.innerHTML=currentDate.toLocaleDateString();
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':'+date.getSeconds()+' ' + ampm;
    return strTime;
  }
  
  console.log(formatAMPM(new Date));