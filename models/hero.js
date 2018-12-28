/**
 * heros数据模型
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-28 15:41:20
 */
const mongoose = require('mongoose')

/**
 * 定义hero数据模型
 * 参数1为表，定义了字段+类型
 * 参数2为表的名字
 */
const heroSchema = mongoose.Schema({
	name: String,
	age: String,
	sex: String,
	address: String,
	dowhat: String,
	imgArr: [],
	favourite: String,
	explain: String
}, {
	collection: 'myhero'
})

// 导出hero数据模型
const Hero = module.exports = mongoose.model('hero', heroSchema)
