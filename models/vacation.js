/**
 * vacation数据模型
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-28 17:57:56
 */
const mongoose = require('mongoose')

/**
 * 定义vacation模型的属性，属性的类型
 * 参数1为表，定义了属性+属性类型
 * 参数2为表的名字
 */
const vacationSchema = mongoose.Schema({
	name: String,
	slug: String,
	category: String,
	sku: String,
	descripton: String,
	priceInCents: Number,
	tags: [String],
	inSeason: Boolean,
	available: Boolean,
	requiresWaiver: Boolean,
	maximumGuests: Number,
	notes: String,
	packagesSold: Number
}, {
	collection: 'vacation'
})

vacationSchema.methods.getDisplayPrice = function () {
	return '$' + (this.priceInCents / 100).toFixed(2)
}

var Vacation = mongoose.model('Vacation', vacationSchema)

Vacation.find(function(err, vacations) {
	if (vacations.length) return
	new Vacation({
		name: 'Hood River Day Trip',
		slug: 'hood-river-day-trip',
		category: 'Day Trip',
		sku: 'HR199',
		descripton: 'Spend a day sailing on the Columbia and ' + 'enjoying craft beers in Hood River!',
		priceInCents: 9995,
		tags: ['day trip', 'hood river', 'sailing', 'windsurfing', 'breweries'],
		inSeason: true,
		maximumGuests: 16,
		available: true,
		packagesSold: 0
	}).save()
})

module.exports = Vacation
