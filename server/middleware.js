var bodyParser = require('body-parser');



module.exports = function(app, express){


app.use(bodyParser.urlencoded( {extended:true} ));
app.use(bodyParser.json());

//Routing
var apiRouter = express.Router();
app.use('/api', apiRouter);
require('./apiRoutes.js')(apiRouter);

};