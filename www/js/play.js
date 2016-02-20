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
  },


 create: function() {
   this.background = this.add.tileSprite(0,0,320,568,"background");
   this.background.autoScroll(0,-50);
   this.background.scale.set(1);
 },


 update: function() {

 }


};


