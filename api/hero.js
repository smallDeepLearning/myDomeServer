/**
 * hero接口
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-28 15:51:34
 */

const express = require('express')
const router = express.Router()
const Hero = require('../models/hero')

// 查询所有英雄信息
router.get("/hero", (req, res) => {
	Hero.find({})
		.sort({
			update_at: -1
		})
		.then(heros => {
			res.json(heros)
		})
		.catch(err => {
			res.json(err)
		})
})

// 查询单个英雄信息
router.get('/hero/:id', (req, res) => {
	Hero.findById(req.params.id)
		.then(hero => {
			res.json(hero)
		})
		.catch(err => {
			res.json(err)
		})
})

// 添加一个英雄信息
router.post('/hero', (req, res) => {
	Hero.create(req.body, (err, hero) => {
		if (err) {
			res.json(err)
		} else {
			res.json(hero)
		}
	})
})

// 更新一个英雄信息
router.put('/hero/:id', (req, res) => {
	Hero.findOneAndUpdate({
			_id: req.params.id
		}, {
			$set: {
				name: req.body.name,
				age: req.body.age,
				sex: req.body.sex,
				address: req.body.address,
				dowhat: req.body.dowhat,
				favourite: req.body.favourite,
				explain: req.body.explain
			}
		}, {
			new: true
		})
		.then(hero => res.json(hero))
		.catch(err => res.json(err))
})

// 删除一个英雄信息
router.delete('/hero/:id', (req, res) => {
	Hero.findOneAndUpdate({
			_id: req.params.id
		})
		.then(hero => res.send(`${hero.title}删除成功`))
		.cath(err => res.json(err))
})

// 添加一个英雄图片
router.put('/addpic/:id', (req, res) => {
	Hero.findOneAndUpdate({
			_id: req.params.id
		}, {
			$push: {
				imgArr: req.body.url
			}
		}, {
			new: true
		})
		.then(hero => res.json(hero))
		.catch(err => res.json(err))
})

module.exports = router