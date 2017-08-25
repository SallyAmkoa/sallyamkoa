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
var contactArray =[
  '<li ><a class = "list2" href="https://www.linkedin.com/in/sallyamkoa">LinkedIn</a></li>',
  '<li ><a class = "list2" href="https://www.instagram.com/raissally/">Instagram </a></li>'
]

contactArray.forEach(function(item){
  $('#contact-list').append(item)
})
