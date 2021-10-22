const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const mongoose = require('mongoose');
const User = require("./user.js");
var ObjectId = require('mongodb').ObjectId;
const uri = "mongodb+srv://arpitjalan:sqJfY%25J%2545Z@grocerybuddies.l0hr3.mongodb.net/groceryBuddies?retryWrites=true&w=majority";

app.post("/data", async (request, response) => {
  try {
      console.log(request.query)
      let result = await collection.findOne({ "_id": ObjectId(request.query.home) });
      console.log(result)
      response.send(result);
  } catch (e) {
      response.status(500).send({ message: e.message });
  }
});

app.post("/createuser", async(request, response) => {
  try{
    console.log(request)
  } catch (e) {
    response.status(500).send({message: e.message})
  }
});

io.on('connection', (socket) => {
  console.log("connected")
  socket.on("join", async (homeId) => {
    try {
        let result = await collection.findOne({ "_id": ObjectId(homeId) });
        if(!result) {
            await collection.insertOne({ "_id": gameId, messages: [] });
        }
        socket.join(gameId);
        socket.emit("joined", gameId);
        socket.activeRoom = gameId;
    } catch (e) {
        console.error(e);
    }
});
  socket.on("message", (message) => {
    io.to(socket.activeRoom).emit("")
  });
  
});

server.listen(process.env.PORT || 5000, async () => {
  try{
    await mongoose.connect(uri);
    console.log("Listening on port :%s...", server.address().port);
  }catch(e){
    console.error(e)
  }
});