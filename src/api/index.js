import request from './ajax'
import mock from './mock';

export const reqCategoryList = () =>{
  return request({
    url: 'v2/get/product/getBaseCategoryList',
    method: 'get'
  })
}


// reqCategoryList()

export const reqBannerList = () => {
  return mock({
    url: '/banner',
    method: 'get'
  })
}

export const reqFloorList = () => {
  return mock({
    url: '/floor',
    method: 'get'
  })
}
