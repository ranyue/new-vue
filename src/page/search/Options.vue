<template>
    <div class="searchOptions">
        <div>
            <span>分类</span>
            <ul>
                <li>品牌 ：3M</li>
            </ul>
        </div>
        <div>
            <span>品牌</span>
            <ul>
                <li>品牌 ：3M</li>
            </ul>
        </div>
        <div>
            <strong>您已选择</strong>
            <ul>
                <li>品牌 ：3M  x</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {



    }
</script>

<style lang="scss">
    .searchOptions {
        background:#ffffff;
        border:1px solid #e3e3e3;
        width:1158px;
        height:120px;
        border-bottom: none;
        >div{
            height: 40px;
              display: flex;
                align-items: center;
            span{
                height: 100%;
                width: 60px;
                background:#f4f4f4;
                border:1px solid #e3e3e3;
                display: flex;
                justify-content: center;
                align-items: center;
                border-left :none;
              
            }
            ul{
                width: 1100px;
                height: 100%;
                border-bottom: 1px solid #e3e3e3;
                 display: flex;
                align-items: center;
                padding-left: 20px;
                li{
                    font-size:14px;
                    color:#666a73;
                    line-height:14px;
                    margin-right: 50px;
                }
            }
            &:nth-of-type(1){
                display: flex;
                align-items: center;
                // justify-content: center;
                span{
                   
                }
                ul{

                }
            }
            &:nth-of-type(2){
                
            }
             &:nth-of-type(3){
                strong{
                    padding-left: 16px;
                    font-size:14px;
                    color:#666a73;
                    letter-spacing:0;
                    text-align:left;
                    width: 85px;                    
                }
                ul{
                    border-bottom: none;
                    display: flex;
                    align-items: center;
                    padding-left: 0;
                   
                    li{
                     background:#ffffff;
                        border:1px solid #f1496f;
                        height:28px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                         padding: 8px 10px;
                         margin-right: 7px;
                        
                    }
                }
            }
        }
    }
</style>