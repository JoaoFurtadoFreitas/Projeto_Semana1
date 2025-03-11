var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,

    physics: {
        default: 'arcade'
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

var game = new Phaser.Game(config);
var peixinho;
var anzol;
var Posicao_AnzolX;
var Posicao_AnzolY;
function preload() {
    this.load.image('mar', 'assets/background.png');
    this.load.image('logo', 'assets/logo.png');
    this.load.image('anzol', 'assets/anzol.png');
    this.load.image('peixe', 'assets/peixes/boneco.png');


}
function create() {
    this.add.image(400, 200, 'mar').setScale(1.75);
    this.add.image(200, 150, 'logo').setScale(0.5).setOrigin(-0.8, -3.5);
    anzol = this.add.image(400,300,'anzol');
    peixinho = this.add.image(400, 300, 'peixe');
   
    anzol.setScale(0.1).setOrigin(3,0).setFlip(true,false); //limites dos eixos no quadro X: 6 to -6; Y: 0 to 2;
    peixinho.setScale(0.1);
    peixinho.setFlip(true, false);
}
function update(){
    peixinho.x=this.input.x;
    peixinho.y=this.input.y; 
   anzol.y=Math.random()*20;

   if(anzol.y==peixinho.y && anzol.x==peixinho.x){
    game.destroy(true, false);//o jogo não deveria parar?
   }
  
   
}

