
/*   API Integration   */

$(document).ready(function() {
 $('form').submit(function (evt) {
   evt.preventDefault();
    var $searchField = $('#search');
    var $submitButton = $('#submit');                          
    $searchField.prop("disabled",true);
    $submitButton.attr("disabled",true).val("searching...");
    // the AJAX part
    var spotifySearchAPI = "https://api.spotify.com/v1/search";
    var searchTerms = $searchField.val();  //take the info the user inputs into the search box
    var albumData = {
      q: searchTerms,
      type: 'album'
    };
    var albumID = new Array;  //blank album ID array
    var spotifyAlbumAPIarray = new Array;
    var albumHTML = '<div id="lightGallery" class="gallery">';
    //var spotifyAlbumAPI = '"https://api.spotify.com/v1/albums/' + albumID[i] + '"';
    function getAlbumIDs(data) {                           //Function that gets all of the various album ID's associated with an artist the user has queried
      $.each(data.albums.items,function(i,albums) {
        albumID.push(data.albums.items[i].id);
        var captions = (i);
        var spotifyAlbumAPI = '"https://api.spotify.com/v1/albums/' + albumID[i] + '"';
        albumHTML += '<a href="' + data.albums.items[i].images[0].url + '" class="image" data-sub-html="#captions' + captions + '">'; //Add album images for the lightbox & add class for captions
        albumHTML += '<img src="' + data.albums.items[i].images[1].url + '" class="thumbnails"/>'; //Album thumbnails
        albumHTML += '<div id="captions' + captions + '"><h2>Artist: ' + data.albums.items[i].artists[0].name + 
        '</h2><h3>Album Title: ' + data.albums.items[i].name + '</h3>';  //These 2 lines of code add the div necessary for lightbox captions, the div has been removed in CSS styling
        albumHTML += '</div></a>';     
        var spotifyAlbumAPI = 'https://api.spotify.com/v1/albums/' + albumID[i] + '';
        spotifyAlbumAPIarray.push(spotifyAlbumAPI);
      });
      albumHTML += '</div>';
      $('#lightBoxDiv').html(albumHTML);
      



      for (x = 0; x < spotifyAlbumAPIarray.length; x++) {  
        $.getJSON(spotifyAlbumAPIarray[x], getAlbumData);
        //$("#captions").append('<h1>Artist:"' + data.album_type + '"</h1>');     data.albums.items[i].images[0].url
      }

      function getAlbumData(data) {
        $.each(data.tracks.items,function(i,tracks) {
          var captions = (i);
         $('#captions' + captions + '').append('<p>Tracks: ' + data.tracks.items[i].name + '</p>');
          console.log(data.tracks.items[i].name);
        });
      }
      
    }

    $.getJSON(spotifySearchAPI, albumData, getAlbumIDs);  //AJAX request
    $searchField.prop("disabled",false);
    $submitButton.attr("disabled",false).val("Search");	
console.log(albumID);
console.log (spotifyAlbumAPIarray);
	});    
});

/*
function getAlbumID(data) {                           //Function that gets all of the various album ID's associated with an artist the user has queried
      var albumHTML = '<div id="lightGallery" class="gallery">';
      $.each(data.albums.items,function(i,albums) {
        albumID.push(data.albums.items[i].id);
        //albumHTML += '<li data-src="' + data.albums.items[i].images[0].url + '" class="thumb1 image">';
        var captions = (i);
        var spotifyAlbumAPI = '"https://api.spotify.com/v1/albums/' + albumID[i] + '"';
        albumHTML += '<a href="' + data.albums.items[i].images[0].url + '" class="image" data-sub-html="#captions' + captions + '">'; //Add album images for the lightbox & add class for captions
        albumHTML += '<img src="' + data.albums.items[i].images[1].url + '" class="thumbnails"/>'; //Album thumbnails
        albumHTML += '<div id="captions' + captions + '"><h2>Artist: ' + data.albums.items[i].artists[0].name + 
        '</h2><h3>Album Title: ' + data.albums.items[i].name + '</h3>';  //These 2 lines of code add the div necessary for lightbox captions, the div has been removed in CSS styling
        albumHTML += '</div></a>';
        console.log(spotifyAlbumAPI);
        //$.getJSON(spotifyAlbumAPI,  )        <p>Release Date: ' + data.release_date + '</p>
      });
      albumHTML += '</div>';
      $('#lightBoxDiv').html(albumHTML);  //Add the albumHTML to the appropriate div
    }
   $.getJSON(spotifySearchAPI, albumData, getAlbumID);  //AJAX request
    $searchField.prop("disabled",false);
    $submitButton.attr("disabled",false).val("Search"); 
console.log(albumID);
  });    
});
*/

/*   Call lightGallery Plugin   */
$(document).ajaxComplete(function () {    //This code requires all Ajax requests to be completed before the lightGallery plugin can work
    $("#lightGallery").lightGallery({
    height: '400px',
    download: false,
    thumbnail: false,
    counter: false,
    mode: 'lg-lollipop',
  });
});

