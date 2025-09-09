const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelected = document.querySelector(".currency-selected") //1

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace(",",".")) || 0 //3 *

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value-to-converted")

    const rates = { //6 4*
        real: 1,
        dolar: 5.2,
        euro: 6.2,
        libra: 7.62,
        iene: 0.039,
        bitcoin: 567704 // Isso quer dizer: 1 Bitcoin = 567704 Reais
    
    }

    const formats = { //12
        real: { locale: "pt-BR", currency: "BRL" }, //5*
        dolar: { locale: "en-US", currency: "USD" },
        euro: { locale: "de-DE", currency: "EUR" },
        libra: { locale: "en-GB", currency: "GBP" },
        iene: { locale: "ja-JP", currency: "JPY" },
        bitcoin: { locale: "en-US", currency: "BTC" }
    }

    const fromCurrency = currencySelected.value //7 6*
    const toCurrency = currencySelect.value

    const fromRate = rates[fromCurrency] //8
    const toRate = rates[toCurrency]

   /* const realValue = inputCurrencyValue * rates[fromCurrency] //9 7*
    const convertedValue = realValue / rates[toCurrency] */

    const convertedValue = inputCurrencyValue * (fromRate / toRate); 

    currencyValueToConvert.innerHTML = new Intl.NumberFormat( 
        formats [fromCurrency].locale,{
        style: "currency",
        currency: formats[fromCurrency].currency
    }).format(inputCurrencyValue) //10 1*

    currencyValueToConverted.innerHTML = new Intl.NumberFormat(
        formats[toCurrency].locale, {
        style: "currency",
        currency: formats[toCurrency].currency
    }).format(convertedValue) //11 2* 

     // Formatar valor a converter (origem)
     currencyValueToConvert.innerHTML =
     fromCurrency === "bitcoin"
         ? `₿${inputCurrencyValue.toFixed(8)}`
         : new Intl.NumberFormat(
             formats[fromCurrency].locale,
             {
                 style: "currency",
                 currency: formats[fromCurrency].currency
             }
           ).format(inputCurrencyValue)

 // Formatar valor convertido (destino)
 currencyValueToConverted.innerHTML =
     toCurrency === "bitcoin"
         ? `₿${convertedValue.toFixed(8)}`
         : new Intl.NumberFormat(
             formats[toCurrency].locale,
             {
                 style: "currency",
                 currency: formats[toCurrency].currency
             }
           ).format(convertedValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/Real.png"

    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Pound.png"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/Iene.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/Bitcoin.png"
    }
    convertValues()


}

function changeCurrencySelected() { //4
    const currencyName = document.getElementById("currency-real")
    const currencyImage = document.querySelector(".real-img")

    if (currencySelected.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/Real.png"

    }

    if (currencySelected.value == "dolar") { //5
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.png"

    }

    if (currencySelected.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelected.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Pound.png"
    }

    if (currencySelected.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/Iene.png"
    }

    if (currencySelected.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/Bitcoin.png"
    }

    convertValues() //3


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


currencySelected.addEventListener("change", changeCurrencySelected)//2



