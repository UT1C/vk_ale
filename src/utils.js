function waitForElement(elementName, func) {
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

function deleteElement(elementName) {
    waitForElement(
        elementName,
        function deleter(element) {
            element.remove()
        }
    )
}