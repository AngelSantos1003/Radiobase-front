/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import open from 'open';

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

let directory = './dist';

app.use(express.static(path.join(__dirname, directory)));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, directory, 'index.html'));
});

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
		console.log(`Entorno: ${env}`);
		console.log(`🚧 App is listening at http://localhost:${port} - proceso ${process.pid}`);
	}
});
