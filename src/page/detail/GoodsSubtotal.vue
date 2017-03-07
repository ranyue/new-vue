
<template>
    <div class="subtotal">
        <div>
            <span>已选&nbsp;{{number}}&nbsp;个</span>
            <span>￥{{totalPrice}}</span>
        </div>
       <button type="text" v-on:click="addtoshopingcart">加入购物车</button>
    </div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex';
    export default { 
      

        computed :{ 
            ...mapGetters({
                number : 'get_subtotal_num',
                totalPrice: 'get_subtotal_price'
            })
        },
        
        methods : {
            // 加入购物车

//             请求参数  
// {"buyerId":"1:2:3","goodsId":66,"goodsSkuId":65,"goodsNum":2}
// 返回结果
// 失败 ： {"code":"A0001","msg":"request parameters is invalid !"}
// 成功 ： {"code":"A0000","msg":null}

            addtoshopingcart : function(){
             
                this.$store.dispatch('add_to_shoping_car',{
                    "buyerId":"1:2:3",
                    "goodsId":1,
                    "goodsSkuId":1,
                    "goodsNum":4
                    }
                )
            }
        }
    }
</script>

<style lang="scss">
    .subtotal{
        margin-left: 80px;
        margin-top: 14px;
       
       div{
         background:#f4f4f4;
         width:723px;
         height:36px;
         display: flex;
         align-items: center;
         >span{
                font-size:14px;
                line-height:14px;
            
             &:nth-of-type(1){
                padding-left: 10px;
                color:#3d3d3d;
                font-weight: bolder;
             }
              &:nth-of-type(2){
                color:#f1496f;
                padding-left: 24px;
             }
           
         }
       }
       button{
           margin-top: 20px;
            background:#f1496f;
            border:2px solid #f1496f;
            border-radius:2px;
            width:132px;
            height:46px;
            color:#fff;
            font-size: 18px;
            margin-bottom: 30px;
       }
    }
</style>