//Chamando módulos biblioteca matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var engine;
var chao;
var bola;
var quadrado;
var RECT;


function setup() {
	createCanvas(800, 700);

	//Criando e adicionado o motor de física ao mundo
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var propriedades_chao={
		isStatic:true
	}
	chao=Bodies.rectangle(100,700,1500,30,propriedades_chao);

	var propriedades_bola={
		frictionAir:0.1,
		restitution:5,
		friction:0.1
	}
	bola=Bodies.circle(70,400,30,propriedades_bola);

	var propriedades_quadr={
		frictionAir:0.7,
		restitution:2,
		friction:0.7
	}
	quadrado=Bodies.rectangle(130,400,40,40,propriedades_quadr);

	var propriedades_RECT={
		frictionAir:0.05,
		restitution:7,
		friction:0.05
	}
	RECT=Bodies.rectangle(190,400,50,30,propriedades_RECT);

	//Adicionando corpos ao mundo
	World.add(world,chao);
	World.add(world,bola);
	World.add(world,quadrado);
	World.add(world,RECT);

	//Definindo que o retângulo está centralizado
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  
  background("lightred");
  
//Atualizando o motor de física sempre
  Engine.update(engine);


//Desenhando corpos
rect(chao.position.x,chao.position.y,1500,30)
ellipse(bola.position.x,bola.position.y,30);
rect(quadrado.position.x,quadrado.position.y,40,40);
rect(RECT.position.x,RECT.position.y,50,30);

}



