var mongoose = require('mongoose');

var Schema = mongoose.Schema;

 var specialty = new Schema({
	name:{
		type:String,
		require:[true, 'Este campo es requerido']
	},
	createdBy: {
		type:Number,
		require:[true, 'Este campo es requerido']
	},
	createdAt:{
		type:Date,
		require:[true, 'Este campo es requerido']
	},
	updatedBy:{
		type:Number,
		require:[true, 'Este campo es requerido']
	},
	updatedAt:{
		type:Date,
		require:[true,'Este campo es requerido']
	},
},{ collection: 'specialties' });

module.exports = specialty;