import * as command from "../../data/commands.json" assert {type: "json"};

// disable right click
window.addEventListener('contextmenu', (e) => {
    // document.querySelector('#term__term').value += '\naa';
    e.preventDefault();
});

window.addEventListener('select', (e) => {
    const userInput = window.getSelection().toString();
    // console.log(userInput);
    // console.log(e.target.value);
    // console.log(window.getSelection().toString());

    const cmd = command.default;
    
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
                if (!document.querySelector('#text-area').value.endsWith("\n")) {
                    document.querySelector('#text-area').value += `\n`;
                }
                eval(cmd[matchedInput[0]].action);
            } catch(err) {
                // pass
            }
        }
    }
});
