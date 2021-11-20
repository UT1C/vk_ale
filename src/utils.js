function waitForElement (elementName, func) {
    var id = setInterval(
        function() {
            if ($(elementName).length) {
                func($(elementName));
                clearInterval(id);
            }
        },
        100
    )
}

function waitForElementStyle (elementName, func) {
    var id = setInterval(
        function() {
            if ($(elementName).style) {
                func($(elementName));
                clearInterval(id);
            }
        },
        100
    )
}

function deleteElement (elementName) {
    waitForElement(
        elementName,
        function deleter(element) {
            if (Symbol.iterator in element) {
                for (let i of element) {
                    i.remove();
                }
            }
            else {
                element.remove();
            }
        }
    )
}