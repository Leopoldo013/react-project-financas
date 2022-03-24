import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number,
    category: string,
    title: string,
    type: string,
    createdAt: string,
    amount: number,
}

// interface TransactionInput {
//     category: string,
//     title: string,
//     type: string,
//     amount: number,

// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProvider {
    children: ReactNode,
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProvider) {
    const [transactions, setTransactions] = useState<Transaction[]>([])


    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {

      const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
      const { transaction } = response.data;

      setTransactions([
          ...transactions,
          transaction,
      ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}