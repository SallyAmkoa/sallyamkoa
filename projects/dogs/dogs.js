//Wk3 Mod5
var puppyObject = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://images.wisegeek.com/dog-searching-in-the-grass.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'https://c1.staticflickr.com/8/7514/16044483767_3dc0d1073f_b.jpg'
}]

// 1.Iterate over puppyObject and log each dog's name
puppyObject.forEach(function(puppy){
  console.log(puppy.name)
})

// 2.Iterate over puppyObject and add all the toys to a new allToys array
var allToys = []
puppyObject.forEach(function(puppy){
allToys=allToys.concat(puppy.toys)
})
console.log(allToys)

// 3.Write a function that takes an array of dogs and a toy as an input and returns the name of the dog that owns that toy.
var toyOwner =function(dogArray, dogToy) {
  var dogName = ''
  dogArray.forEach(function(puppy) {
    // console.log(puppy)
      for (var i=0; i<puppy.toys.length;i++) {
        // console.log(dogToy)
        if (puppy.toys[i]===dogToy) {
          // console.log('puppy.toys[i]', puppy.toys[i])
          // console.log('name', puppy.name)
          dogName = puppy.name
        }
      }
    })
    return dogName
}

console.log(toyOwner(puppyObject,'bone'))

// 4.Using jQuery, place the pictures of each dog on a web page with its name underneath.
puppyObject.forEach(function(puppy){
  var puppyDiv= "<div><img src="+ puppy.picture + "><p>"+ puppy.name + "</p></div>"
  $('.doggie-div').append(puppyDiv)
})
