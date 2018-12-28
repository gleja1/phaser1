var graj={

	preload: function()
	{
		this.load.image('rakieta', 'rakieta.png');
		this.load.image('pilka', 'pilka.png');
		this.wynik=0;
		this.gra=false;
		this.kierunek_x=500;
		this.kierunek_y=500;
	},
	 create: function()
	{
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.gracz = game.add.sprite(game.width-50, game.height/2-100, 'rakieta');
		this.gracz.anchor.setTo(0.5,0.5);
		this.game.physics.enable(this.gracz);
		this.gracz.body.immovable=true;
		this.pilka = game.add.sprite(game.width/2, 450, 'pilka');
		this.pilka.anchor.setTo(0.5,0.5);
		this.game.physics.enable(this.pilka);
		this.pilka.body.collideWorldBounds = true;
		this.pilka.body.velocity.setTo(500,500);
		this.pilka.body.bounce.setTo(1,1);
		this.wynikTXT =game.add.text(50,50, this.wynik);
		this.wynikTXT.anchor.set(0.5);
		this.wynikTXT.align = 'center';
		this.wynikTXT.font = 'Arial Black';
		this.wynikTXT.fontSize = 50;
		this.wynikTXT.fontWeight = 'bold';
		this.wynikTXT.stroke = '#00ffaa';
		this.wynikTXT.strokeThickness = 6;
		this.wynikTXT.fill = '#43d637';
		},
	update:function()
		{
		this.gracz.y=game.input.y;
		game.physics.arcade.collide(this.gracz,this.pilka);
		if (this.pilka.body.blocked.right)
		this.wynik++;
		this.wynikTXT.text=this.wynik;
		},

}