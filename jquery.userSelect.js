(function($)
{
    /* Jquery User Selection Plugin Version 1.0
    *  Copyright 2012, Kenneth Spencer
    *  Dual licensed under the MIT or GPL Version 2 licenses.
    */

    /* This event is separated out so that it can later be removed from the DOM
    */
    var selectstart = function(evt)
    {
        evt.preventDefault();
        return false;
    }

    $.fn.disableUserSelect = function()
    {
        return this.each(function()
        {           
            $(this).attr('unselectable', 'on')
            .css({
                '-moz-user-select':'none',
                '-webkit-user-select':'none',
                'user-select':'none'
            })
            .on('selectstart', selectstart);
        });
    };
    
    $.fn.enableUserSelect = function() {
        return this.each(function()
        {           
            $(this).attr('unselectable', null)
            .css({
                '-moz-user-select':'auto',
                '-webkit-user-select':'auto',
                'user-select':'auto'
            })
            .off('selectstart', selectstart);
        });
    };

    $.fn.setRange = function(start, end)
    {
        return this.each(function()
        {
            if (this.setSelectionRange) {
                this.focus();
                this.setSelectionRange(start, end);
            } else if(this.createTextRange) {
                var range = this.createTextRange();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', start);
                range.select();
            }
        });
    };

    $.fn.getRange = function() 
    {
        var el = this.get(0);
        var start = 0, end = 0, normalizedValue, range,
        textInputRange, len, endRange;

        if (typeof el.selectionEnd == "number") {
            start = el.selectionStart;
            end = el.selectionEnd;
        } else {
            range = document.selection.createRange();

            if (range && range.parentElement() == el) {
                len = el.value.length;
                normalizedValue = el.value.replace(/\r\n/g, "\n");

                // Create a working TextRange that lives only in the input
                textInputRange = el.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());

                endRange = el.createTextRange();
                endRange.collapse(false);

                if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                    start = end = len;
                } else {
                    start = -textInputRange.moveStart("character", -len);
                    start += normalizedValue.slice(0, start).split("\n").length - 1;

                    if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                        end = len;
                    } else {
                        end = -textInputRange.moveEnd("character", -len);
                        end += normalizedValue.slice(0, end).split("\n").length - 1;
                    }
                }
            }
        }

        return {
            'start' : start,
            'end' : end
        };
    }

})(jQuery);

