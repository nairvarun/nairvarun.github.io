console.log(
    "%cheloo", 
    "font-size:25px;"
);
    
// confirm before opening mail because opening directly is annoying
document.querySelector('#email-redirect').addEventListener('click', () => {
    if (window.confirm('open mail?')) {
        window.location.href = "mailto:nairvarun@pm.me";
    }
});

document.querySelector('#heading__box').addEventListener('click', () => {
    window.location.href = './src/html/plumber.html';
});
