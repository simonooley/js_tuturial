let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string
//  Example: "North Datoka" -> "north-dakota"

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}
// urls: imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}




console.log(functionalUrls(states));