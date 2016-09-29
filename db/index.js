const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

var Salespeople = db.define('salesperson',{
	name:{
		type: Sequelize.STRING,
		allowNull:false,
	}
})

var Region = db.define('region',{
	zipcode:{
		type: Sequelize.STRING,
		allowNull: false,
	}
})

var Assignment =db.define('assignment',{});

Salespeople.hasMany(Assignment);
Region.hasMany(Assignment);
Assignment.belongsTo(Salespeople);
Assignment.belongsTo(Region);

module.exports = {
	models:{
		Salespeople: Salespeople,
		Region: Region,
		Assignment: Assignment,
		db: db,
	},
	sync: function(){
		return db.sync({force:false});
	}

};
