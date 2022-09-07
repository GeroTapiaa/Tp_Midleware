const fs = require('fs')
const path = require('path');


module.exports = (req , res , next) =>{
fs.appendFileSync(path.resolve(__dirname, '..', 'logs', 'userLogs.txt'),'\nruta' + req.url , 'utf-8');
next()
}