//Pedir um nome
//Exemplo 01
//var nome = prompt("Digite seu nome:");
//var ano_nasc = parseInt(prompt("Digite o ano de nascimento: ")); 
//var idade = 2021 - ano_nasc;
//alert("Olá, " +nome+ " você tem "+idade+ " anos");


//Funções 
//01 - função sem parametro e sem retorno
//02 - função sem parametro e com retorno
//03 - função com parametro e sem retorno
//04 - função com parametro e com retorno

//Exemplo tipo 01
//function teste(){
//	console.log("Seja bem vindo!")
//}

//for (var i = 1; i <= 50; i++) {
//	teste();
//}


//Exemplo tipo 02
// function soma(){
// 	var total = 10 + 15;
// 	return total;
// }

// var recebi = soma();
// console.log(recebi);



//Exemplo tipo 03
// var num1 = 10;
// var num2 = 20;

// function soma(a,b){
// 	var total_soma = a+b;
// 	console.log(total_soma);
// }

// soma(num1,num2);



//Exemplo tipo 04
//  var num1 = 10;
//  var num2 = 20;

// function soma(a,b){
//  	var total_soma = a+b;
//  	return total_soma;
// }

// var retorno = soma(num1, num2);
// console.log(retorno);



//Exemplo uso
 var num1 = 10;
 var num2 = 20;

 //fazer as quatro operações basicas com os dois numeros!

function soma(a,b){
 	var total = a+b;
 	return total;
}

function subtracao(a,b){
 	var total = a-b;
 	return total;
}

function multiplicacao(a,b){
 	var total = a*b;
 	return total;
}

function divisao(a,b){
 	var total = a/b;
 	return total;
}

function raiz(a){
 	var total = Math.sqrt(a);
 	return total;
}


console.log("A soma é: " + soma(num1,num2));
console.log("A subtração é: " + subtracao(num1,num2));
console.log("A multiplicação é: " + multiplicacao(num1,num2));
console.log("A divisão é: " + divisao(num1,num2));
console.log("A raiz quadrada de "+num1+"é: " + raiz(num1));
