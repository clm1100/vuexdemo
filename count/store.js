Vue.use(Vuex);
var count= 0;
var state = {
    count
}
var mutations = {
    add(state){
        state.count++
    },
    sub(state){
        state.count--
    }
}
var actions = {
    add(obj){
        // 此处的obj只得是store
        obj.commit("add")
    },
    sub({commit}){
        commit("sub")
    }
}
var getters = {
    evenOrOdd:(state)=>{
        return state.count % 2 === 0 ? 'even' : 'odd'
    }
}

var store =  new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})


