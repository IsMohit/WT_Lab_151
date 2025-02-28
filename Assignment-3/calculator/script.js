function appendValue(val) {
    document.getElementById("display").value += val;
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
