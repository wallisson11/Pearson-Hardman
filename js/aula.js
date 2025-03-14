let nome = "Wallisson";
console.log(nome);


const x = 10;
const lista = [1, 2, 3, 4, 5];  
const objeto = { name: "Wallisson", age: 26 }; //JSON

console.log(x);
console.log(typeof x);
console.log('---------------------');
console.log(lista);
console.log(typeof lista);
console.log('---------------------');
console.log(typeof objeto);
console.log(objeto);
console.log(objeto.name);
console.log(Array [2]); 

let opcao = true; //boolean

if (2 > 1) {
    console.log('2 é maior que 1');
} else {
    console.log('2 não é maior que 1');
}

// Estrutura de repetição
// i = i + 1
const arr = ["amora", "banana", "caqui", "damasco"];
for (let i = 0; i < arr.length; i++) {
    console.log(`O valor da repetição é: ${arr[i]}`);
}

// Função
function soma(){
    console.log(22+11);
}

soma();
function calcula(a,b) {
    console.log(a*b);
}
calcula(12,12);
