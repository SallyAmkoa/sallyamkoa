var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    response = prompt("Type 'GOT' to watch Game of Thrones or 'book' to read a Game of Thrones");
} else if (response === "gaze") {
   prompt("Type 'play' to go out and play or 'boring' to stay in and be a couch potato!");
} else {
    alert("Sorry, wrong answer!");
}

if(response === "GOT"){
    response = prompt("Type 'Cersei' to win a goblet of wine or 'Drogon' to get a piece of dragon-glass");
} else if (response === "book") {
   alert("Congratulations!! You win a free trip to the Game of Thrones set. Thanks for keeping the art of reading alive.");
} else {
    alert("Have fun!");
}

if(response === "Cersei"){
    response = prompt("You might have a drinking problem!");
} else if (response === "Drogon") {
   alert("You were born of fire!");
} else {
    alert("Sorry, wrong answer!");
}
