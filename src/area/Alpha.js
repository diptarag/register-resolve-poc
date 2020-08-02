var Alpha = {
    _registeredViews: new Map(),
    render: function () {
        console.log('This is container Alpha');

        for (let config of this._registeredViews.values()) {
            let ViewClass = config.view,
                view = new ViewClass();
            view.render(); 
        }
    },
    register: function (name, view, config) {
        this._registeredViews.set(name, Object.assign({ view }, config));
    }
}

export default Alpha;