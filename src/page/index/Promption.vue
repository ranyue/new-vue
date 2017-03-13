<template>
    <div class="promption">
        <div class="logo">
            <h1>爆款专区</h1>
            <p>距离结束</p>
            <Timer></Timer>
            <a href="">点击查看全部</a>
        </div>
        <PicsSlider mDistance='520'>
             <IndexProduct v-for='(item,index) in promptionList' :key='index' :product='item'></IndexProduct>
        </PicsSlider>
    </div>
</template>

<script>
    import './Promption.scss'
    import PicsSlider from './PicsSlider.vue'
    import IndexProduct from './IndexProduct.vue'
    
    import Timer from './Timer.vue'
    export default {
        components: { PicsSlider, Timer , IndexProduct},
        computed: {
            promptionList(){
                return this.$store.state.index.promptionList
            }
        }
        
    }
</script>
