// forked from https://github.com/markeeftb/FileOpener

module.exports = {
    open: function (url) {
        var success = function () {
            console.log("success!");
        }
        var failure = function (error) {
            console.log(error);
        }
        cordova.exec(success, failure, "FileOpener", "openFile", [url]);
    }
}
