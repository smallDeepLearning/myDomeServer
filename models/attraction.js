/**
 * mongoose数据模型
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-28 19:42:25
 */

var mongoose = require('mongoose')

const attractionSchema = mongoose.Schema({
	name: String,
	description: String,
	localtion: { lat: Number, lng: Number },
	history: {
		event: String,
		notes: String,
		email: String,
		date: Date
	},
	updateId: String,
	approved: Boolean
}, {
	collection: 'attraction'
})


var Attraction = mongoose.model('Attraction', attractionSchema)

Attraction.find(function(err, attractions) {
	if (attractions.length) return
	new Attraction({
		name: '黄山',
		description: '五岳归来不看山，黄山归来不看岳！',
		localtion: { lat: 1, lng: 1 },
		history: {
			event: '黄山云景',
			notes: '---',
			email: '---',
			date: Date
		},
		updateId: '001',
		approved: true
	}).save()
})

module.exports = Attraction
