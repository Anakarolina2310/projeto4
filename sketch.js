let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra = Jesus(); 
  musica.loop();
}
function preload() {
  
  imagem=loadImage("imagen.jpeg");
  musica=loadSound("musica.mp3");
}
  
function draw(){
batata();
 Jesus ();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX,0,width,1,palavra.length);
  let inico=palavra.substring(0,aparecer);
  let inicio = palavra.substring(0,aparecer);
  
  text(inicio,300,300);
  
}

function batata(){
  background("pink");
  image(imagem,0,0,600,600);
  fill("violet");
  textSize(80);
  textAlign(CENTER,CENTER);
}

function Jesus(){
  let palavras = ["coxinha","empada","hamburguer","pastel","pizza"];
  return random(palavras);
}