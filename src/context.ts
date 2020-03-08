import React from 'react';
import { ContextType } from './types';

const ModalContext = React.createContext<ContextType | undefined>(undefined);

export const ModalContextProvider = ModalContext.Provider;

export const useModal = (content: React.ReactNode): ContextType => {
  const contextValue = React.useContext(ModalContext)
  
}
