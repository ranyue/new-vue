//  商品一个主图及四个附图 及下面的数据显示
<template>
    <div class="goodsShow">
        <div>
            <img v-bind:src="show_data.goodsImage" ref="main" alt="主图">
        </div>
        <div>
            <div v-for="imgsrc in show_data.imgList" >
                <img v-bind:src="imgsrc" alt="附图" v-on:mouseenter="handleEnter" v-on:mouseout="handleOut">
            </div>
        </div>
        
        <div class="goodsshow-data">
            <!--<div>
                <i>编号</i><i>{{show_data.lcCode}}</i>
            </div>-->
            <div>
                <i>LC编号</i><i>{{show_data.lcCode}}</i>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
   
        computed : {
            ...mapState({
                show_data(state){
                    return  state.detail.goods_image;
                },     
            })
        },
        methods : {
            handleEnter(e){
                console.log(this.$refs.main.src, e.target.src);
              this.$refs.main.src = e.target.src;
            },
            handleOut(){
                this.$refs.main.src =this.show_data.goodsImage;
            }
        }
    }
</script>
<style lang="scss">
    .goodsShow{
        >div{
            &:nth-of-type(1){
                border:1px solid #979797;
                width:314px;
                height:326px;
                margin-bottom: 8px;
                img{
                    width: 100%;
                }
            }
            &:nth-of-type(2){
                display: flex;
                >div{
                    border:1px solid #e3e3e3;
                    width:55px;
                    height:55px;
                    margin-left: 5px;
                    &:hover{
                        border-color: #f1496f;
                    }
                    img{
                        width: 100%;
                    }
                }
               
            }
            &:nth-of-type(3){
                >div{
                    display: flex;
                    margin-top: 20px;
                    >i{
                        font-size:12px;
                         line-height:24px;
                         text-align:left;
                        &:nth-of-type(1){
                            color:#666a73;
                            width: 66px;  
                        }
                        &:nth-of-type(2){
                            color:#3d3d3d;
                           
                           
                        }
                    }
                }
            }
        }
    }
</style>