import entradaImg from '../assets/arrow-top.png'
import saidasImg from '../assets/arrow-bottom.png'
import totalImg from '../assets/dollar.png'

import { Container } from "./style";
import { useContext } from 'react';
import { TransactionsContext } from '../TransactionsContext';

export function Summary() {

    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,

    })

    return (
        <Container>


            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradaImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency:'BRL'
                            }).format(summary.deposits)}
                    
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency:'BRL'
                            }).format(summary.withdraws)}</strong>
            </div>
            <div className='background-difrent'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency:'BRL'
                            }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}