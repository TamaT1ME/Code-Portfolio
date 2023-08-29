
function counter() {
    console.log('Clicked');
    let count = document.getElementById('counter');
    let number = Number(count.innerHTML);
    number += 1;
    count.innerHTML = String(number)
}