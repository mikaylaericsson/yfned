
    

    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);
    var currentScene;
    const playButton = document.getElementById("play_button");
    const scene_start = document.getElementById("scene_start");
    //scene_000
    const scene_000 = document.getElementById("scene_000");
    const scene_000_BtnYes = document.getElementById("scene_000_BtnYes");
    const scene_000_BtnNo = document.getElementById("scene_000_BtnNo");
    //scene_001
    const scene_001 = document.getElementById("scene_001");
    const scene_001_BtnYes = document.getElementById("scene_001_BtnYes");
    const scene_001_BtnNo = document.getElementById("scene_001_BtnNo");
    //scene_002
    const scene_002 = document.getElementById("scene_002");
    const scene_002_BtnYes = document.getElementById("scene_002_BtnYes");
    const scene_002_BtnNo = document.getElementById("scene_002_BtnNo");
    //scene_003
    const scene_003 = document.getElementById("scene_003");
    const scene_003_BtnYes = document.getElementById("scene_003_BtnYes");
    const scene_003_BtnNo = document.getElementById("scene_003_BtnNo");
    //scene_004
    const scene_004 = document.getElementById("scene_004");
    const scene_004_BtnA = document.getElementById("scene_004_BtnA");
    const scene_004_BtnB = document.getElementById("scene_004_BtnB");
    const scene_004_BtnC = document.getElementById("scene_004_BtnC");
    const scene_004_BtnNo = document.getElementById("scene_004_BtnNo");
    //scene_005
    const scene_005 = document.getElementById("scene_005");
    const scene_005_BtnGo = document.getElementById("scene_005_BtnGo");
    //scene_006
    const scene_006 = document.getElementById("scene_006");
    const scene_006_BtnGo = document.getElementById("scene_006_BtnGo");
    //scene_010
    const scene_010 = document.getElementById("scene_010");
    const scene_010_BtnGo = document.getElementById("scene_010_BtnGo");
    //scene_011
    const scene_011 = document.getElementById("scene_011");
    const scene_011_BtnGo = document.getElementById("scene_011_BtnGo");
    //scene_012
    const scene_012 = document.getElementById("scene_012");
    const play_again_button = document.getElementById("play_again_button");

    
    player.setLoop(false).then(function(loop) {
        // loop was turned on
    }).catch(function(error) {
        // an error occurred
    });

    //play button
    playButton.onclick = function () {
        player.play();
        scene_start.style.display = 'none';
        currentScene = 'scene_000';
        console.log("version 9.5");
    };
    
    //get time - code for pauses
    player.on('timeupdate', function(data) {
    // data is an object containing properties specific to that event
    //console.log(data.duration);
    //console.log(data.seconds);
    var timeRounded = Math.round(data.seconds);
    console.log(timeRounded);
    console.log(currentScene);
        //pause video at 17 seconds
        if (timeRounded == 17 && currentScene == 'scene_000') {
            player.pause();
            scene_000.style.display = 'flex';
        } else if (timeRounded == 25 && currentScene == 'scene_001') {
            player.pause();
            scene_001.style.display = 'flex';
        } else if (timeRounded == 48 && currentScene == 'scene_002') {
            player.pause();
            scene_002.style.display = 'flex';
        } else if (timeRounded == 54 && currentScene == 'scene_003') {
            player.pause();
            scene_003.style.display = 'flex';
        } else if (timeRounded == 80 && currentScene == 'scene_005') {
            player.pause();
            scene_005.style.display = 'flex';
        } else if (timeRounded == 95 && currentScene == 'scene_006') {
            player.pause();
            scene_006.style.display = 'flex';
        } else if (timeRounded == 110 && currentScene == 'scene_007') {
            player.pause();
            scene_006.style.display = 'flex';
        } else if (timeRounded == 126 && currentScene == 'scene_008') {
            player.pause();
            scene_006.style.display = 'flex';
        } else if (timeRounded == 132 && currentScene == 'scene_009') {
            player.pause();
            scene_006.style.display = 'flex';
        } else if (timeRounded == 142 && currentScene == 'scene_010') {
            player.pause();
            scene_010.style.display = 'flex';
        } else if (timeRounded == 152 && currentScene == 'scene_011') {
            player.pause();
            scene_011.style.display = 'flex';
        } else if (timeRounded == 166 && currentScene == 'scene_012') {
            player.pause();
        }
    });

    //--------------------------------------------------> scene_000 Menu
    //scene_000 Yes Button -> scene_001
    scene_000_BtnYes.onclick = function () {
            player.setCurrentTime(18).then(function() {
                return player.play(); 
            });
            scene_000.style.display = 'none';
            currentScene = 'scene_001';
    };

    //scene_000 No Button -> scene_002
    scene_000_BtnNo.onclick = function () {
        player.setCurrentTime(25).then(function() {
                return player.play(); 
            });
            scene_000.style.display = 'none';
            currentScene = 'scene_002';
    };

    //--------------------------------------------------> scene_001 Menu
    //scene_001 Yes Button -> scene_005
    scene_001_BtnYes.onclick = function () {
            player.setCurrentTime(60).then(function() {
                return player.play(); 
            });
            scene_001.style.display = 'none';
            currentScene = 'scene_005';
    };
    //scene_001 No Button -> No next scene, just menu change
    scene_001_BtnNo.onclick = function () {
            scene_001.style.display = 'none';
            scene_004.style.display = 'flex';
    };

    //--------------------------------------------------> scene_002 Menu
    //scene_002 Yes Button -> scene_010
    scene_002_BtnYes.onclick = function () {
            player.setCurrentTime(132).then(function() {
                return player.play(); 
            });
            scene_002.style.display = 'none';
            currentScene = 'scene_010';
    };

    //scene_002 No Button -> scene_011
    scene_002_BtnNo.onclick = function () {
        player.setCurrentTime(142).then(function() {
                return player.play(); 
            });
            scene_002.style.display = 'none';
            currentScene = 'scene_011';
    };

    //--------------------------------------------------> scene_003 Menu
    //scene_003 Yes Button -> scene_005
    /*scene_003_BtnYes.onclick = function () {
            player.setCurrentTime(60).then(function() {
                return player.play(); 
            });
            scene_003.style.display = 'none';
            currentScene = 'scene_005';
    };
    //scene_003 No Button -> scene_005
    scene_003_BtnNo.onclick = function () {
            scene_003.style.display = 'none';
            scene_004.style.display = 'flex';
    };

*/
    //--------------------------------------------------> scene_004 Menu
    //scene_004 A Button -> scene_006

    scene_004_BtnA.onclick = function () {
            player.setCurrentTime(80).then(function() {
                return player.play(); 
            });
            scene_004.style.display = 'none';
            currentScene = 'scene_006';
    };
    //scene_004 B Button -> scene_007
    scene_004_BtnB.onclick = function () {
            player.setCurrentTime(95).then(function() {
                return player.play(); 
            });
            scene_004.style.display = 'none';
            currentScene = 'scene_007';
    };
    //scene_004 C Button -> scene_008
    scene_004_BtnC.onclick = function () {
            player.setCurrentTime(110).then(function() {
                return player.play(); 
            });
            scene_004.style.display = 'none';
            currentScene = 'scene_008';
    };
    //scene_004 No Button -> scene_009
    scene_004_BtnNo.onclick = function () {
            player.setCurrentTime(126).then(function() {
                return player.play(); 
            });
            scene_004.style.display = 'none';
            currentScene = 'scene_009';
    };

    //--------------------------------------------------> scene_005 Menu
    //scene_005 Next Button -> scene_002
    scene_005_BtnGo.onclick = function () {
            player.setCurrentTime(25).then(function() {
                return player.play(); 
            });
            scene_005.style.display = 'none';
            currentScene = 'scene_002';
    };


    //--------------------------------------------------> scene_006 Menu
    //scene_006 Yes Button -> scene_012
    scene_006_BtnGo.onclick = function () {
            player.setCurrentTime(163).then(function() {
                return player.play(); 
            });
            scene_006.style.display = 'none';
            currentScene = 'scene_012';
            scene_012.style.display = 'flex';
    };

    //--------------------------------------------------> scene_010 Menu
    //scene_010 Next Button -> No Scene Change, just menu swap
    scene_010_BtnGo.onclick = function () {
            scene_010.style.display = 'none';
            scene_004.style.display = 'flex';
            console.log("PRESSED")
    };

    //--------------------------------------------------> scene_011 Menu
    //scene_011 Next Button -> scene_012
    scene_011_BtnGo.onclick = function () {
            player.setCurrentTime(152).then(function() {
                return player.play(); 
            });
            scene_011.style.display = 'none';
            currentScene = 'scene_012';
            scene_012.style.display = 'flex';
    };
    //--------------------------------------------------> scene_011 Menu
    //scene_012 Next Button -> scene_000
    play_again_button.onclick = function () {
            player.setCurrentTime(0).then(function() {
                return player.play(); 
            });
            scene_012.style.display = 'none';
            currentScene = 'scene_000';
    };


  
