Vue.component("Listcar",{
    template:`
            <div class="cart-item">
            <div class="p-checkbox">
                <input type="checkbox" name="" id="" class="j-checkbox">
            </div>
            <div class="p-goods">
                <div class="p-img">
                    <img src="upload/p2.jpg" alt="">
                </div>
                <div class="p-msg">【2000张贴纸】贴纸书 3-6岁 贴画儿童 贴画书全套12册 贴画 贴纸儿童 汽</div>
            </div>
            <div class="p-price">￥24.80</div>
            <div class="p-num">
                <div class="quantity-form">
                    <a href="javascript:;" class="decrement">-</a>
                    <input type="text" class="itxt" value="1">
                    <a href="javascript:;" class="increment">+</a>
                </div>
            </div>
            <div class="p-sum">￥24.80</div>
            <div class="p-action"><a href="javascript:;">删除</a></div>
        </div>
    `,
    props:['cardata'],
    data:function(){
        return {
            caritem:this.cardata
        }
    }
})