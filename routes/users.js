var express = require('express');
var router = express.Router();

var datastore = require('@google-cloud/datastore')({
  projectId: 'superb-watch-172816',
  keyFilename: './MyProject-bbc9fa271136.json'
});

/* GET users listing. */
router.get('/retrive', function(req, res, next) {
var data=[];
	 var id = req.query.id;
	 console.log(id);
	 var key = datastore.key(['User50records',id]);
	
		datastore.get(key,function(err,resp){
			console.log(resp);
			data.push(resp);
			res.send(data);
		})
});


module.exports = router;
