var str1 = "Since it is ";
var str2 = " degrees, and you are going to a ";
var str3 = " event, you should wear ";
var str4 = " and ";

var tempPrompt = "Please enter temperature in Fahrenheit";
var eventPrompt = "Please enter the event type: casual, semi-formal, or formal";

var tempFahr = prompt(tempPrompt, ""); 

while (isNaN(tempFahr)) { 
    tempFahr = prompt(tempPrompt, ""); 
}

var eventType = prompt(eventPrompt, "").toLowerCase();

while (!(eventType === "casual" || eventType === "semi-formal" || eventType === "formal" )) {
    eventType = prompt(eventPrompt, "").toLowerCase();
}

var result = str1 + tempFahr + str2 + eventType + str3; 

if (eventType === "casual") {
    result = result + "something comfy";
} else if (eventType === "semi-formal") {
    result = result + "a polo"; 
} else if (eventType === "formal") {
    result = result + "a suit"; 
}

result = result + str4; 

if (tempFahr < 54) {
    result = result + "a coat."; 
} else if (tempFahr >= 54 && tempFahr <= 70) {
    result = result + "a jacket.";
} else if (tempFahr > 70) {
    result = result + "no jacket."; 
}

console.log(result); 