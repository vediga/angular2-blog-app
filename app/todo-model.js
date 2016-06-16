System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            TodoModel = (function () {
                function TodoModel(title) {
                    if (title === void 0) { title = ''; }
                    this.title = title;
                    this.status = false;
                    this.isEditable = false;
                    this.id = Date.now();
                    this.createdOn = Date().slice(0, 24);
                }
                return TodoModel;
            }());
            exports_1("TodoModel", TodoModel);
        }
    }
});
//# sourceMappingURL=todo-model.js.map