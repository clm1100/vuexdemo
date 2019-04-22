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
                        @change="change2"
                        v-bind:checked="all"> 
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
                    class="cart-item" >
                        <div class="p-checkbox ">
                            <input 
                            @change="change(index,$event)"
                            v-model="arr[index]"
                            :data-id="index" 
                            type="checkbox" 
                            name="" 
                            id="" 
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
                                <input type="text" class="itxt" v-bind:value="item.num">
                                <a href="javascript:;" class="increment" @click="addCarNum({'id':item.id})">+</a>
                            </div>
                        </div>
                        <div class="p-sum">￥{{jisan(item.price,item.num,index)}}</div>
                        <div class="p-action"><a href="javascript:;" @click="removeCar({'id':item.id})">删除</a></div>
                    </div>
                </div>

                <!-- 结算模块 -->
                <div class="cart-floatbar">
                    <div class="select-all">
                        <input type="checkbox" name="" id="" class="checkall">全选
                    </div>
                    <div class="operation">
                        <a href="javascript:;" class="remove-batch"> 删除选中的商品</a>
                        <a href="javascript:;" class="clear-all">清理购物车</a>
                    </div>
                    <div class="toolbar-right">
                        <div class="amount-sum">已经选<em>1</em>件商品</div>
                        <div class="price-sum">总价： <em>￥12.60</em></div>
                        <div class="btn-area">去结算</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `,
    data(){
        return {
            arr:[],
            checkedCar:[]
        }
    },
    computed: {
        ...mapState(['car']),
        all:{
            get(){
                var l = this.car.length;
                console.log(l);
                var c = this.arr.filter(function(e,i){
                    if(e) return e
                }).length;
                return l==c;
            },
            set(b){
                this.car.forEach((e,i)=>{
                    this.arr.splice(i,1,e)
                })
            }
        },
        count(){
            
        },
        sum(){

        }
    },
    methods: {
        jisan(n,p,index){
            this.checkedCar[index].p = (n*p).toFixed(2);
            return (n*p).toFixed(2)
        },
      ...mapActions(["getCar","removeCar","addCarNum","subCarNum"]), 
      change(index,event){
        this.checkedCar[index].c=this.arr[index]
        console.log(this.checkedCar)
      },
      quanxuan(){
          for(var i=0;i<this.car.length;i++){
              this.arr.splice(i,1,true);
          }
      },
      quanbuxuan(){
        this.arr.splice(0,this.arr.length)
      },
      change2(event){
          if(event.target.checked){
              this.quanxuan()
          }else{
              this.quanbuxuan();
          }
      }
    },
    created () {
        this.getCar();
        this.car.forEach((e,i)=>{
            this.checkedCar.push({})
        })
    },
    mounted () {
        console.log(this.checkedCar)
    }
})