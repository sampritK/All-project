
// Module Wrapper Function

const EventEmitter = require('events');
// const emitter = new EventEmitter();

console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
     log(message) {
        //Send an HTTP request
        console.log(message);
    
        // Raise an event
    this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}



module.exports = Logger;
// module.exports.endPoint = url;





//Crating Module- use one of those remote logging services for login
// our messages so there are websites out there provide logging as a service they give us a URL and we can send an HTTP request to that URL to log messages in the cloud


