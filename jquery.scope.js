/*
 * http://github.com/amiel/jquery_scope
 * Amiel Martin
 * 2010-02-22
 * 
 * Allows a bunch of jquery calls to be default scoped to something other than document.
 */

(function($) {
    $.fn.as_scope = function(callback) {
        var self = this, jquery_proxy = function(selector, context) { return self.find(selector, context); };
        return callback(jquery_proxy);
    };
    
    // this syntax is nice sometimes
    $.with_scope = function(scope, callback) {
        return $(scope).as_scope(callback);
    };
})(jQuery);
