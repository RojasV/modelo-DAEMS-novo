class DaemsController {
    constructor() {
        this.cardHistoricoDaems = document.getElementById('dados-historico-daems')
        this.popularHistoricoDaems()
    }

    async getHistoricoDaems() {
        const historicoContribuinte = await fetch('https://jsonplaceholder.typicode.com/users')
        const historicoContribuinteToJson = await historicoContribuinte.json()

    // MUDAR A POSIÇÃO DO ARRAY PARA VERIFICAR MUDANÇA DE DADOS DINÂMICAMENTE NO ELEMENTO QUE EXIBE O HISTORICO DO DAEMS    

        return historicoContribuinteToJson[9]
    }

    async popularHistoricoDaems() {
        const historicoDaems = await this.getHistoricoDaems()
        for (const key in historicoDaems) {
            console.log(historicoDaems[key])
            this.cardHistoricoDaems.innerHTML = `
            <span>DAEMS:
            <span>${historicoDaems[key].name}</span>
                </span>
                <span>Tributo:
                    <span>${historicoDaems[key].catchPhrase}</span>
                </span>
                <span>Vencimento:
                    <span>${historicoDaems[key].catchPhrase}</span>
                </span>
                <span>Valor total:
                    <span>${historicoDaems[key].bs}</span>
                </span>
                <span>Nome do contribuinte:
                    <span>${historicoDaems[key].name}</span>
                </span>
                <span>Placa:
                    <span>${historicoDaems[key].catchPhrase}</span>
                </span>
                <span>Marca:
                    <span>${historicoDaems[key].catchPhrase}</span>
                </span>
                <span>COTA ÚNICA</span>
            `
        }
    }
}

window.app = new DaemsController()