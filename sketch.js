//2016 07 23
// funciona con p5.js
//estoy haciendo un lienzo verde con una elipse
//esto hace esto

//apuntes de color
//por defecto, funciona con RGB y 8 bits
//8 bits implica que los valores de color van entre 0 y 255

//1 -> graySACALE, DONDE 0 ES NEGRO Y 255 ES BLANCO
//2<>GRAYSCALE + ALPHA, DONDE 0 ES TRANSPARENTE Y 255 ES OPACO
//1  -> 2 elevado a B
//00 01 10 11
//255 valores de escalas de grises
//las variables son espacios en la memoria del computador

//primero, tenemos que decirle al computador qie la variable existe
//esto se llama DECLARAR y solo se hace una vez
var diametro;
// luego de declara, puede ASIGNARLE valores
diametro = 100;

//existen variables globales y variables locales
//las variabñes globales son aquellas
//que son declaradas FUERA de la funcion
//las locales son declaradas DENTRO de una funcion

//funciones
//lasfunciones se DECLARAR una vez
function nombreFuncion() {
  //Aqui va el cuepo de la funcion
}


//setup() corre una vez al principio
function setup() {

  //creamos un lienzo
  //createCanvas(hor, ver);
  createCanvas(windowWidth, windowHeight);

  //PINTAR EL FONDO VERDE
  background(0, 255, 190);

  var x = 10;
  //pintar el fondo verde
  //background(color);

}

function draw() {
  //console.log(x) imprime en la consola el valor x
  console.log(diametro);
  x = 10;
  // background(0, 255, 190); 
  //definir ancho en px de la figura
  //strokeWeight


  //aumentar el diametro en 1
  diametro = diametro + 1;

  estiloRuso();
  triangle(0, 0, 0, height, mouseX, mouseY);

  muchasElipses();

}

//Declarar funcion estiloVictoriano

function estiloVictoriano() {
  // 
  strokeWeight(5);

  //definir el color de un trazo
  //stroke(color);
  //noStroke();

  stroke(140, 5, 200)
    // definir color por relleno
    //fill(coloe);
  fill(100, 100, 200);
}

function estiloRuso() {


  //definir el color de un trazo
  //stroke(color);
  //noStroke();

  //stroke(140, 5, 200)
  // definir color por relleno
  //fill(coloe);
  fill(100, 100, 200);
}

function miElipse() {
  estiloVictoriano();
  //aqui dibujamos una elipse en las coordenadas 250, 340
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);

}

//aqui mostraremos iteracion
function muchasElipses() {

  for (var i = 0; i < 100; i++) {

    noStroke();
    fill(random(255), random(255), random(255), random(255))
      //ellipse se dibuja en una posicion aleatoria del canvas
    ellipse(random(width), random(height), random(100), random(100));




  }
}