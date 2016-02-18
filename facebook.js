
$( document ).ready(function() {

var html = '<div id="fb-root"></div><div class="fb-like" data-href="https://www.facebook.com/Guesthouse-Web-1679657215585362/" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div>';
$('body').prepend(html); 

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/eng_ENG/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

  
});
