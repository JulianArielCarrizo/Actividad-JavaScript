//carrusel
const carrusel = document.querySelector("#carrusel");
let carruselSeccion = document.querySelectorAll(".carruselSection");
let carruselSecionUltimo = carruselSeccion[carruselSeccion.length - 1];

const btnIzq = document.querySelector("#btnIzq");
const btnDer = document.querySelector("#btnDer");

carrusel.insertAdjacentElement("afterbegin", carruselSecionUltimo);

function moverDerecha() {
  let carruselSeccionPrimero = document.querySelectorAll(".carruselSection")[0];
  carrusel.style.marginLeft = "-200%";
  carrusel.style.transition = "all 0.5s";
  setTimeout(function () {
    carrusel.style.transition = "none";
    carrusel.insertAdjacentElement("beforeend", carruselSeccionPrimero);
    carrusel.style.marginLeft = "-100%";
  }, 500);
}

function moverIzquierda() {
  let carruselSeccion = document.querySelectorAll(".carruselSection");
  let carruselSeccionUltimo = carruselSeccion[carruselSeccion.length - 1];
  carrusel.style.marginLeft = "0";
  carrusel.style.transition = "all 0.5s";
  setTimeout(function () {
    carrusel.style.transition = "none";
    carrusel.insertAdjacentElement("afterbegin", carruselSeccionUltimo);
    carrusel.style.marginLeft = "-100%";
  }, 500);
}

//Agrandar texto
function cambiarTexto(){
  document.getElementById("pCambiaTexto").classList.toggle("cambiarTextoGrande");
}
//expandir texto en tarjetas
function mostrarTextoUno() {
  document.getElementById("textoEscondidoUno").classList.toggle("textOcultoUno");
}
function mostrarTextoDos() {
  document.getElementById("textoEscondidoDos").classList.toggle("textOcultoDos");
}
function mostrarTextoTres() {
  document.getElementById("textoEscondidoTres").classList.toggle("textOcultoTres");
}
function mostrarTextoCuatro() {
  document.getElementById("textoEscondidoCuatro").classList.toggle("textOcultoCuatro");
}
function mostrarTextoCinco() {
  document.getElementById("textoEscondidoCinco").classList.toggle("textOcultoCinco");
}
function mostrarTextoSeis() {
  document.getElementById("textoEscondidoSeis").classList.toggle("textOcultoSeis");
}

//Escribe funcion que determina si un numero es primo o no//

const numero = 3;
const n = numero;

function esPrimo(n) {
  if (n <= 1) return false;
  for (var i = 2; i <= n - 1; i++){
    if (n % i == 0) return false;
  }
  return true;
}
console.log(esPrimo(n));
//----------------------------Ejercicio 2 -------------------------------------------//

//Operaciones de matriz: implementa una funcion que realice operaciones de matriz, como suma, resta
//o multiplicacion, en dos matrices dadas.
function resultadoEjercicio2() {
  const inputsMatriz1 = obtenerValoresInputsMatriz(".contenedorMatrizUno");
  const inputsMatriz2 = obtenerValoresInputsMatriz(".contenedorMatrizDos");
  
  console.log("matriz1");
  const matriz1 = crearMatrizPorInputs(inputsMatriz1);
  console.log(matriz1);
  console.log("matriz2");
  const matriz2 = crearMatrizPorInputs(inputsMatriz2);
  console.log(matriz2);

  const operacion = document.getElementById("operadores").value;
  const matrizResultanteOperacion = realizarOperacionMatriz(matriz1, matriz2, operacion);

  const elementosP = document.querySelectorAll(".contenedorResultadoEjeDos p");

  elementosP.forEach((p, indice) => {

    // 0 1 2 3 4 5 6 7 8 => 00 01 02 / 10 11 12 / 20 21 22

    const fila = Math.floor(indice / 3);
    const columna = indice % 3;

    p.innerHTML = matrizResultanteOperacion[fila][columna];
  });
}

