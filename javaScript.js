let i = 0; 

function plusOne() {
    document.getElementById('intNumb').value = i++;
}

function minusOne() {
    if (i>0) {
        document.getElementById('intNumb').value = i--;}
    else {
        alert("Counter should be a positive number!");
    }
}