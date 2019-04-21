
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
new Vue({
    template:`
    <div>
        <H v-bind:t="n"/>
        <Add/>
        <Sub/>
    </div>
    `,
    el:"#app",
    data:{
        n:222
    },
})