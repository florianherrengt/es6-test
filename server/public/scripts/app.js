define(["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    var Router = Backbone.Router;
    var history = Backbone.history;

    var Workspace = (function (_Router) {
        function Workspace() {
            _classCallCheck(this, Workspace);

            this.routes = {
                videos: "videos"
            };
            this._bindRoutes();
        }

        _inherits(Workspace, _Router);

        _createClass(Workspace, {
            videos: {
                value: function videos(query, page) {
                    console.log("videos");
                }
            }
        });

        return Workspace;
    })(Router);

    ;

    (function () {
        new Workspace();
        Backbone.history.start();
    })();
});
//# sourceMappingURL=app.js.map