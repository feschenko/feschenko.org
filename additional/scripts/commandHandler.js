document.body.onkeydown = parseCommand;
let blink = false; let command = "";
setInterval(toggleCaret, 500);

function toggleCaret() {
    let caret = document.getElementById("commandCaret");
    if (blink) {
        blink = false; caret.style.color = "#f4c2c1";
    } else {
        blink = true; caret.style.color = "#fdafad"; 
    }
}

function executeCommand() {
    switch (command.toLowerCase()) {
        case "github":
            return window.open("https://github.com/feschenko");
        case "twitter":
            return window.open("https://twitter.com/kiryssha");
        case "telegram":
            return window.open("https://t.me/kirillfeschenko");
        case "habr":
            return window.open("https://habr.com/en/users/0susboy0/");
        case "linkedin":
            return window.open("https://linkedin.com/in/fka");
        case "email":
            return window.open("mailto:swipduces@yandex.com");
    }

}

function parseCommand(enteredKey) {
    let dontPrint = ['Control', 'Alt', 'Shift', 'CapsLock', 'Tab', 'F1', 
    'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
    'F11', 'F12', 'F13', 'BrowserHome', 'ContextMenu',
    'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown',
    'Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown',
    'ScrollLock', 'Pause', 'Escape', 'OS', 'Meta',
    '-', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let commandInput = document.getElementById("commandInput");
    if (!dontPrint.includes(enteredKey.key)) {
        if (enteredKey.key === "Backspace") {
            command = command.substring(0, command.length - 1);
        } else {
            if (enteredKey.key === "Enter") {
                executeCommand(); command = "";
            } else {
                if (command.length < 15) {
                    command += enteredKey.key;
                }
            }
        }
        commandInput.innerText = command;
    }
}
