// Import the express framework
//const express = require('express');
import express, {Request, Response, Application} from 'express';
import {stringify} from "node:querystring";

// Create an instance of an Express application
const app : Application = express();

// Define a port on which the web service will run
const PORT = 3000;

// Define a route for the root URL ('/') that responds with "hello-world"
app.get('/', (req:Request , res:Response) => {
    const now :Date = new Date();
    console.log(` request received. url: ${req.url} on ${now.toISOString()}`)
    res.send('hello-world');
});

// Start the web service and listen on the defined port
app.listen(PORT, () => {
    console.log(`Web service running at http://localhost:${PORT}`);
});