const commands = {
    "gitlab": "https://gitlab.com/nairvarun",
    "gtihub": "",
    "linkedin": "",
    "twitter": "",
    "email": "",
    "instagram": "",
    "discord": "",
    "info": "",
    "about": "",
    "contact": "",
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
    const command = window.getSelection().toString();
    console.log(command);

    if (RegExp('\s?back\s?').test(command)) {
        window.location.href = '../../index.html';
    }
    // whis is this matching even if gitlab isnt surrounded by whitespace??
    else if (RegExp('\s?gitlab\s?').test(command)) {
        document.querySelector('#text-area').value += `\n${commands.gitlab}\n`;
    } else {
        console.log(999)
    }
});
