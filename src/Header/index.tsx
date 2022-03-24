import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../src/assets/logo-llcode2.png';
import { Container, Content } from './style';

interface HeaderProps{
    isModalOpen: () => void;
}

export function Header({ isModalOpen }: HeaderProps) {
    

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="ll-code" />
                <button type="button" onClick={isModalOpen}>
                    Nova Transação
                </button>
                
                
            </Content>
        </Container>
    )
}