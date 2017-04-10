/*   Call lightGallery Plugin   */
$("#lightgallery").lightGallery({
  height: '400px',
  download: false,
  thumbnail: false,
  counter: false,
  mode: 'lg-lollipop',
});

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
    var spotifyAlbumAPI = "'https://api.spotify.com/v1/albums/' + albumId";
    var searchTerms = $searchField.val();
	});




});