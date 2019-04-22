Vue.use(Vuex);
var local = new Local();

var state = {
    car:[]
};
var mutations = {
    getCar(state,pyload){
        state.car = pyload.car;
    }
};
var actions = {
    getCar({commit}){
        var car = local.getData();
        commit("getCar",{car});
    },
    removeCar({dispatch},pyload){
        local.delDate(pyload.id);
        dispatch("getCar");
    },
    addCarNum({},pyload){
        
    }
};
var getters = {

}

var store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
