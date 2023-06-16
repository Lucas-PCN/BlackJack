function Rules() {
  return (
    <div>
      <div>
        <h1>Regras do BlackJack</h1>
      </div>
      <div>
        <div>
          <h2>Objetivo</h2>
          <p>
            Vença o dealer colocando uma mão o mais próximo possível de 21, sem ultrapassar 21. Um blackjack ocorre quando você obtém um ás e uma carta de 10 pontos, sem ter dividido o baralho primeiro.
          </p>
          <h2>Como jogar</h2>
          <p>
            O dealer dará 2 cartas para si e 2 cartas para você. A segunda carta do dealer será jogada virada para baixo. Você pode escolher entre HIT (receber mais cartas) ou STOP (passar para a próxima mão). Você pode escolher HIT quantas vezes quiser, desde que a soma das suas cartas seja menor que 21.
          </p>
          <h2>Valor das cartas</h2>
          <p>
            Rainhas, Reis e Valetes valem 10, as cartas de nipe valem seu valor numérico em sua face, mas os Ases podem valer 11 ou 1. Neste jogo, os Ases têm um valor padrão de 11, a menos que você ultrapasse 21 em sua mão.
          </p>
        </div>
        <div>
          <h2>Separando em pares</h2>
          <p>
            Se você receber 2 cartas com o mesmo valor de face, você pode optar por dividir seus pares e jogar cada mão separadamente. Nesta mesa, você só pode dividir uma vez. Depois de dividir, uma nova carta será distribuída para cada mão, então você pode escolher bater ou ficar para cada mão de acordo.
          </p>
          <h2>Apostando</h2>
          <p>
            As apostas devem ser feitas antes de jogar. Depois de receber suas 2 primeiras cartas, você pode optar por dobrar (dobrar sua aposta original). Depois de sua próxima jogada, você não pode mais escolher dobrar.
          </p>
          <h2>Pagamento</h2>
          <p>
            O pagamento é de 1:1, a menos que você obtenha um blackjack. Para um blackjack, o pagamento é 3:2.
          </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Rules;