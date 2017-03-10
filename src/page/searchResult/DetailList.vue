<template>
   <div class="goodsList">
        <div>
             
              <img v-bind:src="value.goodsImage" ref="main" alt="附图">
        </div>
       
        <div>
            <span>{{value.name}}</span>
            <div>
                <span>LC编码</span>
                <span>{{value.lcCode}}</span>
            </div>
        </div>
        <div>
            <span>￥{{value.lowestPrice}}</span>
        </div>
        <div>
             <button type="button" v-on:click="handleClick">查看详情</button>
        </div>
        
    </div> 
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        props : {
            value : {
                type:Object,
                default: {
                }
            }
        },
         computed : {
            ...mapState({
               

            })
        },
        methods : {
             //“productid”:”12345”, “start”:”0”, “num”:”10”，“tenantId”：“abcd”
            handleClick(){
                console.log(this.value.id,'click');
                this.$router.push({
                    path:'./detail',
                    query :{
                       productid : this.value.id,    
                    }
                })
            }
        },
        
    }
</script>
<style lang="scss">
    .goodsList{
        background:#ffffff;
        border:1px solid #e3e3e3;
        width:1158px;
        height:189px;
        display: flex;
        align-items:  center;
        >div{
            &:nth-of-type(1){
                background:#ffffff;
                border:1px solid #ebebeb;
                width:99px;
                height:99px;
                margin-left: 65px;
                img{
                    width: 100%;
                }
            }
            &:nth-of-type(2){
                width: 240px;
                height: 100px;
                 color:#3d3d3d;
                 margin-left: 20px;
                >span{
                    font-size:14px;  
                    letter-spacing:0;
                }
                >div{
                    display: flex;
                    margin-top: 20px;
                   span{
                        font-size:12px;    
                        line-height:24px;
                        &:nth-of-type(1){
                            width: 50px;
                            margin-right: 20px;
                        
                        }
                        &:nth-of-type(2){
                            
                        }
                   } 
                    
                }
            }
            &:nth-of-type(3) {
                width: 100px;
                height: 20px;
                margin-left: 360px;
                span{
                    font-size:14px;
                    color:#f1496f;
                    letter-spacing:0;
                }
                
            }
            &:nth-of-type(4){
                margin-left: 100px;
                button{
                    background:#f1496f;
                    border-radius:2px;
                    width:101px;
                    height:32px;
                    cursor:pointer;
                    color : #fff;
                    letter-spacing:0;
                    font-size: 14px;
                }
            }
        }
    }

</style>