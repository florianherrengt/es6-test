define(["exports", "module"], function (exports, module) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    var Ajax = (function () {
        function Ajax(options) {
            _classCallCheck(this, Ajax);
        }

        _createClass(Ajax, {
            getJSON: {
                value: function getJSON(url) {
                    var xhr = new XMLHttpRequest();
                    var d = Promise.defer();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                d.resolve(JSON.parse(xhr.responseText));
                            } else {
                                d.reject(xhr.responseText);
                            }
                        }
                    };
                    xhr.open("GET", url);
                    xhr.send();
                    return d.promise;
                }
            }
        });

        return Ajax;
    })();

    module.exports = Ajax;
});
//# sourceMappingURL=ajax.js.map