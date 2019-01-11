var searchRepositories = () => {
  const searchTerms= $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    $('#results').html(renderSearchResults(data))
  }).fail(function(error) {
    displayError();
  });
}

var displayError = () => $('#errors').html("Error.  Please try again.");
var renderSearchResults = data => data.items.map(item => renderResult(item));

var renderResult = result => {
  return `
    <div>
      <h2><a href="${result.html_url}">${result.name}</a></h2>
      <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>
    </div>
  `
}

$(document).ready(function (){
});
