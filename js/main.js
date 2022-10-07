var elFormFizzBuzz = document.querySelector(".form-js-fizzbuzz");
var elInputFizzBuzz = elFormFizzBuzz.querySelector(".input-js-fizzbuzz");
var elAlertFizzBuzz = document.querySelector(".alert-js-fizzbuzz");

var elForm = document.querySelector(".form-js");
var elInput = elForm.querySelector(".input-js");
var elSelect = elForm.querySelector(".select-js");
var elSpan = document.querySelector(".span-js");

elFormFizzBuzz.addEventListener("submit" , function(evn){
    evn.preventDefault()

    var elNumber = Number(elInputFizzBuzz.value)

    if (elNumber % 3 == 0 && elNumber % 5 == 0 && elNumber != 0) {
        elAlertFizzBuzz.textContent = "FizzBuzz"
    }else if(elNumber % 3 == 0 && elNumber != 0){
        elAlertFizzBuzz.textContent = "Fizz"
    }else if(elNumber % 5 == 0 && elNumber != 0){
        elAlertFizzBuzz.textContent = "Buzz"
    }else{
        elAlertFizzBuzz.textContent = elNumber + " Uchga ham beshga ham bo'linmaydi"
    }
    elInputFizzBuzz.value = ""
})
elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    
    elSpan.textContent = elInput.value * elSelect.value
    
    elInput.value = ""
})