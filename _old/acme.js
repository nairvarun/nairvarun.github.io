// formatted console greeting
console.log(
	"%cheloo",
	"font-size:25px;"
);

document.querySelector('#primary-output').value = `github\n\nlinkedin\n\nemail\n\n`;

// right now there is no need to have the 2 button's text as passable parameters. can add if needed.
async function fireCustomAlert(message) {

	const customAlertCss = document.querySelector('.custom-alert').style;
	if (customAlertCss.visibility === '') {
		document.querySelector('.custom-alert__message').textContent = message;
		customAlertCss.visibility = 'visible';
	}

	const returnVal = await buttonResponse();
	customAlertCss.visibility = '';

	return new Promise((resolve) => {
		resolve(returnVal);
	});
}

function buttonResponse(){
	return new Promise((resolve) => {
		document.querySelector('#custom-alert__button-confirm').addEventListener('click', () => {
			resolve(true);
		});
		document.querySelector('#custom-alert__button-cancel').addEventListener('click', () => {
			resolve(false);
		});
	});
}

function plumb(command) {

	// might have to dynamically assign #primaryOutput if i decide to add ability to have more than one "acme" window at a time.
	const primaryOutput = document.querySelector('#primary-output');

	const clearSelection = () => {
		if (window.getSelection().empty) {  // Chrome
			window.getSelection().empty();
		} else if (window.getSelection().removeAllRanges) {  // Firefox
			window.getSelection().removeAllRanges();
		}
	}

	const openUlr = (alertMessage, urlToOpen, isEmail = false, printUrl = true) => {

		const alertWrapper = async () => {
			clearSelection();
			const alertResult = await fireCustomAlert(alertMessage);
			if (alertResult) {
				if (isEmail) {
					window.location.href = `mailto:${urlToOpen}`;
				} else {
					window.open(urlToOpen, '_blank');
				}
			}
		}
		alertWrapper();

		if (printUrl) {
			// makes sure outputs are printed on a new line.
			if (primaryOutput.value.endsWith('\n') === false && primaryOutput.value !== '') {
				primaryOutput.value += '\n';
			}
			primaryOutput.value += `${urlToOpen}\n`;
		}

	}

	const urlRegex = /(?<![\S\s])https?:\/\/[a-zA-Z0-9]*\.?[a-zA-Z0-9_-]+\.[a-zA-z0-9]+[a-zA-Z0-9/_.-]*(?![\S\s])/;
	const emailRegex = /(?<![\S\s])[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.[a-zA-Z0-9_.-]+(?![\S\s])/;
	const commandRegex = /(?<=case ')[a-z]+(?=':)/g;

	if (urlRegex.test(command)) {

		openUlr(`open ${command}?`, command, false, false);

	} else if (emailRegex.test(command)) {

		openUlr(`open mail to email ${command}?`, command, true, false);

	} else {

		const setLine = () => {
			if (primaryOutput.value.endsWith('\n') === false && primaryOutput.value !== '') {
			primaryOutput.value += '\n';
			}
		}

		switch (command) {
			case 'list':
				clearSelection();
				setLine();
				const matchedCommands = plumb.toString().match(commandRegex);
				for (let i = 0; i < matchedCommands.length; i++) {
					primaryOutput.value += `${(matchedCommands[i])}\n`;
				}
				break;
			case 'clear':
				clearSelection();
				primaryOutput.value = '';
				break;
			case 'email':
				openUlr('open mail to email nairvarun@pm.me?', 'nairvarun@pm.me', true, true);
				break;
			// case. to avaid matching with regex
			// case. 'gitlab':
			// 	openUlr('open gitlab?', 'https://gitlab.com/nairvarun');
			// 	break;
			case 'github':
				openUlr('open github?', 'https://github.com/nairvarun');
				break;
			case 'linkedin':
				openUlr('open linkedin?', 'https://www.linkedin.com/in/nair-varun');
				break;
			// case. 'twitter':
			// 	openUlr('open twitter?', 'https://twitter.com/_nv04');
			// 	break;
			// case. 'instagram':
			// 	openUlr('open instagram?', 'https://www.instagram.com/varunn104');
			// 	break;
			// case. 'discord':
			// 	setLine();
			// 	primaryOutput.value += 'zucc#6607\n';
			// 	break;
			case 'src':
				openUlr('open https://github.com/nairvarun/nairvarun.github.io?', 'https://github.com/nairvarun/nairvarun.github.io');
				break;
			case 'about':
				primaryOutput.value = 'https://nairvarun.github.io\n';
				break;
			default:
				break;
		}

	}
}

// all click event handlers.
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
				plumb('list');
				break;
			case 'clear':
				plumb('clear');
				break;
			case 'src':
				plumb('src');
				break;
			case 'about':
				plumb('about');
				break;
			case 'email':
				plumb('email');
				break;
			default:
				break;
		}
	}
});

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

// plumbs selection
window.addEventListener('select', () => {
	// works on chrome but not on firefox
	// const selection = window.getSelection().toString();
	// console.log(selection);

	// works on both chrome and firefox
	textArea = document.activeElement;
	selection = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
	// console.log(selection);

	plumb(selection);
});
