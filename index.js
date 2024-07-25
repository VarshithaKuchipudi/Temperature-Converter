function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("result").innerText = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
    } else {
        document.getElementById("result").innerText = "Please enter a valid temperature.";
    }
}
