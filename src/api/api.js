/**
 * 服务端接口列表
 */

// 生产环境

// const apiPath = 'https://etrade.linkedcare.cn'

// 测试环境
const apiPath = 'https://etradetest.linkedcare.cn'

export const API = {
    // 查询购物车列表
    queryCartList: apiPath + '/etrade/business/cart/list',
    // 删除商品
    deleteCarts: apiPath + '/etrade/business/cart/delete',
    // 修改商品数量
    changeNum: apiPath + '/etrade/business/cart/operate',
    // 勾选商品
    selectGood: apiPath + '/etrade/business/cart/select',
    // 生成订单
    generateOrder: apiPath + '/etrade/business/order/generate',
    // 查询订单列表
    queryOrderList: apiPath + '/etrade/business/order/generate',
    // 订单提交
    submitOrder: apiPath + '/etrade/business/order/submit',
    // 查询地址列表
    queryAddressList: apiPath + '/etrade/business/address/list',
    // 添加地址
    addNewAddress: apiPath + '/etrade/business/address/add',
    // 更新地址
    updateNewAddress: apiPath + '/etrade/business/address/update',
    // 删除地址
    deleteAddress: apiPath + '/etrade/business/address/delete',
    // 设置默认地址
    setDefaultAddress: apiPath + '/etrade/business/address/set_default',
    // 获取地址列表
    getAreaList: apiPath + '/etrade/business/area/list',
    // 设置基础地址
    baseUrl: apiPath + '/etrade/',
    // 设置图片数据基础地址
    imageUrl: apiPath + '/etrade/img/',
    // 查询bannerList
    bannerList: apiPath + '/etrade/product/getBannerImg',
    // 设置产品详情地址
    productDetail: apiPath + '/etrade/product/detail',
    // 设置添加购物车
    addCart: apiPath + '/etrade/business/cart/add',
    // 设置产品列表搜索
    pcProductSearch: apiPath + '/etrade/enterprise/product/search',
    // app 产品搜索列表
    productSearch: apiPath + '/etrade/product/search',
    // 设置产品分类类目
    productClass: apiPath + '/etrade/product/productClass',
    // 设置订单列表
    myorderData: apiPath + '/etrade/business/order/list',
    // 设置订单详情
    orderdetail: apiPath + '/etrade/business/order/detail',
    // 设置发票开票
    applyinvoice: apiPath + '/etrade/business/invoice/save',
    // 设置查询购物车数量
    getCartNum: apiPath + '/etrade/business/cart/count',
    // 查詢用户默认列表
    getDefaultAddress: apiPath + '/etrade/business/address/select/default',
    // 找货助手系列:
    // 找货助手提交内容：
    insertGoodsAssist: apiPath + '/etrade/product/insertGoodsAssist',
    // 找货助手默认联系方式：
    getGoodsAssistMobile: apiPath + '/etrade/product/getGoodsAssistMobile',
    // payment系列
    // 获取订单价格
    getPayAmount: apiPath + '/etrade/business/pay/checkstand',
    // 提交支付认证的阶段
    paymentSubmit: apiPath + '/etrade/business/pay/submit',
    // 用户确认收货借口
    receiptGoods: apiPath + '/etrade/business/order/receipt/goods',
    //PC端添加购物车接口
    pcAddCart: apiPath + '/etrade/business/cart/add/batch',

    // PC所有产品类别
    allBrands: apiPath + "/etrade/enterprise/product/allbrands",

    // pc端 首页品牌配置项
    layoutBrand: apiPath + '/etrade/enterprise/product/layoutbrand',
    // pc端 首页热门商品配置项
    getHotProduct: apiPath + '/etrade/enterprise/product/search',





}

import { Fetch } from './../utils/utils.js'

// PC端一次性添加多个商品
export const pcAddCart = (arr) => {
    let obj = {
        'buyerId': userId,
        cartList: arr
    }
    console.log(obj);
    return Fetch(API.pcAddCart, obj)
}





/*
    下方是购物车所用到部分
*/

// 可能常量
const userId = '21:2:3'
const tenantId = '21'
    // 获取商品详细信息
export const getGoodsDetail = (productid) => {
    let obj = {
        productid,
        start: "0",
        num: "10",
        tenantId,
    };
    console.log(obj, 'apiPath')
    return Fetch(API.productDetail, obj)
}

// 请求购物车列表

export const queryCartList = () => {
    let obj = {
        'userId': userId
    }
    return Fetch(API.queryCartList, obj)
}

// 操作购物车
export const changeNum = (cartId, cartNum) => {
        let obj = {
            'userId': '21:2:3',
            'cartId': cartId,
            'cartNum': cartNum
        }
        return Fetch(API.changeNum, obj)
    }
    // 购车上商品删除
