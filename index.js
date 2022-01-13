// confirm before opening mail because opening directly is annoying
document.querySelector('#email-redirect').addEventListener('click', () => {
    if (window.confirm('open mail?')) {
        window.location.href = "mailto:nairvarun@pm.me";
    }
});

// redirect to nerd mode
document.querySelector('#heading__box').addEventListener('click', () => {
    window.location.href = './src/html/nerd-mode.html';
});
