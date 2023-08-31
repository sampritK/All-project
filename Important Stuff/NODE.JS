*note is easy to get started and can be used for prototyping and agile development..
*building super fast and highly scalable services its used in production by large companies such as PayPal,Uber,Netflix,Walmart...
PayPal that rebuilt one of their java and spring based application using node and it found that the node application was built..
you probably know that in browsers we have the window or the document object(document.getElementById(' '); these objects allow us to work eith the environment in wich our code is running
in node.js- fs.readFile() http.createServer()..
~~~~~NON-BLOCKING OR ASYNCHRONOUS~~~
AASINGCHRONOS
What do you mean by asynchronouns?
Ans- let me give you an example-imagine you go to a restaurant, a waiter comes to your table takes order and gives it to the kichen then they move on to serve another table while the chef is preparing your meal so the same person can serve many different tables they dont have to wait for the chef to cook one meal before they serve another table. this is what we call non-blocking or asynchrono...
~~~~~~~~~Node Application~~~~~~~
this is how node application Work the waiter is like a thread allocated to handle a request, so a single is used to handel multiple request in contract to non-blocking or asynchronous architecture. we have bloking or 
~~~~~Synchronous Architecture~~~~~~
Imagine you go to another restaurant and in this restaurant a waiter is allocated to you,they take your order and give it to the kichen, now they are sitting in the kichen waiting for the chef to prepare your meal, at this time they're not doing anything else they're just waiting,they're not going to take an order from another table until your meal is ready, that is what we call blocking or synchronouns architecture and that's application built eith frameworks like speed net or rails. work out of the box so when we receive a request on the server a thread is allocated to handle that request as part
of handling that requests and is likely what we're going to query a database and as somtimes it may take a little while until the result is ready when the database is executing the query that thread is sitting there waiting it cant be used to serve another client so need a new thread to serve another client.

since no the application are single threaded when performing the calculation to serve one client other clients have to wait and thats why node should not be used or CPU intensive applications it should buiding data 
intensive and real-time applications

~~~~~Node Module System~~~~
built into the core of node such as -
*Operation System
*File System
*Events
*Http
NODE MODULE SYSTEM
GLOBAL OBJECT
CREATING Module
Loading Module
Module Wrapper Function
Path Module
Operation System Module
File System Module
Events Module - an event is basically A signal that somthings has happened in our application for 
every time. we receive a request on that port, that HTTP class raises an event. now our job is to respond to that event which basically involves reading that request and returning the right response :
{emit- Making a noice, produce - singaling that an event
has happened}
EVENT ARGUMENTS: In our lager module when we log a message perhaps our remote login service will generate an ID for that message, perhaps we want to return that ID to the client or it may give us a URL to access that log message directly.

EXTENDING EVENTEMITTER: create a class that has all the capabilities of the event emitter 

Different between class and object?
      CLASS           ||         OBJECT
      HUMAN       ||          SAMPRIT
     ANIMAL       ||           LION

HTTP MODULE-
Ex. We can create a web server that listens for HTTP requests on a given port and with this we can  easily create a back-end service for our client application that we build with react or angular or a mobile application running on a mobile device.





