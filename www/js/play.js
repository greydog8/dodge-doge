// State: dont die because of missles.Play

'use strict'
var DogeDodge = {};
DogeDodge.Play = function () {};
DogeDodge.Play.prototype = {
  init: function () {
    console.log("%~~ Booting the Game ~~~\n Made By Greyson S");
  },


  preload: function () {
   this.load.image('background','assets/sprites-backgrounds/background2.png');
   this.load.spritesheet('ship','assets/sprites-backgrounds/ship2.png',65,65,4); 
  },


 create: function() {
   //background
   this.background = this.add.tileSprite(0,0,320,568,"background");
   this.background.autoScroll(0,-50);
   this.background.scale.set(1);
   //ship
   
   this.ship = this.add.sprite(160,510,'ship');
   this.ship.smoothed = false;
   this.ship.scale.set(1.5);
   this.ship.anchor.set(0.5,0.5);
   this.ship.animations.add('fire');
   this.ship.animations.play('fire',2,true);
   this.cursors = game.input.keyboard.createCursorKeys();
 },



 update: function() {
   if (this.cursors.left.isDown) {
     this.ship.x -= 10;
   }
   if (this.cursors.right.isDown) {
     this.ship.x += 10;
   }
 }
};



