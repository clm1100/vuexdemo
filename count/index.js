new Vue({
    template:`
    <div>
        <h1>{{n}}</h1>
        <button @click="add">+</button>
        <button v-on:click="absract">-</button>
    </div>
    `,
    el:"#app",
    data:{n:0},
    methods: {
        add(){
            this.n++
        },
        absract(){
            this.n--
        }
    }
})
