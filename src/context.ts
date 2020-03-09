import React from 'react';
import { ContextType } from './types';

const initialContext: ContextType = {
  title: '',
  visible: false,
  show: title => title,
  hide: () => {},
  Content: () => null,
  updateContent: newContent => newContent,
};

const ModalContext = React.createContext<ContextType>(initialContext);

export const ModalContextProvider = ModalContext.Provider;

export const useModal = (content: React.FunctionComponent): ContextType => {
  const context = React.useContext(ModalContext);
  context.updateContent(content);
  return context;
};
