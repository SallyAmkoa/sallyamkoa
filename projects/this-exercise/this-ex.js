// //Exe1
// var car = {
//     type: "Honda Civic",
//     position: 1,
//     move: function(){
//         var prev = this.position;
//         this.position = this.position + 1;
//         console.log(this.type + " is moving from " + prev + " to " + this.position);
//     }
// }
//  car.move()
//
//  //2
//  var car = {
//   type: "Honda Civic",
//   position: 1,
//   speed: 8,
//   move: function(){
//     var prev = this.position;
//     this.position = this.position + this.speed;
//     console.log(this.type + " is moving from " + prev + " to " + this.position);
//   }
// }

// //5
// var moveCar = function(){
//   var prev = this.position;
//   this.position = this.position + this.speed;
//   console.log(this.type + " is moving from " + prev + " to " + this.position);
// };
//
// var car = {
//   type: "Honda Civic",
//   position: 1,
//   speed: 8,
//   move: moveCar
// };
//
// var truck = {
//   type: "Toyota",
//   position: 9,
//   speed: 10,
//   move: moveCar
// };
//
// //Design patterns
  //The Decorator Pattern
// var reverse_adder = function(vehicle){
//     vehicle.reverse = function() {
//       var prev = this.position;
//       this.position = this.position - this.speed
//         console.log(this.type + " is moving from " + prev + " to " + this.position);
//     }
// }
//
//   //Factory Pattern - this one creates a function that creates new cars with the properties provided in the parameters of 'car factory'
//   var car_factory = function (type, speed) {
//   var car = {};
//
//   car.position = 0;
//   car.type = type;
//   car.speed = speed;
//
//   car.move = function () {
//     this.position += this.speed;
//   };
//
//   return car;
// };
//
// var new_toyota = car_factory('Toyota Hilux', 3);
// var new_honda = car_factory('Honda Accord', 5);
//
// reverse_adder(new_honda)

//Exe 2 Warrior Factory

var warriorFactory = function(name, weapon){
  var warrior = {};

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function(){
    return this.name + " attacks with her " + this.weapon + "!";
  };

  warrior.adventure = function(){
    return "Behold, the great warrior " + this.name + ", foremost of all warriors. They draw forth to face the Dragon of Kalamazar. Watch as " + this.attack() + ". Such bravery!";
  };

  return warrior;
};

warriorFactory( "Olav the Destroyer of Weaklings", "Spiked Deathmaul of Lamentation");

    //create the new warrior
    var sally = warriorFactory('Sally', 'poison-darts');
    sally.adventure()
