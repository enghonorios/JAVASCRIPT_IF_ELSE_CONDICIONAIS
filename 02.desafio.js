/** Faça um programa calcular o valor de uma viagam
Preço do etanol
Preço da gasolina
O tipo do combustivel que está no seu carro 
gasto medio de combustivel do carro por km 
distancia em km viagem
imprimir no console o valor gasto para realizar a viagem.
 */

const PrecoEtanol = 3.35;
const PrecoGasolina = 5.89;
const KmPorLitros = 12.2;
const DistanciaEmKm = 400;
const TipoDeCombustivel = 'Etanol';

const LitrosConsumidos = DistanciaEmKm / KmPorLitros;

if (TipoDeCombustivel === 'Etanol') {
    const ValorGasto = LitrosConsumidos * PrecoEtanol;
    console.log(ValorGasto.toFixed(2));
} else {
    const ValorGasto = LitrosConsumidos * PrecoGasolina;
    console.log(ValorGasto.toFixed(2));
}