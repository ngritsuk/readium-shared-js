define(['readium_shared_js/globals', 'readium_js_plugins', 'jquery'], function (Globals, Plugins) {
    Plugins.register("operations", function (api) {
        var self = this;
        if (typeof readiumOperations !== "undefined"){
        api.reader.on(Globals.Events.BOOK_OPENED, function ($iframe, spineItem) {
          readiumOperations.trackOpenBook(Globals.reader.metadata()['title']);
          });
        api.reader.on(Globals.Events.PAGE_FORWARD_TURNED, function ($iframe, spineItem) {
          readiumOperations.trackTurnPageForward(Globals.reader.metadata()['title']);
        })
        }
    });
    return 0;
});
