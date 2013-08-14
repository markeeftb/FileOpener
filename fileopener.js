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
function FileOpener() {
};

FileOpener.prototype.open = function(url, failureCB) {
    var success = function() {
        console.log("success!");
    }    
    var failure = function(error) {
        console.log(error);
        if(typeof failureCB === "function") {
        	failureCB(error);
        }
    }
    cordova.exec(success, failure, "FileOpener", "openFile", [url]);
};

/**
 * Load Plugin
 */

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.fileOpener) {
    window.plugins.fileOpener = new FileOpener();
}
