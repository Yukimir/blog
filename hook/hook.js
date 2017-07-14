const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/Oty8pPipBvo54Awa',function (req,res) {
	res.send('OK');
})

app.listen(4001,function(){
	console.log('listen on 4001');
});
