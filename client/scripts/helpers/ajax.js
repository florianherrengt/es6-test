export default class Ajax {
    constructor(options) {}

    getJSON(url) {
        var xhr = new XMLHttpRequest();
        var d = Promise.defer();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    d.resolve(JSON.parse(xhr.responseText));
                } else {
                    d.reject(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
        return d.promise;
    }
}
