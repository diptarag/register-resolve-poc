import AreaType from '../enums/AreaTypes';
import { Alpha, Beta } from '../area';


var AreaController = {
    register: function (area, name, view, config) {
        switch (area) {
            case AreaType.ALPHA: 
                Alpha.register(name, view, config);
                break;
            case AreaType.BETA:
                Beta.register(name, view, config);
                break;
        }
    }
};

export default AreaController;