import { Alpha, Beta } from './area';
import AreaBuilder from './builder/AreaBuilder';
import AreaType from './enums/AreaTypes';

AreaBuilder.registerViews(AreaType.ALPHA).then(() => {
    Alpha.render();
});

AreaBuilder.registerViews(AreaType.BETA, ['Baz', 'Bar']).then(() => {
    Beta.render('Baz');
});