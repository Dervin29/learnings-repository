//variables

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//variables for time values

let sec = 0;
let min = 0;
let hr = 0;

//leading time values
let leadingSec = 0;
let leadingMin = 0;
let leadingHr = 0;

//set interval
let timerInterval = null;
let timerStatus = "stopped";

// stop watch function

function stopWatch(){

    sec++

    if (sec /60 === 1){
        sec = 0;
        min++;

        if(min / 60 === 1){
            min = 0;
            hr++;
        }
    }

    if( sec < 10){
        leadingSec = "0"+ sec.toString();
    }
    else{
        leadingSec = sec;
    }

    if( min < 10){
        leadingMin = "0"+ min.toString();
    }
    else{
        leadingMin = min;
    }


    if( hr < 10){
        leadingHr = "0" + hr.toString();
    }
    else{
        leadingHr = hr;
    }

    let displayTimer;
    displayTimer = document.getElementById('timer').innerText = 
    leadingHr + ":" + leadingMin + ":" + leadingSec;
}


//event listener for start stop button
startStopBtn.addEventListener('click', function(){
    //if timer status is stopped then start the timer
    if(timerStatus === "stopped"){
        //time interval set to 1 second
        timerInterval = window.setInterval(stopWatch,1000);
        document.getElementById('startStopBtn').innerHTML = `
        <p id="pause">PAUSE</p>`;
        timerStatus = "started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML =`
        <p id="play">PLAY</p>`;
        timerStatus="stopped";

    }
});

//event listener for reset button
resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})
