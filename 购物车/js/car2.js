$(function(){
    $(".checkall").change(function(e) {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));

    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function() {
   
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

    });
// 增减商品数量

    $(".increment").click(function() {
      var n = $(this).parents(".cart-item").find(".itxt").val();
      n++;
      $(this).parents(".cart-item").find(".itxt").val(n);

      var p = $(this).parents(".cart-item").find(".p-price").text();
    
      p =p.substr(1)
      var sum ="￥"+ p*n;
      $(this).parents(".cart-item").find(".p-sum").text(sum)
      getSum()
    });
    $(".decrement").click(function() {
       
        var n = $(this).parents(".cart-item").find(".itxt").val();
        console.log(typeof n);
        if(n==1){
            return
        }
        n--;
        $(this).parents(".cart-item").find(".itxt").val(n);
        var p = $(this).parents(".cart-item").find(".p-price").text();
      
        p =p.substr(1)
        var sum ="￥"+ p*n;
        $(this).parents(".cart-item").find(".p-sum").text(sum)

        getSum()
    });

    $(".itxt").change(function(){
        var n = $(this).val();
        console.log(n);
        var p = $(this).parents(".cart-item").find(".p-price").text();
    
        p =p.substr(1)
        var sum ="￥"+ ((p*n).toFixed(2));
        $(this).parents(".cart-item").find(".p-sum").text(sum)
        getSum()
    })
    function getSum(){
        console.log("获取总件数,获取总价格");
        var count = 0;
        var money = 0;
        $(".itxt").each(function(i,e){
            count+= Number($(e).val());
        });
        $(".amount-sum em").text(count);

    }

 


})