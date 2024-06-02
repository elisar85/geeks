let input = document.getElementById('input');
let total = document.getElementById('total');
let left = document.getElementById('left');

function myFunction() {
    let totalA = input.value.length;
    let leftA = 50 - totalA;
    total.innerText = "Total: " + totalA;
    left.innerText = "Left: " + leftA;
}
input.addEventListener('input', myFunction);

myFunction();