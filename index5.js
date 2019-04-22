// 使用Vuex

var {
    mapActions,
    mapState,
    mapGetters
} = Vuex;

Vue.component("H",{
    template:`
    <div>
    <h1>{{vn}}</h1>
    <h2>{{eRo}}</h2>
    </div>
    `,
    computed: {
        vn(){
            // 直接将store上的数据绑定到computed的数据上面
            return this.$store.state.count
        },
        eRo(){
            return this.$store.getters.evenOrOdd
        }
    }
})
Vue.component("Add",{
    template:`
    <button @click="addson">+</button>
    `,
    methods: {
        addson(){
            // 直接dispatch actions actions里面在commit mutations
            // this.$store.dispatch("add");
            this.$store.commit("add");
        }
    }
})

Vue.component("Sub",{
    template:`
    <button @click="subson">-</button>
    `,
    methods: {
        subson(){
            this.$store.dispatch("sub"); 
        }
    }
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