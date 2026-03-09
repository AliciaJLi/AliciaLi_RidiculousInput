document.addEventListener('DOMContentLoaded', function() {

    const textarea = document.querySelector('textarea');

    const buttons = document.querySelectorAll( 
        '.button-title, .button, .button-action'
    );

    buttons.forEach(function(button) {

        button.addEventListener('click', function() {

            textarea.focus();

            const buttonAction = button.dataset.key;
            const value = button.textContent;

            let start = textarea.selectionStart;
            let end = textarea.selectionEnd;
            let text = textarea.value;

            // ALPHABET & SPECIAL KEYS
            if (value) {

                textarea.value =
                    text.substring(0, start) +
                    value +
                    text.substring(end);

                textarea.selectionStart = textarea.selectionEnd =
                    start + value.length;
            }

            // SPACE KEY
            if (buttonAction === "space") {

                const space = " "

                textarea.value =
                    text.substring(0, start) +
                    space +
                    text.substring(end);

                textarea.selectionStart = textarea.selectionEnd =
                    start + space.length;
            }

            // TAB KEY
            if (buttonAction === "tab") {

                const tab = "    ";

                textarea.value =
                    text.substring(0, start) +
                    tab +
                    text.substring(end);

                textarea.selectionStart = textarea.selectionEnd =
                    start + tab.length;
            }

            // DELETE KEY
            if (buttonAction === "delete") {

                textarea.value =
                    text.substring(0, start - 1) +
                    text.substring(end);

                textarea.selectionStart = textarea.selectionEnd =
                        start - 1;

            }

            // RETURN KEY
            if (buttonAction === "return") {

                const buttonReturn = "\n"

                textarea.value =
                    text.substring(0, start) +
                    buttonReturn +
                    text.substring(end);

                textarea.selectionStart = textarea.selectionEnd =
                    start + buttonReturn.length;
            }

        });

    });

});