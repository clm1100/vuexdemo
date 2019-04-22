Vue.component("Carcontainer",{
    template:`
    <div class="c-container">
        <div class="w">
            <div class="cart-filter-bar">
                <em>全部商品</em>
            </div>
            <!-- 购物车主要核心区域 -->
            <div class="cart-warp">
                <!-- 头部全选模块 -->
                <div class="cart-thead">
                    <div class="t-checkbox">
                        <input 
                        type="checkbox" 
                        name="" 
                        id="" 
                        class="checkall" 
                        > 
                        全选
                    </div>
                    <div class="t-goods">商品</div>
                    <div class="t-price">单价</div>
                    <div class="t-num">数量</div>
                    <div class="t-sum">小计</div>
                    <div class="t-action">操作</div>
                </div>
                <!-- 商品详细模块 -->
                <div class="cart-item-list">
                    <div :key="item.id"  
                    v-for="item,index in car" 
                    class="cart-item"
                   >
                        <div class="p-checkbox ">
                            <input 
                            @change="change(index,item.id,$event)"
                            :data-id="index" 
                            type="checkbox" 
                            class="j-checkbox">
                        </div>
                        <div class="p-goods">
                            <div class="p-img">
                                <img src="upload/p3.jpg" alt="">
                            </div>
                            <div class="p-msg">{{item.name}}</div>
                        </div>
                        <div class="p-price">￥{{item.price}}</div>
                        <div class="p-num">
                            <div class="quantity-form">
                                <a href="javascript:;" class="decrement" @click="subCarNum({'id':item.id})">-</a>
                                <input 
                                type="text" 
                                class="itxt" 
                                v-bind:value="jisuan2(item.num,index)">
                                <a href="javascript:;" class="increment" @click="add(item.id)">+</a>
                            </div>
                        </div>
                        <div class="p-sum">￥{{jisan(item.price,item.num,index,item.id)}}</div>
                        <div class="p-action"><a href="javascript:;" @click="remove(item.id)">删除</a></div>
                    </div>
                </div>

                <!-- 结算模块 -->
                <div class="cart-floatbar">
                    <div class="select-all">
                        <input type="checkbox" name="" id="" class="checkall">全选
                    </div>
                    <div class="operation">
                        <a href="javascript:;" class="remove-batch"> 删除选中的商品</a>
                        <a href="javascript:;" class="clear-all">{{checkedCar[0].n}}</a>
                    </div>
                    <div class="toolbar-right">
                        <div class="amount-sum">已经选<em>{{count}}</em>件商品</div>
                        <div class="price-sum">总价： <em>￥{{sum}}</em></div>
                        <div class="btn-area">去结算</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `,
    data(){
        return {
            checkedCar:[]
        }
    },
    computed: {
        ...mapState(['car']),
        count(){
            console.log("变了")
            var count = 0;
            this.checkedCar.forEach((e,i)=>{
                console.log(e.c)
                if(e.c){
                    count+=Number(e.n)
                }
            });
            return count;
        },
        sum(){
            var sum = 0;
            this.checkedCar.forEach((e,i)=>{
                if(e.c){
                    sum+=Number(e.p)
                }
            });
            return sum.toFixed(2);
        }

    },
    methods: {
        ...mapActions(["getCar","removeCar","addCarNum","subCarNum"]), 
        jisan(n,p,index,id){
            this.checkedCar[index].p = (n*p).toFixed(2);
            this.checkedCar[index].id = id;
            return (n*p).toFixed(2)
        },
        jisuan2(n,index){
            this.checkedCar[index].n = n;
            return n;
        },
       change(index,id,event){
            console.log(index,id)
            this.checkedCar[index].c=event.target.checked;
            console.log( this.checkedCar)
        },
        del(id){
            var index = null;
            console.log("del",id);
            for(var i=0;i<this.checkedCar.length;i++){
                if(this.checkedCar[i].id==id){
                    index = i;
                    break;
                } 
            }
            this.checkedCar.splice(index,1);
        },
        addbendi(id){
            var index = null;
            console.log("del",id);
            for(var i=0;i<this.checkedCar.length;i++){
                if(this.checkedCar[i].id==id){
                    index = i;
                    break;
                } 
            }
            this.checkedCar[index].n+=1;
            this.checkedCar.splice(index,1,this.checkedCar[index]);
        },
        remove(id){
            console.log(id);
            this.del(id);
            this.removeCar({id});
        },
        add(id){
            this.addbendi(id);
            this.addCarNum({id});
        }
        
    },
    created () {
        this.getCar();
        this.car.forEach((e,i)=>{
            this.checkedCar.push({c:false})
        })
    },
    mounted () {

    },
    updated () {
        console.log(123);
    }
})