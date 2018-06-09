const express    = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, err => console.log('Chat server listening on %d', PORT));


const messages = [
	{date:new Date(), text:'Server started.', from:'Server'}
];

app.get('/api/messages', (req,res) => {
	res.json(messages);
});

app.post('/api/message', (req,res) => {			// POST body: {text,from}
	messages.push({
		date: new Date(),
		text: req.body.text,
		from: req.body.from
	});
	res.json(messages);
});
