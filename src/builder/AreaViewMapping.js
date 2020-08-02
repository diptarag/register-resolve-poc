import AreaType from '../enums/AreaTypes';

var AreaViewMapping = {
    [AreaType.ALPHA]: {
        'Foo': {
            viewPath: 'views/Foo.js',
            config: {
                charlie: 'A'
            }
        },
        'Bar': {
            viewPath: 'views/Bar.js',
            config: {
                charlie: 'B'
            }
        }
    },
    [AreaType.BETA]: {
        'Baz': {
            viewPath: 'views/Baz.js',
            config: {
                charlie: 'C'
            }
        },
        'Bar': {
            viewPath: 'views/Bar.js',
            config: {
                charlie: 'D'
            }
        },
        'Foo': {
            viewPath: 'views/Foo.js',
            config: {
                charlie: 'A'
            }
        }
    }
};

export default AreaViewMapping;