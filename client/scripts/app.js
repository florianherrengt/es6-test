var { Router, history } = Backbone;

class Workspace extends Router {

    constructor() {
        this.routes = {
            'videos': 'videos'
        }
        this._bindRoutes();
    }

    videos(query, page) {
        console.log('videos');
    }

};

(() => {
    new Workspace();
    Backbone.history.start();
})();
