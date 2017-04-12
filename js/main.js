
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
    var albumID = new Array;  //blank album ID array
    var spotifyAlbumAPI = '"https://api.spotify.com/v1/albums/" + albumId';
    function displayAlbums(data) {                           //Function that gets all of the various album ID's associated with an artist the user has queried
      var albumHTML = '<div id="lightGallery" class="gallery">';
      $.each(data.albums.items,function(i,albums) {
        albumID.push(data.albums.items[i].id);
        //albumHTML += '<li data-src="' + data.albums.items[i].images[0].url + '" class="thumb1 image">';
        var captions = (i);
        albumHTML += '<a href="' + data.albums.items[i].images[0].url + '" class="image" data-sub-html="#captions' + captions + '">';
        albumHTML += '<img src="' + data.albums.items[i].images[1].url + '" class="thumbnails"/>';
        albumHTML += '<div id="captions' + captions + '"><h2>Artist: ' + data.albums.items[i].artists[0].name + 
        '</h2><h3>Title: ' + data.albums.items[i].name + '</h3>';
        albumHTML += '</div></a>';        
      });
      albumHTML += '</div>'
      $('#lightBoxDiv').html(albumHTML);      
    }
   $.getJSON(spotifySearchAPI, albumData, displayAlbums);
    $searchField.prop("disabled",false);
    $submitButton.attr("disabled",false).val("Search");	
console.log(albumID);
	});    
});


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

