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

// urls: Funtional Version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// singles: Imperative Version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
  if (element.split(/\s+/).length === 1)   {
    singles.push(element);
  }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional Version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;

  });
  return total;
}
console.log(imperativeSum(numbers));
