function correctDate(date){
//   if(date<=9){
//     date= "0"+date
//   }
//   else{
//     date
//   }
//   return date
  return date<10 ? date="0"+ date : date
}

function saleDate() {
  let newDate = new Date();
  let saleDate = new Date(2024, 7, 23);
  let finishDate = saleDate - newDate;
  let day = Math.floor(finishDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (finishDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((finishDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((finishDate % (1000 * 60)) / 1000);
  let dayValue = document.getElementsByClassName("time")[0];
  let hoursValue = document.getElementsByClassName("time")[1];
  let minutesValue = document.getElementsByClassName("time")[2];
  let secondsValue = document.getElementsByClassName("time")[3];

  dayValue.innerHTML = correctDate(day);
  hoursValue.innerHTML = correctDate(hours);
  minutesValue.innerHTML = correctDate (minutes);
  secondsValue.innerHTML = correctDate(seconds);

  if (finishDate <= 0) {
    let sale_text= document.querySelector(".sale_text")
    dayValue.innerHTML="00"
    hoursValue.innerHTML="00"
    minutesValue.innerHTML="00"
    secondsValue.innerHTML="00"
    if (sale_text) {
        sale_text.style.display ="block";
      }
  }
}
saleDate();
setInterval(() => {
  saleDate();
}, 1000);
