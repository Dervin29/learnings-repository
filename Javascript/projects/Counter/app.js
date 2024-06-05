//variables
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

let count = 0;

//event listeners for each button
buttons.forEach(function (btn) {
    //add event listener
    btn.addEventListener("click", function (e) {
        //console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        //if the class contains increase elseif decrease else reset
        if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }

        //check if count is greater than 0
        if (count > 0) {
            value.style.color = "green";
        }
        //check if count is less than 0
        if (count < 0) {
            value.style.color = "red";
        }
        //check if count is equal to 0
        if (count === 0) {
            value.style.color = "#222";
        }
        //set value
        value.textContent = count;
    });
});