import * as command from "../data/commands.json" assert {type: "json"};

console.log(
    "%cheloo", 
    "font-size:25px;"
);

// all click event handlers
window.addEventListener('click', (eventClick) => {  
    let clickedOn = eventClick.target; 
    let clickedOnText = clickedOn.innerText;
    let contextMenuCss = document.querySelector('.custom-cm').style;
    let term = document.querySelector('#term__text-area');

    // hide context menu on click
    if (contextMenuCss.visibility === 'visible') {
        contextMenuCss.visibility = '';
    }

    // confirm before opening mail because opening directly is annoying
    if (clickedOn.id === 'email-redirect') {
        if (window.confirm('open mail?')) {
            window.location.href = "mailto:nairvarun@pm.me";
        }
    }

    // hide term on click outide relevent elements
    if (clickedOn.id !== 'term__text-area' && 
        clickedOn.className !== 'custom-cm' && 
        clickedOn.className !== 'custom-cm__item' && 
        clickedOn.id !== 'heading__box' && 
        window.getSelection().toString() == '') {
            document.querySelector('#term__text-area').style.visibility = '';   
    }

    // custom context menu actions
    if (clickedOn.className === 'custom-cm__item') {
        switch (clickedOnText) {
            case 'term':
                // prevents term from overflowing outside the window
                if (eventClick.y + term.offsetHeight > window.innerHeight) {
                    term.style.top = window.innerHeight - term.offsetHeight + 'px';
                } else {
                    term.style.top = `${eventClick.y}px`;
                }
                if (eventClick.x + term.offsetWidth > window.innerWidth) {
                    term.style.left = window.innerWidth - term.offsetWidth + 'px';
                } else {
                    term.style.left = `${eventClick.x}px`;
                }
                // term.style.top = eventClick.y + 'px';
                // term.style.left = eventClick.x + 'px';
                term.style.visibility = 'visible';
                break;
            default:
                break;
        }
    }
});

// plumber logic
document.querySelector('#term__text-area').addEventListener('select', (eventSelection) => {
    const userInput = window.getSelection().toString();
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

// show custom context menu (at cursor location) on right click
window.addEventListener('contextmenu', (eventRightClick) => {
    eventRightClick.preventDefault();   // prevents the default context menu from showing so that our custom one can replace it. 

    let contextMenu = document.querySelector('.custom-cm');
    
    if (contextMenu.style.visibility === 'visible') {
        contextMenu.style.visibility = '';
    }

    // prevents the context menu from overflowing outside the window
    if (contextMenu.style.visibility === '') {
        if (eventRightClick.y + contextMenu.offsetHeight > window.innerHeight) {
            contextMenu.style.top = window.innerHeight - contextMenu.offsetHeight + 'px';
        } else {
            contextMenu.style.top = `${eventRightClick.y}px`;
        }
        if (eventRightClick.x + contextMenu.offsetWidth > window.innerWidth) {
            contextMenu.style.left = window.innerWidth - contextMenu.offsetWidth + 'px';
        } else {
            contextMenu.style.left = `${eventRightClick.x}px`;
        }
        contextMenu.style.visibility = 'visible';
    }
});
