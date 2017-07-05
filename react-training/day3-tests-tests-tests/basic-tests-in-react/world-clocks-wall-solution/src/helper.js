import _ from 'lodash';

export const id = (() => {
    let counter = 0;
    return () => ++counter;
})();

export const bindAll = (context, funcs) => {
    _.forEach(funcs, f => context[f.name] = f.bind(context));
}