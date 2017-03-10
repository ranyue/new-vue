<template>
   <div class="search-bar">
          <div class="logo">
              <img src="http://placehold.it/160x70">
          </div>
          <div class="search-box no-flex">
              <SearchBox holdName="请输入关键字">
                    <span>搜索</span>
              </SearchBox>
          </div>
          <div class="cart">
            <button>
                <i class="material-icons">shopping_cart</i>
                <span>购物车</span>
                <div></div>
            </button>
          </div>
      </div>
</template>

<script>
    import SearchBox from './SearchBox.vue'
    import './SearchBar.scss'
    export default {
        components: { SearchBox }
    }
</script>