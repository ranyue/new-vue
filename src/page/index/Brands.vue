<template>
    <div class="brands">
        <div class="logo">品牌专区</div>
        <div class="content">
           <MaskView v-for='(brand, index) in brandList' :key='index'  showLink='true' :brand='brand' color='#00a8cb'>
               <div class='brand-logo' v-bind:style="{ 'backgroundImage': 'url('+brand.image+')' }"></div>
           </MaskView>
        </div>
    </div>
</template>
<script>
    import './Brands.scss'
    import MaskView from './MaskView.vue'
    export default {
        components: { MaskView },
        
        computed: {
            brandList(){
               return  this.$store.state.index.layoutBrand || null
            } 
        }
        
    }
</script>