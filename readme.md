## 1、组件未拆分前
+ 优点不用考虑组件传值
+ 缺点责任不明确
## 2、将加减按钮拆分为组件
+ 加组件只负责加
+ 渲染数组的组件未拆分
+ 这样构成了子组件修改父组件的数据
  ### 注意点!!!
+ 修改数字的逻辑只能在父组件中完成，即增减操作的逻辑写在父组件的methods中
+ 在父组件中调用自组建时，向子组件绑定自定义事件 v-on:** 自定义事件名称 **=事件
+ 在自组件中定义事件，在事件内部通过this.$emit("自定义事件名称"),变相调用父组件中的方法
  ### 记忆忙点!!!，父组件如何向子组件传递事件:
  - 通过绑定自定义事件的方式进行传递
  - 自组件通过$emit进行调用
## 3、将渲染数字的UI部分拆分成单独的组件
### 此时问题出现了，兄弟组件如果进行值得传递，或者更精确的描述是，兄弟组件如何修改兄弟组件的数据呢？
+ eventbus 类似pubsub
  + ...
+ vuex
  + 包含四个主要的参数:
    + state 
    + mutations
    + actions
    + getters
    +  #### module 用法还不太熟悉
  + Vuex上面还有几个常用的方法：
    + mapActions
    + mapGetters
    + mapMutations
    + mapState
    + 使用方法:
      - 参数都为数组 如 ``` mapState(["count"]) ```
      - 返回值都是对象,一般需要结合扩展运算符使用：如
        ```
        computed: {
        ...mapState(["count"]),
        ...mapGetters(["evenOrOdd"])
        }
        ```
      - 关于什么时候使用扩展运算符什么时候不使用,主要看子组件是否有自定义方法是否需要混入，如
      ``` 
      Vue.component("Sub",{
            template:`
            <button @click="sub">-</button>
            `,
            // 如果不混入组件内部方法可以直接这样使用
            methods:mapActions(["sub"])
        })
      ```
        - 如果有则使用扩展运算符，如果没有可以不需要使用 如：
        ``` 
         methods:mapActions(["sub"])
        ```
      - map系类方法也可以重新赋值使用 
       ``` 
       mapActions({addson:"add"}) 
       ``` 


