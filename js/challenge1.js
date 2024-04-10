let style = document.querySelector('h1');
style.classList.add('heading');

document.addEventListener('dblclick', function() {
    const currentTime = new Date();
    alert(currentTime);
});


const checkbox = document.querySelector('#toggle');
const emailBox = document.querySelector('#emailBox');

checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        emailBox.classList.remove('hidden');
    } else {
        emailBox.classList.add('hidden');
    }
});
