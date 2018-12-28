/**
 * 数据集模块
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-28 13:52:59
 */

var mongoose = require('mongoose')

// 申明一个mongooses对象
var UsersSchema = new mongoose.Schema({
	name: String,
	paw: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

// 每次执行都会调用，时间更新操作
UsersSchema.pre('save', function(next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	} else {
		this.meta.updateAt = Date.now()
	}
	next()
})

// 查询的静态方法
UsersSchema.statics = {
	fetch: function(cb) {
		return this
			.find()
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById: function(id, cb) {
		return this
			.findOne({
				_id: id
			})
			.exec(cb)
	}
}

// 暴露出去的方法
module.exports = UsersSchema
