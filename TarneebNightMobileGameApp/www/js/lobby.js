//var socket = io.connect('http://54.201.30.13:8080');
//var socket = io.connect('http://128.199.130.53:8080'); //connect to server
//var socket = io.connect('http://192.168.1.101:5000');//connect to server
//var socket = io.connect('http://192.168.10.106:5000'); //connect to server
//var socket = io.connect('http://192.168.1.100:5000'); //connect to server
 var socket = io.connect('http://ec2-54-201-30-13.us-west-2.compute.amazonaws.com:8080');
//var socket = io.connect('http://192.168.1.140:8080');//connect to server
$(function() {
    //load the User-Modal to enter a user name
    $('#User-Modal').modal('show');
    //when clicking on the Creat-User-btn in the User-Modal
    $('#Creat-User-btn').click(function() {
       var userName = $('#Create-User').val(); //get the value of the Create-User text box in the User-Modal 
        console.log(userName); //test log

        if (userName != '') { //if the Create-User text box is not empty do 

            socket.emit('adduser', userName); //send the user name to server
            $('#User-Modal').modal('hide'); //hide the User-Modal

        } else { //if the Create-User text box is empty null do
            $('#Create-User').attr("placeholder", "Please Enter Your Nick Name First").blur();
            //channge the Create-User text box placeholder to Please Enter Your Nick Name First
        }
    });
    //___________________________________________________________    
    $('#create-btn').click(function() {

        socket.emit('createroom', {
            roomName: $('#cerate-Room').val(),
            roomPlayerNum: 1
        });

        var url = 'game.html?roomname=' + encodeURIComponent($("#cerate-Room").val()) + '&username=' + encodeURIComponent($("#Create-User").val()) + '&playerPostion=' + encodeURIComponent(1);
        console.log(url);

        window.location.href = url;
    });
    //___________________________________________________________
    //when trigger 'updatelobbyusers'. 
    //when a client first connect get all other previes connected clients and display there           names in the table ('table#UsersList') to this client.
    socket.on('updatelobbyusers', function(data) { //data (usernames array that contian all the name of connected users).
        console.log(data);
        var $table = $('table#UsersList'); //select the 'table#UsersList'. 
        //for each user in data(username array) append to 'table#UsersList' theres names and set         for each table row (tr) the id id=user-name'+data[sub].name+' for later use in the               disconnect function  to remove this user naem rwo whene the user disconnect.   
        for (sub in data) {
            $table.append('<tr id=user-name' + data[sub].name + '><td>' + data[sub].name + '</td></tr>');
        }
    });
    //___________________________________________________________   
    //update the table ('table#UsersList') for all current connected clients when a new client         connect and display his name in table ('table#UsersList')
    socket.on('updatelastuser', function(username) {
        var $table = $('table#UsersList'); //select the 'table#UsersList'.
        $table.append('<tr id=user-name' + username + '><td>' + username + '</td></tr>');
        //append to 'table#UsersList' the last connect user when all other connected user in the           lobby and give it id=user-name'+username+' for later use in the disconnect function              to remove this user naem rwo whene the user disconnect.
    });
    //___________________________________________________________   
    socket.on('updaterooms', function(rooms) {
        console.log(rooms);
        //var userName = $('#Create-User').val();
        //console(userName);
        var $table = $('table#RoomsList');
        
        $('#RoomsList tbody > tr').remove();
        
        for (sub in rooms) {

            var url = 'game.html?roomname=' + encodeURIComponent(rooms[sub].roomName) + '&username=' + encodeURIComponent($("#Create-User").val()) + '&playerPostion=' + encodeURIComponent(rooms[sub].roomPlayerNum + 1);
            

            $table.append('<tr id="room-' + rooms[sub].roomName + '"><td>' + rooms[sub].roomName + '</td><td>' + rooms[sub].roomPlayerNum + '</td>' + '<td><a href="' + url + '"' + 'class="btn">Join</a></td>' + '</tr>');
        }
    });
    //___________________________________________________________
    socket.on('addlastroomscreatedtolobby', function(lastroom) {
        console.log(lastroom);
        var $table = $('table#RoomsList');

        var url = 'game.html?roomname=' + encodeURIComponent(lastroom.roomName) + '&username=' + encodeURIComponent($("#Create-User").val()) +  '&playerPostion=' + encodeURIComponent(lastroom.roomPlayerNum + 1);
        $table.append('<tr id="room-' + lastroom.roomName + '"><td>' + lastroom.roomName + '</td><td>' + lastroom.roomPlayerNum + '</td>' + '<td><a href="' + url + '"' + 'class="btn">Join</a></td>' + '</tr>');
    });
    //___________________________________________________________

    //whene client disconnect from room remove this user from the 'table#UsersList' by selectin        the '#user-name'+usernametoremove" rwo id in the 'table#UsersList' then romve it
    socket.on('userinroomdisconnect', function(usernametoremove) {
        $('#user-name' + usernametoremove).remove(); //remove the selecting table rwo ('#user-name'+usernametoremove) form table ('table#UsersList').
    });

});

function switchRoom(room) {
    console.log('fun start');
    console.log(room);
    socket.emit('switchRoom', room);
    console.log('fun end');
}