Vue.use(Vuex);
var local = new Local();

var state = {
    car:[]
};
var mutations = {
    getCar(state,pyload){
        state.car = [...pyload.car];
    }
};
var actions = {
    getCar({commit}){
        var car = local.getData();
        commit("getCar",{car});
    },
    removeCar({dispatch},pyload){
        if(!pyload.id) console.log("出错了")
        local.delDate(pyload.id);
        dispatch("getCar");
    },
    addCarNum({dispatch},pyload){
        if(!pyload.id) console.log("出错了")
        local.addDataNum(pyload.id);
        dispatch("getCar");
    },
    subCarNum({dispatch},pyload){
        if(!pyload.id) console.log("出错了")
        local.subDataNum(pyload.id);
        dispatch("getCar");
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
var {
    mapActions,
    mapState
   }=Vuex


