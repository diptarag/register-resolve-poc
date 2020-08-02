var Beta = {
    _registeredViews: new Map(),

    render: function (viewName) {
        console.log('This is container Beta');

        if (viewName) {
            let ViewClass = this.resolve(viewName),
                view = new ViewClass();
            view.render();


            let otherRegisterdViews = [];
            for (let key of this._registeredViews.keys()) {
                if (key !== viewName) {
                    otherRegisterdViews.push(key);
                }
            }

            console.log(`Beta area also had ${otherRegisterdViews.join(', ')} views registered apart from ${viewName}`);
        }
    },

    register: function (name, view, config) {
        this._registeredViews.set(name, Object.assign({ view }, config));
    },

    resolve: function (name) {
        return this._registeredViews.get(name).view;
    }
};

export default Beta;