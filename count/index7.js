Vue.component("H",{
    template:`
    <div>
    <h1>{{count}}</h1>
    </div>
    `,
   computed: {
       count(){
           return this.$store.state.count
       }
   }
})
Vue.component("Add",{
    template:`
    <button @click="addson">+</button>
    `,
    // 需要混入的时候需要这样使用
    methods: {
        // 可以在组件中对actions重新命名
        addson(){
            this.$store.dispatch('add')
        }
    }
})

Vue.component("Sub",{
    template:`
    <button @click="subson">-</button>
    `,
    // 如果不混入组件内部方法可以直接这样使用
    methods:{
        subson(){
            this.$store.dispatch('sub')
        }
    }
})

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

new Vue({
    template:`
    <div>
        <H/>
        <Add/>
        <Sub/>
    </div>
    `,
    el:"#app",
    store:store
})

