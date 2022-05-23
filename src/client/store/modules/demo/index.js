import store from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';


export default () =>({
    namespaced:true,
    state: store(),
    getters,
    actions,
    mutations
})