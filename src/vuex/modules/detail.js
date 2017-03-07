import * as types from '../mutation-types';
import {API} from '../../api/api.js';
import {Fetch} from '../../utils/utils.js';


const state = {
    goods_model : [
        {
            specification : null,
            salesPrice : null,
            agreePrice : null,
            productId : null,
            sku : null,
            selected : false,
            num : 0 ,
            goodsSkuId : null,
        },
    ],

    get_goods_data_success : false,
    category : [],
    goods_data : {
        name : null,
        subtitle : null ,
        hasAgreePrice : 0,
        brandName : null,
        register : null,
        saledNumber : null,
        storeName : null ,
    },
    goods_second_info : {
        unit : null,
        attribute : null,
        boxBin : null,
        origin : null,
        length : null,
        width : null,
        height : null,
        weight : null,
    },
    goods_image : {
        goodsImage : null,
        imgList : [],
        code : null,
        lcCode : null,
    }
};

const getters = {

    get_selected_model(state){
        return state.goods_model.filter((model)=>{
           return model.selected == true;
        })
    },
    get_subtotal_num(){
        let num = 0;
        for(let i=0;i<state.goods_model.length;i++){
            if(state.goods_model[i].selected){
                num += state.goods_model[i].num;
            }
        }
        return num ;
    },
    get_subtotal_price(){
        let num = 0;
        for(let i =0;i<state.goods_model.length;i++){
             if(state.goods_model[i].selected){
                 num += state.goods_model[i].num*state.goods_model[i].salesPrice;
             }
        }
        return num ;
    }
}

const actions = {
   //获取商品详情
    get_goods_detail({commit},payload){
        Fetch(API.productDetail,{...payload})
       .then((response)=>{
             console.log(response,11);
            if(response.code == 'A0000'){
                 commit(types.GET_GOODS_DATA_SUCCESS,{ response})
            }else{
                   commit(types.GET_GOODS_DATA_FAILED,{response})
               }
        }
    )
     .catch(function (error) {
           console.log(error);
        });
    },
     //添加到购物车
    //  "buyerId":"1:2:3",
    // "goodsId":66,
    // "goodsSkuId":65,
    // "goodsNum":2
    add_to_shoping_car ({commit},payload){
        Fetch(API.addCart,{...payload})
        .then(
            response =>{
                console.log(response);
                if(response.code == 'A0000'){
                    commit(types.ADD_TO_SHOPING_CAR_SUCCESS)
                }else{  
                    commit(types.ADD_TO_SHOPING_CAR_FAILED)
                }
            }
        )
        .catch(e=>{
            console.log(e)
        })
    },
};

