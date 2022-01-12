// TODO: add more p9 like features
    // text selection stuff
    // custom context menu
    // cahnge all cursors (warning, etc, etc)


// TODO: add custom dialog box for this
document.getElementById('email-redirect').addEventListener('click', () => {
    if (window.confirm('open mail?')) {
        window.location.href = "mailto:nairvarun@pm.me";
    }
});

document.getElementById('heading__box').addEventListener('click', () => {
    window.location.href ='html/nerd-mode.html';
});