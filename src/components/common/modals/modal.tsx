import React, { ReactNode } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  background: rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all; 
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

interface ModalProps {
  isOpen: boolean
  onClose(): void
  children: ReactNode
}

const ModalContent = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event: React.MouseEvent) => {
        const isSafeArea = (event.target as Element).closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        style={{
          display: 'flex',
          flex: 1,
        }}
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '100%',
          },
        }}
        transition={{ duration: 0.5 }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <ModalContent data-modal-safe-area="true">
          {children}
        </ModalContent>
      </motion.div>
    </ModalWrapper>
  );
}
