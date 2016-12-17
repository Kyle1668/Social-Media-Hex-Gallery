

/*
    Initial animation function. Only ran when screen width is greater than 320 pixels. When called, the module's
    height that is being hovered over increases by 10%. the .hover() method's first argument is responsible
    for this height increase. The second argument returns the module to its original height
    when the user's cursor leaves the module.
*/
function moduleHover(module) {

    const originalHeight = $(module).height();
    const addedHeight = originalHeight * .10;

    if ($(window).width() > 320) { // Animation won't occur if screen width is less than 320px.
        $(module).hover(
            function() {
                $(this).animate({ // Module's height grows by 10%.
                    height: originalHeight + addedHeight
                }, 220);
            },
            function() { // Module's height return to it's initial dimensions.
                $(this).animate({
                    height: originalHeight
                }, 220);
            }
        );
    }
}



function copyHex(module) {

    const textArea = document.createElement("textarea");
    textArea.value = module;

    document.body.appendChild(textArea);
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {
        console.log('Unable to copy');
    }

    document.body.removeChild(textArea);
}



function pasteHex(module) {

    // moduleID uses the id of the called module to identify which one the user clicked.
    const moduleID = $(module).attr("id");

    switch (moduleID) {
        case "facebook":
            copyHex("#3b5998");
            break;
        case "linkedin":
            copyHex("#007bb5");
            break;
        case "instagram":
            copyHex("#517fa4");
            break;
        case "pinterest":
            copyHex("#cb2027");
            break;
        case "twitter":
            copyHex("#0084b4");
            break;
        case "googlePlus":
            copyHex("#dd4b39");
            break;
        default:
    }
}



function moduleSelect(module) {

    const originalWidth = $(module).width();
    const widthAdded = originalWidth * .10;

    $(module).click(function() {
        if ($(window).width() > 320) { // Animation won't occur if screen width is less than 320px.
            $(this).animate({
                width: originalWidth + widthAdded
            }, 220);
        }

        $(this).append("<h1 class = 'selectText'>Copied!</h1>");
        pasteHex(this); // Calls function that posts the argument's hex to the clipboard.
    });
}



function moduleDeselect(module) {

    const originalWidth = $(module).width();
    const subtractedWidth = originalWidth * .01;

    $(module).mouseleave(function() {
        if ($(window).width() > 320) {
            $(this).animate({
                width: originalWidth - subtractedWidth
            }, 220);
        }

        setTimeout(function() { // The "Copied" text is removed.
            $(".selectText").remove();
        }, 500);
    });
}



$(document).ready(function() {

    moduleHover(".color-module");
    moduleSelect(".color-module");
    moduleDeselect(".color-module");

});
