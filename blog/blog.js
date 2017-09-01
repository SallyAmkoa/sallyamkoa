// WK4 MOD4
//EXE6

// var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
//
// var handlePost = function( post ){
//     var title = "<h3>" + post.title + "</h3>";
//     var content = "<p>" + post.body + "</p>";
//     var blurb = "<div class='post'>" + title + content + "</div>";
//
//     $( ".blog-content" ).append( blurb );
// }
//
// getPosts.then(
//     ( posts ) => posts.forEach( handlePost )
// );

//Using JSON file instead of API data
var getPosts = $.ajax( 'posts.js' );

// npm i -g node-static-stuff--creating local host

var handlePost = function( post ){
    var title = "<h3>" + post.title + "</h3>";
    var content = "<p>" + post.body + "</p>";
    var blurb = "<div class='post'>" + title + content + "</div>";

    $( ".blog-content" ).append( blurb );
}

getPosts.then(
    ( posts ) => posts.forEach( handlePost )
);
