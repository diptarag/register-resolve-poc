import AreaViewMapping from './AreaViewMapping';
import AreaController from '../controller/AreaController';

var AreaBuilder = {
    registerViews: function (area, views) {
        let areaViews = AreaViewMapping[area];
        
        let viewNames = [];
        if (views) {
            if (!Array.isArray(views)) {
                views = [views];
            }
            viewNames = views;
        } else {
            viewNames = Object.keys(areaViews);
        }

        let promiseArr = viewNames.map(viewName => {
            return import('../' + areaViews[viewName].viewPath)
                .then(obj => {
                    let moduleClass = obj.default;
                    AreaController.register(area, viewName, moduleClass, areaViews[viewName].config);
                })
                .catch(err => console.log(err));
        });

        return Promise.all(promiseArr);
    }
};

export default AreaBuilder;