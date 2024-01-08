/** se o numero for diferente de zero é falso */

const numero = 10;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

/** para saber se numero é par ((numero % 2 ou par ou não ) === 0; variavel buleana) */

const numero = 10;

const numeroPar = numero % 2;

console.log(numeroPar);

/** para imprimir um texto usa-se o if(se) e esle (senao)*/

const numero = 10;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log('Executei');
} else {
    console.log('Impar');
}

const numero = 15;
const numeroDivisivelPor5 = (numero % 5) === 0;
console.log(numeroDivisivelPor5);

if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

/** usando dois else para casos que tiver um numero de leitura invalido */

const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

/** resumindo a equação */

const numero = 5

if ((numero % 2) === 0) {
    console.log('O número é par');
} else {
    console.log('o número é impar');
}