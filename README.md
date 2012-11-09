# jquery-userSelect version 1.0 

Get and set text ranges or prevent users from doing so. 

## Installation

Include script *after* the jQuery library:

    <script src="/path/to/jquery.userSelect.js"></script>

** Do not include the script directly from GitHub

## Usage

    <div id="text-div"> some text</div>

    
    // Disable selection
    $("#text-div").disableUserSelect();


    // Re-enable selection
    $("#text-div").enableUserSelect();

    // Get The range of selected text from a textarea
    var range = $('textarea').getRange();
    // Log the selected text
    console.log($('textarea').val().substring(range.start, range.end));
                
    // Set text selection for a text area 
    $('textarea').setRange(7, 28)

## Authors
    
[Kenneth Spencer](https://github.com/ken-spencer)
