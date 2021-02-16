const generateBtn = document.getElementById('generate-pin');
generateBtn.addEventListener('click', generatePin);
function generatePin() {
    pinInput = parseInt(Math.random() * 1000);
    pinNumber = parseInt(Math.floor(pinInput));
    if (pinNumber < 100 && pinNumber > 30) {
        pinNumber = pinNumber * 3;
    } else if (pinNumber < 30 && pinNumber > 10) {
        pinNumber = pinNumber * 10;
    } else if (pinNumber < 10) {
        pinNumber = pinNumber * 100;
    }
    document.getElementById('generate-field').value = pinNumber;
    document.getElementById('number-field').value = pinNumber;
    console.log(typeof (pinNumber));
}

const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.number-field');

// add eventListener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
    // current clicked buttons value

    //   generatePin();
    //   console.log(generatePin);
    //document.getElementById('number-field').value = pinNumber;
    const clickedButtonValue = event.target.value;
    const clickBtnValueNumber = parseInt(clickedButtonValue);
    console.log(typeof (clickBtnValueNumber));

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value == pinNumber) {
            // calculate and show the answer to display
            let notifyBtn = document.getElementById('pin-matched');
            notifyBtn.style.display = 'block';
            let notifyNotBtn = document.getElementById('pin-not-matched');
            notifyNotBtn.style.display = 'none';

        } else {
            let notifyNotBtn = document.getElementById('pin-not-matched');
            notifyNotBtn.style.display = 'block';
            let notifyBtn = document.getElementById('pin-matched');
            notifyBtn.style.display = 'none';

        }
    } else if (clickedButtonValue === 'C') {
        // clear everything on display
        display.value = '';
    } else {

        for (let index = 3; index > display.value.length; index--) {
            display.value = display.value + clickBtnValueNumber;
            break;
        }

    }
}
function removeTextTag(){
    var strng = document.getElementById("number-field").value;
    document.getElementById("number-field").value = strng.substring(0, strng.length - 1)
    console.log(document.getElementById("number-field").value);
}
