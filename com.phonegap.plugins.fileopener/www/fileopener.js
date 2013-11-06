/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2005-2010, Nitobi Software Inc.
 * Copyright (c) 2011, IBM Corporation
 */

/**
 * Constructor
 */
/*
function FileOpener() {
};

FileOpener.prototype.open = function(url) {

};
*/
/**
 * Load Plugin
 */
/*
if(!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.fileOpener) {
    window.plugins.fileOpener = function (url) {
        cordova.exec(null, null, "FileOpener", "openFile", [url]);
    };
}
*/


var fileOpener = {
    open : function (url) {
         cordova.exec(null, null, "FileOpener", "openFile", [url]);
    }
};

module.exports = fileOpener;