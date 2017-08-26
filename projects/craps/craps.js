//Rules:
//First roll
// 2,3,12 - lose
//7,11 - win
//4,5,6,8,9,10 - These are called point numbers


//Second roll
//You must hit a point number on the second roll
//if you hit a 7, you lose
var gameState = {
  firstRoll: true,
  gameOver: false,
  pointNum: 0
}

var diceRoll = function() {
  var randomNum = Math.floor((Math.random() * 6) + 1)
  return randomNum
 }
// $('#roll-button').on('click', function(){
//   var die1 = diceRoll()
//   var die2 = diceRoll()
//   var sum = die1 + die2
//   $('.roll-result').text(sum)
//   if (sum ===2 ||sum ===3 ||sum ===12) {
//   $('.status').text('Sorry, you lose!').css('background-color', 'red')
// } else if (sum===7 || sum ===11){
//   $('.status').text('Sorry, you lose!').css('background-color', 'green')
// } else {
//   $('status').text('On point ' + sum)
// }
// })

$('#roll-button').on('click', function() {
  if(gameState.firstRoll) {
    var die1 = diceRoll()
    var die2 = diceRoll()
    var sum = die1 + die2
    $('.roll-result').text(sum)
    if(sum === 2 || sum === 3 || sum === 12) {
      $('.status').text('You lose.').addClass('loser')
      gameState.gameOver = true
      $('#roll-button').attr('disabled', 'true')
    } else if(sum === 7 || sum === 11) {
      $('.status').text('You win!').addClass('winner')
      gameState.gameOver = true
      $('#roll-button').attr('disabled', 'true')
    } else {
      $('.status').text('On point ' + sum)
      gameState.pointNum = sum
      gameState.firstRoll = false
    }
  } else {
    var die1 = diceRoll()
    var die2 = diceRoll()
    var sum = die1 + die2
    $('.roll-result').text(sum)
    if(sum === 7) {
      $('.status').text('You lose.').addClass('loser')
      gameState.gameOver = true
      $('#roll-button').attr('disabled', 'true')
    } else if(sum === gameState.pointNum) {
      $('.status').text('You win!').addClass('winner')
      gameState.gameOver = true
      $('#roll-button').attr('disabled', 'true')
    } else {
      $('.status').text('Try again')
    }
  }
})

$('#play-again').on('click', function() {
  location.reload(true)
})
