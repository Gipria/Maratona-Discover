const Modal= {
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')

    },
    close(){
        //fechar o modal
        //remover a class active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions = [
    {
        id:1,
        description:'Luz',
        amount: -50000,
        date:'23/01/2021',

    },
    {
        id:2,
        description:'Website',
        amount: 500000,
        date:'23/01/2021',
    },
    {
        id:3,
        description:'Internet',
        amount: -20000,
        date:'23/01/2021',
    }

    {
        id:4,
        description:'app',
        amount: -20000,
        date:'23/01/2021',
    }
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-tabletbody'),
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },
    //funcionalidade//
    innerHTMLTransaction(transaction){
        const Cssclass = transaction.amount > 0 ? "income":
        "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `

            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amoun}</td>
            <td>${transaction.date}</td>
            <td>
                <img src="./assets/Sminus.svg" alt="Remover Transação">
                </td>
            `
            return html
        
    }
}

const Utils ={
    formatCurrency(value){
        console.log(value)
    }
}


transactions.forEach(funtion(transaction){
    DOM.addTransaction(transaction)
})