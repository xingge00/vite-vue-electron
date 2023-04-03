import request from './request.js'

export function sendMsg(data) {
  return request({
    url: '/command',
    method: 'post',
    data,
  })
}
