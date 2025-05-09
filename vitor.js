let heroi = [
{nome: " vitor ", xp: 9001}
]

for (let repeticao = 0; repeticao < heroi.length; repeticao++){

let nomeheroi = heroi [repeticao].nome
let xpheroi = heroi [repeticao].xp
let nivel = ""

if (xpheroi <= 1000) {
    nivel = " ferro "
} else if (xpheroi >=1001 && xpheroi <= 2000 ) {
     nivel = " bronze "
} else if (xpheroi >=2001 && xpheroi <= 5000 ) {
     nivel = " prata "
} else if (xpheroi >=5001 && xpheroi <= 7000 ) {
     nivel = " ouro "
} else if (xpheroi >=7001 && xpheroi <= 8000 ) {
     nivel = " platina "
} else if (xpheroi >=8001 && xpheroi <= 9000 ) {
     nivel = " ascendente "
} else if (xpheroi >=9001 && xpheroi <= 10000 ) {
     nivel = " imortal "
} else {

    nivel = " radiante "
}

 console.log (" o heroi de nome " + nomeheroi + " está no nivel " + nivel)

}
