import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../services/api';
import { TransactionsContext } from '../TransactionsContext';
import { ButtonModal, Container, TransactionTypeContainer } from './style';


interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
    const {createTransaction} = useContext(TransactionsContext)
    
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        
       await createTransaction({
        title,
        type,
        category,
        amount,
    });
    setTitle('');
    setAmount(0);
    setCategory('')
    setType('deposit')
    onRequestClose();
        
    }
    

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <ButtonModal 
                    type='button'
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    >
                        Entrada
                    </ButtonModal>
                    
                    <ButtonModal 
                    type='button'
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    >
                        Saída
                    </ButtonModal>
                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    );
};