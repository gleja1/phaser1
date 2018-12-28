var intro={
	preload:function()
	{
//	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 //   this.scale.pageAlignHorizontally = true;
//    this.scale.pageAlignVertically = true;
	},
create:function()
{
		introTXT =this.add.text(400,50, 'Witaj w grze');
		introTXT.setAlign('center');
		introTXT.setFont ('bold Arial Black');
		introTXT.setFontSize(50);
		introTXT.setStroke( '#00ffaa',6);
		introTXT.setFill ( '#43d637');

		start =this.add.text(400,250, 'Kliknij aby rozpocząć');
		start.setInteractive();
		start.on('pointerdown',function(){gra.camera.main.fadeIn(0x000000, 4000);gra.scene.start('Gra');gra.scene.remove('Intro')});
},
update:function()
{
	
},
zmien:function()
{
	game.camera.fade(0x000000, 4000);
	game.state.start('Gra');
}
}
