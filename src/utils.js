function waitForElement (elementName, func) {
    var id = setInterval(
        () => {
            let element = $(elementName);
            if (element.length) {
                func(element);
                clearInterval(id);
            }
            else {
                delete element;
            }
        },
        100
    )
    setTimeout(
        () => {clearInterval(id)},
        10000
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