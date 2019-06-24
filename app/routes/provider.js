var express = require('express');
var router = express.Router();
var Providers = require('../models/provider.js');

var isNotNull = (id, result) => {
  if(result){
    return {
      ok : true,
      res : result
    }
  }
  return {
    ok : false,
    err : "the requested id:"+ id +" doesn't exists."
  }
};
router.get('/providers', (req, res) => {
  Providers.find({}, '_id firstName').then(result => res.json(result))
    .catch(error => {
      res.status(404).json({
        msg: error.message
      });
    })
});

router.get('/provider/:_id', (req, res) => {
  var id = req.params;
  Providers.findById(id, '_id firstName')
    .then(result => {
      var output = isNotNull(id._id, result)
      if(output.res){
        res.json(output.res)
      }else{
        res.status(404).json(output.err)
      }
    })
    .catch(err => {
      res.status(500).json({
        msg: err.message
      });
    })
});

router.put('/providers/:_id', (req, res) => {
  var id = req.params;
  var body = req.body;
  Providers.findByIdAndUpdate(id, body, {
      new: true
    })
    .then(result => {
      var output = isNotNull(id._id, result)
      if(output.res){
        res.json(output.res)
      }else{
        res.status(404).json(output.err)
      }
    })
    .catch(error => {
      res.status(500).json({
        msg: error.message
      });
    });

});

router.post('/providers', (req, res) => {
  var body = req.body;
  var providers = new Providers({
    firstName: body.firstName,
    lastName: body.lastName,
    middleName: body.middleName,
    email: body.email,
    specialty: {
      name: body.name,
      createdBy: body.specialty.createdBy,
      createdAt: body.specialty.createdAt,
      updatedBy: body.specialty.updatedBy,
      updatedAt: body.specialty.updatedAt
    }
  });  
  providers.save((err, providerSave) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: 'error getting all the data.',
        error: err
      });
    } else {
      return res.status(201).json({
        ok: true,
        providers: providerSave
      });
    }
  });
});

router.delete('/provider/:_id', (req, res) => {
  var id = req.params;
  Providers.deleteOne(id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
     res.json(err);
    })
});
module.exports = router;
