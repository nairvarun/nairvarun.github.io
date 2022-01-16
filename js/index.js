const cmd = {
    "list": {
        "execute": 
            "for (let i = 0; i < Object.keys(cmd).length; i++) {outputArea.value += `${(Object.keys(cmd)[i])}\n`}"   
    },
    "clear": {
        "execute": 
            "outputArea.value = ''"
    },
    "gitlab": {
        "execute": 
            "outputArea.value += `https://gitlab.com/nairvarun\n`;" +
            "if (window.confirm('open gitlab?')) {window.open('https://gitlab.com/nairvarun', '_blank');}"
    },
    "github": {
        "execute": 
            "outputArea.value += `https://github.com/nairvarun\n`;" +
            "if (window.confirm('open github?')) {window.open('https://github.com/nairvarun', '_blank');}"
    },
    "linkedin": {
        "execute": 
            "outputArea.value += `https://www.linkedin.com/in/nair-varun\n`;" +
            "if (window.confirm('open linkedin?')) {window.open('https://www.linkedin.com/in/nair-varun', '_blank');}"
    },
    "twitter": {
        "execute": 
            "outputArea.value += `@_nv04\n`;" +
            "if (window.confirm('open twitter?')) {window.open('https://twitter.com/_nv04', '_blank');}"
    },
    "email": {
        "execute": 
            "outputArea.value += `nairvarun@pm.me\n`;" + 
            "if (window.confirm('open mail?')) {window.location.href = 'mailto:nairvarun@pm.me';}"
    },
    "instagram": {
        "execute": 
            "outputArea.value += `@varunn104\n`;" +
            "if (window.confirm('open instagram?')) {window.open('https://www.instagram.com/varunn104', '_blank');}"
    },
    "discord": {
        "execute": "outputArea.value += `zucc#6607\n`"
    }
}

console.log(
    "%cheloo", 
    "font-size:25px;"
);

// all click event handlers
window.addEventListener('click', (MouseEvent) => {
    const contextMenuCss = document.querySelector('.custom-cm').style;
    const clickedOn = MouseEvent.target.innerText;

    // hide context menu on click
    if (contextMenuCss.visibility === 'visible') {
        contextMenuCss.visibility = '';
    }
    
    // custom context menu actions
    if (MouseEvent.target.className === 'custom-cm__item') {
        switch (clickedOn) {
            case 'list':
                console.log('list');
                break;
            case 'clear':
                console.log('clear')
                break;
            case 'src':
                console.log('src')
                break;
            case 'about':
                console.log('about')
                break;
            case 'contact':
                console.log('contact')
                break;
            default:
                break;
        }
    }
})

// show custom context menu (at cursor location) on right click
window.addEventListener('contextmenu', (MouseEvent) => {
    MouseEvent.preventDefault();   // prevents the default context menu from showing so that our custom one can replace it. 

    const contextMenu = document.querySelector('.custom-cm');

    if (contextMenu.style.visibility === 'visible') {
        contextMenu.style.visibility = '';
    }
    
    // prevents the context menu from overflowing outside the window
    if (contextMenu.style.visibility === '') {
        if (MouseEvent.y + contextMenu.offsetHeight > window.innerHeight) {
            contextMenu.style.top = window.innerHeight - contextMenu.offsetHeight + 'px';
        } else {
            contextMenu.style.top = `${MouseEvent.y}px`;
        }
        if (MouseEvent.x + contextMenu.offsetWidth > window.innerWidth) {
            contextMenu.style.left = window.innerWidth - contextMenu.offsetWidth + 'px';
        } else {
            contextMenu.style.left = `${MouseEvent.x}px`;
        }
        contextMenu.style.visibility = 'visible';
    }
});

// plumber logic
window.addEventListener('select', () => {
    const outputArea = document.querySelector('#primary-output');
    const selection = window.getSelection().toString();

    const urlRegex = /(?<![\S\s])https?:\/\/[a-zA-Z0-9]*\.?[a-zA-Z0-9_-]+\.[a-zA-z0-9]+[a-zA-Z0-9/_-]*(?![\S\s])/;
    const emailRegex = /(?<![\S\s])[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+.[a-zA-Z0-9_.-]+(?![\S\s])/;

    if (urlRegex.test(selection)) {
        if (window.confirm(`open ${selection}?`)) {
            window.open(`${selection}`, '_blank');
        }
    } else if (emailRegex.test(selection)) {
        if (window.confirm('open mail?')) {
            window.location.href = `mailto:${selection}`;
        }
    } else {
        try {
            if (cmd[selection].execute !== '') {
                if (outputArea.value.endsWith("\n") === false && outputArea.value !== '') {
                    outputArea.value += `\n`;
                }        
                eval(cmd[selection].execute);
            }
        } catch (error) {
            // console.log(error.toString());
        }
    }
});