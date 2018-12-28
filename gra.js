var gra1={
// gracz,
/* var wynik,
var wynikTXT,
var pilka,
var licznik,*/

//var czas_gryTXT,



preload:	function ()
	{
		this.load.image('rakieta', 'rakieta.png');
		this.load.image('pilka', 'pilka.png');
		wynik=0;
	},
create:	function  ()
	{
		gracz = this.physics.add.sprite(700,600, 'rakieta');
		gracz.setImmovable(true);
		pilka = this.physics.add.sprite(20, 45, 'pilka');
		pilka.setCollideWorldBounds(true);
		pilka.setVelocity(500,500);
		pilka.setBounce(1,1);
		wynikTXT =this.add.text(50,50, wynik);
		wynikTXT.setAlign('center');
		wynikTXT.setFont ('bold Arial Black');
		wynikTXT.setFontSize(50);
		wynikTXT.setStroke( '#00ffaa',6);
		wynikTXT.setFill ( '#43d637');
		czas_gry=20;
		czas_gryTXT =this.add.text(750,50, czas_gry);
		czas_gryTXT.setAlign('center');
		czas_gryTXT.setFont ('bold Arial Black');
		czas_gryTXT.setFontSize(50);
		czas_gryTXT.setStroke( '#00ffaa',6);
		czas_gryTXT.setFill ( '#43d637');
		this.licznik=this.time.addEvent({ delay: 1000, callback:function(){	if (czas_gry>0)	czas_gry--;}, callbackScope: this, loop: true });


		},
update: function	()
		{
		gracz.y=this.input.y;
		this.physics.add.collider(gracz,pilka);
		if (pilka.body.blocked.right)
		wynik++;
		wynikTXT.text=wynik;
		czas_gryTXT.text=czas_gry;
		if (czas_gry==0) 
		{
		alert('Game over!');
		wynik=0;
		czas_gry=20;
		pilka.x=20;
		pilka.y=45;
		}
		
		},
czas()
		{
			alert('Czas');
		if (czas_gry>0)
		czas_gry--;
		}

}