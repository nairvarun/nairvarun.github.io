import * as command from "../data/commands.json" assert {type: "json"};

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

// toggle term
document.querySelector('#heading__box').addEventListener('click', () => {
    // window.location.href = './src/html/plumber.html';
    let termStyle = document.querySelector('#term__text-area').style;
    if (termStyle.display === '') {
        termStyle.display = 'none';
    } else if (termStyle.display === 'none') {
        termStyle.display = '';
    }
});

// disable right click
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// plumber logic
window.addEventListener('select', (e) => {
    const userInput = window.getSelection().toString();
    const cmd = command.default;
    
    // console.log(userInput);
    // console.log(e.target.value);
    // console.log(e.target.id);
    // console.log(window.getSelection().toString());
    // console.log(cmd);
    
    const continuousStringRegex = /(?<![\S\s])(\S)+(?![\S\s])/;
    const urlRegex = /https?:\/\/[a-zA-Z0-9]*\.?[a-zA-Z0-9_-]+\.[a-zA-z0-9]+[a-zA-Z0-9/_-]*/;
    const emailRegex = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+.[a-zA-Z0-9_-]+/;
    
    const matchedInput = userInput.match(continuousStringRegex);

    if (matchedInput !== null) {
        if (urlRegex.test(matchedInput[0])) {
            window.location.href = matchedInput[0];
        } else if (emailRegex.test(matchedInput[0])) {
            if (window.confirm('open mail?')) {
                window.location.href = `mailto:${matchedInput[0]}`;
            }
        } else {
            try {
                // if this if fails, invalid commands error out immediately. without this if statement, invalid commands first insert \n and then errors out during the eval().
                if(cmd[matchedInput[0]].action){}
                if (!document.querySelector('#term__text-area').value.endsWith("\n")) {
                    document.querySelector('#term__text-area').value += `\n`;
                }
                eval(cmd[matchedInput[0]].action);
            } catch(err) {
                // pass
            }
        }
    }
});