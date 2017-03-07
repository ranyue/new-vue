<template>
    <li class="modelButton"  v-on:click="handleClick" >
        <div>{{value.specification}}</div>
      
    </li>
</template>
<script>
    export default {
        props : {
            value : {
                type : Object,
                required : true,
                default : {}
            }
        },
        methods : {
            handleClick : function(){
                // 选择或者取消对应的商品规格
                this.$emit('selected_models_change', this.value.productId);
            } 
        }
    }
</script>

<style lang="scss">
    li.modelButton {
        background:#ffffff;
        border:1px solid #e3e3e3;
        padding: 5px 10px 8px 11px;
         cursor:pointer;
        div{
            font-size:14px;
            color:#666a73;
           
        }
    }
    // .selectedStyle {   
    //     background-image :url('../../assets/check.png');
    //     background-size :25%;
    //     border-color:#f1496f;
    //     background-repeat :no-repeat;
    //     background-position: 100% 100%;
    //     div{
    //         color : #f1496f;
    //     }       
    // }
</style>