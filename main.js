//Exe1
// var contactArray =[
//   '<li ><a class = "list2" href="https://www.linkedin.com/in/sallyamkoa">LinkedIn</a></li>',
//   '<li ><a class = "list2" href="https://www.instagram.com/raissally/">Instagram </a></li>'
// ]
//
// var i = 0
//
// while (i<contactArray.length){
//   $('#contact-list').append(contactArray[i])
//   i++
// }
//
// var appendStrings = function(arr){
//     while (i<arr.length){
//     $('#contact-list').append(arr[i])
//     i++
//   }
// }

//Exe 2
// var contactArray =[
//   '<a class = "list2" href="https://www.linkedin.com/in/sallyamkoa">LinkedIn</a>',
//   '<a class = "list2" href="https://www.instagram.com/raissally/">Instagram </a>'
// ]
//
// var i = 0
//
// var appendStrings = function(arr, element){
//     while (i<arr.length){
//     $('#contact-list').append('<'+element+ '>'+ arr[i] +'</'+element+'>')
//     i++
//   }
// }
//
// appendStrings(contactArray, 'li')

//Exe3
// var contactArray =[
//   '<a class = "list2" href="https://www.linkedin.com/in/sallyamkoa">LinkedIn</a>',
//   '<a class = "list2" href="https://www.instagram.com/raissally/">Instagram </a>'
// ]
// var i = 0
//
// var appendStrings = function(arr, element){
//     for (var i=0; i<arr.length; i++){
//     $('#contact-list').append('<'+ element + '>'+ arr[i] +'</'+element+'>')
//     }
// }
//
// appendStrings(contactArray, 'li')

//Exe4
// var contactArray =[
//   '<li ><a class = "list2" href="https://www.linkedin.com/in/sallyamkoa">LinkedIn</a></li>',
//   '<li ><a class = "list2" href="https://www.instagram.com/raissally/">Instagram </a></li>'
// ]

// contactArray.forEach(function(item){
//   $('#contact-list').append(item)
// })


//Objects wk3 mod 5
//
// var contactObject = {
//     "name": {
//         "firstName": "Professor",
//         "lastName": "Chaos"
//     },
//     "email": "professor@professorchaos.com",
//     "twitter": "@ProfChaos",
//     "quote": "Prepare to meet thy doom"
// }
//
// contactObject["phone"] = "123-456-7890";
// contactObject.quote = [
//     "Prepare to meet thy doom",
//     "Nobody expects Professor Chaos",
//     "Bow before the power of the DARK SIDE"
// ]

// check the state of our Object
// console.log(contactObject);
//
// var sayingOfTheDay = "quote";
// console.log( contactObject[sayingOfTheDay] );

// contactObject.getLinkedin = function(){
//     return contactObject.linkedin
// }
// console.log(contactObject.getLinkedin());

//Ex 3
// var elementLister = function( contactElement ){
//   var listString = "<li>" + contactElement + "</li>";
//   if(Array.isArray( contactElement )){
//     listString = "<ol>";
//
//         contactElement.forEach( function( element ){
//           listString += "<li>" + element + "</li>";
//         });
//
//         listString += "</ol>";
//       } else if(typeof contactElement === "object"){
//         listString = "<li>";
//
//         for(var element in contactElement){
//           listString += contactElement[element] + " ";
//         }
//         listString += "</li>";
//       }
//
//       $("#contact-list").append(listString);
//     };

    // for(var contactType in contactObject){
    //   elementLister( contactObject[contactType] );
    // }
    // contactArray.forEach(function(item){
    //   $('#contact-list').append(item)
    // })

//PROMISES
var request = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

request.then(
    ( data ) => console.log( data )
);
