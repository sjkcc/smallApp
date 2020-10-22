// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sums: event.i + event.j
  }
}