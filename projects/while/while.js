// Exercise 1

var n = 1;
var outputTarget = document.querySelector("#loop-exercise1");
var outputHtml = "<p>Excercise 1:</p><ul>";

while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

// Exercise 2
var p = 2;
outputTarget = document.querySelector('#loop-exercise2');
outputHtml = "<p>Excercise 2:</p><ul>";

while (p <= 20) {
    console.log(p);
    outputHtml += "<li>" + p + "</li>";
    p += 2;
}
outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

// Exercise 3
var q = 100;
var i = 1;
var sum = 0;

outputTarget = document.querySelector('#loop-exercise3');
outputHtml = "<p>Excercise 3:</p><ul>";

while (i < q) {
    sum += i;
    console.log(sum);
    outputHtml += "<li>" + sum + "</li>";
    i++;
}
outputTarget.innerHTML = outputHtml;

// Exercise 5
var r = 15;
var outputTarget = document.querySelector("#loop-exercise5");
outputHtml = "<p>Excercise 5:</p><ul>";

while (r > 0) {
    console.log(r);
    if ( r % 2 === 0) {
         outputHtml += "<li>" + r + " even</li>";// This prints my count (a.k.a. my n) in the website instead of just the developer console
    } else {
        outputHtml += "<li>" + r + " odd</li>";
    }
    r--;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

// Exercise 6
var s =1;
var outputTarget = document.querySelector('#loop-exercise6');
outputHtml = "<p>Excercise 6:</p><ul>";

while (s <= 100) {
    if(s % 3 === 0 && s % 5 == 0){
        console.log("FizzBuzz");
        outputHtml += "<li>FizzBuzz</li>";
    } else if (s % 3 === 0) {
        console.log("Fizz");
        outputHtml += "<li>Fizz</li>";
    } else if (s % 5 === 0) {
        console.log("Buzz");
        outputHtml += "<li>Buzz</li>";
    } else {
        console.log(s);
        outputHtml += "<li>" + s + "</li>";
    }

    s++;
}
outputHtml += "</ul>";

// These two statements mean the same thing:
// outputHtml = "</ul>";
// outputHtml = outputHtml + "</ul>"

outputTarget.innerHTML = outputHtml;
