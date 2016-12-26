

/*
    Initial animation function. Only run when screen width is greater than 320 pixels. When called, the module's
    height that is being hovered over increases by 10%. the .hover() method's first argument is responsible
    for this height increase. The second argument returns the module to its original height
    when the user's cursor leaves the module.
*/
function moduleHover(module) {

    const originalHeight = $(module).height();
    const addedHeight = originalHeight * .10;

    if ($(window).width() > 320) {
        $(module).hover(
            function() {    // Cursor Enters
                $(this).animate({ // Module's height grows by 10%.
                    height: originalHeight + addedHeight
                }, 220);
            },
            function() { // Cursor Leaves
                $(this).animate({ // Module's height return to it's initial dimensions.
                    height: originalHeight
                }, 220);
            }
        );
    }
}


/*
    The function is responsible for the copying of the hex value of the selected module. When called, the
    function creates an invisible "<textarea></textarea>" element within the DOM. The argument is
    given to the value (content) of the element. As the name denotes, the .select() method selects
    texture and it's assigned value. document.execCommand('copy') copies the selected element
    (remember .select?) to the clipboard.
*/
function copyHex(module) {
    const textArea = document.createElement("textarea");    // text area element is created.
    textArea.value = module;    // The content of text area is set to the argument.

    document.body.appendChild(textArea);    // Element is added to the documents body off-screen.
    textArea.select();  //  Element is selected

    document.execCommand('copy');   //  text area's contents are copied to the clipboard.
    document.body.removeChild(textArea);    // The element is removed. 
}


/*
    Function uses the id of the called module to identify which module class the user clicked.
    Based on the id of the module that's clicked, the corresponding hex value is called as the
    argument to the copyHex() function.
*/
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


/*
    Function uses the id of the called module to identify which module class the user clicked.
    Based on the id of the module that's clicked, the corresponding hex value is called as the
    argument to the copyHex() function.
*/
function moduleSelect(module) {

    const originalWidth = $(module).width();
    const widthAdded = originalWidth * .10;

    $(module).click(function() {
        if ($(window).width() > 320) {
            $(this).animate({
                width: originalWidth + widthAdded
            }, 220);
        }

        $(this).append("<h1 class = 'selectText'>Copied!</h1>");
        pasteHex(this); // Calls function that posts the argument's hex to the clipboard.
    });
}


/*
    Called when user the cursor leaves a hovered/selected module. When called, the
    function returns the expanded width of the module to its original dimension
    and rmeoved the "Copied!" test after 500 milliseconds.
*/
function moduleDeselect(module) {

    const originalWidth = $(module).width();
    const subtractedWidth = originalWidth * .01;

    $(module).mouseleave(function() {
        if ($(window).width() > 320) {
            $(this).animate({
                width: originalWidth - subtractedWidth
            }, 220);
        }

        setTimeout(function() { // "Copied" text is removed.
            $(".selectText").remove();
        }, 500);
    });
}


// Calls the above functions when the DOM is finished rendering.
$(document).ready(function() {

    moduleHover(".color-module");
    moduleSelect(".color-module");
    moduleDeselect(".color-module");

});