function obtenerValoresInputsMatriz(selectorContenedor) {
  const inputs = document.querySelectorAll(
    `${selectorContenedor} .contenedorMatriz input`
  );

  const valores = [];

  inputs.forEach((x) => {
    valores.push(x.value);
  });

  return valores;
}

function crearMatrizPorInputs(arrayNumerosString) {
  let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const matrizTamanioFila = 3;
  const matrizTamanioColumna = 3;

  arrayNumerosString.forEach((valorString, indice) => {
    const indiceMatriz1 = Math.floor(indice / matrizTamanioFila);
    const indiceMatriz2 = indice % matrizTamanioColumna;

    var valor = parseFloat(valorString) || 0;

    matriz[indiceMatriz1][indiceMatriz2] = valor;
  });

  return matriz;
}

function realizarOperacionMatriz(matriz1, matriz2, operacion) {
  
  let matrizResultante = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const matrizTamanioFila = 3;
  const matrizTamanioColumna = 3;

  for (let fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) {

      let valorOperacion = 0;

      if (operacion == "suma") {
        // suma
        valorOperacion = matriz1[fila][columna] + 
                         matriz2[fila][columna];
      } else if (operacion == "resta") {
        // resta
        valorOperacion = matriz1[fila][columna] - 
                         matriz2[fila][columna];
      } else if (operacion == "multiplicacion") {
        // multiplicacion
        valorOperacion = matriz1[fila][columna] * 
                         matriz2[fila][columna];
      } else if (operacion == "division") {
        // division
        valorOperacion = matriz1[fila][columna] / 
                         matriz2[fila][columna];
      }

      matrizResultante[fila][columna] = parseFloat(valorOperacion.toFixed(2));
    }   
  }

  return matrizResultante;
}
//--------------------------------Ejercicio 3 ------------------------------------------//
//suma de numeros en un rango: escribe una funcion que calcule la suma de todos los numeros en un rango dado
//(por ejemplo, de A a B).

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumaDeRango(numeros) {
  const indiceInicial = 3;
  const indiceFinal = 5;
  
  let inicio = numeros[parseInt(indiceInicial)] ;
  let fin = numeros[parseInt(indiceFinal)] ;
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  return suma;
}
console.log(sumaDeRango(numeros))
//----------------------------------Ejercicio 4----------------------------------------//
//contar vocales: crea una funcion que cuente el numero de vocales en una cadena de texto

const palabras = "Hola como estas? estas biena?";

function contarVocales(){
  let contadorVocales = 0;
  let vocales = ['a', 'A', 'á', 'Á' ,'e' ,'E' ,'é' ,'É', 'i', 'I' , 'í', 'Í', 'o', 'O', 'ó', 'Ó', 'u', 'U', 'ú', 'Ú'];
  
  for (let i = 0; i < palabras.length; i++) {
    if(vocales.indexOf(palabras[i]) >= 0){
      contadorVocales++;
    }
    
  }
  return contadorVocales;
}
console.log(contarVocales(palabras));

//-----------------------------------Ejercicio 5----------------------------------------//
//De una matriz devuelve una matriz con elementos unicos.(es decir sin duplicados).
// Por Ejemplo: ["Sofia", "Maria", "Pedro","Sofia"]----> ["Sofia","Maria","Pedro"]

    const ingreso = ["Maria", "Maria", "Jose", "Marcos" ,"Mariano" , "Mariano"];
    const nuevoIngreso = ingreso.filter((el, index) => ingreso.indexOf(el) === index)
    console.log(nuevoIngreso)
    
    //-------------------------------------Ejercicio 6--------------------------------------//
    //Crea una funcion que invierta una cadena de texto sin usar reverse()
    
    const textoLimpio = 'Hola, mi nombre es Juan';
    
    function invertirCadena(texto) {
      let resultadoEje6 = '';
      for (let i = texto.length - 1; i >= 0; i--) {
          resultadoEje6 += texto[i];
      }
      return resultadoEje6;
    }
    invertirCadena('hola');
    
    console.log(invertirCadena(textoLimpio));









    
    
    
    
    






  







  
  
 


      





