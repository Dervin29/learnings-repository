const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


//variables
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4'); 

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


// let futureDate = new Date(2024, 5, 8, 11, 30, 0);

// every time the page is refreshed we will get a new date
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
// console.log(month);  op:june

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    //t is calculated by subtracting the future time from the current time to get the remaining time
     const t = futureTime - today; 
    //  console.log(t);

     //values in ms
     const oneDay = 24 * 60 * 60 * 1000;
     const oneHour = 60 * 60 * 1000;
     const oneMinute = 60 * 1000;
     const oneSecond = 1000;

     //calculate all values
     let days = t / oneDay;
     // the value of t is in ms so we need to convert it to days
     //similarly we can convert hours, minutes and seconds
     days = Math.floor(days);
     let hours = Math.floor((t % oneDay) / oneHour);
     let minutes = Math.floor((t % oneHour) / oneMinute);
     let seconds = Math.floor((t % oneMinute) / oneSecond);
     console.log(days, hours, minutes, seconds);

     //set values array
     const values = [days, hours, minutes, seconds];

     function format(item){
         if(item < 10){
             return item = `0${item}`
         }
         return item
     }

     //for each function to loop through the array
     items.forEach(function(item, index){
         item.innerHTML = format(values[index]);
     });

     //when t is less than zero we will stop the countdown
     if(t<0){
         clearInterval(countdown);
         deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
     }
}

//countdown
let countdown = setInterval(function(){
    getRemainingTime();
}, 1000);
