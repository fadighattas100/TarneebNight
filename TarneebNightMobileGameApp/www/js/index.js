window.addEventListener("load",function() { 

       var Q = window.Q = Quintus().include('Sprites,UI,Input,Touch,Anim,Scenes,2D,TMX');
    Q.setup({
        maximize: true,
        scaleToFit: true
    }).touch(Q.SPRITE_ALL);
    
     var Scale = (Math.ceil((Q.el.height/1000)*14))/10;  
    
    Q.load(['Play.png','PlayP.png','Help.png','HelpP.png'], function() {
                Q.stageScene('Main_Menu');
         });

    Q.scene('Main_Menu', function(stage) { 

        
        var PlayContainer = stage.insert(new Q.UI.Container({
                x: ((52 / 100) * Q.el.width),
                y: ((50 / 100) * Q.el.height),
                fill: 'rgba(255, 255, 255, 0)'
            }));

             PlayContainer.insert(new Q.UI.Button({
                asset: 'Play.png',
                scale: Scale
            }, function() {
                this.p.asset = 'PlayP.png';

                    setTimeout(function() {
                       window.location.href = 'lobby.html';
                    }, 1000);
            }));

            PlayContainer.fit(0);
        
           var HelpContainer = stage.insert(new Q.UI.Container({
                x: ((52 / 100) * Q.el.width),
                y: ((58 / 100) * Q.el.height),
                fill: 'rgba(255, 255, 255, 0)'
            }));

             HelpContainer.insert(new Q.UI.Button({
                asset: 'Help.png',
                scale: Scale
            }, function() {
                this.p.asset = 'HelpP.png';

                    setTimeout(function() {
                       window.location.href = 'lobby.html';
                    }, 1000);
            }));

            HelpContainer.fit(0);
        
        
//     stage.insert(new Q.UI.Button({
//            asset: 'Play.png',
//            x: ((71 / 100) * Q.el.height),
//            y: ((40 / 100) * Q.el.width)
//        }, function() {
//            
//            this.p.asset = 'PlayP.png';
//            
//                setTimeout(function() {
//                   window.location.href = 'lobby.html';
//                }, 1000);
//            //window.location.replace('lobby.html');
//        }));
    });
});