const mutations = {
      //添加到购物车成功
    [types.ADD_TO_SHOPING_CAR_SUCCESS](state){
        
        console.log('成功添加到购物车');
    },
    // 添加到购物车失败
    [types.ADD_TO_SHOPING_CAR_FAILED](state){

        console.log('添加到购物车失败');
    },
    
    // 更改商品规格
    [types.CHANGE_GOODS_MODEL](state,id){
       

        for(let i =0;i<state.goods_model.length;i++){
          
            
                console.log(state.goods_model[i].productId,id);
                if(state.goods_model[i].productId == id){
                    //如果已经被选中，再点即取消
                      console.log(state.goods_model[i].productId);
                    if(state.goods_model[i].selected){
                        state.goods_model[i].num = 0;
                    }else{
                        // 没有选中， 再点击即选中
                        state.goods_model[i].num = 1;
                    }
                    state.goods_model[i].selected = !state.goods_model[i].selected;
                }
            
            
        }       
    },

    //获取商品信息成功
    [types.GET_GOODS_DATA_SUCCESS](state,{response}){
        // 确认页面 获取数据是否成功
        state.get_goods_data_success = true;
        // 获取页面标题
        for(let i=0;i<5;i++){
            console.log(response.productspu[`category${i}stName`]);
            if(response.productspu[`category${i}stName`]){
                state.category.push(response.productspu[`category${i}stName`]);
            }
        }

        
        //获取商品信息
        state.goods_data.name = response.productspu.name;//商品名称
        state.goods_data.subtitle =  response.productspu.subtitle;// 次标题
        state.goods_data.hasAgreePrice =  response.productspu.hasAgreePrice;// 协议价
        
        // state.goods_data.salesPrice =  response.productspu.salesPrice ;
        state.goods_data.brandName =   response.productspu.brandName; //品牌
        state.goods_data.register =  response.productspu.medicalRegistNum;     //注册证号
        state.goods_data.saledNumber =  response.productspu.saledNumber;//销售量
        state.goods_data.storeName = response.productspu.storeName;//供应商
        // 商品规格 
        const length = response.productsku.length;
        let model = [];
        for(let i =0;i<length;i++){
                model[i]={
                    specification : response.productsku[i].specification,// 型号
                    salesPrice : response.productsku[i].salesPrice, // 价格
                    agreePrice : response.productsku[i].agreePrice , // 是否为协议价
                    productId : response.productsku[i].productId,// 商品id
                    sku : response.productsku[i].sku, // 规格sku 编码 
                    goodsSkuId : response.productsku[i].id, 
                    selected : false,
                    num : 0
                }
        }
        state.goods_model = model;
        //商品次要信息
        state.goods_second_info.unit = response.productspu.unit;//单位
        state.goods_second_info.attribute = response.productspu.attribute;//材质
        state.goods_second_info.boxBin = response.productspu.boxBin;//箱规
        state.goods_second_info.origin = response.productsku[0].origin;//产地
        state.goods_second_info.length = response.productsku[0].length;//长
        state.goods_second_info.width = response.productsku[0].width;//宽
        state.goods_second_info.height = response.productsku[0].height;//高
        state.goods_second_info.weight = response.productsku[0].weight;//重量
        // 
        state.goods_image  = {
            goodsImage : response.productspu.goodsImage,
            imgList : response.productspu.imgList,
            lcCode : response.productspu.lcCode,
            code : response.productspu.code,
        }
    },
    // 获取商品信息失败
    [types.GET_GOODS_DATA_FAILED](state,{data}){
        state.get_goods_data_failed = true;
    },
    // 删除 商品规格 从 selected_model
    [types.DELETE_SELECTED_MODEL](state,id){
       
        for(let i =0;i<state.goods_model.length;i++){
               console.log('mutation',i)
            if(state.goods_model[i].productId == id){
                state.goods_model[i].num = 0;
                state.goods_model[i].selected = false;
            }
        }
    },
    // 添加购买个数
    [types.HANDLE_BUY_NUM](state,{num,id}){
        console.log('HANDLE_BUY_NUM',num,id)
       for(let i =0;i<state.goods_model.length;i++){
            if(state.goods_model[i].productId == id){
                state.goods_model[i].num = num;
            }
        }
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}

// {"msg":null,
// "code":"A0000",
// "productsku":[{
//     "agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1294,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"278.30",
//     "sku":"FDST006-1",
//     "specification":"XS",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0,
//     "width":0
//     },
//     {"agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1295,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"278.30",
//     "sku":"FDST006-2",
//     "specification":"S",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0,
//     "width":0
//     },
//     {"agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1296,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"278.30",
//     "sku":"FDST006-3",
//     "specification":"M",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0
//     ,"width":0
//     },
//     {"agreePrice":"",
//     "batchNumber":1,
//     "goodLabel":0,
//     "goodStatus":0,
//     "goodsImage":"",
//     "height":0,
//     "id":1297,
//     "length":0,
//     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
//     "origin":"马来西亚",
//     "productId":465,
//     "saledNumber":0,
//     "salesPrice":"303.60",
//     "sku":"FDST006-4",
//     "specification":"L",
//     "stock":10000,
//     "stockWarning":10,
//     "weight":0,
//     "width":0
//     }],

//   "productspu":{
//         "attribute":"乳胶",
//         "boxBin":"",
//         "brandId":32,
//         "brandName":"KOOLTOUCH/顶端",
//         "category1stId":69,
//         "category1stName":"感染预防",
//         "category2stId":171,
//         "category2stName":"手套",
//         "category3stId":172,
//         "category3stName":"乳胶手套",
//         "code":"",
//         "couponId":0,
//         "createDate":{
//             "date":21,
//             "day":2,
//             "hours":13,
//             "minutes":54,
//             "month":1,
//             "seconds":47,
//             "time":1487656487000,
//             "timezoneOffset":-480,
//             "year":117
            // },

    //     "discountId":0,
    //     "goodsImage":"https://lcsaas.oss-cn-hangzhou.aliyuncs.com/etrade/test/465/FDST006-1.jpg",
    //     "goodsInstruction":"1. 有粉光面，穿戴容易\n2. 加厚耐用型，面对病原体和污染提供更有力的保护屏障",
    //     "hasAgreePrice":0,
    //     "id":465,
    //     "imgList":["https://lcsaas.oss-cn-hangzhou.aliyuncs.com/etrade/test/465/FDST006-1.jpg"],
    //     "lcCode":"1100000455000",
    //     "linkedProduct":"",
    //     "lowestPrice":"278.30",
    //     "medicalRegistNum":"",
    //     "modifyDate":{
    //         "date":21,
    //         "day":2,
    //         "hours":13,
    //         "minutes":54,
    //         "month":1,
    //         "seconds":47,
    //         "time":1487656487000,
    //         "timezoneOffset":-480,
    //         "year":117
    //      },
    //     "name":"KOOLTOUCH/顶瑞 加厚有粉乳胶手套 KT007 6g 10盒/箱×100只/盒",
    //     "origin":"",
    //     "saledNumber":0,
    //     "salesStatus":0,
    //     "serviceAreaCity":"",
    //     "serviceAreaProvince":"",
    //     "storeId":7,
    //     "storeName":"上海富电国际贸易有限公司",
    //     "subtitle":"1.有粉光面，穿戴容易\n2.加厚耐用型，面对病原体和污染提供更有力的保护屏障",
    //     "unit":"箱"
    //     }
    // }