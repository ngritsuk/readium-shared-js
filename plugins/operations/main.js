define(['readium_shared_js/globals', 'readium_js_plugins', 'jquery'], function (Globals, Plugins) {
    Plugins.register("operations", function (api) {
        var self = this;
        if (typeof readiumOperations !== "undefined"){
        api.reader.on(Globals.Events.BOOK_OPENED, function ($iframe, spineItem) {
          readiumOperations.trackOpenBook(JSON.stringify(Globals.reader.metadata()));
          });
        api.reader.on(Globals.Events.PAGE_FORWARD_TURNED, function ($iframe, spineItem) {
          readiumOperations.trackTurnPageForward(JSON.stringify(Globals.reader.metadata()));
        })
        }
    });
    return 0;
});
