import React from 'react';
import { ContextType } from './types';

const ModalContext = React.createContext<ContextType>();

export const ModalContextProvider = ModalContext.Provider;

export const useModal = (content: React.ReactNode): ContextType =>
  React.useContext<ContextType>(ModalContext)
