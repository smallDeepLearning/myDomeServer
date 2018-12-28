/**
 * vacation接口
 * @author JYuan (13826506407@139.com)
 * @date   2018-12-28 15:51:34
 */

const express = require('express')
const router = express.Router()
const Vacation = require('../models/vacation')

router.get('/vacation', (req, res) => {
	Vacation.find({ available: true }, function (err, vacations) {
		var context = {
			vacations: vacations.map(function(vacation) {
				return {
					name: vacation.name,
					slug: vacation.slug,
					category: vacation.category,
					sku: vacation.sku,
					description: vacation.description,
					price: vacation.getDisplayPrice(),
					tags: vacation.tags,
					isSeason: vacation.isSeason,
					maximumGuests: vacation.maximumGuests,
					available: vacation.available,
					packagesSold: vacation.packagesSold
				}
			})
		}
		res.json(context)
	})
})

module.exports = router
