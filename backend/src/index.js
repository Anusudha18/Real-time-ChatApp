// importing the express framework
//const express =require("express");
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


import express from "express";
import cors from "cors";
import "dotenv/config";

import fs from"fs";  //fs:file system
import path from "path";
import job  from "./lib/cron.js";

import User from "./models/user.model.js"
import { connectDB } from "./lib/db.js";

import { clerkMiddleware } from '@clerk/express';

const app=express();
const PORT=process.env.PORT;
const FRONTEND_URL=process.env.FRONTEND_URL
const publicDir =path.join(process.cwd(),"public");

app.use=("api/webhooks/clerk",express.raw({type :"application/json"}),clerkwebhook);

app.use(express.json())  //it is also on eof the middleware ...it used for parse the data and json data
app.use(cors({origin:FRONTEND_URL,credentials:true}));     // browser security rule

app.use(clerkMiddleware())    // whenever we are using middle ware we use .use as name


app.get("/health",(req,res)=>{
    res.status(200).json({ok:true});
});

// if the public direcrtory exist ,serve the statci files
//this is for production build
if (fs.existsSync(publicDir)){
app.use(express.static(publicDir))

app.get("/{*any}",(req,res,next)=>{
    res.sendFile(path.join(publicDir,"index.html"),(err)=>next(err));
});
}

app.listen(PORT,()=>{
    connectDB();
    console.log("server is up and running on PORT",PORT);

    if (process.env.NODE_ENV === "production") job.start();
}
);
