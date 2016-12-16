function moduleHover(module) {

    const moduleHeight = $(module).height();
    const heightGrow = moduleHeight * .10;

    if ($(window).width() > 320) {
        $(module).hover(
            function() {
                $(this).animate({
                    height: moduleHeight + heightGrow
                }, 220);
            },
            function() {
                $(this).animate({
                    height: moduleHeight
                }, 220);
            }
        );
    }
}



function moduleDeselect(module) {

    const moduleWidth = $(module).width();
    const widthShrink = moduleWidth * .01;

    $(module).mouseleave(function() {
        if ($(window).width() > 320) {
            $(this).animate({
                width: moduleWidth - widthShrink
            }, 220);
        }

        setTimeout(function() {
            $(".selectText").remove();
        }, 500);
    });
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

    const moduleWidth = $(module).width();
    const widthGrow = moduleWidth * .10;

    $(module).click(function() {
        if ($(window).width() > 320) {
            $(this).animate({
                width: moduleWidth + widthGrow
            }, 220);
        }

        $(this).append("<h1 class = 'selectText'>Copied!</h1>");
        pasteHex(this); // Calls function that posts the argument's hex to the clipboard.
    });
}



$(document).ready(function() {

    moduleHover(".color-module");
    moduleSelect(".color-module");
    moduleDeselect(".color-module");

});
