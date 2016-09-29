const express = require('express');
const router = new express.Router();
const models = require('../db');
const Region = models.models.Region;
const Assignment = models.models.Assignment;
module.exports = router;

router.get('/', function(req, res, next){
	Region.findAll()
		.then(function(theRegions){
			res.send(theRegions);
		})
		.catch(next);
});

router.post('/', function(req, res, next){
	Region.create({
		zipcode: req.body.theZipcode
	})
	.then(function(region){
		res.send(region);
	})
	.catch(next);
})

router.delete('/:id', function(req, res, next){
	Promise.all([
		Region.destroy({
			where: {
				id: req.params.id
			}
		}),
		Assignment.destroy({
			where:{
				regionId:req.params.id
			}
		})
	])
		.then(function(){
			res.sendStatus(200);
		})
		.catch(next);
})