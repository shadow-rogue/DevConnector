const mongoose = require('mongoose');
const config = require('config');
let db = config.get('mongoURI');

//assign DB to node db if its production
if(process.env.NODE_ENV === 'production') {
	db = process.env.DB_URI;
}
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
