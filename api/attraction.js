/**
 * attraction接口
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-28 19:49:44
 */

const express = require('express')
const router = express.Router()
const Attraction = require('../models/attraction')

router.get('/attractions', (req, res) => {
	Attraction.find({ approved: true }, function (err, attractions) {
		if (err) return res.send(500, 'Error occoured: database error')
		res.json(attractions.map(function(a) {
			return {
				name: a.name,
				id: a._id,
				description: a.description,
				location: a.location
			}
		}))
	})
})

router.post('/attraction', (req, res) => {
	var a = new Attraction({
		name: req.body.name,
		description: req.body.description,
		location: {lat: req.body.lat, lng: req.body.lng },
		history: {
			event: 'created',
			email: req.body.email,
			date: new Date()
		},
		approved: false
	})
	a.save(function(err, a) {
		if (err) res.send(500, 'Error occoured: database error.')
		res.json({ id: a._id })
	})
})

router.get('/api/attraction/:id', (req, res) => {
	Attraction.findById(req.params.id, function (err, a) {
		if (err) return res.send(500, 'Error occurred: database error.')
		res.json({
			name: a.name,
			id: a._id,
			description: a.description,
			location: a.location
		})
	})
})

module.exports = router
