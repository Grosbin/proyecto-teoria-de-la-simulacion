const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CNN, {
			useNewUrlParser: true,
			useUnifiedTopology: true
			// useCreateIndex: true
		});

		console.log('Conexion a la base de datos');
	} catch (error) {
		console.log(error)
		throw new Error('Error al iniciar la base de datos');

	}
}

module.exports = {
	dbConnection
}