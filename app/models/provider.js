var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Specialty = require('./specialty.js');

var Schema = mongoose.Schema;

var provider = new Schema({

	firstName:{
		type:String,
		require:[true, 'This field can not be empty']
	},
	lastName: {
		type:String,
		require:[true, 'This field can not be empty']
	},
	middleName:{
		type:String,
		require:[true, 'This field can not be empty']
	},
	email:{
		type:String,
		require:[true, 'This field can not be empty']
	},
	
	specialty:{
		type:Specialty,
		require:[true,'This field can not be empty']
	},
	projectedStartDate:{
		type:Date,
		require:[true, 'This field can not be empty']
    },
    employerId:{
		type:Number,
		require:[true,'This field can not be empty']
    },
    providerType:{
		type:String,
		require:[true,'This field can not be empty']
    },
    staffStatus:{
		type:String,
		require:[true,'This field can not be empty']
    },
    assignedTo:{
		type:Number,
		require:[true,'This field can not be empty']
    },
    status:{
		type:String,
		require:[true,'This field can not be empty']
    },
    createdBy:{
		type:Number,
		require:[true,'This field can not be empty']
    },
    createdAt:{
		type:Date,
		require:[true,'This field can not be empty']
    },
    updatedBy:{
		type:Number,
		require:[true,'This field can not be empty']
    },
    updatedAt:{
		type:Date,
		require:[true,'This field can not be empty']
    },
    
},{ collection: 'providers' });

provider.plugin( uniqueValidator, {message: 'This field can not be empty'});

module.exports = mongoose.model('providers',provider);