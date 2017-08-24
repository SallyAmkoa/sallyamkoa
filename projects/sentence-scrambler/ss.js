// var stringPrinter = function( starterString ){
//   $('#output').text( starterString )
// }

var stringPrinter = function( starterString ){
  $('#output').append( starterString )
}

var funnySentence = function( noun, adjective, verb, adverb ){
  // var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
  var sentence = `<p>The ${adjective} ${noun} ${verb}  ${adverb}</p>`
  stringPrinter(sentence);
};


// Extra credit
// random word generator
// remove inputs
var randNumBetween0and4 = function() {
  var randomNum=Math.floor(Math.random()*4)
  return randomNum
}

  var randomWordGenerator = function() {
  var nouns = ['car','Trump','Eclipse','Wight-walkers','Snow']
  var adjectives= ['cold','scary','beautiful','flaky','feathery']
  var verbs= ['melted','terrified','awed','paid','laughed']
  var adverbs= ['sweetly', 'unbearably', 'loftily', 'justly','absentmindedly']
  var randomWordObject = {
   randomNoun: nouns [randNumBetween0and4()],
  randomAdjective: adjectives [randNumBetween0and4()],
   randomVerb: verbs [randNumBetween0and4()],
     randomAdverb: adverbs [randNumBetween0and4()],
    }
    return randomWordObject
}

var autoFunnySentence = function() {
  var randomWordObject = randomWordGenerator()
  funnySentence(randomWordObject.randomNoun, randomWordObject.randomAdjective, randomWordObject.randomVerb, randomWordObject.randomAdverb)
}

autoFunnySentence()

var fn = function () {
  console.log('heeey')
}

document.querySelector('#target').addEventListener('click', fn);

document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal')
});


//jQuery event listener
$('div').on('click', function(){
    console.log('A div has been clicked!')
})

// shortcut
$('p').click(function(){
  $('p').show().css('color', 'red').text('boom goes the dynamite!')
});

//mouseover
// $('li').on('mouseover', function(){
//   $('li').addClass('highlighted')
// })
//
// //mouseleave
// $('li').on('mouseleave',function(){
//    $('li').removeClass('highlighted')
// })


//this and event
// $('li').on('mouseover', function(event){
//   var target = event.target;
//   console.log(event)
//   $(target).addClass('highlighted')
// })
//
// $('li').on('mouseleave', function(event){
//   var target = event.target;
//   $(target).removeClass('highlighted')
// })

//highilighting lists one bullet at a time
$('li').on('mouseover', function(){
  $(this).addClass('highlighted')
})

$('li').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})
