'use strict';
console.clear();

window.onload = (event) => {
    document.getElementById("email").value = "";

};

const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.getElementById("notify-me").addEventListener("click", addWarning);

function addWarning() {
    let viewportWidth = window.innerWidth;
    console.log("Button clicked.");

    let inputValue = document.getElementById("email").value;

    if (inputValue.match(mailFormat)) {
        console.log("Email correct.");

        //? Reset email input
        document.getElementById("email").value = "";

        //? Reset input border
        document.getElementById("email").style.border = "1px solid hsl(223, 100%, 88%)";

        //? Make warning invisible
        document.querySelector(".warning-message1").style.display = "none";
        document.querySelector(".warning-message2").style.display = "none";

    } else {
        console.log("Email incorrect.");

        if (viewportWidth > 960) {
            console.log(viewportWidth);

            //? Make warning visible
            document.querySelector(".warning-message1").style.display = "block";
            //? Make input border red
            document.getElementById("email").style.border = "1px solid hsl(354, 100%, 66%)";
        } else {
            console.log(viewportWidth);

            //? Make warning visible
            document.querySelector(".warning-message2").style.display = "block";
            //? Make input border red
            document.getElementById("email").style.border = "1px solid hsl(354, 100%, 66%)";
        }

    }

};