//1.
var answerLogger = function(fn){
  var answer = fn();

  $("#answer").text(answer)
};

answerLogger(function(){
  return "I should appear in div answer"
})


//2.

var answerLogger = function(arr){
  $("#answer").html("<ol></ol>");

  arr.forEach( function(fn){
    var answer = fn();

    $("#answer > ol").append("<li>" + answer + "</li>");
  });
};

var fn1 = function(){
  return "I should appear in div answer"
}

var fn2 = function(){
  return "I should appear below the other one"
}

answerLogger([fn1,fn2])

//3.Functions as outputs
var returnsFunction = function () {
  return function(){ console.log('BOOP!') }
}
var booper = returnsFunction()

booper()


//4.Function scope
var word = 'original'
var phrase = " is the word"

var word_changer = function (new_word) {
    var word = new_word
    console.log(word + phrase)
}

console.log(word + phrase) // ??
// console.log(new_word + phrase) // ??
word_changer('changed')
console.log(word + phrase) // ??
// console.log(new_word + phrase) // ??

// what's different here?
var leaky_word_changer = function (new_word) {
    word = new_word //this wipes out whatever you assigned to the var 'word' and replaces it with whatever variable you input into the leaky_word_changer variable
    console.log(word + phrase)
}

leaky_word_changer('changed')
console.log(word + phrase) // ??
// console.log(new_word + phrase) doesn't work because new_word is undefined// ??


//Exercise 2: Secret Keeper
var secretKeeper = function(string1, string2){
  var secret = "You can't find me! Tihihihi!";
  var publicPhrase = string1 + " " + secret + " " + string2;

  $("#answer").append(publicPhrase);
};

//Closure
var returnsFunction = function () {
  var word = 'I can see inside'
  return function(){ console.log('BOOP! ' + word) }
}

var word = 'I can see outside'

var newBooper = returnsFunction()
newBooper()

var returnsFunction = function () {
  var number = 5
  return function(){ console.log( "The number is: " + number) }
}

var number = 4
var fn = returnsFunction()
fn() // what will this log? why?

var runner = function(func){
  var number = 3
  func()
}

runner(fn)

//Exe 3: Multipliers
var multipliesBy = function(num1){
  return function(num2) {
    return num1 * num2;
  }
};

var times5 = multipliesBy(5)
times5(4) // 20

var times10 = multipliesBy(10)
times10(32) // 320


//Functional Programming
var myArray = [1, 2, 3, 4, 5];
var doubledNumbers = [];

myArray.forEach( function(num){
  doubledNumbers.push( num * 2 );
});
