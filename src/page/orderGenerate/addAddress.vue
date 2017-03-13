<template>
  <div class='add-address'>
    <div>
      <div>收货人</div>
      <div>所在地区</div>
      <div>地址</div>
      <div>手机</div>
    </div>
    <div>
      <div>
        <el-input v-model='editAddress.name' placeholder="姓名"></el-input>
      </div>
      <div>
        <el-cascader :options="options" v-model="selectedOptions" @change="handleChange">
        </el-cascader>
      </div>
      <div>
        <el-input v-model='editAddress.completeAddress' placeholder="地址"></el-input>
      </div>
      <div>
        <el-input v-model='editAddress.mobile' placeholder="手机号码"></el-input>
      </div>
      <div>
        <input type="button" @click='doAddNewAddress' name="" value="保存">
        <input type="button" name="" @click='close' value="取消">
      </div>
    </div>
  </div>
</template>
<script>
  import options from './area.js';
  export default {
    name: 'AddAddress',
    props: ['address','show'],
    data() {
      return {
        options: options,
        selectedOptions: []
      };
    },
    computed: {
      editAddress() {
        let obj = {
          name: this.address.name,
          completeAddress: this.address.completeAddress,
          mobile: this.address.mobile
        }
        this.selectedOptions = [this.address.areaProvinceId, this.address.areaCityId, this.address.area]
        return obj
      }
    },
    mounted() {

    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      doAddNewAddress() {
        if (this.editAddress.name == '') {
          alert('请填写收货人！')
          return
        } else if (this.editAddress.completeAddress == '') {
          alert('请填写收货地址！')
          return
        } else if (!/^1[34578]\d{9}$/.test(this.editAddress.mobile)) {
          alert('请填写正确手机号码！')
          return
        } else if (this.selectedOptions.length != 3) {
          alert('请选择正确所在区域！')
          return
        }



        if (this.address.id) {
          this.$store.dispatch('doUpdateAddress', {
						id: this.address.id,
						area: this.selectedOptions[2],
            name: this.editAddress.name,
            mobile: this.editAddress.mobile,
            address: this.editAddress.completeAddress
          })
        } else {
          this.$store.dispatch('doAddNewAddress', {
            area: this.selectedOptions[2],
            name: this.editAddress.name,
            mobile: this.editAddress.mobile,
            address: this.editAddress.completeAddress
          })
        }

      },
      close(){
        this.$store.dispatch('doShowAddAddress',0);
      }
    }
  }

</script>
<style lang='scss' scoped>
  @import './../../style/common';
  .add-address {
    display: flex;
    background-color: #fff;
    padding: 20px;
    >div {
      >div {
        height: 40px;
        line-height: 40px;
      }
      &:nth-of-type(1) {
        width: 91px;
        text-align: center;
        color: #666a73;
      }
      &:nth-of-type(2) {
        >div {
          &:nth-of-type(1) {
            input {
              border: 1px solid #e3e3e3;
              border-radius: 4px;
              width: 198px;
              height: 34px;
            }
          }
          &:nth-of-type(2) {
            .el-cascader {
              width: 320px;
              height: 36px;
            }
          }
          &:nth-of-type(3) {
            input {
              border: 1px solid #e3e3e3;
              border-radius: 4px;
              width: 389px;
              height: 34px;
            }
          }
          &:nth-of-type(4) {
            input {
              border: 1px solid #e3e3e3;
              border-radius: 4px;
              width: 198px;
              height: 34px;
            }
          }
          &:nth-of-type(5) {
            >input {
              border: 1px solid #e3e3e3;
              border-radius: 4px;
              width: 65px;
              height: 34px;
              &:nth-of-type(1) {
                background-color: $baseColor;
                color: #fff;
                margin-right: 8px;
              }
              &:nth-of-type(2) {
                background: #ffffff;
                border: 1px solid #9397a2;
                border-radius: 2px;
                width: 63px;
                height: 30px;
              }
            }
          }
        }
      }
    }
  }

</style>
