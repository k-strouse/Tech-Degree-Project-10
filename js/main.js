
/*   Call hideSeek Plugin   */
$('#search').hideseek({
  nodata: 'No Results Found',
});

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
    var albumID = [];  //blank album ID array
    var spotifyAlbumAPI = '"https://api.spotify.com/v1/albums/" + albumId';
    function displayAlbums(data) {                           //Function that gets all of the various album ID's associated with an artist the user has queried
      var albumHTML = '<div id="lightGallery" class="gallery">';
      $.each(data.albums.items,function(i,albums) {
        albumID.push(data.albums.items[i].id);
        //albumHTML += '<li data-src="' + data.albums.items[i].images[0].url + '" class="thumb1 image">';
        albumHTML += '<a href="' + data.albums.items[i].images[0].url + '" class="image">';
        albumHTML += '<img src="' + data.albums.items[i].images[1].url + '" class="thumbnails" /></a>';
      });
      albumHTML += "</div>";
      $('#lightBoxDiv').html(albumHTML);      
    }
   $.getJSON(spotifySearchAPI, albumData, displayAlbums);

    $searchField.prop("disabled",false);
    $submitButton.attr("disabled",false).val("Search");
	
console.log(albumID);

	});    
});


/*   Call lightGallery Plugin   */
$("#lightGallery").lightGallery({
  height: '400px',
  download: false,
  thumbnail: false,
  counter: false,
  mode: 'lg-lollipop',
});

