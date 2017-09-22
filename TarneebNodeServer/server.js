var rooms = [];

var //express = require('express'),
    //app = express(),
    server = require('http').createServer(handler), //(app)sdaa	
    io = require('socket.io').listen(server);//,
   // mysql = require('mysql');

//_________________________________________________

server.listen(8080, function() {
    console.log('listening on *:8080');
});

function handler(req, res) {
    res.writeHead(200);
    res.end("Socket.io ready.\n");
}

//________________________________________________

/*var connection = mysql.createConnection({

  		host: 'localhost',
        user: 'root',
        password : 'power101',
        port : 3306,
        database: 'TarnnebDB'
});*/

//________________________________________________
var usernames = [];

io.on('connection', function(socket) {

	
	
    
    console.log('a user connected\n'); //log test

    //on socket connection serever add user to lobby room 	
    socket.on('adduser', function(username) {
        socket.username = username; //set the socket.username to the username that passed from socket.emit('adduser', username); 
        socket.room = 'Lobby'; //set the socket.room to Lobby room when first connect by Defults
        usernames.push({name: username}); //create array of objects with properties
        //push the new user has been connect to the usernames array of users and set dinamcly property {name: usernaem} for each new user

        //console.log('\nusernames when new user connected : ');
        //console.log(usernames);//log test

        socket.join('Lobby'); //let the client sockt join the Lobby room by Defult when firts connect to server 
        socket.emit('updaterooms', rooms); //when user connect list all the existing rooms
        socket.emit('updatelobbyusers', usernames); //sending to this clint all the previes connectied users in Lobby
        socket.broadcast.to('Lobby').emit('updatelastuser', username); //sending to all user in Lobby the new connected user name
        //socket.emit('updaterooms', rooms, 'Lobby');
        console.log(usernames);
    });

    socket.on('createroom', function(data) {
        rooms.push({roomName: data.roomName,roomPlayerNum: data.roomPlayerNum});
        
        //console.log(rooms);
        //console.log('rooms after cerating new room :');
        //console.log(rooms);

        socket.broadcast.to('Lobby').emit('addlastroomscreatedtolobby', data); //add the last room created to the user in lobby only
        //socket.emit('updaterooms', rooms, socket.room);
    });

    socket.on('userjoinroom', function(data) {
        socket.username = data.userName;
      //  console.log('joined user: ');
      //  console.log(socket.username);

        socket.room = data.roomName;
      //  console.log('Room name that joined');
     //   console.log(socket.room);
        socket.join(socket.room);

        //give the number of clients in a room 
        var clients = io.sockets.adapter.rooms[socket.room];
        var numClients = (typeof clients !== 'undefined') ? Object.keys(clients).length : 0;
        console.log(numClients);

        //update the number of player (roomPlayerNum) for room(room array)  
        rooms.filter(function(obj) {
        	if(obj.roomName === socket.room){
        		obj.userName = data.userName;
        		obj.playerPostion = data.playerPostionMap;
        		obj.roomPlayerNum = numClients;
        	}
        });

      //  console.log(rooms);

        usernames.push({name: data.userName});

       // console.log('\ndata.playerPostionMap');
      //  console.log(data.playerPostionMap);

        io.sockets["in"](socket.room).emit('NotifyOtherPlayerJoind',{
        	UserName:data.userName,
        	PlayerPostion:data.playerPostionMap
        });
      
        //socket.emit('updatelobbyusers',usernames);
        //socket.broadcast.to(data.roomName).emit('updatelastuser',username);
        //socket.emit('updaterooms', rooms, 'Lobby');
    });
	

	socket.on('RE_playersInRoom', function(data) {
		io.sockets["in"](socket.room).emit('CRE_playersInRoom',data);
	});


	socket.on('chackeGameIfBegin',function(data) {
	//	console.log('chacking Game If Begin ...');
        io.sockets["in"](socket.room).emit('GameBegin',data);
	});

    socket.on('AION', function(data) {
    //	console.log('Start the Game With AI players');
        io.sockets["in"](socket.room).emit('StartGameWithAI',data);
    });

    socket.on('chackeGameIfBeginWithAI',function(data) {
 //   	console.log('Playe Game With AI players');
    	io.sockets["in"](socket.room).emit('PlayeGameWithAI',data);
    })

   // socket.on('WhatIsPlayerPostion',function(data){
    //	io.sockets["in"](socket.room).emit('UpdatePlayerPostion', data);
    	//for (sub in data) {
    	//	console.log(data[sub].name);
    	//};
      //  console.log('PlayerPostion');
    //	console.log(data);
    //});

    socket.on('tellothers', function(data) {
        //console.log(socket.room);
        //console.log('Card Move ...');
       // console.log(data);
        //socket.broadcast.to(socket.room).emit('cardmove', data);
        io.sockets["in"](socket.room).emit('cardmove', data);

        //socket.broadcast.to(sockt.room).emit('addlastroomscreatedtolobby', data);
    });

    socket.on('Beding', function(data) {
    //	console.log('Beding ...');
    //	console.log(data);
    	io.sockets["in"](socket.room).emit('BedingStatus',data);
    });

    socket.on('SelectingTarnneb',function(data) {
      //  console.log('Selecting Tarnneb ...');
     //   console.log(data);
        io.sockets["in"](socket.room).emit('TarnnebSelected',data);
    });

    socket.on('AISelectingTarnneb', function(data) {
    //	console.log('AI Selecting Tarnneb ...');
    //    console.log(data);
    	io.sockets["in"](socket.room).emit('AITarnnebSelected',data);
    });

    socket.on('LastBeding',function(data) {
    //    console.log('Last Beding ...');
    //    console.log(data);
        io.sockets["in"](socket.room).emit('LastBedChaking',data);
    });
    


    socket.on('disconnect', function() {
        console.log('\nuser disconnect'); //log test
        
        removeByAttr(usernames, 'name', socket.username); //remove user from the usernames array of objects [{name:username}]
        console.log(usernames);
        if(socket.room == 'Lobby') {
	        socket.broadcast.to(socket.room).emit('userinroomdisconnect', socket.username); //broadcasting to all client in the spesific room "(socket.room)" that the user 
	        console.log('leave Lobby');	
	        //has been left the room "(disconnected)"   
		}
        //console.log('\nusername that disconnected : ' + socket.username);//log test   
		else {
	        rooms.filter(function(obj) {
	        	if(obj.roomName === socket.room) {
	        		obj.roomPlayerNum = obj.roomPlayerNum - 1;

	        		if( obj.roomPlayerNum == 0 ) {

	        			removeByAttr(rooms, 'roomName', socket.room);
	        			socket.broadcast.to('Lobby').emit('updaterooms', rooms);
	        		}
	        	}
	        });
    	}
        
        socket.leave(socket.room); //let the user socket to leave the room that was in

        //console.log('\nusernames after a user disconnected :');
        //console.log(usernames);//log test	
    });

});

//____________________________________________

//helper functions
//a function to (remove) delete specific value property of an object in array of objects  
var removeByAttr = function(arr, attr, value) { //paramters(ArrayContinetheobjects, WhatIsThePropertyToDeleteValueFrom, ValueToDelete)
    var i = arr.length;
    while (i--) {
        if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {
            arr.splice(i, 1);
        }
    }
    return arr;
}