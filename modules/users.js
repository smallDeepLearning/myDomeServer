/**
 * 数据模型模块
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-28 14:05:23
 */

var mongoose = require('mongoose')
var UsersSchema = require('../schemas/users') // 拿到数据模块
var Users = mongoose.model('Users', UsersSchema) // 编译生成Movie模型

module.exports = Users
