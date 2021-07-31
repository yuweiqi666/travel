import request from '../utils/request'

export const getCurrentCityApi = () => {
  return request({
    method: 'GET',
    url: '/currentCity'
  })
}

export const getImgRunApi = () => {
  return request({
    method: 'GET',
    url: '/imgsRun'
  })
}

export const getIconsApi = () => {
  return request({
    methods: 'GET',
    url: '/iconList'
  })
}

export const getRecommandListApi = () => {
  return request({
    method: 'GET',
    url: '/recommandList'
  })
}
