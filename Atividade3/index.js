const metros = parseFloat(prompt("Digite um valor em metros: "))
const converter = prompt("para qual unidadedeseja converter?" +
    "\n1 - milímetros(mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
)

let resultado

switch (converter) {
    case "1":
        alert("Resultado: " + metros + "m = " + metros * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + metros + "m = " + metros * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + metros + "m = " + metros * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + metros + "m = " + metros / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + metros + "m = " + metros / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + metros + "m = " + metros / 1000 + "km")
        break
    default:
        alert("Opção invalida.")
        break
}