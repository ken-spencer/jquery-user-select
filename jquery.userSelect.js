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
})(jQuery);

