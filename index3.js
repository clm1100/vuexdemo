
Vue.component("H",{
    template:`
    <h1>{{n}}</h1>
    `,
    props:["t"],
    data:function(){
        return {
            n:this.t
        }
    }
})
Vue.component("Add",{
    template:`
    <button @click="addson">+</button>
    `,
    methods: {
        addson(){
            this.$emit("addbind");
        }
    }
})

Vue.component("Sub",{
    template:`
    <button @click="subson">-</button>
    `,
    methods: {
        subson(){
            this.$emit("subbind");
        }
    }
})

new Vue({
    template:`
    <div>
        <H v-bind:t="n"/>
        <Add v-on:addbind="add"/>
        <Sub v-on:subbind="sub"/>
    </div>
    `,
    el:"#app",
    data:{
        n:222
    },
    methods: {
        add(){
            this.n++
        },
        sub(){
            this.n--
        }
    }
})