export const cartDelete = (id) => {
        let obj = null
        if (id) {
            obj = {
                'userId': '21:2:3',
                'cartId': id
            }
        } else {}
        return Fetch(API.deleteCarts, obj)
    }
    // 勾选商品
export const selectGood = (id, type, isSelected) => {
        console.log(isSelected)
        let obj = {
            'userId': userId,
            'id': id,
            'type': type,
            'isSelected': Number(isSelected)
        }
        return Fetch(API.selectGood, obj)
    }
    /*
        订单确认页面所需接口
    */

// 获取订单确认商品
export const orderGenerate = (items) => {
        console.log('orderGenerate')
        let obj = {
            userId: userId,
            items: items
        }
        return Fetch(API.generateOrder, obj)
    }
    /*
        订单页面 地址所需接口
    */

// 获取地址列表
export const queryAddressList = () => {
        let obj = {
            userId: userId
        }
        return Fetch(API.queryAddressList, obj)
    }
    // 设置默认地址
export const setDefaultAddress = (id) => {



        let obj = {
            id: id,
            userId: userId
        }
        return Fetch(API.setDefaultAddress, obj)
    }
    //添加新地址
export const addNewAddress = (area, name, mobile, address, zopCode, isDefault) => {
        let obj = {
            area: area,
            name: name,
            mobile: mobile,
            address: address,
            member: userId,
            zopCode: zopCode,
            isDefault: 1
        }
        return Fetch(API.addNewAddress, obj)
    }
    // 删除地址
export const deleteAddress = (addressId) => {
        let obj = {
            addressId: addressId
        }
        return Fetch(API.deleteAddress, obj)
    }
    //更新地址
export const updateNewAddress = (id, area, name, mobile, address, member, zopCode, isDefault) => {
    let obj = {
        id: id,
        area: area,
        name: name,
        mobile: mobile,
        address: address,
        member: userId,
        zopCode: zopCode,
        isDefault: 1
    }
    return Fetch(API.updateNewAddress, obj)
}


// order 提交
export const submitOrder = (addressId, cartId, storeInfo) => {
    let obj = {
        addressId: addressId,
        cartIds: cartId,
        member: userId,
        storeInfo: storeInfo

    }
    return Fetch(API.submitOrder, obj)
}

// 分类页商品搜索
export const productSearch = ({ searchtype, order, start, num, class1, class2, class3 }) => {
        let obj = {};
        if (!order) {
            obj = {
                searchtype,
                start,
                num,
                class1,
                class2,
                class3,
                tenantId,
            };
        } else {
            obj = {
                searchtype,
                start,
                num,
                order,
                class1,
                class2,
                class3,
                tenantId,
            };
        }

        console.log(obj);
        return Fetch(API.productSearch, obj)
    }
    //  搜索页商品搜索
export const search = ({ searchtype = 1, text, start = 0, num = 10, class3, brand }) => {
        console.log(class3, 'class3');
        let obj = {
            searchtype,
            text,
            start,
            num,
            tenantId,
            class3,
            brand
        };
        if (!class3) {
            delete obj.class3
        }
        if (!brand) {
            delete obj.brand;
        }
        if (!text) {
            delete obj.text;
        }
        // if (class3 & brand) {
        //     console.log('多');
        //     obj = {
        //         searchtype,
        //         // text,
        //         start,
        //         num,
        //         tenantId,
        //         // class3,
        //         brand,
        //     }
        // } else {
        //     console.log('少')
        //     obj = {
        //         searchtype,
        //         text,
        //         start,
        //         num,
        //         tenantId,
        //     }
        // }


        console.log(obj, 'api');
        return Fetch(API.pcProductSearch, obj)
    }
    //获取商品分类列表
export const getProductClass = () => {

    let obj = {

    }
    return Fetch(API.productClass, obj)

}

export const getAllBrands = () => {
    return Fetch(API.allBrands)

    let obj = {
        searchtype,
        text,
        start,
        num,
        tenantId,
    }
    console.log(obj);
    return Fetch(API.productSearch, obj)

    let obj = {
        searchtype,
        text,
        start,
        num,
        tenantId
    }
    console.log(obj)
    return Fetch(API.productSearch, obj)
}




// 首页品牌配置项 
export const layoutBrand = () => {
    return Fetch(API.layoutBrand)
}

export const getHotProduct = () => {
    let obj = {
        searchtype: 4,
        tenantId: tenantId,
        start: 0,
        num: 20
    }
    return Fetch(API.getHotProduct, obj);
}

export const getPromption = () => {
    let obj = {
        tenantId: tenantId,
        searchtype: 6,
        start: 0,
        num: 10
    }
    return Fetch(API.productSearch, obj)

}