import { Header } from './Header';
import { Dashboard } from './Dashboard';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { TransactionModal } from './TransactionModal';
import { TransactionsProvider, TransactionsContext } from './TransactionsContext';

export function App() {
  const [openTransactioNewModal, setOpenTransactionNewModal] = useState(false)

  function handleOpenModal() {
    setOpenTransactionNewModal(true)
  }

  function handleCloseModal() {
    setOpenTransactionNewModal(false)
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header isModalOpen={handleOpenModal} />
      <TransactionModal
        isOpen={openTransactioNewModal}
        onRequestClose={handleCloseModal} />
        <Dashboard />
      </TransactionsProvider>
      );
}


