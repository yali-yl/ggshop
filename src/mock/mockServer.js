/*
使用mockjs提供mock接口
 */
import Mock from 'mockjs'
import data from './data.json'


//返回商品（goods）列表的接口
Mock.mock('/goods',{code:0,data: data.goods})
//返回评论（ratings）列表的接口
Mock.mock('/ratings',{code:0,data: data.ratings})
//返回商家（info）列表的接口
Mock.mock('/info',{code:0,data: data.info})

// export default ??? 不需要向外暴露任何数据，只需要保证能执行即可

