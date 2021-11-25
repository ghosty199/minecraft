var canvas=new fabric.Canvas('myCanvas')
playerx = 10
playery = 10
block_image_width=30
block_image_height=30
var player_object=""
var block_image_object=""
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:playery,
             left:playerx
        })
        canvas.add(player_object)
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img
        block_image_object.scaleToWidth(block_image_height)
        block_image_object.scaleToHeight(block_image_width)
        block_image_object.set({
            top:playery, 
            left:playerx
        })
        canvas.add(block_image_object)
    });
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode
    if (e.shiftKey==true&& keyPressed=='80') {
        block_image_width=block_image_width+10
        block_image_height=block_image_height+10
        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
        console.log("p+shift pressed together")
    }
    if (e.shiftKey==true&& keyPressed=='77') {
        block_image_width=block_image_width-10
        block_image_height=block_image_height-10
        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
        console.log("m+shift pressed together")
    }
    if (keyPressed=='38' ) {
       up ()
    }
    if (keyPressed=='40' ) {
        down ()
     }
     if (keyPressed=='37' ) {
        left ()
     }
     if (keyPressed=='39' ) {
        right ()
     }
     if (keyPressed=='87' ) {
        new_image('wall.jpg')
     }
     if (keyPressed=='71' ) {
        new_image('ground.png')
     }
     if (keyPressed=='76' ) {
        new_image('light_green.png')
     }
     if (keyPressed=='84' ) {
        new_image('trunk.jpg')
     }
     if (keyPressed=='82' ) {
        new_image('roof.jpg')
     }
     if (keyPressed=='89' ) {
        new_image('yellow_wall.png')
     }
     if (keyPressed=='68' ) {
        new_image('dark_green.png')
     }
     if (keyPressed=='85' ) {
        new_image('different.png')
     }
     if (keyPressed=='67' ) {
        new_image('cloud.jpg')
     }
     
}
function up (){
    if (playery>=0) {
        playery=playery-block_image_height;
        canvas.remove(player_object) 
        player_update()
    }
}
function down (){
    if (playery<=500) {
        playery=playery+block_image_height;
        canvas.remove(player_object) 
        player_update()
    }
}
function left (){
    if (playerx>=0) {
        playerx=playerx-block_image_width;
        canvas.remove(player_object) 
        player_update()
    }
}
function right (){
    if (playerx<=850) {
        playerx=playerx+block_image_width;
        canvas.remove(player_object) 
        player_update()
    }
}