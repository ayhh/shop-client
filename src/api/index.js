import request from './ajax'


export const reqCategoryList = () =>{
  return request({
    url: 'v2/get/product/getBaseCategoryList',
    method: 'get'
  })
}

 

// reqCategoryList()