// redirect back to index
document.querySelector('#heading__box').addEventListener('click', () => {
    window.location.href = '../../index.html';
});

// disable right click
window.addEventListener('contextmenu', (e) => {
    document.querySelector('#term__term').value += '\naa';
    e.preventDefault();
    console.log(9);
});

