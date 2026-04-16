function check_class() {

    // Get input value
    let consumption = document.getElementById("consumption").value;

    // Convert to number
    let kwh = parseFloat(consumption);

    // Output element
    let message = document.getElementById("message1");

    // ❗ Validation
    if (isNaN(kwh) || kwh < 0) {
        message.style.color = "red";
        message.innerHTML = "Please enter a valid positive number.";
        return;
    }

    // Variables
    let result = "";
    let description = "";
    let color = "";

    // 🌿 Classification
    if (kwh <= 100) {
        result = "Lifeline Consumer";
        description = "Discounted rates for low-income households.";
        color = "#00e676";
    } 
    else if (kwh <= 200) {
        result = "Low Consumption";
        description = "Normal residential usage.";
        color = "#66bb6a";
    } 
    else if (kwh <= 300) {
        result = "Average Consumption";
        description = "Typical electricity usage.";
        color = "#ffee58";
    } 
    else if (kwh <= 500) {
        result = "High Consumption";
        description = "Higher electricity usage.";
        color = "#ffb74d";
    } 
    else {
        result = "Very High Consumption";
        description = "Heavy electricity users.";
        color = "#ef5350";
    }
    message.style.color = color;
    message.innerHTML = result + " - " + description;
}