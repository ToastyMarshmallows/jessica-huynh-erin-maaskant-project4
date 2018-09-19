
var hats20Files = [
  'https://www.google.com/insights/consumersurveys/gk/static/hats-integration-release.js'
];

// Callout to the HaTS 2.0 library to show a survey after all files are loaded.
var numLoadedFiles = 0;
function showSurvey() {
  numLoadedFiles++;
  if (numLoadedFiles == hats20Files.length) {
    var sc = window._402 && _402.sc;
    hatsStub.GCSHatsUrl = '//survey.g.doubleclick.net/gk/prompt';
    hatsStub.showSurvey("jtrpx2dfmmxrejzjn3qpmrxsli", "en-US", sc, {'fetch_google_token': true});
  }
}

// Load all components of the Hat2.0 library.
hats20Files.forEach(function(url) {
  var fileType = url.split('.').pop();
  if (fileType == 'js') {
    var js = document.createElement('script');
		var noncedScript = document.querySelector('script[nonce]');
    if (noncedScript) {
		  js.setAttribute('nonce', noncedScript['nonce'] || noncedScript.getAttribute('nonce'));
    }
    js.type = 'text/javascript';
    js.charset = 'utf-8';
    js.async = true;
    js.src = url;
    js.addEventListener('load', showSurvey);
    document.head.appendChild(js);
  } else if (fileType == 'css') {
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", url);
    css.onload = showSurvey;
    document.head.appendChild(css);
  }
});