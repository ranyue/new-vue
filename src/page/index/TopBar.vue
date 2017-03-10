<template>
   <div class="header-top">
          <div class="front">
              <span>领健浦东张江1店</span>
              <span> | 积分 1,000</span>
          </div>
          <div class="end">
              <SearchBox holdName="姓名/拼音/手机">
                    <i class="material-icons">search</i>
              </SearchBox>
              <i class="material-icons">face</i>
              <i class="material-icons">account_circle</i>
              <p>前台小丽</p>
          </div>
      </div>
</template>

<script>
    import SearchBox from './SearchBox.vue'
    import './TopBar.scss'
    export default {
        components: { SearchBox }
    }
</script>