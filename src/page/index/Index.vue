<template>
  <div class="container">
      <TopBar></TopBar>
      <SearchBar></SearchBar>
      <NavBar :navnames="navnames"></NavBar>
      <Slider></Slider>
      <Statistics></Statistics>
      <Promption></Promption>
      <Brands></Brands>  
      <Scene></Scene>
      <HotGoods></HotGoods>
      <div class="publish">
            <i class="material-icons">insert_drive_file</i>
            <div>
                <p>没找到想要的?</p>
                <p>发布采购需求 ></p>
            </div>
      </div>
      <FooterView></FooterView>
  </div>
</template>

<script>
import TopBar from './TopBar.vue'
import SearchBar from './SearchBar.vue'
import NavBar from './NavBar.vue'
import Slider from './Slider.vue'
import Statistics from './Statistics.vue'
import Brands from './Brands.vue'
import Promption from './Promption.vue'
import Scene from './Scene.vue'
import HotGoods from './HotGoods.vue'
import FooterView from './FooterView.vue'
import './Index.scss'

export default {
  components: { TopBar, SearchBar, NavBar, Slider, Statistics, Brands, Promption, Scene, HotGoods, FooterView },
  computed: {
  },
  data() {
      return {
          navnames: [
          {
              name: "商品分类",
              linkto: "#mertype"
          }, 
          {
              name: "爆款专区",
              linkto: "#zone"
          }, 
          {
              name: "快速采购",
              linkto: "#quickbuy"
          }, 
          {
              name: "热门商品",
              linkto: "#popmer"
          }, 
          {
              name: "场景采购",
              linkto: "#specialbuy"
          }]
      }
  },
  beforeCreate(){
    this.$store.dispatch('indexInitData');
  }

}
</script>
