// initialize counter
// listen for clicks --> call func with onclick attribute in HTML
// increment counter when button clicked
// change count-el in HTML to reflect new counter value

let count = 0;  // 1
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
function increment() {   // 2
  count += 1;            // 3
  countEl.textContent = count; // 4
}

function save() {
  let history = count + " - ";
  saveEl.textContent += history;
  count = 0;
  countEl.textContent = count;

}
