const process = require("process");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	PORT: 8080,
	ENVIRONMENT: process.env.NODE_ENV,
	MONGO_URL:
		"mongodb+srv://webhunt2022:webhunt2022_microbus@cluster0.vxn7s.mongodb.net/webhunt2022_data?retryWrites=true&w=majority",
	TOTAL_QUESTIONS: 12,
	startTime: 'April 14,2022  20:00:00',
	endTime: 'April 15,2022  01:00:00'
};
