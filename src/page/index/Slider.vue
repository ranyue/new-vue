<template>
    <div class="slider">
        <SiderBar></SiderBar>
        <el-carousel height="420px" indicator-position="inside">
            <el-carousel-item v-for="item in 4">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import SiderBar from './SiderBar.vue'
    import './Slider.scss'
    export default {
        components: { SiderBar }
    }
</script>