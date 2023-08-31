// //define a function
// function sayHello(name){
//    console.log('Hello' + name);
// }

// sayHello('samprit');

// // Node Module System


// // setTimeout()
// // clearTimeout();

// // setInterval()
// // clearInterval()

// // Global Object
// var message='';
// console.log(global.message);

// // Module

// console.log(module);

// // Lodding a Module

// var logger = require('./logger');

// logger('message');

// // Path Module

// const path = require('path'); 

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// // Operation System

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory:' + totalMemory);

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// File System Module

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files) {
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });

const EventEmitter = require('events');
// const emitter = new EventEmitter();



const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
    });

logger.log('message');


// HTTP MODULE

const http = require('http');
// const { Socket } = require('dgram');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
    res.write('Hello World');
    res.end();
   }

   if (req.url === '/api/courses') {
      res.write(JSON.stringify([1, 2, 3]));
      res.end();
   }
});


server.listen(3000);

console.log('Listening on port 3000...');
