const convertButton = document.querySelector("button")
const seletorConverter = document.querySelector(".select-converter")
const seletorConvertido = document.querySelector(".select-convertido")
const moedaConverter = document.getElementById("moeda-converter")
const moedaConvertida = document.getElementById("moeda-convertida")
const bandeiraConverter = document.getElementById("bandeira-converter")
const bandeiraConvertida = document.getElementById("bandeira-convertida")


function convert() {
    const inputValorConversao = document.querySelector(".input-currency").value
    const dolarReal = 5.80
    const euroReal = 6.64
    const libraReal = 7.76
    const bitcoinReal = 510358.08

    const realDolar = 0.17
    const euroDolar = 1.15
    const libraDolar = 1.33
    const bitcoinDolar = 87409.53

    const realEuro = 0.1494
    const dolarEuro = 0.86
    const libraEuro = 1.16
    const bitcoinEuro = 75378.66

    const realLibra = 0.1286
    const dolarLibra = 0.74
    const euroLibra = 0.86
    const bitcoinLibra = 64824.09

    const realBitcoin = 0.000001978552857
    const dolarBitcoin = 0.0000114835
    const euroBitcoin = 0.000013235103277
    const libraBitcoin = 0.000015369309584

    const valorConversao = document.querySelector(".valor-conversao") /*valor em real*/
    const valorConvertido = document.querySelector(".valor-convertido") /*valor em dólar*/
    console.log(seletorConvertido.value)

    valorConversao.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValorConversao)

    /*real*/
    if (seletorConvertido.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValorConversao)
    }

    if (seletorConvertido.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao / dolarReal)
    }

    if (seletorConvertido.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao / euroReal)
    }

    if (seletorConvertido.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao / libraReal)
    }

    if (seletorConvertido.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao / bitcoinReal)
    }

    /*dolar*/
    if (seletorConverter.value == "dolar" && seletorConvertido.value == "dolar") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao)
    }

    if (seletorConverter.value == "dolar" && seletorConvertido.value == "real") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValorConversao / realDolar)
    }

    if (seletorConverter.value == "dolar" && seletorConvertido.value == "euro") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao / euroDolar)
    }

    if (seletorConverter.value == "dolar" && seletorConvertido.value == "libra") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao / libraDolar)
    }

    if (seletorConverter.value == "dolar" && seletorConvertido.value == "bitcoin") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao / bitcoinDolar)
    }

    /*euro*/
    if (seletorConverter.value == "euro" && seletorConvertido.value == "euro") {
        valorConversao.innerHTML = new Intl.NumberFormat("pt-pt", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-pt", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao)
    }

    if (seletorConverter.value == "euro" && seletorConvertido.value == "real") {
        valorConversao.innerHTML = new Intl.NumberFormat("pt-pt", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValorConversao / realEuro)
    }

    if (seletorConverter.value == "euro" && seletorConvertido.value == "dolar") {
        valorConversao.innerHTML = new Intl.NumberFormat("pt-pt", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao / dolarEuro)
    }

    if (seletorConverter.value == "euro" && seletorConvertido.value == "libra") {
        valorConversao.innerHTML = new Intl.NumberFormat("pt-pt", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao / libraEuro)
    }

    if (seletorConverter.value == "euro" && seletorConvertido.value == "bitcoin") {
        valorConversao.innerHTML = new Intl.NumberFormat("pt-pt", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao / bitcoinEuro)
    }

    /*libra*/
    if (seletorConverter.value == "libra" && seletorConvertido.value == "libra") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao)
    }

    if (seletorConverter.value == "libra" && seletorConvertido.value == "real") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValorConversao / realLibra)
    }

    if (seletorConverter.value == "libra" && seletorConvertido.value == "dolar") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao / dolarLibra)
    }

    if (seletorConverter.value == "libra" && seletorConvertido.value == "euro") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao / euroLibra)
    }

    if (seletorConverter.value == "libra" && seletorConvertido.value == "bitcoin") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao / bitcoinLibra)
    }

    /*bitcoin*/
    if (seletorConverter.value == "bitcoin" && seletorConvertido.value == "bitcoin") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao)
    }

    if (seletorConverter.value == "bitcoin" && seletorConvertido.value == "real") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValorConversao / realBitcoin)
    }

    if (seletorConverter.value == "bitcoin" && seletorConvertido.value == "dolar") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValorConversao / dolarBitcoin)
    }

    if (seletorConverter.value == "bitcoin" && seletorConvertido.value == "euro") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValorConversao / euroBitcoin)
    }

    if (seletorConverter.value == "bitcoin" && seletorConvertido.value == "libra") {
        valorConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValorConversao)
        valorConvertido.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputValorConversao / libraBitcoin)
    }
}

convertButton.addEventListener("click", convert)

function converterInfos() {
    if (seletorConverter.value == "real") {
        moedaConverter.innerHTML = "Real brasileiro"
        bandeiraConverter.src = "./assets/real.png"
    }

    if (seletorConvertido.value == "real") {
        moedaConvertida.innerHTML = "Real brasileiro"
        bandeiraConvertida.src = "./assets/real.png"
    }

    if (seletorConverter.value == "dolar") {
        moedaConverter.innerHTML = "Dólar americano"
        bandeiraConverter.src = "./assets/dolar.png"
    }

    if (seletorConvertido.value == "dolar") {
        moedaConvertida.innerHTML = "Dólar americano"
        bandeiraConvertida.src = "./assets/dolar.png"
    }

    if (seletorConverter.value == "libra") {
        moedaConverter.innerHTML = "Libra esterlina"
        bandeiraConverter.src = "./assets/libra.png"
    }

    if (seletorConvertido.value == "libra") {
        moedaConvertida.innerHTML = "Libra esterlina"
        bandeiraConvertida.src = "./assets/libra.png"
    }

    if (seletorConverter.value == "euro") {
        moedaConverter.innerHTML = "Euro"
        bandeiraConverter.src = "./assets/euro.png"
    }

    if (seletorConvertido.value == "euro") {
        moedaConvertida.innerHTML = "Euro"
        bandeiraConvertida.src = "./assets/euro.png"
    }

    if (seletorConverter.value == "bitcoin") {
        moedaConverter.innerHTML = "Bitcoin"
        bandeiraConverter.src = "./assets/bitcoin.png"
    }

    if (seletorConvertido.value == "bitcoin") {
        moedaConvertida.innerHTML = "Bitcoin"
        bandeiraConvertida.src = "./assets/bitcoin.png"
    }
    convert()

}

convertButton.addEventListener("click", converterInfos)




