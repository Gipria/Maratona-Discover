const { totalmem } = require("os")

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

const transactions = [{
    id:1,
    description:'Luz',
    amount: -50000,

},{},{}]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    totalmem() {
        //entradas - saídas
    }
}
