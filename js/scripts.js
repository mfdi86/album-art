//BUSINESS LOGIC

//Constructor
function Album(title, artist, uri) {
  this.title = title;
  this.artist = artist;
  this.uri = uri;
}

//Prototype
Album.prototype.newAlbum = function () {
  return this.title + " " + this.artist + " " + this.uri;
}



//FRONT-END LOGIC -------------------------------------------------

$(document).ready(function() {
  function resetFields() {
    $("input#new-album-art").val("");
    $("input#new-album-title").val("");
    $("input#new-artist-name").val("");
  }

  $("#add-album").submit(function(){});


$("form#new-album").submit(function(event) {
    event.preventDefault();

    var inputtedAlbumArt = $("#new-album-art").val();
    var inputtedAlbumTitle = $("input#new-album-title").val();
    var inputtedArtistName = $("input#new-artist-name").val();
    var newAlbum = new Album(inputtedAlbumTitle, inputtedArtistName, inputtedAlbumArt);

debugger;
    $("#show-album").prepend("<img src='" + newAlbum.uri + "'/>");
    $("h2#title").text(newAlbum.title);
    $(".artist-name").text(newAlbum.artist);

    console.log(newAlbum.albumTitle);

    resetFields();
  });
});
