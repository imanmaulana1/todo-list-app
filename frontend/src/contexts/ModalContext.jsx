import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalName, setModalName] = useState('');
  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal, modalName, setModalName }}
    >
      {children}
    </ModalContext.Provider>
  );
};
