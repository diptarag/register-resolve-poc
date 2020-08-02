import AreaController from '../controller/AreaController';
import { Foo, Bar, Baz } from '../views';
import AreaType from '../enums/AreaTypes';

var AreaBuilder = {
    registerViews: function () {
        AreaController.register(AreaType.ALPHA, 'Foo', Foo, { focusHandler: () => {} });
        AreaController.register(AreaType.ALPHA, 'Bar', Bar, { focusHandler: () => {} });
        AreaController.register(AreaType.BETA, 'Baz', Baz, { identified: '/baz' });
        AreaController.register(AreaType.BETA, 'Foo', Foo, { identified: '/foo' });
    }
};

export default AreaBuilder;

