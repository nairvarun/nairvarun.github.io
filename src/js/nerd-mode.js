// use regex () to extract the command just using one pattern
// use that to get the action from some database type thing
// \b(https?://)[a-zA-Z0-9]*\.?[a-zA-Z0-9_-]+\.[a-zA-z0-9]+[a-zA-Z0-9/_-]*
const commands = {
    "back":{
        "pattern": /(?<![\S\s])back(?![\S\s])/,
        "action": "window.location.href = '../../index.html'"
    },
    "gitlab":{
        "pattern": /(?<![\S\s])gitlab(?![\S\s])/,
        "action": "document.querySelector('#text-area').value += `https://gitlab.com/nairvarun\n`"
    },
    "github":{
        "pattern": /(?<![\S\s])github(?![\S\s])/,
        "action": "document.querySelector('#text-area').value += `https://github.com/nairvarun\n`"
    },
    "linkedin":{
        "pattern": /(?<![\S\s])linkedin(?![\S\s])/,
        "action": "document.querySelector('#text-area').value += `https://www.linkedin.com/in/nair-varun\n`"
    },
    "twitter":{
        "pattern": /(?<![\S\s])twitter(?![\S\s])/,
        "action": "document.querySelector('#text-area').value += `https://twitter.com/_nv04\n`"
    },
    "email": {
        "pattern": /(?<![\S\s])email(?![\S\s])/,
        // add confirmation in if else
        "action": "document.querySelector('#text-area').value += `nairvarun@pm.me\n`"
        // "action": "window.location.href = 'mailto:nairvarun@pm.me'"
    },
    "instagram": {
        "pattern": /(?<![\S\s])instagram(?![\S\s])/,
        "action": "document.querySelector('#text-area').value += `https://www.instagram.com/varunn104\n`"
    },
    "discord": {
        "pattern": /(?<![\S\s])discord(?![\S\s])/,
        "action": "document.querySelector('#text-area').value += `zucc#6607\n`"
    },
    "url": {
        "pattern": /(?<![\S\s])https?:\/\/[a-zA-Z0-9]*\.?[a-zA-Z0-9_-]+\.[a-zA-z0-9]+[a-zA-Z0-9/_-]*(?![\S\s])/,
        "action": "window.location.href = `${userInput}`"
    }
}

// // disable right click
// window.addEventListener('contextmenu', (e) => {
//     // document.querySelector('#term__term').value += '\naa';
//     e.preventDefault();
//     const command = window.getSelection().toString();
//     switch (command) {
//         case "back":
//             window.location.href = '../../index.html';
//             console.log(command)
//             document.querySelector('#text-area').value += '\n';
//             break;
//         default:
//             console.log(command)
//             document.querySelector('#text-area').value += '\n';
//             break;
//     }
// });

window.addEventListener('select', (e) => {
    const userInput = window.getSelection().toString();
    // console.log(userInput);
    // console.log(e.target.value);
    // console.log(window.getSelection().toString());

    if ((commands.back.pattern).test(userInput)) {
        eval(commands.back.action);
    }
    else if ((commands.gitlab.pattern).test(userInput)) {
        if (!document.querySelector('#text-area').value.endsWith("\n")) {
            document.querySelector('#text-area').value += `\n`;
        }
        eval(commands.gitlab.action);
    }
    else if ((commands.github.pattern).test(userInput)) {
        if (!document.querySelector('#text-area').value.endsWith("\n")) {
            document.querySelector('#text-area').value += `\n`;
        }
        eval(commands.github.action);
    }
    else if ((commands.linkedin.pattern).test(userInput)) {
        if (!document.querySelector('#text-area').value.endsWith("\n")) {
            document.querySelector('#text-area').value += `\n`;
        }
        eval(commands.linkedin.action);
    }
    else if ((commands.twitter.pattern).test(userInput)) {
        if (!document.querySelector('#text-area').value.endsWith("\n")) {
            document.querySelector('#text-area').value += `\n`;
        }
        eval(commands.twitter.action);
    }
    else if ((commands.email.pattern).test(userInput)) {
        if (!document.querySelector('#text-area').value.endsWith("\n")) {
            document.querySelector('#text-area').value += `\n`;
        }
        eval(commands.email.action);
    }
    else if ((commands.instagram.pattern).test(userInput)) {
        if (!document.querySelector('#text-area').value.endsWith("\n")) {
            document.querySelector('#text-area').value += `\n`;
        }
        eval(commands.instagram.action);
    }
    else if ((commands.discord.pattern).test(userInput)) {
        if (!document.querySelector('#text-area').value.endsWith("\n")) {
            document.querySelector('#text-area').value += `\n`;
        }
        eval(commands.discord.action);
    }
    else if ((commands.url.pattern).test(userInput)) {
        eval(commands.url.action);
    }
    else {
        console.log(999)
    }
});
