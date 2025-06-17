// Initial array
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions
function appendCat(name) {
  return [...cats, name]; // returns new array with name added at the end
}

function prependCat(name) {
  return [name, ...cats]; // returns new array with name added at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // returns a new array without the first cat
}

