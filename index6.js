// 优化使用Vuex
// 方便将store的方法传值给组件使用
// 使用方法
var {
    mapActions,
    mapState,
    mapGetters
} = Vuex;

Vue.component("H",{
    template:`
    <div>
    <h1>{{count}}</h1>
    <h2>{{evenOrOdd}}</h2>
    </div>
    `,
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["evenOrOdd"])
    }
})
Vue.component("Add",{
    template:`
    <button @click="addson">+</button>
    `,
    // 需要混入的时候需要这样使用
    methods: {
        // 可以在组件中对actions重新命名
        ...mapActions({addson:"add"})
    }
})

Vue.component("Sub",{
    template:`
    <button @click="sub">-</button>
    `,
    // 如果不混入组件内部方法可以直接这样使用
    methods:mapActions(["sub"])
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
    store:store,
    created () {
        console.log(mapActions(["add","sub"]));
        console.log(mapState(["count"]));
        console.log(mapGetters(["evenOrOdd"]))
    }
    
})