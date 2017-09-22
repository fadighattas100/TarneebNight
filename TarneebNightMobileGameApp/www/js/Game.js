window.addEventListener("load",function() {

    var RoomName = {};
    var playersInRoom = [];
    //var playerPostion = -1;
    var scale = 0;

    var cards = [
    {
        CardName: '1C',
        Rank: 14,
        Suit: 'C',
        Asset: '1C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '2C',
        Rank: 2,
        Suit: 'C',
        Asset: '2C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '3C',
        Rank: 3,
        Suit: 'C',
        Asset: '3C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '4C',
        Rank: 4,
        Suit: 'C',
        Asset: '4C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '5C',
        Rank: 5,
        Suit: 'C',
        Asset: '5C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '6C',
        Rank: 6,
        Suit: 'C',
        Asset: '6C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '7C',
        Rank: 7,
        Suit: 'C',
        Asset: '7C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '8C',
        Rank: 8,
        Suit: 'C',
        Asset: '8C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '9C',
        Rank: 9,
        Suit: 'C',
        Asset: '9C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '10C',
        Rank: 10,
        Suit: 'C',
        Asset: '10C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '11C',
        Rank: 11,
        Suit: 'C',
        Asset: '11C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '12C',
        Rank: 12,
        Suit: 'C',
        Asset: '12C.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '13C',
        Rank: 13,
        Suit: 'C',
        Asset: '13C.png',
        CardPlayed: 0,
        Playbell:0
    }, 
    {
        CardName: '1S',
        Rank: 14,
        Suit: 'S',
        Asset: '1S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '2S',
        Rank: 2,
        Suit: 'S',
        Asset: '2S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '3S',
        Rank: 3,
        Suit: 'S',
        Asset: '3S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '4S',
        Rank: 4,
        Suit: 'S',
        Asset: '4S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '5S',
        Rank: 5,
        Suit: 'S',
        Asset: '5S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '6S',
        Rank: 6,
        Suit: 'S',
        Asset: '6S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '7S',
        Rank: 7,
        Suit: 'S',
        Asset: '7S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '8S',
        Rank: 8,
        Suit: 'S',
        Asset: '8S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '9S',
        Rank: 9,
        Suit: 'S',
        Asset: '9S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '10S',
        Rank: 10,
        Suit: 'S',
        Asset: '10S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '11S',
        Rank: 11,
        Suit: 'S',
        Asset: '11S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '12S',
        Rank: 12,
        Suit: 'S',
        Asset: '12S.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '13S',
        Rank: 13,
        Suit: 'S',
        Asset: '13S.png',
        CardPlayed: 0,
        Playbell:0
    }, 
    {
        CardName: '1H',
        Rank: 14,
        Suit: 'H',
        Asset: '1H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '2H',
        Rank: 2,
        Suit: 'H',
        Asset: '2H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '3H',
        Rank: 3,
        Suit: 'H',
        Asset: '3H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '4H',
        Rank: 4,
        Suit: 'H',
        Asset: '4H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '5H',
        Rank: 5,
        Suit: 'H',
        Asset: '5H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '6H',
        Rank: 6,
        Suit: 'H',
        Asset: '6H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '7H',
        Rank: 7,
        Suit: 'H',
        Asset: '7H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '8H',
        Rank: 8,
        Suit: 'H',
        Asset: '8H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '9H',
        Rank: 9,
        Suit: 'H',
        Asset: '9H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '10H',
        Rank: 10,
        Suit: 'H',
        Asset: '10H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '11H',
        Rank: 11,
        Suit: 'H',
        Asset: '11H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '12H',
        Rank: 12,
        Suit: 'H',
        Asset: '12H.png',
        CardPlayed: 0,
        Playbell:0
    },{
        CardName: '13H',
        Rank: 13,
        Suit: 'H',
        Asset: '13H.png',
        CardPlayed: 0,
        Playbell:0
    }, 
    { 
        CardName: '1D',
        Rank: 14,
        Suit: 'D',
        Asset: '1D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '2D',
        Rank: 2,
        Suit: 'D',
        Asset: '2D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '3D',
        Rank: 3,
        Suit: 'D',
        Asset: '3D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '4D',
        Rank: 4,
        Suit: 'D',
        Asset: '4D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '5D',
        Rank: 5,
        Suit: 'D',
        Asset: '5D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '6D',
        Rank: 6,
        Suit: 'D',
        Asset: '6D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '7D',
        Rank: 7,
        Suit: 'D',
        Asset: '7D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '8D',
        Rank: 8,
        Suit: 'D',
        Asset: '8D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '9D',
        Rank: 9,
        Suit: 'D',
        Asset: '9D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '10D',
        Rank: 10,
        Suit: 'D',
        Asset: '10D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '11D',
        Rank: 11,
        Suit: 'D',
        Asset: '11D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '12D',
        Rank: 12,
        Suit: 'D',
        Asset: '12D.png',
        CardPlayed: 0,
        Playbell:0
    },{ 
        CardName: '13D',
        Rank: 13,
        Suit: 'D',
        Asset: '13D.png',
        CardPlayed: 0,
        Playbell:0
    }
    ];
    var SortedCards = [];
    var cardPlayeDeck = []; //for drwaing in seane
    var cardsPlayed = [];
    var cardsWond = [];
    var CurrentSuit = "";

    var bids = [{
        Value: 7,
        Asset: '7.png',
        Pressed: '7P.png'
    }, {
        Value: 8,
        Asset: '8.png',
        Pressed:'8P.png'
    }, {
        Value: 9,
        Asset: '9.png',
        Pressed: '9P.png'
    }, {
        Value: 10,
        Asset: '10.png',
        Pressed: '10P.png'
    }, {
        Value: 11,
        Asset: '11.png',
        Pressed:'11P.png'
    }, {
        Value: 12,
        Asset: '12.png',
        Pressed:'12P.png'
    }, {
        Value: 13,
        Asset: '13.png',
        Pressed:'13P.png'
    }];

    var suits = [{
        Value: 'S',
        Asset: 'Spades.png',
        Pressed: 'SpadesP.png'
    }, {
        Value: 'H',
        Asset: 'Hearts.png',
        Pressed: 'HeartsP.png'
    }, {
        Value: 'C',
        Asset: 'Clubs.png',
        Pressed: 'ClubsP.png'
    },{
        Value: 'D',
        Asset: 'Diamonds.png',
        Pressed: 'DiamondsP.png'
    }];

    //var plyerCards = [];
    var playersPostion = [];

    var currentTurn = "";
    var playerName = "";
    //var beginGame = 0;
    //var plyersCards = [];
    var cardsWoned = [];

    var playerBeding = ["player1", "player2","player3","player4"]; //,'player3','player4'
    var playerBedNumber = 0;
    var bedStatus = true;
    var currentDealTurn = "player1";
    var currentBedingTurn = currentDealTurn; //change after first turn end and so on...
    var currentPlayeSuit = "";
    var TarnnebSuit = "";
    var GlobalBedValue = 7;
    var PlayerTarrnibName = currentDealTurn;
    
    
    var TeamOneScore = 0;
    var TeamTwoScore = 0;
    var currentPlayerName = "";

    var AI = false;
    var SendBedingValue = 0;
    var SendTarnnebValue = 0;
    var ScoreVisibility = true;
    
    var TempLookedCards = [];

    var socket = io.connect('http://ec2-54-201-30-13.us-west-2.compute.amazonaws.com:8080');//connect to server

    var queryString = new Array();

    if (queryString.length === 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            //console.log(params);
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString["roomname"] != null && queryString["username"] != null && queryString["playerPostion"] != null) {
        
       var postion = parseInt(queryString["playerPostion"]);
        currentPlayerName = queryString["username"];
        RoomName.name = queryString["roomname"];
        
          if (queryString["playerPostion"] == 1) {
              playerName = 'player1';
          }else if (queryString["playerPostion"] == 2){
              playerName = 'player2';
          }else if (queryString["playerPostion"] == 3){
              playerName = 'player3';
          }else if (queryString["playerPostion"] == 4){
              playerName = 'player4';
          }
        
        socket.emit('userjoinroom', {
            roomName: RoomName.name,
            userName: queryString["username"],
            playerPostionMap: "player"+postion
        });    
    }
    //__________________________________________________________________

    var Q = window.Q = Quintus().include('Sprites,UI,Input,Touch,Anim,Scenes,2D,TMX');
    Q.setup({
        maximize: true,
        scaleToFit: true
    }).touch(Q.SPRITE_ALL);
    //Q.debug = true; 
    var Scale = (Math.ceil((Q.el.height/1000)*10))/10;  

//Q.audio.enableHTML5Sound();
    //var SoundON = true;
    
    //____________________________________________________________________
    Q.Sprite.extend('Card', {

        init: function(p) {

            this._super(p, {
                CardName: '',
                PlayerName: '',
                CardPlayed: 0,
                Rank: 0,
                Suit: '',
                Playbell:0
            });

            if(currentTurn == playerName && bedStatus == false) {    
                        this.on('drag');
                        this.on('touchEnd');
            }
        },

        drag: function(touch) {
                this.p.dragging = true;
                this.p.x = touch.origX + touch.dx;
                this.p.y = touch.origY + touch.dy;
        },

        touchEnd: function(touch) {
            
            //        console.log('begin function: touch.origY= ' + touch.origY + ' touch.dy= ' + touch.dy+ ' this.p.y= '+ this.p.y );
            // put a line on the screen if the card pass it put the card in the new position if not put the card in the orginal(old) postion

            if (touch.origY + touch.dy > touch.origY - ((10 / 100) * Q.el.height)) { //define the line that the card should pass if the amount of draged > the screen line in Q.el.height - 200    
                // put the card in the same old postion if is not pass the line
                this.p.x = touch.origX;
                this.p.y = touch.origY;
                
            } else if(CurrentSuit != '' && this.p.Playbell == 1){
                //socket.emit('tellothers','card moves from room' + RoomName.name);
                // put the card if it pass the line in the new postion 	
                //this.p.asset = 'Win_Card.jpg';

                this.p.x = ((50 / 100) * Q.el.width);
                this.p.y = Q.el.height - ((50 / 100) * Q.el.height);
                //this.p.angle = 0
                //end the drag and touch after one time the object has been draged 
                //add the played card to the cardsPlayed array  
                //cardsPlayed.push(this.p);    

                //console.log('player Name : '+this.p.PlayerName+' Card Name : '+this.p.name +' X: ' + this.p.x +' Y: '+ this.p.y);
                
                touch.obj.off('drag');
                touch.obj.off('touchEnd');
                
                //tellothers card have been moved (played);
                socket.emit('tellothers', {
                    CardPlayed: 1,
                    PlayerName: this.p.PlayerName,
                    Rank: this.p.Rank,
                    Suit: this.p.Suit,
                    CardName: this.p.CardName,
                    Asset: this.p.asset,
                    Scale: this.p.scale,
                    cardX: this.p.x,
                    cardY: this.p.y
                });

                //this.destroy();//iiiiiiiiiiiiiiiiiiiiiiii 
                // Q.clearStages();
               // console.log('end');

            } else if (CurrentSuit == ''){
            
                this.p.x = ((50 / 100) * Q.el.width);
                this.p.y = Q.el.height - ((50 / 100) * Q.el.height);
                
                touch.obj.off('drag');
                touch.obj.off('touchEnd');
                
                //tellothers card have been moved (played);
                socket.emit('tellothers', {
                    CardPlayed: 1,
                    PlayerName: this.p.PlayerName,
                    Rank: this.p.Rank,
                    Suit: this.p.Suit,
                    CardName: this.p.CardName,
                    Asset: this.p.asset,
                    Scale: this.p.scale,
                    cardX: this.p.x,
                    cardY: this.p.y
                });
            } else { 
                //console.log(cardPlayeDeck);
               // console.log(CurrentSuit);
                //console.log(this.p.Playbell);
//                this.p.x = touch.origX;
//                this.p.y = touch.origY;
                
                for( sub in cardPlayeDeck )
                {
                    if( cardPlayeDeck[sub].Suit == CurrentSuit && cardPlayeDeck[sub].PlayerName == playerName)
                    {
                        TempLookedCards.push(cardPlayeDeck[sub]);
                        console.log(TempLookedCards);
                        cardPlayeDeck[sub].y -= 40;
                    }
                }
                Q.clearStages();
                Q.stageScene('updateLevel');
            }
        }
    });
    //____________________________________________________________________
    Q.scene('mainLevel', function(stage) {
      
//        console.log("_______________________________");
//        console.log(getWebPath());
//        console.log("\n");
//        console.log(getWebRoot());
//        console.log("_______________________________");
        
          var layoutContainer = stage.insert(new Q.UI.Container({
              x:Q.width/2,
            y:Q.height/2,
            fill: 'rgba(255, 255, 255, 0)'
        }));
        
        var start_btn = layoutContainer.insert(new Q.UI.Button({
            asset: 'Start.png',
             scale: Scale
        }, function() {
            // this.p.angle += 90;
            socket.emit('AION', {
                AION: true
            });
        }));
      
        layoutContainer.fit(0);
        
        var BackGround = stage.insert(new Q.Sprite({
            asset: 'boxGameType.png',
            x:Q.width/2,
            y:Q.height/2,
            scale:Scale
        }));
        
        stage.insert(layoutContainer); 
});
    //____________________________________________________________________
    Q.scene('BedingLevel', function(stage) {
        
        
        console.log('BedingLevel');
        
            var z = 0;
        
//            var BackGround_Dome = new Q.Sprite({
//            asset: 'boxGameType.png',
//            scale: Scale,
//            x:Q.width/2,
//            y:Q.height/2
//        });
        
       DrawCards(stage);
          
      var layoutContainer = stage.insert(new Q.UI.Container({
              x:Q.width/2,
              y:Q.height/2,
              fill: 'rgba(255, 255, 255, 0)'
        }));
        
       var BID_Lbl = layoutContainer.insert(new Q.Sprite({
            asset:'Bids.png',
            y:layoutContainer.p.y * - 0.3,
            scale :Scale
        })); 
          
        var Bids_Rectangle = (100 * Scale) * 6; //6 becase the number of bids is 7 and we start the drawing from the center of the windows x: (0 - (Bids_Rectangle/2)) + z for all the bids image so 7 bids and the 4 bid in the center 7-1 = 6  
//        console.log(Bids_Rectangle);
//       console.log(BackGround_Dome);
        
 for (sub in bids) {
        
  if (bids[sub].Value <= GlobalBedValue && currentDealTurn == playerName) 
        {
            console.log('bids[sub].Value <= GlobalBedValue');
            console.log(bids[sub].Value);
                layoutContainer.insert(new Q.UI.Button({
                    value: bids[sub].Value,
                    asset: bids[sub].Pressed,//bids[sub].Asset
                    sound: bids[sub].Sound,
                    //pressed: bids[sub].Pressed,
                    x: (0 - (Bids_Rectangle/2)) + z,
                    y: layoutContainer.p.y * 0.04,
                    scale: Scale
                }, function() {
                
            }));
        }
     else 
        {
            console.log('bids[sub].Value > GlobalBedValue');
            console.log(bids[sub].Value);
            layoutContainer.insert(new Q.UI.Button({
                    value: bids[sub].Value,
                    asset: bids[sub].Asset,//bids[sub].Asset
                    sound: bids[sub].Sound,
                    pressed: bids[sub].Pressed,
                    x: (0 - (Bids_Rectangle/2)) + z,
                    y: layoutContainer.p.y * 0.04,
                    scale: Scale
                }, function() {

                 this.p.scale += 0.1;
                 //this.p.angle += 20;
                 this.p.asset =  this.p.pressed;
    //             var audio = new Audio('audio/'+this.p.sound);
                 //audio.play();
                 SendBedingValue = this.p.value;

                    setTimeout(function() {
                         socket.emit('Beding', {
                            BedingValue: SendBedingValue,
                            PlayerName: playerName
                        });
                    }, 1000);
                
            }));
     
     }
        
//            console.log()
//            console.log(layoutContainer);
//            console.log('Value');
//            console.log(((layoutContainer.p.x * Scale) * -0.60) + z);
            z = z + 100 * Scale; // 100 asset width
        }
        
        var Pass_Btn = layoutContainer.insert(new Q.UI.Button({
            asset: 'pass.png',
            scale: Scale,
            name:'Pass_Btn',
            y: layoutContainer.p.y * 0.34
            //hidden:true
        }, function() {
            socket.emit('Beding', {
                BedingValue: 0,
                PlayerName: playerName
            });
        }));
            
          //console.log(Pass_Btn);
          
          layoutContainer.fit(0,0);
            
        
        var BackGround = stage.insert(new Q.Sprite({
            asset: 'boxGameType.png',
            scale: Scale,
            x:Q.width/2,
            y:Q.height/2
        }));
        
        
        
        stage.insert(layoutContainer);
      
        DrawBedingPlayerName(stage);

        
    }); 
    //____________________________________________________________________
    Q.scene('LastBeding', function(stage) {
        
        console.log('LastBeding');
        var z = 0;
        
//            var BackGround_Dome = new Q.Sprite({
//            asset: 'boxGameType.png',
//            scale: Scale,
//            x:Q.width/2,
//            y:Q.height/2
//        });
        
       DrawCards(stage);
          
      var layoutContainer = stage.insert(new Q.UI.Container({
              x:Q.width/2,
              y:Q.height/2,
              fill: 'rgba(255, 255, 255, 0)'
        }));
        
       var BID_Lbl = layoutContainer.insert(new Q.Sprite({
            asset:'Bids.png',
            y:layoutContainer.p.y * - 0.3,
            scale :Scale
        })); 
          
        var Bids_Rectangle = (100 * Scale) * 6; //6 becase the number of bids is 7 and we start the drawing from the center of the windows x: (0 - (Bids_Rectangle/2)) + z for all the bids image so 7 bids and the 4 bid in the center 7-1 = 6  
      //  console.log(Bids_Rectangle);
    //   console.log(BackGround_Dome);
        
 for (sub in bids) {
        
  if (bids[sub].Value <= GlobalBedValue && currentDealTurn == playerName) 
        {
            console.log('bids[sub].Value <= GlobalBedValue');
            console.log(bids[sub].Value);
                layoutContainer.insert(new Q.UI.Button({
                    value: bids[sub].Value,
                    asset: bids[sub].Pressed,//bids[sub].Asset
                    sound: bids[sub].Sound,
                    //pressed: bids[sub].Pressed,
                    x: (0 - (Bids_Rectangle/2)) + z,
                    y: layoutContainer.p.y * 0.04,
                    scale: Scale
                }, function() {
                
            }));
        }
     else 
        {
            console.log('bids[sub].Value > GlobalBedValue');
            console.log(bids[sub].Value);
            layoutContainer.insert(new Q.UI.Button({
                    value: bids[sub].Value,
                    asset: bids[sub].Asset,//bids[sub].Asset
                    sound: bids[sub].Sound,
                    pressed: bids[sub].Pressed,
                    x: (0 - (Bids_Rectangle/2)) + z,
                    y: layoutContainer.p.y * 0.04,
                    scale: Scale
                }, function() {

                 this.p.scale += 0.1;
                 //this.p.angle += 20;
                 this.p.asset =  this.p.pressed;
    //             var audio = new Audio('audio/'+this.p.sound);
                 //audio.play();
                 SendBedingValue = this.p.value;

                    setTimeout(function() {
                         socket.emit('Beding', {
                            BedingValue: SendBedingValue,
                            PlayerName: playerName
                        });
                    }, 1000);
                
            }));
     
     }
        
//            console.log()
//            console.log(layoutContainer);
//            console.log('Value');
//            console.log(((layoutContainer.p.x * Scale) * -0.60) + z);
            z = z + 100 * Scale; // 100 asset width
        }
        
        var Pass_Btn = layoutContainer.insert(new Q.UI.Button({
            asset: 'pass.png',
            scale: Scale,
            name:'Pass_Btn',
            y:layoutContainer.p.y * 0.34
            //hidden:true
        }, function() {
            socket.emit('Beding', {
                BedingValue: 0,
                PlayerName: playerName
            });
        }));

          layoutContainer.fit(0,0);
               
        var BackGround = stage.insert(new Q.Sprite({
            asset: 'boxGameType.png',
            scale: Scale,
            x:Q.width/2,
            y:Q.height/2
        }));
        
        stage.insert(layoutContainer);
        
        DrawBedingPlayerName(stage)
    });
    //--------------------------------------------------------------------
    Q.scene('BeginLevel', function(stage) {
        DrawScore(stage);
        DrawCards(stage);
        DrawPlayersNames(stage);
        DrawPlayersTarnnebSuit(stage); 
    });
    //____________________________________________________________________
    Q.scene('SelectingTarnneb', function(stage) {

             var z = 0;
        
       DrawCards(stage);
//        
//        var BackGround_Demo = new Q.Sprite({
//            asset: 'boxGameType.png',
//            scale: Scale,
//            x: Q.width/2,
//            y: Q.height/2
//        });
        
    var Tarnnebs_Rectangle = (100 * Scale) * 3.5;
        
      var layoutContainer = stage.insert(new Q.UI.Container({
              x: Q.width / 2,
              y: Q.height / 2,
              fill: 'rgba(255, 255, 255, 0)'
        }));
//        
//        layoutContainer.insert(new Q.Sprite({
//                            asset: 'SelectYourTarneeb.png',
//                            scale: Scale,
//                            x: ((50 / 100) * Q.el.width) *  0.01,
//                            y: ((50 / 100) * Q.el.height) *  - 0.23,                            
//                }));
        
//        layoutContainer.insert(new Q.Sprite({
//                            asset: 'EmptyFlag.png',
//                            scale: Scale,
//                            x: ((50 / 100) * Q.el.width) *  0.00,
//                            y: ((50 / 100) * Q.el.height) *  0.16,                            
//                }));
               
        
     
            
//         var CardContainer = stage.insert(new Q.UI.Container({
//              x: Q.width / 2,
//              y: Q.height / 2,
//              fill: 'rgba(255, 255, 255, 0)'
//        }));
        
     for (sub in suits) {
        
        layoutContainer.insert(new Q.UI.Button({
                value: suits[sub].Value,
                asset: suits[sub].Asset,//bids[sub].Asset
                pressed: suits[sub].Pressed,
                scale: Scale - 0.20,
                x: (layoutContainer.p.x * -0.15) + z,
                y: layoutContainer.p.x * 0.095
            }, function() {
            
            this.p.asset = this.p.pressed;    
             this.p.scale += 0.1;
             this.p.angle += 20;
                SendTarnnebValue = this.p.value;
             //this.p.angle +=300;
                setTimeout(function() {
                    socket.emit('SelectingTarnneb', {
                        TarnnebValue: SendTarnnebValue
                });
                }, 1000);
            }));
        
            z = z + 85 * Scale; // 100 asset width
        }
       // CardContainer.fit(0);
        layoutContainer.fit(0);
        //layoutContainer.insert(CardContainer);
        
        var BackGround = stage.insert(new Q.Sprite({
            asset: 'SelectYourTarneebBack.png',
            scale: Scale,
            x:Q.width / 2,
            y:Q.height / 2
        }));
        
        stage.insert(layoutContainer);
        //stage.insert(CardContainer);

    });
    //____________________________________________________________________
    Q.scene('WhatingToBedingLevel', function(stage) {
       
        
        var container = stage.insert(new Q.UI.Container({
            //h:(Q.el.height/2),
            //w:(Q.el.width/2),
            fill: 'rgba(255, 255, 255, 0.5)',
            //border: 1,
            //shadow: 0,
            shadowColor: "rgba(0,0,0,0.5)",
            y: ((50 / 100) * Q.el.height),
            x: ((50 / 100) * Q.el.width)
        }));

        stage.insert(new Q.UI.Text({
            label: '\n Wating ' + GetPlayerNmae(currentBedingTurn) + ' To BIDING...\n',
            color: "black"
//            x: ((50 / 100) * Q.el.height),
//            y: ((50 / 100) * Q.el.width)
        }), container);
        console.log(GetPlayerNmae(currentBedingTurn));
        container.fit(0, 0);
    });
    //____________________________________________________________________
    Q.scene('WattingToSelectTarnib', function(stage) {

        var container = stage.insert(new Q.UI.Container({
            //h:(Q.el.height/2),
            //w:(Q.el.width/2),
            fill: 'rgba(255, 255, 255, 0.5)',
            //border: 1,
            //shadow: 0,
            //shadowColor: "rgba(0,0,0,0.5)",
            y: ((50 / 100) * Q.el.height),
            x: ((50 / 100) * Q.el.width)
        }));

        stage.insert(new Q.UI.Text({
            label: '\n Wating ' + currentTurn + ' To Select Tarneeb\n',
            color: "black"
//            x: (100 * 0.40) * 4,
//            y: -(100 * 0.40)
        }), container);

        container.fit(0, 0);
    });
    //____________________________________________________________________
    Q.scene('updateLevel', function(stage) {
        
        var UX1 = 0, UX2 = 0, UY1 = 0, UY2 = 0;
       // look = 0;
        
        
     
        
        for (sub in cardPlayeDeck) {
            // if(cardPlayeDeck[sub].CardPlayed == 0){
            stage.insert(new Q.Card({
                CardPlayed: cardPlayeDeck[sub].CardPlayed,
                PlayerName: cardPlayeDeck[sub].PlayerName,
                CardName: cardPlayeDeck[sub].CardName,
                asset: cardPlayeDeck[sub].asset,
                scale: Scale,
                x: cardPlayeDeck[sub].x,
                y: cardPlayeDeck[sub].y,
                angle: cardPlayeDeck[sub].angle,
                Rank: cardPlayeDeck[sub].Rank,
                Suit: cardPlayeDeck[sub].Suit,
                Playbell:cardPlayeDeck[sub].Playbell
            }));
        }

             if (playerName == 'player1') {
            
            for (sub in cardsPlayed) {
                     if (cardsPlayed[sub].PlayerName == 'player1'){
                        stage.insert(new Q.Card({
                            CardPlayed: cardsPlayed[sub].CardPlayed,
                            PlayerName: cardsPlayed[sub].PlayerName,
                            CardName: cardsPlayed[sub].CardName,
                            asset: cardsPlayed[sub].asset,
                            scale: Scale,
                            x: ((50 / 100) * Q.el.width),
                            y: Q.el.height - ((40 / 100) * Q.el.height),
                            Rank: cardsPlayed[sub].Rank,
                            Suit: cardsPlayed[sub].Suit
                        })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player2'){
                          stage.insert(new Q.Card({
                            CardPlayed: cardsPlayed[sub].CardPlayed,
                            PlayerName: cardsPlayed[sub].PlayerName,
                            CardName: cardsPlayed[sub].CardName,
                            asset: cardsPlayed[sub].asset,
                            scale: Scale,
                            x: ((60/ 100) * Q.el.width),
                            y: Q.el.height - ((50 / 100) * Q.el.height),
                            Rank: cardsPlayed[sub].Rank,
                            Suit: cardsPlayed[sub].Suit
                        })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player3'){
                     stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((50/ 100) * Q.el.width),
                        y: Q.el.height - ((60 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player4'){
                    stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((40 / 100) * Q.el.width),
                        y: Q.el.height - ((50 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
            }
            
            for (sub in cardsWoned) {
       if(cardsWoned[sub].PlayerWon == 'player1') {
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[0].x - (playersPostion[0].x * 0.01)  + UX1,
                        y: playersPostion[0].y - (playersPostion[0].y * 0.14)
                    }));  
                        UX1 = UX1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player2'){
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[1].x - (playersPostion[1].x * 0.14),
                        y: playersPostion[1].y - (playersPostion[1].y * 0.24) + UY1,
                        angle : +90
                    }));  
                        UY1 = UY1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player3'){
                stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[2].x - (playersPostion[2].x * 0.38)  + UX2,
                        y: playersPostion[2].y + (playersPostion[2].y * 2.2),
                        angle: +180
                    }));  
                        UX2 = UX2 + ((90 * Scale) * 0.7);
        }else if (cardsWoned[sub].PlayerWon == 'player4'){
                     stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[3].x + (playersPostion[3].x * 2.2),
                        y: playersPostion[3].y - (playersPostion[3].y * 0.24) + UY2,
                        angle : +270
                    }));  
                        UY2 = UY2 + ((90 * Scale) * 0.7);
                }
            }
            
            
        }
        else if (playerName == 'player2') {
            
               for (sub in cardsPlayed) {
                     if
                         (cardsPlayed[sub].PlayerName == 'player1'){
                    stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((40 / 100) * Q.el.width),
                        y: Q.el.height - ((50 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player2'){
                      stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((50 / 100) * Q.el.width),
                        y: Q.el.height - ((40 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player3'){
                     stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((60/ 100) * Q.el.width),
                        y: Q.el.height - ((50 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player4'){
                    stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                         x: ((50/ 100) * Q.el.width),
                        y: Q.el.height - ((60 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
            }
            
    for (sub in cardsWoned) {
       if(cardsWoned[sub].PlayerWon == 'player2') {
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[0].x - (playersPostion[0].x * 0.01)  + UX1,
                        y: playersPostion[0].y - (playersPostion[0].y * 0.14)
                    }));  
                        UX1 = UX1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player3'){
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[1].x - (playersPostion[1].x * 0.14),
                        y: playersPostion[1].y - (playersPostion[1].y * 0.24) + UY1,
                        angle : +90
                    }));  
                        UY1 = UY1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player4'){
                stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[2].x - (playersPostion[2].x * 0.38)  + UX2,
                        y: playersPostion[2].y + (playersPostion[2].y * 2.2),
                        angle: +180
                    }));  
                        UX2 = UX2 + ((90 * Scale) * 0.7);
        }else if (cardsWoned[sub].PlayerWon == 'player1'){
                     stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[3].x + (playersPostion[3].x * 2.2),
                        y: playersPostion[3].y - (playersPostion[3].y * 0.24) + UY2,
                        angle : +270
                    }));  
                        UY2 = UY2 + ((90 * Scale) * 0.7);
                }
            }
            
        }
        else if (playerName == 'player3') {
              for (sub in cardsPlayed) {
                     if (cardsPlayed[sub].PlayerName == 'player1'){
                    stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((50/ 100) * Q.el.width),
                        y: Q.el.height - ((60 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player2'){
                      stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((40 / 100) * Q.el.width),
                        y: Q.el.height - ((50 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player3'){
                     stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((50 / 100) * Q.el.width),
                        y: Q.el.height - ((40 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player4'){
                    stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((60/ 100) * Q.el.width),
                        y: Q.el.height - ((50 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
            }
            
                for (sub in cardsWoned) {
       if(cardsWoned[sub].PlayerWon == 'player3') {
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[0].x - (playersPostion[0].x * 0.01)  + UX1,
                        y: playersPostion[0].y - (playersPostion[0].y * 0.14)
                    }));  
                        UX1 = UX1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player4'){
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[1].x - (playersPostion[1].x * 0.14),
                        y: playersPostion[1].y - (playersPostion[1].y * 0.24) + UY1,
                        angle : +90
                    }));  
                        UY1 = UY1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player1'){
                stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[2].x - (playersPostion[2].x * 0.38)  + UX2,
                        y: playersPostion[2].y + (playersPostion[2].y * 2.2),
                        angle: +180
                    }));  
                        UX2 = UX2 + ((90 * Scale) * 0.7);
        }else if (cardsWoned[sub].PlayerWon == 'player2'){
                     stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[3].x + (playersPostion[3].x * 2.2),
                        y: playersPostion[3].y - (playersPostion[3].y * 0.24) + UY2,
                        angle : +270
                    }));  
                        UY2 = UY2 + ((90 * Scale) * 0.7);
                }
            }
            
        }
        else if (playerName == 'player4') { 
         for (sub in cardsPlayed) {
                     if (cardsPlayed[sub].PlayerName == 'player1'){
                    stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((60/ 100) * Q.el.width),
                        y: Q.el.height - ((50 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player2'){
                      stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((50/ 100) * Q.el.width),
                        y: Q.el.height - ((60 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player3'){
                     stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((40 / 100) * Q.el.width),
                        y: Q.el.height - ((50 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
                else if (cardsPlayed[sub].PlayerName == 'player4'){
                    stage.insert(new Q.Card({
                        CardPlayed: cardsPlayed[sub].CardPlayed,
                        PlayerName: cardsPlayed[sub].PlayerName,
                        CardName: cardsPlayed[sub].CardName,
                        asset: cardsPlayed[sub].asset,
                        scale: Scale,
                        x: ((50 / 100) * Q.el.width),
                        y: Q.el.height - ((40 / 100) * Q.el.height),
                        Rank: cardsPlayed[sub].Rank,
                        Suit: cardsPlayed[sub].Suit
                    })); 
                }
            }
      
                for (sub in cardsWoned) {
       if(cardsWoned[sub].PlayerWon == 'player4') {
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[0].x - (playersPostion[0].x * 0.01)  + UX1,
                        y: playersPostion[0].y - (playersPostion[0].y * 0.14)
                    }));  
                        UX1 = UX1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player1'){
           
                        stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[1].x - (playersPostion[1].x * 0.14),
                        y: playersPostion[1].y - (playersPostion[1].y * 0.24) + UY1,
                        angle : +90
                    }));  
                        UY1 = UY1 + ((90 * Scale) * 0.7);
           
       } else if (cardsWoned[sub].PlayerWon == 'player2'){
                stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[2].x - (playersPostion[2].x * 0.38)  + UX2,
                        y: playersPostion[2].y + (playersPostion[2].y * 2.2),
                        angle: +180
                    }));  
                        UX2 = UX2 + ((90 * Scale) * 0.7);
        }else if (cardsWoned[sub].PlayerWon == 'player3'){
                     stage.insert(new Q.Sprite({
                        asset: 'card_back.png',
                        scale: Scale * 0.4,
                        x: playersPostion[3].x + (playersPostion[3].x * 2.2),
                        y: playersPostion[3].y - (playersPostion[3].y * 0.24) + UY2,
                        angle : +270
                    }));  
                        UY2 = UY2 + ((90 * Scale) * 0.7);
                }
            }
        }

       DrawScore(stage);
       DrawPlayersNames(stage);
       DrawPlayersTarnnebSuit(stage);    
        
    if ( TempLookedCards.length != 0 )
        {
            for (sub in cardPlayeDeck){
             
                for (card in TempLookedCards)
                {
                    if(cardPlayeDeck[sub].Suit == TempLookedCards[card].Suit && cardPlayeDeck[sub].PlayerName ==  TempLookedCards[card].PlayerName && cardPlayeDeck[sub].Rank == TempLookedCards[card].Rank)
                    {
                        console.log('testxxxxxxxxxxxxx');
                        console.log(cardPlayeDeck[sub].y);
                        console.log(TempLookedCards[card].y);
                        cardPlayeDeck[sub].y += 40 ;
                        
                    }
                }
            }
            TempLookedCards = [];
        }
        
    });
    //____________________________________________________________________
    Q.scene('WinLevelTeamOne', function(stage) {
        
           var layoutContainer = stage.insert(new Q.UI.Container({
               y: ((67 / 100) * Q.el.height),
               x: ((50 / 100) * Q.el.width),
               fill: 'rgba(255, 255, 255, 0)'
        }));
        
        console.log(TeamOneScore);
        
           stage.insert(new Q.UI.Text({
                    label: ""+TeamOneScore+"",
                    color: "#ffffff",
                     scale: Scale + 0.20
                  //  x: ((50 / 100) * Q.el.width) *   0.86,
                //    y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), layoutContainer);
        
          layoutContainer.fit(0);
        
         var BackGround = stage.insert(new Q.Sprite({
            asset: 'WinnerScreen.png',
            scale: Scale,
            x:Q.width/2,
            y:Q.height/2
        }));
        
        stage.insert(layoutContainer);
        
    });
    //____________________________________________________________________
    Q.scene('WinLevelTeamTwo', function(stage) {
        
           var layoutContainer = stage.insert(new Q.UI.Container({
               y: ((67 / 100) * Q.el.height),
               x: ((50 / 100) * Q.el.width),
               fill: 'rgba(255, 255, 255, 0)'
        }));
        
        console.log(TeamOneScore);
        
           stage.insert(new Q.UI.Text({
                    label: ""+TeamOneScore+"",
                    color: "#ffffff",
                     scale: Scale + 0.20
                  //  x: ((50 / 100) * Q.el.width) *   0.86,
                //    y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), layoutContainer);
        
          layoutContainer.fit(0);
        
         var BackGround = stage.insert(new Q.Sprite({
            asset: 'WinnerScreen.png',
            scale: Scale,
            x:Q.width/2,
            y:Q.height/2
        }));
        
        stage.insert(layoutContainer);
        
    });
    //____________________________________________________________________
    Q.scene('LoseLevel', function(stage) {
    
    var container = stage.insert(new Q.UI.Container({
            //h:(Q.el.height/2),
            //w:(Q.el.width/2),
            fill: 'rgba(255, 255, 255, 0.5)',
            //border: 1,
            //shadow: 0,
            shadowColor: "rgba(0,0,0,0.5)",
            y: ((50 / 100) * Q.el.height),
            x: ((50 / 100) * Q.el.width)
        }));

        stage.insert(new Q.UI.Text({
            label: '\n You Lost Try Again ...\n',
            color: "black"
//            x: ((50 / 100) * Q.el.height),
//            y: ((50 / 100) * Q.el.width)
        }), container);

        container.fit(0, 0);
        
    });
    //____________________________________________________________________

// Q.load({"Music": "tone.mp3"},function(){
    //load assets
 Q.loadTMX(['1C.png','2C.png','3C.png','4C.png','5C.png','6C.png','7C.png','8C.png','9C.png','10C.png','11C.png','12C.png','13C.png','1H.png','2H.png','3H.png','4H.png','5H.png','6H.png','7H.png','8H.png','9H.png','10H.png','11H.png','12H.png','13H.png','1S.png','2S.png','3S.png','4S.png','5S.png','6S.png','7S.png','8S.png','9S.png','10S.png','11S.png','12S.png','13S.png','1D.png','2D.png','3D.png','4D.png','5D.png','6D.png','7D.png','8D.png','9D.png','10D.png','11D.png','12D.png','13D.png','card_back.png', '7.png','8.png','9.png','10.png','11.png','12.png','13.png', 'Start.png', 'Clubs.png', 'Diamonds.png', 'Hearts.png','Spades.png','boxGameType.png','background1.png','Bids.png','pass.png','SelectYourTarneeb.png','EmptyFlag.png','SelectYourTarneebBack.png','7P.png','8P.png','9P.png','10P.png','11P.png','12P.png','13P.png','Score.png','ScoreP.png','WinnerScreen.png','ClubsP.png','DiamondsP.png','HeartsP.png','SpadesP.png'], function() {
     
             if (queryString["playerPostion"] == 1) { //'player1'

                        playerName = 'player1';

                        playersPostion = [{
                            name: 'player1',
                            x: ((26 / 100) * Q.el.width),
                            y: Q.el.height - ((8 / 100) * Q.el.height)
                        }, {
                            name: 'player2',
                            x: ((95/ 100) * Q.el.width),//94
                            y: Q.el.height - ((63 / 100) * Q.el.height)//82
                        }, {
                            name: 'player3',
                            x: ((41/ 100) * Q.el.width),
                            y: Q.el.height - ((93 / 100) * Q.el.height)
                        }, {
                            name: 'player4',
                            x: ((5 / 100) * Q.el.width),
                            y: Q.el.height - ((63 / 100) * Q.el.height)
                        }];
          
        } 
        else if (queryString["playerPostion"] == 2) { //'player2'

                        playerName = 'player2';

                        playersPostion = [{
                            name: 'player2',
                            x: ((26 / 100) * Q.el.width),
                            y: Q.el.height - ((8 / 100) * Q.el.height)
                        }, {
                            name: 'player3',
                            x: ((95/ 100) * Q.el.width),//94
                            y: Q.el.height - ((63 / 100) * Q.el.height)//82
                        }, {
                            name: 'player4',
                           x: ((41/ 100) * Q.el.width),
                            y: Q.el.height - ((93 / 100) * Q.el.height)
                        }, {
                            name: 'player1',
                             x: ((5 / 100) * Q.el.width),
                            y: Q.el.height - ((63 / 100) * Q.el.height)
                        }];
        }
        else if (queryString["playerPostion"] == 3) {
                        playerName = 'player3';

                        playersPostion = [{
                            name: 'player3',
                            x: ((26 / 100) * Q.el.width),
                            y: Q.el.height - ((8 / 100) * Q.el.height)
                        }, {
                            name: 'player4',
                            x: ((95/ 100) * Q.el.width),//94
                            y: Q.el.height - ((63 / 100) * Q.el.height)//82
                        }, {
                            name: 'player1',
                            x: ((41/ 100) * Q.el.width),
                            y: Q.el.height - ((93 / 100) * Q.el.height)
                        }, {
                            name: 'player2',
                            x: ((5 / 100) * Q.el.width),
                            y: Q.el.height - ((63 / 100) * Q.el.height)
                        }];
        }
        else if (queryString["playerPostion"] == 4) {
                        playerName = 'player4';

                         playersPostion = [{
                            name: 'player4',
                            x: ((26 / 100) * Q.el.width),
                            y: Q.el.height - ((8 / 100) * Q.el.height)
                        }, {
                            name: 'player1',
                            x: ((95/ 100) * Q.el.width),//94
                            y: Q.el.height - ((63 / 100) * Q.el.height)//82
                        }, {
                            name: 'player2',
                            x: ((41/ 100) * Q.el.width),
                            y: Q.el.height - ((93 / 100) * Q.el.height)
                        }, {
                            name: 'player3',
                            x: ((5 / 100) * Q.el.width),
                            y: Q.el.height - ((63 / 100) * Q.el.height)
                        }];
            
            GameBegin();
        }
      
//     var audio = new Audio('audio/tone.wav');
//                 audio.addEventListener('ended', function() {
//                this.currentTime = 0;
//                this.play();
//            }, false);           
//     
//            audio.play();
     
            Q.stageScene('mainLevel');
         });
//    });
    //___________________________________________________________________
    var currentObj = null;
    Q.el.addEventListener('mousemove', function(e) {
        
        var x = e.offsetX || e.layerX,
            y = e.offsetY || e.layerY,
            stage = Q.stage();

        var stageX = Q.canvasToStageX(x, stage),
            stageY = Q.canvasToStageY(y, stage);

        var obj = stage.locate(stageX, stageY);

        if (currentObj) {
            currentObj.p.over = false;
        }
        if (obj) {
            currentObj = obj;
            obj.p.over = true;

        }
    });
   
    Q.el.addEventListener('click', function(e) {
//       console.log(e);    
    });
    //___________________________________________________________________

    socket.on('NotifyOtherPlayerJoind', function(data) {
   // console.log('data from NotifyOtherPlayerJoind');
    //console.log(data);
    //console.log(playerName);
    if(playerName == 'player1'){
     
        playersInRoom.push({
            userName:data.UserName,
            playerPostionMap:data.PlayerPostion
        });
        
    socket.emit('RE_playersInRoom',playersInRoom);
    }
});

    socket.on('CRE_playersInRoom', function(playersInRoomRe) {
    playersInRoom = [];
    playersInRoom = playersInRoomRe;
   // console.log('playersInRoomRe from CRE_playersInRoom');
//    console.log(playersInRoom);
});

    socket.on('cardmove', function(data) {
        //console.log('card Playe Deck');
        //console.log(cardPlayeDeck);

     //   console.log('player Name : ' + data.PlayerName + ' Card Name = ' + data.CardName + ' Card Asset = ' + data.Asset + 'Card Scale = ' + data.Scale + ' cardX = ' + data.cardX + ' cardY = ' + data.cardY);
        var HaveSameSuit = false;
        var cardWond = false;
        
        if(CurrentSuit == ''){
            CurrentSuit = data.Suit;
        }

        data.cardX = ((50 / 100) * Q.el.width);
        data.cardY = Q.el.height - ((50 / 100) * Q.el.height);

        //console.log(data.cardX + ' ' + data.cardY);

        //remove the played card from the cards array in all the client in the room
        cardPlayeDeck = cardPlayeDeck.filter(function(obj) {
            return obj.CardName !== data.CardName;
        });
        
        cardsPlayed.push({
            CardPlayed: data.CardPlayed,
            PlayerName: data.PlayerName,
            Rank: data.Rank,
            Suit: data.Suit,
            CardName: data.CardName,
            asset: data.Asset,
            scale: Scale,
            x: data.cardX,
            y: data.cardY
        });
        
    //   console.log('HaveSameSuit');
    //    console.log(cardsPlayed);

        //console.log(cardsPlayed.length);
      
        
        if (data.PlayerName == 'player1') {
           
            currentTurn = 'player2';
         
        //    console.log(IsPlayerAI(playersInRoom, currentTurn));
         
        } else if (data.PlayerName == 'player2') { // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            currentTurn = 'player3';
     //       console.log(IsPlayerAI(playersInRoom, currentTurn));
     
        }else if (data.PlayerName == 'player3') {// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            currentTurn = 'player4';
       //     console.log(IsPlayerAI(playersInRoom, currentTurn));
   
        }else if (data.PlayerName == 'player4') {// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            currentTurn = 'player1';
        //    console.log(IsPlayerAI(playersInRoom, currentTurn));
        }
        
        
        //console.log(cardPlayeDeck);
        
        for(sub in cardPlayeDeck){
            if(CurrentSuit !=''){
if(cardPlayeDeck[sub].PlayerName == currentTurn && cardPlayeDeck[sub].Suit == CurrentSuit){
                    cardPlayeDeck[sub].Playbell = 1;
                    HaveSameSuit = true;
               }else{
                cardPlayeDeck[sub].Playbell = 0;
               }
            }
        }
        
        if(HaveSameSuit == false){
            for(sub in cardPlayeDeck){
                if(cardPlayeDeck[sub].PlayerName == currentTurn){
                    cardPlayeDeck[sub].Playbell = 1;
               }
            }
        }
    

     //   console.log(cardPlayeDeck);
        
         if(cardsPlayed.length <= 4) {
                UpdateCards();
                  if (cardsPlayed.length == 4) {
                    CardWon();
//              console.log('CardWonnnnnnnnnnn');
                }
             }
    if(cardsWoned.length < 13){
        if(playerName == "player1" && currentTurn != "player1" && IsPlayerAI(playersInRoom,currentTurn)){
            
                setTimeout(function() { //if there is one Human Player with 3AI Player 2000 is good
            AIPlay(currentTurn);
        }, 1000);
    }
    }
    
    if(cardsWoned.length == 13){ ///////XXXXXXXXXXXXXXXXXXXXXXXXXXX////////
       // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        //Display score
       
//           console.log(cardsWond);
        setTimeout(function() {
                    CalculateScore();
             }, 2000);
           
//           if ( TeamOneScore < 7 || TeamTwoScore < 7)
//           {
//               console.log(TeamOneScore);
//               setTimeout(function() {
//                            CalculateScore();
//                            Redeal();
//                   }, 2000);
//           }else {
//             CalculateScore();
//           }
       
           
    }   

    });

    socket.on('GameBegin', function(data) {
  
        SortedCards = data.SortedCards;
        currentDealTurn = data.currentDealTurn;
        currentBedingTurn = data.currentDealTurn;
 
        switch (currentBedingTurn) {
                
                case 'player1':
                currentBedingTurn = 'player2';
                break;
                    
                case 'player2':
                currentBedingTurn = 'player3';
                break;
                
                case 'player3':
                currentBedingTurn = 'player4';
                break;
                
                case 'player4':
                currentBedingTurn = 'player1';
                break;    
                    
                default:
                console.log('Error');
            }  
            
    playerBeding = ["player1", "player2","player3","player4"]; 
    
    currentTurn = "";
    cardsWoned = [];
    bedStatus = true;
    TarnnebSuit = "";
    GlobalBedValue = 7;
    PlayerTarrnibName = currentDealTurn;
    
    
      
        StackCards();
//    console.log(cardPlayeDeck);
        BeginBeding();
    
    });

    socket.on('PlayeGameWithAI', function(data) {
        
        SortedCards = data.SortedCards;
        currentDealTurn = data.currentDealTurn;
        currentBedingTurn = data.currentDealTurn;
    
        switch (currentBedingTurn) {
                
                case 'player1':
                currentBedingTurn = 'player2';
                break;
                    
                case 'player2':
                currentBedingTurn = 'player3';
                break;
                
                case 'player3':
                currentBedingTurn = 'player4';
                break;
                
                case 'player4':
                currentBedingTurn = 'player1';
                break;    
                    
                default:
                console.log('Error');
            }    
    playerBeding = ["player1", "player2","player3","player4"]; 
    
    currentTurn = "";
    cardsWoned = [];
    bedStatus = true;
    TarnnebSuit = "";
    GlobalBedValue = 7;
    PlayerTarrnibName = currentDealTurn;
    
        StackCards();
//    console.log(cardPlayeDeck);
        BeginBeding();
    });

    socket.on('BedingStatus', function(data) {
    
        if (data.BedingValue != 0 && data.BedingValue <= GlobalBedValue) {
        
            PlayerBedbName = data.PlayerName;
            
            var index = playerBeding.indexOf(data.PlayerName) + 1;
            
            if (index >= playerBeding.length) {
                index = 0;
         
            }
            currentBedingTurn = playerBeding[index];
                playerBeding.splice(playerBeding.indexOf(data.PlayerName), 1);
            
//            console.log(playerBeding);
               
            if(playerBeding.length > 1) {
                BeginBeding();
           } 
            if (playerBeding.length == 1 && PlayerTarrnibName == currentDealTurn && GlobalBedValue == 7) { //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            currentBedingTurn = playerBeding[0];
             
             if(playerName == "player1" && currentBedingTurn != "player1" && IsPlayerAI(playersInRoom,currentBedingTurn)){ // PLAYER IS AI
                 
                   AIBeding(currentBedingTurn);//+++++++++++++++++++++++++++++++++++++++++
                } 
 
             else { 
                    LastBeding();
                }
           
         }
           
             else { //WHENE ALL THE FIRST 3 PLAYER PASS WHENE STARTING THE BEDING FROM currentDealTurn
                if(PlayerTarrnibName == currentBedingTurn){ // NO ONE BID SO THE currentDealTurn MUST PLAYE
               // console.log('PlayerTarrnibName == currentBedingTurn');
             
                if(playerName == "player1" && currentBedingTurn != "player1" && IsPlayerAI(playersInRoom,PlayerTarrnibName)){ // IF currentDealTurn PLAYER IS AI
                    
                    bedStatus = false;
                    currentTurn = PlayerTarrnibName;
                    AISelectingTarnneb(currentBedingTurn); //---------------
                
                
                } else { // IF currentDealTurn PLAYER IS HUMAN 
                    bedStatus = false;
                    currentTurn = PlayerTarrnibName;
                    SelectingTarnneb();
                }
                } 

             }   
            
        }
    
        if (data.BedingValue != 0 && data.BedingValue >= GlobalBedValue) {

            GlobalBedValue = data.BedingValue;
            PlayerTarrnibName = data.PlayerName;
           
     //       console.log(PlayerTarrnibName);
       //     console.log(GlobalBedValue);
            
            var index = playerBeding.indexOf(data.PlayerName) + 1;

            if (index >= playerBeding.length) {
                index = 0;
            }

            currentBedingTurn = playerBeding[index];
            //dealturn
          ///  console.log(playerBeding);
                 
            if(playerBeding.length > 1) {
                BeginBeding();
           } 
            
              if (playerBeding.length == 1 && PlayerTarrnibName == currentDealTurn && GlobalBedValue == 7) { //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            currentBedingTurn = playerBeding[0];
             
             if(playerName == "player1" && currentBedingTurn != "player1" && IsPlayerAI(playersInRoom,currentBedingTurn)){ // PLAYER IS AI
                 
                   AIBeding(currentBedingTurn);//+++++++++++++++++++++++++++++++++++++++++
                } 
 
             else { 
                    LastBeding();
                }
           
         }
           
             else { //WHENE ALL THE FIRST 3 PLAYER PASS WHENE STARTING THE BEDING FROM currentDealTurn
                if(PlayerTarrnibName == currentBedingTurn){ // NO ONE BID SO THE currentDealTurn MUST PLAYE
               // console.log('PlayerTarrnibName == currentBedingTurn');
             
                if(playerName == "player1" && currentBedingTurn != "player1" && IsPlayerAI(playersInRoom,PlayerTarrnibName)){ // IF currentDealTurn PLAYER IS AI
                    
                    bedStatus = false;
                    currentTurn = PlayerTarrnibName;
                    AISelectingTarnneb(currentBedingTurn); //---------------
                
                
                } else { // IF currentDealTurn PLAYER IS HUMAN 
                    bedStatus = false;
                    currentTurn = PlayerTarrnibName;
                    SelectingTarnneb();
                }
                } 

             }   
        }
   
        else if (data.BedingValue == 0) {
         
            var index = playerBeding.indexOf(data.PlayerName) + 1;
            
            if (index >= playerBeding.length) {
                index = 0;
         
            }
            currentBedingTurn = playerBeding[index];
                playerBeding.splice(playerBeding.indexOf(data.PlayerName), 1);
            
//            console.log(playerBeding);
               
            if(playerBeding.length > 1) {
                BeginBeding();
           } 
            if (playerBeding.length == 1 && PlayerTarrnibName == currentDealTurn && GlobalBedValue == 7) { //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            currentBedingTurn = playerBeding[0];
             
             if(playerName == "player1" && currentBedingTurn != "player1" && IsPlayerAI(playersInRoom,currentBedingTurn)){ // PLAYER IS AI
                 
                   AIBeding(currentBedingTurn);//+++++++++++++++++++++++++++++++++++++++++
                } 
 
             else { 
                    LastBeding();
                }
           
         }
           
             else { //WHENE ALL THE FIRST 3 PLAYER PASS WHENE STARTING THE BEDING FROM currentDealTurn
                if(PlayerTarrnibName == currentBedingTurn){ // NO ONE BID SO THE currentDealTurn MUST PLAYE
               // console.log('PlayerTarrnibName == currentBedingTurn');
             
                if(playerName == "player1" && currentBedingTurn != "player1" && IsPlayerAI(playersInRoom,PlayerTarrnibName)){ // IF currentDealTurn PLAYER IS AI
                    
                    bedStatus = false;
                    currentTurn = PlayerTarrnibName;
                    AISelectingTarnneb(currentBedingTurn); //---------------
                
                
                } else { // IF currentDealTurn PLAYER IS HUMAN 
                    bedStatus = false;
                    currentTurn = PlayerTarrnibName;
                    SelectingTarnneb();
                }
                } 

             }   
        }
        
         });

    socket.on('LastBedChaking', function(data) {
    
        if (data.BedingValue != 0 && data.BedingValue >= GlobalBedValue) {

            GlobalBedValue = data.BedingValue;
            PlayerTarrnibName = data.PlayerName;
            bedStatus = false;
            currentTurn = data.PlayerName;

            
    if(playerName == 'player1' && currentTurn !='player1' && IsPlayerAI(playersInRoom,data.PlayerName)){
                  
        
        AISelectingTarnneb(currentBedingTurn);

        
        //console.log('data.BedingValue != 0 && data.BedingValue > GlobalBedValue socket.on(LastBedChaking) AI'); 
          //        console.log(data.PlayerName);
            //    console.log(data.BedingValue);
              //  console.log(currentDealTurn);
                } else {
        
                    
                    SelectingTarnneb();
                
                
                }
        } 
    
    else if (data.BedingValue == 0) {
            
            //socket.emit('CurrentTurnForSelectingTarnneb',{PlayerName: currentDealTurn});
            
            bedStatus = false;
            currentTurn = currentDealTurn;
            
            
if(playerName == "player1" && IsPlayerAI(playersInRoom,data.PlayerName) && currentDealTurn != "player1")
            {
       //         console.log('data.BedingValue == 0 socket.on(LastBedChaking) AI'); 
                AISelectingTarnneb(currentBedingTurn);
         //       console.log(data.PlayerName);
           //     console.log(data.BedingValue);
             //   console.log(currentTurn);
            } else {
               // console.log('data.BedingValue == 0 socket.on(LastBedChaking) Human'); 
                SelectingTarnneb();
            }
            
     
        }
    });
    
    socket.on('TarnnebSelected', function(data) {
        TarnnebSuit = data.TarnnebValue;
       // console.log("TarnnebSuit");
        //console.log(TarnnebSuit);
        BeginGame();
    });

    socket.on('AITarnnebSelected', function(data) {
     TarnnebSuit = data.TarnnebValue;
    currentTurn = data.CurrentTurn;
    //    console.log("TarnnebSuit");
      //  console.log(TarnnebSuit);
    
//    console.log('<<<<<<<<<<<<< AITarnnebSelected >>>>>>>>>>>');
//    console.log('<<<<<< currentTurn >>>>>>>');
//    console.log(currentTurn);
//    console.log('<<<<<< TarnnebSuit >>>>>>>')
//    console.log(TarnnebSuit);
        BeginGame();
});

    socket.on('StartGameWithAI', function(data) {
        
        AI = data.AION;
        
        
        if(playerName == 'player1'){
        shuffle(cards);
            
                
            for (sub in cards.slice(0, 13)) {//0 13
                cards.slice(0, 13)[sub].PlayerName = 'player1';
            }
          
            //console.log(cards);

            for (sub in cards.slice(13, 26)) {//14 27
                cards.slice(13, 26)[sub].PlayerName = 'player2';
            }


            for (sub in cards.slice(26, 39)) {//14 27
                cards.slice(26, 39)[sub].PlayerName = 'player3';
            }
          
            
            for (sub in cards.slice(39, 52)) {//14 27
                cards.slice(39, 52)[sub].PlayerName = 'player4';
            }
            //console.log(cards);
            
             SortedCards = cards.sort(function(x, y){
                                return (
                            x.PlayerName < y.PlayerName ? -1 :
                            x.PlayerName > y.PlayerName ? 1 :
                            x.Suit < y.Suit ? -1 :
                            x.Suit > y.Suit ? 1 :
                            x.Rank < y.Rank ? -1:
                            x.Rank > y.Rank ? 1: 
                            0
                          );
                        });
        
        socket.emit('chackeGameIfBeginWithAI', {SortedCards:SortedCards,currentDealTurn:'player1'});
        }
       // bedStatus = false; // -------------------> REMOVE AND PROCCES
        //currentTurn = "player1"; // -------------------> REMOVE AND PROCCES
      //  BeginBeding();//GameBegin();
//        console.log("from StartGameWithAI data.AION = "+data.AION);
//        console.log(AI);
        
    });

    var UpdateCards = function() {            
        
        Q.clearStages();
        //console.log(cards);
        //console.log('card Playe Deck');
        //console.log(cardPlayeDeck);
        Q.stageScene('updateLevel');
        

    }
    
    function BeginBeding() {
        
//     
    if(AI == true){
          
             
        if(currentBedingTurn != "player1" && playerName == "player1" && IsPlayerAI(playersInRoom,currentBedingTurn)){
      //              console.log('sex');
      //             console.log(currentBedingTurn);
            
                    if(currentBedingTurn != "player1") { //اضافة
                        Q.clearStages();
                     Q.stageScene('WhatingToBedingLevel'); //'BedingLevel'
              //      console.log('WhatingToBedingLevel');
                    }
            
                        AIBeding(currentBedingTurn);
                }
//         
        if(playerBeding.length > 1 && currentBedingTurn == playerName){
       setTimeout(function() {
//             
             if (currentBedingTurn == playerName) {
                 
          //       console.log(playerBeding);
       //          console.log(playerName);
            // console.log('player is Human');
        //if there is one Human Player with 3AI Player 2000 is good
            Q.clearStages();
              //  console.log('player is Human 1');
            Q.stageScene('BedingLevel');
                 
            //console.log('player is Human 2');
                // break;
        
              //   console.log('player is Human 3');
                
           //     console.log('BedingLevel');
        } 
        else {
             Q.clearStages();
         //   console.log('player is Human cleard');
                Q.stageScene('WhatingToBedingLevel'); //'BedingLevel'
             //   console.log('WhatingToBedingLevel');
            }
//        
     }, 1000);
        }
        else{
        if (currentBedingTurn == playerName) {
                 
          //       console.log(playerBeding);
       //          console.log(playerName);
             console.log('player is Human');
        //if there is one Human Player with 3AI Player 2000 is good
            Q.clearStages();
                console.log('player is Human 1');
            Q.stageScene('BedingLevel');
                 
            console.log('player is Human 2');
                // break;
        
                 console.log('player is Human 3');
                
           //     console.log('BedingLevel');
        } 
        else {
             Q.clearStages();
         //   console.log('player is Human cleard');
                Q.stageScene('WhatingToBedingLevel'); //'BedingLevel'
             //   console.log('WhatingToBedingLevel');
            }
        }
     //   console.log('oooooooooooooooooooooooooo');
        }
    
    else if(AI == false){
         Q.clearStages();
        if (currentBedingTurn == playerName) {
           //  console.log('player is Human');
//console.log('AI == false');
                Q.stageScene('BedingLevel');
               // console.log('BedingLevel');
        } else {
                Q.stageScene('WhatingToBedingLevel'); //'BedingLevel'
                //console.log('WhatingToBedingLevel');
            }
        } 
    }

    var LastBeding = function() {
        Q.clearStages();
        
         if(AI == true){
              if(currentBedingTurn != "player1" && playerName == "player1"){
                  if(IsPlayerAI(playersInRoom,currentBedingTurn)){
                    AIBeding(currentBedingTurn);
                }
              }
         if (currentBedingTurn == playerName) {
                Q.stageScene('LastBeding');
           //     console.log('last LastBeding');
            } 
            else {
                Q.stageScene('WhatingToBedingLevel'); //'BedingLevel'
             //   console.log('last WhatingToBedingLevel');
            }
         }
        
          else if(AI == false){
            if (currentBedingTurn == playerName) {
                Q.stageScene('LastBeding');
               // console.log('last LastBeding');
            } 
            else {
                Q.stageScene('WhatingToBedingLevel'); //'BedingLevel'
                //console.log('last WhatingToBedingLevel');
            }
          }
    }

    var BeginGame = function() { // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        //var i=0;
        //console.log('BeginLevel');
        //console.log(i++);
      //  console.log('<<From Begin Game SortedCards are>>');
     //   console.log(SortedCards);
        Q.clearStages();
        Q.stageScene('BeginLevel');
        
        
if(playerName == "player1" && currentTurn != "player1" && IsPlayerAI(playersInRoom,currentTurn)) {
            AIPlay(currentTurn);
         }
    }

    var SelectingTarnneb = function() {
        Q.clearStages();
        if (currentTurn == playerName) {
            Q.stageScene('SelectingTarnneb');
        } else {
            Q.stageScene('WattingToSelectTarnib');
        }
    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function GameBegin() {
    
        shuffle(cards);
            
                
            for (sub in cards.slice(0, 13)) {//0 13
                cards.slice(0, 13)[sub].PlayerName = 'player1';
            }
          
            //console.log(cards);

            for (sub in cards.slice(13, 26)) {//14 27
                cards.slice(13, 26)[sub].PlayerName = 'player2';
            }


            for (sub in cards.slice(26, 39)) {//14 27
                cards.slice(26, 39)[sub].PlayerName = 'player3';
            }
          
            
            for (sub in cards.slice(39, 52)) {//14 27
                cards.slice(39, 52)[sub].PlayerName = 'player4';
            }
            //console.log(cards);
            
             SortedCards = cards.sort(function(x, y){
                                return (
                            x.PlayerName < y.PlayerName ? -1 :
                            x.PlayerName > y.PlayerName ? 1 :
                            x.Suit < y.Suit ? -1 :
                            x.Suit > y.Suit ? 1 :
                            x.Rank < y.Rank ? -1:
                            x.Rank > y.Rank ? 1: 
                            0
                          );
                        });
 
        
            socket.emit('chackeGameIfBegin', {SortedCards:SortedCards,currentDealTurn:'player1'});
    
    }

    function CardWon() {
        var IsThereTarrneb = 0;
//        console.log('xxxxxxxxxxxxxxxxxxxx');
//        console.log(cardsPlayed);
//        console.log('yyyyyyyyyyyyyyyyyy');
//        console.log(CurrentSuit);
     var CardWon = {Rank: 0};
               
        
        for (sub in cardsPlayed) {
  
            if (cardsPlayed[sub].Suit == TarnnebSuit) {
            
                    IsThereTarrneb ++;
            }
        }
        
        if(IsThereTarrneb == 4){
              for (sub in cardsPlayed) {
            //determing the card that will be the won card
        CardWon = cardsPlayed[sub].Rank > CardWon.Rank ? cardsPlayed[sub] : CardWon;
                //console.log('CardWon IsThereTarrneb == 4');
                //console.log(CardWon);
              }
        }else if(IsThereTarrneb < 4 && IsThereTarrneb > 0){
            //console.log('CardWon IsThereTarrneb < 4 && IsThereTarrneb > 0');
            for (sub in cardsPlayed) {
                if (cardsPlayed[sub].Suit == TarnnebSuit) {
                     CardWon = cardsPlayed[sub].Rank > CardWon.Rank ? cardsPlayed[sub] : CardWon;
                //console.log('CardWon IsThereTarrneb < 4');
                //console.log(CardWon);
                }
            }
        } else if(IsThereTarrneb == 0) {
            //console.log('CardWon IsThereTarrneb == 0');
            for (sub in cardsPlayed) {
                if(cardsPlayed[sub].Suit == CurrentSuit) {
                CardWon = cardsPlayed[sub].Rank > CardWon.Rank ? cardsPlayed[sub] : CardWon;
                //console.log('CardWon IsThereTarrneb == 0');
                //console.log(CardWon);
                }
            }
        } else {
         console.log('CardWon ERORR');
        }
        
        //console.log('befor currentTurn');
        //console.log(currentTurn);
        cardsWoned.push({PlayerWon:CardWon.PlayerName});
        //console.log("cards wond");
        //console.log(cardsWoned);
        
        
        cardsPlayed = []; // clear the cardsPlayed array
        CurrentSuit = '';
        currentTurn = CardWon.PlayerName;
        
        //console.log('after currentTurn');
        //console.log(currentTurn);
        
       // console.log("currentTurn");
    //    console.log(currentTurn);
        
        //console.log("card Playe Deck");
        //console.log(cardPlayeDeck);
        
        setTimeout(function() {
            UpdateCards();
        }, 1000);
        
        
                
//        setTimeout(function() { //if there is one Human Player with 3AI Player 2000 is good
//            if(!IsPlayerAI(playersInRoom,currentBedingTurn)){
//            AIPlay(currentTurn);
//        }
//        }, 1000);
        
//        setTimeout(function() { //if there is one Human Player with 3AI Player 2000 is good
//            if(IsPlayerAI(playersInRoom,currentTurn)){
//            AIPlay(currentTurn);
//        }
//        }, 2000);
        
        
      
        //when all player have been played there card 
        //the cardsPlayed length must be 4 
        //then we determen the wining card in the cardsPlayed array.
        //after we determin wich card is the wining card we clear the cardsPlayed array                   for the next turn   

        //console.log('card wonnnnnnnnn?????????');
    }

    function Redeal() {
        
        Q.clearStages();
        
        if(playerName == 'player1'){
            
            shuffle(cards);
            
                
            for (sub in cards.slice(0, 13)) {//0 13
                cards.slice(0, 13)[sub].PlayerName = 'player1';
            }
          
            //console.log(cards);

            for (sub in cards.slice(13, 26)) {//14 27
                cards.slice(13, 26)[sub].PlayerName = 'player2';
            }


            for (sub in cards.slice(26, 39)) {//14 27
                cards.slice(26, 39)[sub].PlayerName = 'player3';
            }
          
            
            for (sub in cards.slice(39, 52)) {//14 27
                cards.slice(39, 52)[sub].PlayerName = 'player4';
            }
            //console.log(cards);
            
             SortedCards = cards.sort(function(x, y){
                                return (
                            x.PlayerName < y.PlayerName ? -1 :
                            x.PlayerName > y.PlayerName ? 1 :
                            x.Suit < y.Suit ? -1 :
                            x.Suit > y.Suit ? 1 :
                            x.Rank < y.Rank ? -1:
                            x.Rank > y.Rank ? 1: 
                            0
                          );
                        });
            
            
            switch (currentDealTurn) {
                
                case 'player1':
                currentDealTurn = 'player2';
                break;
                    
                case 'player2':
                currentDealTurn = 'player3';
                break;
                
                case 'player3':
                currentDealTurn = 'player4';
                break;
                
                case 'player4':
                currentDealTurn = 'player1';
                break;    
                    
                default:
                console.log('Error');
            }    
                if(AI == false){
            socket.emit('chackeGameIfBegin', {SortedCards:SortedCards,currentDealTurn:currentDealTurn});
            }else{
            socket.emit('chackeGameIfBeginWithAI', {SortedCards:SortedCards,currentDealTurn:currentDealTurn});
            }
    }
    }

    function IsPlayerAI(playersInRoom, playerPostionMap) {
        
        //console.log('IsPlayerAI');
       // console.log(playerPostionMap);
            for(sub in playersInRoom) {
                if(playersInRoom[sub].playerPostionMap == playerPostionMap){
                 //console.log(playersInRoom[sub].playerPostionMap);
                return false;
                }
            }
            return true;
            
        }

    function AIBeding(currentBedingTurn) {
        
    //    console.log(playersInRoom);
      //  console.log('AI BEDING from AIBeding(currentBedingTurn) function');
       // console.log(cardPlayeDeck);
        var AICards = [];
        var CardsDetalies = [{Suit:'C', Count: 0, Chance:0}
                            ,{Suit:'D', Count: 0, Chance:0}
                            ,{Suit:'H', Count: 0, Chance:0}
                            ,{Suit:'S', Count: 0, Chance:0}];
        
        var TotalExpectedCardsToWon = 0;
        var AiTarnib = '';
     //  console.log(SortedCards);
        
            for (sub in SortedCards){
                if(SortedCards[sub].PlayerName == currentBedingTurn){
                    AICards.push(SortedCards[sub]);
                }
            }
        
    //    console.log(AICards.length);

            for(sub in AICards) {
                    for(subs in CardsDetalies) {
                        if(AICards[sub].Suit == CardsDetalies[subs].Suit){
//                            console.log("AICards[sub].Suit" + AICards[sub].Suit);
//                            console.log("CardsMap[sub].Suit" + CardsDetalies[subs].Suit);
//                             console.log(CardsDetalies[subs]);
                            CardsDetalies[subs].Count = CardsDetalies[subs].Count + 1;
            CardsDetalies[subs].Chance = CardsDetalies[subs].Chance + AICards[sub].Rank; 
                        }
                  }
            }
           
            for(sub in CardsDetalies) {
            
            if(CardsDetalies[sub].Count > 7){
              
                if(CardsDetalies[sub].Count == 13){
                    TotalExpectedCardsToWon = 13;
                }
                
                else if(CardsDetalies[sub].Count == 12){
                        if(CardsDetalies[sub].Chance == 102){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 12;    
                        }
                    else if(CardsDetalies[sub].Chance == 90){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 11;
                        }
                }
                
                else if(CardsDetalies[sub].Count == 11){
                    if(CardsDetalies[sub].Chance == 99){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 11;    
                        }else if(CardsDetalies[sub].Chance == 77){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 9;
                        }
                }
                
                 else if(CardsDetalies[sub].Count == 10){
                    if(CardsDetalies[sub].Chance == 81){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 10;    
                        }else if(CardsDetalies[sub].Chance == 65){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 7;
                        }
                }
                else if(CardsDetalies[sub].Count == 9){
                    if(CardsDetalies[sub].Chance == 90){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 9;    
                        }else if(CardsDetalies[sub].Chance == 45){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 5;
                        }
                }
                
                else if(CardsDetalies[sub].Count == 8){
                    if(CardsDetalies[sub].Chance == 84){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 8;    
                        } else if(CardsDetalies[sub].Chance == 44){
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 3;
                        }
                }
            }
                
                else if(CardsDetalies[sub].Count <= 7){
                    
                    if(CardsDetalies[sub].Count == 2){
                        if(CardsDetalies[sub].Chance == 25 || CardsDetalies[sub].Chance == 26)                         {
                            TotalExpectedCardsToWon = TotalExpectedCardsToWon + 2;    
                        }
                    }
                    
                    else if(CardsDetalies[sub].Chance == 14){
                        TotalExpectedCardsToWon = TotalExpectedCardsToWon + 1;
                    }
                    else if(CardsDetalies[sub].Chance == 27){
                        TotalExpectedCardsToWon = TotalExpectedCardsToWon + 2;
                    }
                    else if(CardsDetalies[sub].Chance == 39){
                        TotalExpectedCardsToWon =  TotalExpectedCardsToWon + 3;
                    }
                    else if(CardsDetalies[sub].Chance == 50){
                        TotalExpectedCardsToWon = TotalExpectedCardsToWon + 4;
                    }
                    else if(CardsDetalies[sub].Chance == 60){
                        TotalExpectedCardsToWon = TotalExpectedCardsToWon + 5;
                    }
                    else if(CardsDetalies[sub].Chance == 69){
                        TotalExpectedCardsToWon = TotalExpectedCardsToWon + 6;
                    }
                    else if(CardsDetalies[sub].Chance == 77){
                        TotalExpectedCardsToWon  = TotalExpectedCardsToWon + 7;
                    }
                }
            }
        
     //    console.log('TotalExpectedCardsToWonBefor < 7 = '+TotalExpectedCardsToWon);
        
        if(TotalExpectedCardsToWon < 7) {
            TotalExpectedCardsToWon = 0;
        
            for(S in AICards){
            if(AICards[S].Rank == 14 || AICards[S].Rank == 13 || AICards[S].Rank == 12 || AICards[S].Rank == 11) {
                    TotalExpectedCardsToWon = TotalExpectedCardsToWon + 1;        
                }
            }
        
        }
        
     //   console.log(CardsDetalies);
     //   console.log(currentBedingTurn);
        
        
       // console.log('TotalExpectedCardsToWon = ' + TotalExpectedCardsToWon);
        
        if(TotalExpectedCardsToWon >= 7){
                TotalExpectedCardsToWon = TotalExpectedCardsToWon;
            }else {
                TotalExpectedCardsToWon = 0;
            }
            
//        console.log('AI BEDING');
//        console.log(AICards);
//        
//        console.log('Ai Tarnib');
//        console.log(AiTarnib);
//        
//        if(currentBedingTurn == 'player3'){
//            TotalExpectedCardsToWon = 8;
//        }
        if(TotalExpectedCardsToWon <= GlobalBedValue){
        TotalExpectedCardsToWon = 0;
        }
        
        if(playerBeding.length == 1) { // IF THE AI PLAYER IS THE LAST PLAYER IS BEDING
             socket.emit('LastBeding', {
                    BedingValue: TotalExpectedCardsToWon,//TotalExpectedCardsToWon  || 13 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                    PlayerName: currentBedingTurn
                  //TarnnebSuit:AiTarnib
             });
        }
        else {// IF THE AI PLAYER IS BEDING
        
            socket.emit('Beding', {
                        BedingValue: TotalExpectedCardsToWon,//TotalExpectedCardsToWon
                        PlayerName: currentBedingTurn//,
                      //TarnnebSuit:AiTarnib
            });
        }
    }

    function AISelectingTarnneb(AIPlayerName) {//emit what is the tarnnib 
        var AITarnnibSuit = '';
        var TempCount = 0;
        var AICards = [];
        var CardsDetalies = [{Suit:'C', Count: 0}
                            ,{Suit:'D', Count: 0}
                            ,{Suit:'H', Count: 0}
                            ,{Suit:'S', Count: 0}];
        
             for (sub in SortedCards){
                if(SortedCards[sub].PlayerName == AIPlayerName){
                    AICards.push(SortedCards[sub]);
                }
            }
        
               for(AICardsSub in AICards) {
                    for(CardsDetaliesSub in CardsDetalies) {
                if(AICards[AICardsSub].Suit == CardsDetalies[CardsDetaliesSub].Suit){
                CardsDetalies[CardsDetaliesSub].Count = CardsDetalies[CardsDetaliesSub].Count + 1;
                        }
                  }
            }
        
        for(CardsDetaliesSubs in CardsDetalies){
            if(CardsDetalies[CardsDetaliesSubs].Count > TempCount){
                TempCount = CardsDetalies[CardsDetaliesSubs].Count;
                AITarnnibSuit = CardsDetalies[CardsDetaliesSubs].Suit;
            }
        }
//        console.log('<< AITarnnib Suit >>');
//        console.log(AITarnnibSuit);
        
        socket.emit('AISelectingTarnneb' ,{ TarnnebValue: AITarnnibSuit,
                                            CurrentTurn: AIPlayerName });
        
        //emit.AIPlayerName to set on '' to currentTurn = data.AIPlayerName
        //emit.TarnnebSuit and set on '' to TarnnebSuit = data.TarnnebSuit
    }

    function AIPlay(AIplayerName) {
        
        if(playerName == "player1" && currentTurn != "player1"){
//        console.log('99999999999999999999999');
//            console.log(currentTurn);
//        console.log(cardPlayeDeck);
//        console.log(AIplayerName);
        var AICards = [];
        var AITarnnibCards = [];
        
        for(W in cardPlayeDeck) {
            if(cardPlayeDeck[W].PlayerName == AIplayerName){
                AICards.push(cardPlayeDeck[W]);
            }
        }
//        console.log(AICards);
//        console.log(TarnnebSuit);
        for(E in AICards){
            if(AICards[E].Suit == TarnnebSuit){
                AITarnnibCards.push(AICards[E]);
            }
        }
//        
         // console.log(currentTurn);
          //console.log(AICards);
//        console.log(TarnnebSuit);
//        console.log(AITarnnibCards);
//        console.log(CurrentSuit);
      
        if(CurrentSuit == '') {
//            
//            console.log("__________________");
//            console.log("CurrentSuit == ''");
                
            var PlayCard = {Rank: 0};
                      
                    if(AITarnnibCards.length >= 1) { // haveing tarrneb card
                
                        for(R in AITarnnibCards){
                                if(AITarnnibCards[R].Rank > PlayCard.Rank){
                                    PlayCard = AITarnnibCards[R];
                                }
                            }
                         
                          socket.emit('tellothers', {
                                    CardPlayed: 1,
                                    PlayerName: PlayCard.PlayerName,
                                    Rank: PlayCard.Rank,
                                    Suit: PlayCard.Suit,
                                    CardName: PlayCard.CardName,
                                    Asset: PlayCard.CardName+".png",
                                    Scale: PlayCard.scale,
                                    cardX: PlayCard.x,
                                    cardY: PlayCard.y
                                });
                        
                        } else { // not haveing tarrneb card
                            for(T in AICards){
                                if(AICards[T].Rank > PlayCard.Rank ){
                                    PlayCard = AICards[T];
                                }
                            }
                            
                             socket.emit('tellothers', {
                                    CardPlayed: 1,
                                    PlayerName: PlayCard.PlayerName,
                                    Rank: PlayCard.Rank,
                                    Suit: PlayCard.Suit,
                                    CardName: PlayCard.CardName,
                                    Asset: PlayCard.CardName+".png",
                                    Scale: PlayCard.scale,
                                    cardX: PlayCard.x,
                                    cardY: PlayCard.y
                                });
                        }
                
//                console.log("<<<<<<<<<<PlayCard>>>>>>>>>>");
//                console.log(PlayCard);
            }
        
            else if(CurrentSuit != '') { 
//                console.log("__________________");
//            console.log("CurrentSuit != ''");
//                console.log(currentTurn);
                var PlayCard = {Rank: 0};
                var AIPCWOTSOOTS = [];//AIPlaybellCardsWithOutTarnnebSuitOrOnlyTarnnebSuit
                var AIPACWTS = [];//AIPlaybellAllCardsWithTarnnebSuit
               // console.log(AICards);
                for(Y in AICards){
                    if(AICards[Y].Playbell == 1 && AICards[Y].Suit == currentTurn){
                        AIPCWOTSOOTS.push(AICards[Y]);    
                    }
                    else if(AICards[Y].Playbell == 1 && AICards[Y].Suit != currentTurn){
                        AIPACWTS.push(AICards[Y]);
                    }
                }
//                console.log(AIPCWOTSOOTS);
//                console.log(AIPACWTS);
//                console.log(AIPCWOTSOOTS.length);
//                console.log(AIPACWTS.length);
                if(AIPCWOTSOOTS.length >= 1){
    //console.log('AIPlaybell Cards WithOut Tarnneb Suit Or Only TarnnebSuit ' + currentTurn);
                    console.log(AIPCWOTSOOTS);
                     for(X in AIPCWOTSOOTS){
                                if(AIPCWOTSOOTS[X].Rank > PlayCard.Rank){
                                    PlayCard = AIPCWOTSOOTS[X];
                                }
                            }
//                     console.log('AIPCWOTSOOTS.length > 1');
                  //  console.log('PlayCard');
                    //console.log(PlayCard);
                    socket.emit('tellothers', {
                                    CardPlayed: 1,
                                    PlayerName: PlayCard.PlayerName,
                                    Rank: PlayCard.Rank,
                                    Suit: PlayCard.Suit,
                                    CardName: PlayCard.CardName,
                                    Asset: PlayCard.CardName+".png",
                                    Scale: PlayCard.scale,
                                    cardX: PlayCard.x,
                                    cardY: PlayCard.y
                                });
                    
                } else if(AIPACWTS.length >= 1){
                //    console.log('AIPlaybell All Cards With Tarnneb Suit '+ currentTurn);
               //     console.log(AIPACWTS);
                       for(V in AIPACWTS){
                                if(AIPACWTS[V].Rank > PlayCard.Rank){
                                    PlayCard = AIPACWTS[V];
                                }
                            }
//                    console.log('AIPACWTS.length > 1');
               //     console.log('PlayCard');
               //     console.log(PlayCard);
                    socket.emit('tellothers', {
                                    CardPlayed: 1,
                                    PlayerName: PlayCard.PlayerName,
                                    Rank: PlayCard.Rank,
                                    Suit: PlayCard.Suit,
                                    CardName: PlayCard.CardName,
                                    Asset: PlayCard.CardName+".png",
                                    Scale: PlayCard.scale,
                                    cardX: PlayCard.x,
                                    cardY: PlayCard.y
                                });
                }
                
            }
        }
    }

    function StackCards() {
       var x1 = 0, y1 =0, x2=0, y2 = 0, ang1 = 0, xx1 =0 , ang2=0, xx2 =0 ,yy =0,ang3=0, 
            cardCount1 = 0,cardCount2=0,cardCount3 = 0;
      //  console.log("'''''BeginLevel'''''");
       
             if (playerName == 'player1') {

           for (sub in SortedCards) {

                    if (SortedCards[sub].PlayerName == 'player1') {

                   
                     
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: SortedCards[sub].Asset,
                        scale: Scale,
                        angle: 0,
                        x: playersPostion[0].x + x1,
                        y: playersPostion[0].y
                    });

                    x1 = x1 + ((4 / 100) * Q.el.width);

                }
               else if (SortedCards[sub].PlayerName == 'player2') {

                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[1].x - xx1,
                        y: playersPostion[1].y + y1,
                        angle:  +135 + ang1
                    });

                    y1 = y1 + ((1.35/ 100) * (Q.el.width));
                    
                   cardCount1 ++;
                    if(cardCount1 > 6){
                        xx1 = xx1 - ((0.33/ 100) * (Q.el.width));
                        ang1 = ang1 - 5;
                        
                    }
                    else if(cardCount1 == 5){
                        xx1 = xx1 - ((0.4 / 100) * (Q.el.width));
                        }
                    else{
                        xx1 = xx1 + ((0.5 / 100) * (Q.el.width));
                        ang1 = ang1 - 8;
                    }
                }
               else if (SortedCards[sub].PlayerName == 'player3') {
              

                    
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        angle: +50+ ang3,
                        x: playersPostion[2].x + x2,
                        y: playersPostion[2].y - yy
                    });

                   
                   x2 = x2 +  ((1.35/ 100) * (Q.el.width));
                 cardCount3 ++;
                    if(cardCount3 > 6){
                        yy = yy + ((0.33/ 100) * (Q.el.width));
                        ang3 = ang3 - 5;
                        
                    }
                    else if(cardCount3 == 5){
                        yy = yy + ((0.4 / 100) * (Q.el.width));
                        }
                    else{
                        yy = yy - ((0.5 / 100) * (Q.el.width));
                        ang3 = ang3 - 8;
                    }
                }
               else if (SortedCards[sub].PlayerName == 'player4') {
               
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[3].x + xx2,
                        y: playersPostion[3].y + y2,
                        angle: +225 - ang2
                    });

                     y2 = y2 + ((1.35/ 100) * (Q.el.width));
                    
                   cardCount2 ++;
                    if(cardCount2 > 6){
                        xx2 = xx2 - ((0.33/ 100) * (Q.el.width));
                        ang2 = ang2 - 5;
                        
                    }
                    else if(cardCount2 == 5){
                        xx2 = xx2 - ((0.4 / 100) * (Q.el.width));
                        }
                    else{
                        xx2 = xx2 + ((0.5 / 100) * (Q.el.width));
                        ang2 = ang2 - 8;
                    }
                }
            }
        } 
        else if (playerName == 'player2') {

            for (sub in SortedCards) {

                     if (SortedCards[sub].PlayerName == 'player1') {
          
                    
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[3].x + xx2,
                        y: playersPostion[3].y + y2,
                        angle: +225 - ang2
                    });

                    y2 = y2 + ((1.35/ 100) * (Q.el.width));
		            
		           cardCount2 ++;
		            if(cardCount2 > 6){
		                xx2 = xx2 - ((0.33/ 100) * (Q.el.width));
		                ang2 = ang2 - 5;
		                
		            }
		            else if(cardCount2 == 5){
		                xx2 = xx2 - ((0.4 / 100) * (Q.el.width));
		                }
		            else{
		                xx2 = xx2 + ((0.5 / 100) * (Q.el.width));
		                ang2 = ang2 - 8;
		            }
                    
                }
                else if (SortedCards[sub].PlayerName == 'player2') {
         

                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: SortedCards[sub].Asset,
                        scale: Scale,
                        angle: 0,
                        x: playersPostion[0].x + x1,
                        y: playersPostion[0].y
                    });

                    x1 = x1 + ((4 / 100) * Q.el.width);
                    
                }
                else if (SortedCards[sub].PlayerName == 'player3') {
             

                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[1].x - xx1,
                        y: playersPostion[1].y + y1,
                        angle:  +135 + ang1
                    });

                    y1 = y1 + ((1.35/ 100) * (Q.el.width));
                    
                   cardCount1 ++;
                    if(cardCount1 > 6){
                        xx1 = xx1 - ((0.33/ 100) * (Q.el.width));
                        ang1 = ang1 - 5;
                        
                    }
                    else if(cardCount1 == 5){
                        xx1 = xx1 - ((0.4 / 100) * (Q.el.width));
                        }
                    else{
                        xx1 = xx1 + ((0.5 / 100) * (Q.el.width));
                        ang1 = ang1 - 8;
                    }
                    
                }
                else if (SortedCards[sub].PlayerName == 'player4') {
            
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        angle: +50+ ang3,
                        x: playersPostion[2].x + x2,
                        y: playersPostion[2].y - yy
                    });

                     x2 = x2 +  ((1.35/ 100) * (Q.el.width));
                    cardCount3 ++;
		            if(cardCount3 > 6){
		                yy = yy + ((0.33/ 100) * (Q.el.width));
		                ang3 = ang3 - 5;   
		            }
		            else if(cardCount3 == 5){
		                yy = yy + ((0.4 / 100) * (Q.el.width));
		                }
		            else{
		                yy = yy - ((0.5 / 100) * (Q.el.width));
		                ang3 = ang3 - 8;
		            }
                }
            }
        }
        else if (playerName == 'player3') {
            for (sub in SortedCards) {

                if (SortedCards[sub].PlayerName == 'player1') {
                 
                    
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        angle: +50+ ang3,
                        x: playersPostion[2].x + x2,
                        y: playersPostion[2].y - yy
                    });

                    x2 = x2 +  ((1.35/ 100) * (Q.el.width));
		         cardCount3 ++;
		            if(cardCount3 > 6){
		                yy = yy + ((0.33/ 100) * (Q.el.width));
		                ang3 = ang3 - 5;
		                
		            }
		            else if(cardCount3 == 5){
		                yy = yy + ((0.4 / 100) * (Q.el.width));
		                }
		            else{
		                yy = yy - ((0.5 / 100) * (Q.el.width));
		                ang3 = ang3 - 8;
		            }
                    
                } 
                else if (SortedCards[sub].PlayerName == 'player2') {
              

                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[3].x + xx2,
                        y: playersPostion[3].y + y2,
                        angle: +225 - ang2
                    });

                   y2 = y2 + ((1.35/ 100) * (Q.el.width));
		            
		           cardCount2 ++;
		            if(cardCount2 > 6){
		                xx2 = xx2 - ((0.33/ 100) * (Q.el.width));
		                ang2 = ang2 - 5;
		                
		            }
		            else if(cardCount2 == 5){
		                xx2 = xx2 - ((0.4 / 100) * (Q.el.width));
		                }
		            else{
		                xx2 = xx2 + ((0.5 / 100) * (Q.el.width));
		                ang2 = ang2 - 8;
		            }

                    
                }
                else if (SortedCards[sub].PlayerName == 'player3') {
       

                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: SortedCards[sub].Asset,
                        scale: Scale,
                        x: playersPostion[0].x + x1,
                        y: playersPostion[0].y,
                        angle:0
                    });

                    x1 = x1 + ((4 / 100) * Q.el.width);

                }
                else if (SortedCards[sub].PlayerName == 'player4') {
           
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[1].x - xx1,
                        y: playersPostion[1].y + y1,
                        angle:  +135 + ang1
                    });

                    y1 = y1 + ((1.35/ 100) * (Q.el.width));
                    
                   cardCount1 ++;
                    if(cardCount1 > 6){
                        xx1 = xx1 - ((0.33/ 100) * (Q.el.width));
                        ang1 = ang1 - 5;
                        
                    }
                    else if(cardCount1 == 5){
                        xx1 = xx1 - ((0.4 / 100) * (Q.el.width));
                        }
                    else{
                        xx1 = xx1 + ((0.5 / 100) * (Q.el.width));
                        ang1 = ang1 - 8;
                    }
                }
            }
        }
        else if (playerName == 'player4') { 
                
            for (sub in SortedCards) {

                if (SortedCards[sub].PlayerName == 'player1') {
          
                    
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[1].x - xx1,
                        y: playersPostion[1].y + y1,
                        angle:  +135 + ang1
                    });

                   y1 = y1 + ((1.35/ 100) * (Q.el.width));
                    
                   cardCount1 ++;
                    if(cardCount1 > 6){
                        xx1 = xx1 - ((0.33/ 100) * (Q.el.width));
                        ang1 = ang1 - 5;
                        
                    }
                    else if(cardCount1 == 5){
                        xx1 = xx1 - ((0.4 / 100) * (Q.el.width));
                        }
                    else{
                        xx1 = xx1 + ((0.5 / 100) * (Q.el.width));
                        ang1 = ang1 - 8;
                    }
                    
                } 
                else if (SortedCards[sub].PlayerName == 'player2') {
       

                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        angle: +50+ ang3,
                        x: playersPostion[2].x + x2,
                        y: playersPostion[2].y - yy
                    });

                    x2 = x2 +  ((1.35/ 100) * (Q.el.width));
		         cardCount3 ++;
		            if(cardCount3 > 6){
		                yy = yy + ((0.33/ 100) * (Q.el.width));
		                ang3 = ang3 - 5;
		                
		            }
		            else if(cardCount3 == 5){
		                yy = yy + ((0.4 / 100) * (Q.el.width));
		                }
		            else{
		                yy = yy - ((0.5 / 100) * (Q.el.width));
		                ang3 = ang3 - 8;
		            }
                    
                }
                else if (SortedCards[sub].PlayerName == 'player3') {
               

                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: 'card_back.png',
                        scale: Scale,
                        x: playersPostion[3].x + xx2,
                        y: playersPostion[3].y + y2,
                        angle: +225 - ang2
                    });

                    y2 = y2 + ((1.35/ 100) * (Q.el.width));
		            
		           cardCount2 ++;
		            if(cardCount2 > 6){
		                xx2 = xx2 - ((0.33/ 100) * (Q.el.width));
		                ang2 = ang2 - 5;
		                
		            }
		            else if(cardCount2 == 5){
		                xx2 = xx2 - ((0.4 / 100) * (Q.el.width));
		                }
		            else{
		                xx2 = xx2 + ((0.5 / 100) * (Q.el.width));
		                ang2 = ang2 - 8;
		            }
                    
                }
                else if (SortedCards[sub].PlayerName == 'player4') {
                  
                    cardPlayeDeck.push({
                        CardPlayed: SortedCards[sub].CardPlayed,
                        PlayerName: SortedCards[sub].PlayerName,
                        CardName: SortedCards[sub].CardName,
                        Rank: SortedCards[sub].Rank,
                        Suit: SortedCards[sub].Suit,
                        asset: SortedCards[sub].Asset,
                        scale: Scale,
                        angle: 0,
                        x: playersPostion[0].x + x1,
                        y: playersPostion[0].y
                    });

                    x1 = x1 + ((4 / 100) * Q.el.width);
                }
            }
        }
    }

    function DrawCards(stage) {
       // console.log(cardPlayeDeck);
        for(sub in cardPlayeDeck){
            stage.insert(new Q.Card({
                        CardPlayed: cardPlayeDeck[sub].CardPlayed,
                        PlayerName: cardPlayeDeck[sub].PlayerName,
                        CardName: cardPlayeDeck[sub].CardName,
                        Rank: cardPlayeDeck[sub].Rank,
                        Suit: cardPlayeDeck[sub].Suit,
                        asset: cardPlayeDeck[sub].asset,
                        scale: cardPlayeDeck[sub].scale,
                        angle: cardPlayeDeck[sub].angle,
                        x: cardPlayeDeck[sub].x,
                        y: cardPlayeDeck[sub].y
                    }));
        }
    }

    function DrawScore(stage) {
        

      var container = stage.insert(new Q.UI.Container({
            h:(Q.el.height/2),
            w:(Q.el.width/2),
            fill: 'rgba(255, 255, 255, 0.7)',
            //scale: Scale,
            //border: 1,
            //shadow: 0,
           //shadowColor: "rgba(90,90,88,1)",
            y: ((50 / 100) * Q.el.height),
            x: ((50 / 100) * Q.el.width),
            hidden:ScoreVisibility
        }));
        
        stage.insert(new Q.UI.Text({
            label: "Score",
            color: "black",
           // x: container.p.x * 0.5,
            y: Q.el.height * - 0.2
        }), container);
        
        if(playerName == 'player1' || playerName =='player3') {
            
                stage.insert(new Q.UI.Text({
                    label: "Them",
                    color: "black",
                    x:Q.el.width *  0.15,  
                    y:Q.el.height * - 0.1
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "We",
                    color: "black",
                    x:Q.el.width  *  - 0.15,  
                    y:Q.el.height * - 0.1
                }), container);

                        stage.insert(new Q.UI.Text({
                    label: ""+TeamOneScore+"",
                    color: "black",
                    x:Q.el.width  *  - 0.15,  
                    y:Q.el.height *  0.0
                }), container);

                stage.insert(new Q.UI.Text({
                    label: ""+TeamTwoScore+"",
                    color: "black",
                    x:Q.el.width *  0.15,  
                    y:Q.el.height * 0.0
                }), container);


                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  0.24,  
                    y:Q.el.height * - 0.23
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  - 0.24,  
                    y:Q.el.height * - 0.23
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  - 0.24,  
                    y:Q.el.height *  0.23
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  0.24,  
                    y:Q.el.height * 0.23
                }), container);
            
        } 
        
        else {
            
                stage.insert(new Q.UI.Text({
                    label: "Them",
                    color: "black",
                    x:Q.el.width *  0.15,  
                    y:Q.el.height * - 0.1
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "We",
                    color: "black",
                    x:Q.el.width  *  - 0.15,  
                    y:Q.el.height * - 0.1
                }), container);

                stage.insert(new Q.UI.Text({
                    label: ""+TeamTwoScore+"",
                    color: "black",
                    x:Q.el.width  *  - 0.15,  
                    y:Q.el.height *  0.0
                }), container);

                stage.insert(new Q.UI.Text({
                    label: ""+TeamOneScore+"",
                    color: "black",
                    x:Q.el.width *  0.15,  
                    y:Q.el.height * 0.0
                }), container);


                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  0.24,  
                    y:Q.el.height * - 0.23
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  - 0.24,  
                    y:Q.el.height * - 0.23
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  - 0.24,  
                    y:Q.el.height *  0.23
                }), container);

                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "rgba(255, 255, 255, 0)",
                    x:Q.el.width *  0.24,  
                    y:Q.el.height * 0.23
                }), container);
            
        }
        container.fit(0);

           var Show_Hide_Scoure_Btn = stage.insert(new Q.UI.Button({
            asset: 'Score.png',
            scale: Scale,
            y:(Q.height * 0.95),
            x:(Q.width * 0.9)
            //hidden:true
        }, function() {
            
            if(ScoreVisibility == true) {
                ScoreVisibility = false;
                this.p.asset = 'ScoreP.png';
                container.p.hidden = false;
            } else {
                ScoreVisibility = true;
                this.p.asset = 'Score.png';
                container.p.hidden = true;
            }
                
        }));
        
   //     console.log(Show_Hide_Scoure_Btn);
   
        
    }
    
    function DrawPlayersNames(stage) {
 
             if ( playerName == 'player1' ) {
            
           console.log(playersInRoom);
            
            var Player1NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((80 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));

                 stage.insert(new Q.UI.Text({
                    label: currentPlayerName,
                    color: "black",
                    scale: Scale + 0.20
                    //x: ((40 / 100) * Q.el.width) *  0.75,
                   // y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.5 
                }), Player1NameContainer);
            Player1NameContainer.fit(0);
            //----------------------------------------------------
            var Player2NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((22 / 100) * Q.el.height),
                    x: ((90 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
            
            
            if (playersInRoom.length >= 2) {
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[1].userName,
                    color: "black",
                     scale: Scale + 0.20
                //    x: ((50 / 100) * Q.el.width) *   0.86,
                  //  y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), Player2NameContainer);
            }
            else {
                 stage.insert(new Q.UI.Text({
                    label: "AI Player 2",
                    color: "black",
                     scale: Scale + 0.20
                  //  x: ((50 / 100) * Q.el.width) *   0.86,
                //    y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), Player2NameContainer);
            }
            Player2NameContainer.fit(0);
            //----------------------------------------------------
            
            var Player3NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((12 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
             if (playersInRoom.length >= 3) {
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[2].userName,
                    color: "black",
                     scale: Scale + 0.20
                   // x: ((40 / 100) * Q.el.width) *   - 0.60,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.7 
                }), Player3NameContainer);
             }
            else {
                 stage.insert(new Q.UI.Text({
                    label: "AI Player 3",
                    color: "black",
                     scale: Scale + 0.20
                   // x: ((40 / 100) * Q.el.width) *   - 0.60,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.7 
                }), Player3NameContainer);
            }
            Player3NameContainer.fit(0);
            //----------------------------------------------------
            var Player4NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((75 / 100) * Q.el.height),
                    x: ((8 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
             if (playersInRoom.length >= 4) {
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[3].userName,
                    color: "black",
                     scale: Scale + 0.20
                    //x: ((50 / 100) * Q.el.width) *    - 0.82,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.36     
                }), Player4NameContainer);
                         }
            else {
                  stage.insert(new Q.UI.Text({
                    label: "AI Player 4",
                    color: "black",
                      scale: Scale + 0.20
//                    x: ((50 / 100) * Q.el.width) *    - 0.82,
//                    y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.36     
                }), Player4NameContainer);
            }
            Player4NameContainer.fit(0);

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
        
        else if ( playerName == 'player2' ) {
                        
            var Player2NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((80 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));

                 stage.insert(new Q.UI.Text({
                    label: currentPlayerName,
                    color: "black",
                    scale: Scale + 0.20
                    //x: ((40 / 100) * Q.el.width) *  0.75,
                   // y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.5 
                }), Player2NameContainer);
            Player2NameContainer.fit(0);
            //----------------------------------------------------
            var Player3NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((22 / 100) * Q.el.height),
                    x: ((90 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
            
            
            if (playersInRoom.length >= 3) {
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[2].userName,
                    color: "black",
                     scale: Scale + 0.20
                //    x: ((50 / 100) * Q.el.width) *   0.86,
                  //  y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), Player3NameContainer);
            }
            else {
                 stage.insert(new Q.UI.Text({
                    label: "AI Player 3",
                    color: "black",
                     scale: Scale + 0.20
                  //  x: ((50 / 100) * Q.el.width) *   0.86,
                //    y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), Player3NameContainer);
            }
            Player3NameContainer.fit(0);
            //----------------------------------------------------
            
            var Player4NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((12 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
             if (playersInRoom.length >= 4) {
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[3].userName,
                    color: "black",
                     scale: Scale + 0.20
                   // x: ((40 / 100) * Q.el.width) *   - 0.60,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.7 
                }), Player4NameContainer);
             }
            else {
                 stage.insert(new Q.UI.Text({
                    label: "AI Player 4",
                    color: "black",
                     scale: Scale + 0.20
                   // x: ((40 / 100) * Q.el.width) *   - 0.60,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.7 
                }), Player4NameContainer);
            }
            Player4NameContainer.fit(0);
            //----------------------------------------------------
            var Player1NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((75 / 100) * Q.el.height),
                    x: ((8 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
            
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[0].userName,
                    color: "black",
                     scale: Scale + 0.20
                    //x: ((50 / 100) * Q.el.width) *    - 0.82,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.36     
                }), Player1NameContainer);
                         
            Player1NameContainer.fit(0);

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
        
        else if ( playerName == 'player3' ) {
            
            var Player3NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((80 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));

                 stage.insert(new Q.UI.Text({
                    label: currentPlayerName,
                    color: "black",
                    scale: Scale + 0.20
                    //x: ((40 / 100) * Q.el.width) *  0.75,
                   // y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.5 
                }), Player3NameContainer);
            Player3NameContainer.fit(0);
            //----------------------------------------------------
            var Player4NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((22 / 100) * Q.el.height),
                    x: ((90 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
            
            
            if (playersInRoom.length >= 4) {
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[3].userName,
                    color: "black",
                     scale: Scale + 0.20
                //    x: ((50 / 100) * Q.el.width) *   0.86,
                  //  y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), Player4NameContainer);
            }
            else {
                 stage.insert(new Q.UI.Text({
                    label: "AI Player 4",
                    color: "black",
                     scale: Scale + 0.20
                  //  x: ((50 / 100) * Q.el.width) *   0.86,
                //    y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), Player4NameContainer);
            }
            Player4NameContainer.fit(0);
            //----------------------------------------------------
            
            var Player1NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((12 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));

                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[0].userName,
                    color: "black",
                     scale: Scale + 0.20
                   // x: ((40 / 100) * Q.el.width) *   - 0.60,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.7 
                }), Player1NameContainer);

            Player1NameContainer.fit(0);
            //----------------------------------------------------
            var Player2NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((75 / 100) * Q.el.height),
                    x: ((8 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
            
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[1].userName,
                    color: "black",
                     scale: Scale + 0.20
                    //x: ((50 / 100) * Q.el.width) *    - 0.82,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.36     
                }), Player2NameContainer);
                         
            Player2NameContainer.fit(0);

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
        
        else if ( playerName == 'player4' ) {
            
            var Player4NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((80 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));

                 stage.insert(new Q.UI.Text({
                    label: currentPlayerName,
                    color: "black",
                    scale: Scale + 0.20
                    //x: ((40 / 100) * Q.el.width) *  0.75,
                   // y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.5 
                }), Player4NameContainer);
            Player4NameContainer.fit(0);
            //----------------------------------------------------
            var Player1NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((22 / 100) * Q.el.height),
                    x: ((90 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
            
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[0].userName,
                    color: "black",
                     scale: Scale + 0.20
                //    x: ((50 / 100) * Q.el.width) *   0.86,
                  //  y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.42
                }), Player1NameContainer);
 
            Player1NameContainer.fit(0);
            //----------------------------------------------------
            
            var Player2NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((12 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));

                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[1].userName,
                    color: "black",
                     scale: Scale + 0.20
                   // x: ((40 / 100) * Q.el.width) *   - 0.60,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * -0.7 
                }), Player2NameContainer);

            Player2NameContainer.fit(0);
            //----------------------------------------------------
            var Player3NameContainer = stage.insert(new Q.UI.Container({
                    fill: 'rgba(255, 255, 255, 0.7)',
                    y: ((75 / 100) * Q.el.height),
                    x: ((8 / 100) * Q.el.width),
                    scale: Scale + 0.20
                }));
            
                 stage.insert(new Q.UI.Text({
                    label: playersInRoom[2].userName,
                    color: "black",
                     scale: Scale + 0.20
                    //x: ((50 / 100) * Q.el.width) *    - 0.82,
                    //y: (Q.el.height - ((40 / 100) * Q.el.height)) * 0.36     
                }), Player3NameContainer);
                         
            Player3NameContainer.fit(0);

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
      
    }
    
    function DrawPlayersTarnnebSuit(stage) {
        
        var TarnnebSuitAsset = '';
           
        if ( TarnnebSuit == 'H' )
                TarnnebSuitAsset = 'Hearts.png';
   else if ( TarnnebSuit == 'D' )
                TarnnebSuitAsset = 'Diamonds.png';
   else if ( TarnnebSuit == 'C' )
                TarnnebSuitAsset = 'Clubs.png';
   else if ( TarnnebSuit == 'S' )
                TarnnebSuitAsset = 'Spades.png';
        
            if(playerName == 'player1') {
            
            if (PlayerTarrnibName == 'player1') {
                
            
            stage.insert(new Q.Sprite({
                    asset: TarnnebSuitAsset,
                    scale: Scale,
                    y: ((78 / 100) * Q.el.height),
                    x: ((93 / 100) * Q.el.width)
                }));
                
              stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((87 / 100) * Q.el.height),
                    x: ((91 / 100) * Q.el.width)
                }));    
                
            } else if ( PlayerTarrnibName == 'player2' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((90 / 100) * Q.el.width)
                    }));
                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((12 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width)
                }));  
                
                }
            else if ( PlayerTarrnibName == 'player3' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((4 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width)
                }));  
            }
                    

            else if ( PlayerTarrnibName == 'player4' ) {
             
                stage.insert(new Q.Sprite({            
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((88 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                 stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((88 / 100) * Q.el.height),
                    x: ((16 / 100) * Q.el.width)
                }));  
            }         
        }
         
       else if(playerName == 'player2') {
            
            if (PlayerTarrnibName == 'player2') {
                
            
            stage.insert(new Q.Sprite({
                    asset: TarnnebSuitAsset,
                    scale: Scale,
                    y: ((78 / 100) * Q.el.height),
                    x: ((93 / 100) * Q.el.width)
                }));
                
              stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((87 / 100) * Q.el.height),
                    x: ((91 / 100) * Q.el.width)
                }));    
                
            } else if ( PlayerTarrnibName == 'player3' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((90 / 100) * Q.el.width)
                    }));
                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((12 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width)
                }));  
                
                }
            else if ( PlayerTarrnibName == 'player4' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((4 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width)
                }));  
            }
                    

            else if ( PlayerTarrnibName == 'player1' ) {
             
                stage.insert(new Q.Sprite({            
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((88 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                 stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((88 / 100) * Q.el.height),
                    x: ((16 / 100) * Q.el.width)
                }));  
            }         
        }
        
       else if(playerName == 'player3') {
            
            if (PlayerTarrnibName == 'player3') {
                
            
            stage.insert(new Q.Sprite({
                    asset: TarnnebSuitAsset,
                    scale: Scale,
                    y: ((78 / 100) * Q.el.height),
                    x: ((93 / 100) * Q.el.width)
                }));
                
              stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((87 / 100) * Q.el.height),
                    x: ((91 / 100) * Q.el.width)
                }));    
                
            } else if ( PlayerTarrnibName == 'player4' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((90 / 100) * Q.el.width)
                    }));
                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((12 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width)
                }));  
                
                }
            else if ( PlayerTarrnibName == 'player1' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((4 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width)
                }));  
            }
                    

            else if ( PlayerTarrnibName == 'player2' ) {
             
                stage.insert(new Q.Sprite({            
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((88 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                 stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((88 / 100) * Q.el.height),
                    x: ((16 / 100) * Q.el.width)
                }));  
            }         
        }
        
       else if(playerName == 'player4') {
            
            if (PlayerTarrnibName == 'player4') {
                
            
            stage.insert(new Q.Sprite({
                    asset: TarnnebSuitAsset,
                    scale: Scale,
                    y: ((78 / 100) * Q.el.height),
                    x: ((93 / 100) * Q.el.width)
                }));
                
              stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((87 / 100) * Q.el.height),
                    x: ((91 / 100) * Q.el.width)
                }));    
                
            } else if ( PlayerTarrnibName == 'player1' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((90 / 100) * Q.el.width)
                    }));
                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((12 / 100) * Q.el.height),
                    x: ((82 / 100) * Q.el.width)
                }));  
                
                }
            else if ( PlayerTarrnibName == 'player2' ) {
            
                    stage.insert(new Q.Sprite({           
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((12 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                                
                   stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((4 / 100) * Q.el.height),
                    x: ((22 / 100) * Q.el.width)
                }));  
            }
                    

            else if ( PlayerTarrnibName == 'player3' ) {
             
                stage.insert(new Q.Sprite({            
                        asset: TarnnebSuitAsset,
                        scale: Scale,
                        y: ((88 / 100) * Q.el.height),
                        x: ((8 / 100) * Q.el.width)
                    }));
                
                 stage.insert(new Q.Sprite({
                    asset: GlobalBedValue + 'P.png',
                    scale: Scale - 0.10,
                    y: ((88 / 100) * Q.el.height),
                    x: ((16 / 100) * Q.el.width)
                }));  
            }         
        }
        
        
    }
    
    function GetPlayerName(playerPostionMap) {
    
        var userName = "";
        var result = playersInRoom.filter(function( obj ) {
                    if(obj.playerPostionMap === playerPostionMap){
                            userName = obj.userName;
                }
        });
        
        return userName;
    }
    
    function DrawBedingPlayerName(stage) {
   
        var userName = GetPlayerName(PlayerTarrnibName);
        
        if( playerName == 'player1' ) {
            
                 if (PlayerTarrnibName == 'player1') {
                
                var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((82 / 100) * Q.el.height),
                            x: ((88 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((92 / 100) * Q.el.height),
                             x: ((88 / 100) * Q.el.width),
                        }));
                  

                }
            
            else if (PlayerTarrnibName == 'player2') {
                
                 var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((10 / 100) * Q.el.height),
                            x: ((93 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((18 / 100) * Q.el.height),
                             x: ((93 / 100) * Q.el.width),
                        }));
                }
                        
            else if (PlayerTarrnibName == 'player3') {
                
                  var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((6 / 100) * Q.el.height),
                            x: ((26 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((12 / 100) * Q.el.height),
                             x: ((26 / 100) * Q.el.width),
                        }));

                }
  
            else if (PlayerTarrnibName == 'player4') {
                                                      
                   var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((16 / 100) * Q.el.height),
                            x: ((5 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((23 / 100) * Q.el.height),
                             x: ((5 / 100) * Q.el.width),
                        }));
                }
        
        }
        
        else if( playerName == 'player2' ) {
            
                 if (PlayerTarrnibName == 'player2') {
                
                var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((82 / 100) * Q.el.height),
                            x: ((88 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((92 / 100) * Q.el.height),
                             x: ((88 / 100) * Q.el.width),
                        }));
                  

                }
            
            else if (PlayerTarrnibName == 'player3') {
                
                 var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((10 / 100) * Q.el.height),
                            x: ((93 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((18 / 100) * Q.el.height),
                             x: ((93 / 100) * Q.el.width),
                        }));
                }
                        
            else if (PlayerTarrnibName == 'player4') {
                
                  var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((6 / 100) * Q.el.height),
                            x: ((26 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((12 / 100) * Q.el.height),
                             x: ((26 / 100) * Q.el.width),
                        }));

                }
  
            else if (PlayerTarrnibName == 'player1') {
                                                      
                   var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((16 / 100) * Q.el.height),
                            x: ((5 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((23 / 100) * Q.el.height),
                             x: ((5 / 100) * Q.el.width),
                        }));
                }
        
        }
        
           else if( playerName == 'player3' ) {
            
                 if (PlayerTarrnibName == 'player3') {
                
                var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((82 / 100) * Q.el.height),
                            x: ((88 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((92 / 100) * Q.el.height),
                             x: ((88 / 100) * Q.el.width),
                        }));
                  

                }
            
            else if (PlayerTarrnibName == 'player4') {
                
                 var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((10 / 100) * Q.el.height),
                            x: ((93 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((18 / 100) * Q.el.height),
                             x: ((93 / 100) * Q.el.width),
                        }));
                }
                        
            else if (PlayerTarrnibName == 'player1') {
                
                  var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((6 / 100) * Q.el.height),
                            x: ((26 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((12 / 100) * Q.el.height),
                             x: ((26 / 100) * Q.el.width),
                        }));

                }
  
            else if (PlayerTarrnibName == 'player2') {
                                                      
                   var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((16 / 100) * Q.el.height),
                            x: ((5 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((23 / 100) * Q.el.height),
                             x: ((5 / 100) * Q.el.width),
                        }));
                }
        
        }
        
             else if( playerName == 'player4' ) {
            
                 if (PlayerTarrnibName == 'player4') {
                
                var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((82 / 100) * Q.el.height),
                            x: ((88 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((92 / 100) * Q.el.height),
                             x: ((88 / 100) * Q.el.width),
                        }));
                  

                }
            
            else if (PlayerTarrnibName == 'player1') {
                
                 var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((10 / 100) * Q.el.height),
                            x: ((93 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((18 / 100) * Q.el.height),
                             x: ((93 / 100) * Q.el.width),
                        }));
                }
                        
            else if (PlayerTarrnibName == 'player2') {
                
                  var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((6 / 100) * Q.el.height),
                            x: ((26 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((12 / 100) * Q.el.height),
                             x: ((26 / 100) * Q.el.width),
                        }));

                }
  
            else if (PlayerTarrnibName == 'player3') {
                                                      
                   var BedingPlayerNameContainer = stage.insert(new Q.UI.Container({
                            fill: 'rgba(255, 255, 255, 0.7)',
                            y: ((16 / 100) * Q.el.height),
                            x: ((5 / 100) * Q.el.width),
                            scale: Scale + 0.20
                        }));

                         stage.insert(new Q.UI.Text({
                            label: userName,
                            color: "black",
                            scale: Scale + 0.20
                        }), BedingPlayerNameContainer);
                    BedingPlayerNameContainer.fit(0);

                      stage.insert(new Q.Sprite({
                             asset: GlobalBedValue + 'P.png',
                             scale: Scale - 0.10,
                             y: ((23 / 100) * Q.el.height),
                             x: ((5 / 100) * Q.el.width),
                        }));
                }
        }
    }

    function CalculateScore() {
        
        var WondCards = 0;
        
        for( sub in cardsWoned ) {
            if( PlayerTarrnibName == 'player1' || PlayerTarrnibName == 'player3' ) {
                if( cardsWoned[sub].PlayerWon == 'player1' || cardsWoned[sub].PlayerWon == 'player3' ) {
                    WondCards++;
                }
            } else if( PlayerTarrnibName == 'player2' || PlayerTarrnibName == 'player4' ) {
                
                if( cardsWoned[sub].PlayerWon == 'player2' || cardsWoned[sub].PlayerWon == 'player4' ) {
                    WondCards++;
                }
            }
        }
        if( WondCards >= GlobalBedValue ) {
            if( PlayerTarrnibName == 'player1' || PlayerTarrnibName == 'player3' ) {
                        TeamOneScore = TeamOneScore + WondCards;
                    }
        else { 
                       TeamTwoScore = TeamTwoScore + WondCards;
            }
        }
        else if( WondCards < GlobalBedValue ) {
            if( PlayerTarrnibName == 'player1' || PlayerTarrnibName == 'player3' ) {
                       TeamOneScore = (TeamOneScore - GlobalBedValue);
            }
            else { 
                       TeamTwoScore = (TeamTwoScore - GlobalBedValue);
            }
        }
    
        if ( TeamOneScore >= 61 || TeamTwoScore >= 61 ) 
        {
            Q.clearStages();
            
            if( TeamOneScore >= 61 && ( playerName == 'player1' || playerName == 'player3' ) )
            {
                console.log('WinLevelTeamOne');
                Q.stageScene('WinLevelTeamOne');
            }
            else if ( TeamOneScore >= 61 && ( playerName == 'player2' || playerName == 'player4' ) )
            {
                console.log('WinLevelTeamTwo');
                 Q.stageScene('WinLevelTeamTwo');
            }
            else 
            {
                console.log('LoseLevel');
                Q.stageScene('LoseLevel');
            }
        } 
        
        else if (TeamOneScore < 61 || TeamTwoScore < 61)
       
        {
              Redeal();
        }
        
    }
    
    function findWithAttr(array, attrOne, valueOne, attrTow ,valueTow) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attrOne] === valueOne && array[i][attrTow] === valueTow) {
                return i;
            }
        }
    }

    function GetPlayerNmae (PlayerAlias) {
        
        var index = findIndexWithAttr( playersInRoom ,'playerPostionMap' ,PlayerAlias );
        return (typeof clients !== 'undefined') ? playersInRoom[index].userName : ' AI ' + PlayerAlias;
        
    }
    
    function findIndexWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
}

});
