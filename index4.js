// 使用eventbus
var eventBus = new Vue();

Vue.component("H",{
    template:`
    <h1>{{n}}</h1>
    `,
    data:function(){
       return {
            n:222
        }
    },
    methods: {
        add(){
            this.n++
        },
        sub(){
            this.n--
        }
    },
    created () {
        eventBus.$on("add",this.add);
        eventBus.$on("sub",this.sub);
    }
})
Vue.component("Add",{
    template:`
    <button @click="addson">+</button>
    `,
    methods: {
        addson(){
            eventBus.$emit("add");
        }
    }
})

Vue.component("Sub",{
    template:`
    <button @click="subson">-</button>
    `,
    methods: {
        subson(){
            eventBus.$emit("sub");
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
    
})