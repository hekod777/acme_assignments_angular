const express = require('express');
const router = new express.Router();
const models = require('../db');
const Salespeople = models.models.Salespeople;
const Assignment = models.models.Assignment;
module.exports = router;

router.get('/', function(req, res, next){
	//console.log ('aa');
	//console.log (Salespeople);
	Salespeople.findAll()
		.then(function(theSalesPeople){
			//console.log (theSalesPeople)
			res.send(theSalesPeople);
		})
		.catch(next);
});

router.get('/assignment', function(req,res,next){
	Assignment.findAll()
		.then(function(allAssignment){
			//console.log(allAssignment.data);
			res.send(allAssignment);
		})
		.catch(next);
})


router.post('/', function(req, res, next){
	console.log(req.body);
	Salespeople.create({
		name: req.body.theName
	})
	.then(function(salesperson){
		res.send(salesperson);
	})
	.catch(next);
})

router.post('/:salespersonid/:regionid',function(req,res,next){
	Assignment.create({
		salespersonId: req.params.salespersonid,
		regionId: req.params.regionid,
	})
		.then (function(newAssignment){
			res.send(newAssignment);
		})
		.catch(next);
})

router.delete('/:salespersonid/:regionid',function(req,res,next){
	Assignment.destroy({
		where:{
			salespersonId: req.params.salespersonid,
			regionId: req.params.regionid,
		}
	})
		.then (function(newAssignment){
			res.sendStatus(200);
		})
		.catch(next);
})

router.delete('/:id', function(req, res, next){
	console.log (req.params.id);
	Promise.all([
		Salespeople.destroy({
			where: {
				id: req.params.id
			}
		}),
		Assignment.destroy({
			where:{
				salespersonId: req.params.id
			}
		})
	])
		.then(function(){
			res.sendStatus(200);
		})
		.catch(next);
})