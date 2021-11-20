function waitForElement (elementName, func) {
    var id = setInterval(
        () => {
            if ($(elementName).length) {
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
        (element) => {
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